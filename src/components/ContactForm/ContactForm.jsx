import React, { useState } from 'react';
import HumanVerifier, {
  USER_TYPE,
  HoneypotField,
  caughtRobotInHoneypot,
} from './HumanVerifier';

const FORMSPREE_URL = 'https://formspree.io/f/mvovnewb';

const FORM_STATUSES = {
  DRAFT: 0,
  SENDING: 1,
  ERROR: 2,
  SUCCESS: 3,
};

const createErrorResponse = (message) => ({
  errors: [{ message }],
});

const ContactForm = () => {
  const [state, updateFormState] = useState({
    status: FORM_STATUSES.DRAFT,
    response: null,
  });
  const [userType, setUserType] = useState(USER_TYPE.NONE);
  const [honeypotModified, setHoneypotModified] = useState(false);

  const submitForm = async (e, userType) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    if (
      userType === USER_TYPE.ROBOT ||
      caughtRobotInHoneypot(honeypotModified, data)
    ) {
      updateFormState({
        status: FORM_STATUSES.ERROR,
        response: createErrorResponse("Robots don't have thumbs."),
      });
      return;
    } else if (userType === USER_TYPE.NONE) {
      updateFormState({
        status: FORM_STATUSES.ERROR,
        response: createErrorResponse(
          "Please specify if you're a robot or human."
        ),
      });
      return;
    }

    updateFormState({ status: FORM_STATUSES.SENDING, response: null });

    try {
      const result = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: 'application/json' },
      });
      const response = await result.json().catch(() => null);

      if (result.ok) {
        form.reset();
        setUserType(USER_TYPE.NONE);
        setHoneypotModified(false);
        updateFormState({
          status: FORM_STATUSES.SUCCESS,
          response,
        });
      } else {
        updateFormState({
          status: FORM_STATUSES.ERROR,
          response: normalizeErrorResponse(response),
        });
      }
    } catch {
      updateFormState({
        status: FORM_STATUSES.ERROR,
        response: createErrorResponse(
          'Unable to reach the contact service. Please try again.'
        ),
      });
    }
  };

  const { status, response } = state;

  const actions = (
    <ul className="actions">
      {status === FORM_STATUSES.SENDING && (
        <li>
          <input
            type="button"
            value="Sending..."
            className="special"
            disabled
          />
        </li>
      )}
      {(status === FORM_STATUSES.DRAFT || status === FORM_STATUSES.ERROR) && (
        <>
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input
              onClick={() => setUserType(USER_TYPE.NONE)}
              type="reset"
              value="Reset"
            />
          </li>
        </>
      )}
    </ul>
  );

  return (
    <>
      <HumanVerifier userType={userType} onChange={setUserType} />
      <form
        method="POST"
        action={FORMSPREE_URL}
        onSubmit={(e) => submitForm(e, userType)}
        onReset={() => {
          setUserType(USER_TYPE.NONE);
          setHoneypotModified(false);
          updateFormState({ status: FORM_STATUSES.DRAFT, response: null });
        }}
      >
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <HoneypotField onChange={() => setHoneypotModified(true)} />
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" required></textarea>
        </div>
        <div role="status" aria-live="polite">
          {status === FORM_STATUSES.SUCCESS && (
            <h3>Submission confirmed — thank you!</h3>
          )}
          {status === FORM_STATUSES.ERROR && (
            <>
              <h3 style={{ opacity: '0.4' }}>
                Error: Failed to submit contact form
              </h3>
              <ul>
                {response.errors.map((err) => (
                  <li key={getErrorMessage(err)} style={{ opacity: '0.5' }}>
                    {getErrorMessage(err)}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        {actions}
      </form>
    </>
  );
};

function normalizeErrorResponse(response) {
  return response && Array.isArray(response.errors)
    ? response
    : createErrorResponse('The contact service rejected the submission.');
}

function getErrorMessage(err) {
  if (err && err.field) {
    return `Field '${err.field}' ${err.message}`;
  } else {
    return err.message;
  }
}

export default ContactForm;

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ContactForm from '../ContactForm';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('ContactForm', () => {
  it('submits a completed human response to Formspree', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({}),
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<ContactForm />);

    const humanOption = screen.getByRole('radio', { name: /human/i });
    fireEvent.keyDown(humanOption, { key: 'Enter' });
    expect(humanOption).toHaveAttribute('aria-checked', 'true');

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Michael Clayton' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'michael@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello' },
    });
    fireEvent.submit(
      screen.getByRole('button', { name: 'Send Message' }).closest('form')
    );

    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(
        'Submission confirmed'
      )
    );
    expect(fetchMock).toHaveBeenCalledWith(
      'https://formspree.io/f/mvovnewb',
      expect.objectContaining({ method: 'post' })
    );
  });

  it('shows a useful message when the contact service is unavailable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));

    render(<ContactForm />);
    fireEvent.click(screen.getByRole('radio', { name: /human/i }));
    fireEvent.submit(
      screen.getByRole('button', { name: 'Send Message' }).closest('form')
    );

    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(
        'Unable to reach the contact service'
      )
    );
  });
});

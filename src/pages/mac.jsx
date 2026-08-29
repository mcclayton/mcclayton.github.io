import React from 'react';
import copy from 'copy-text-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../components/layout';
import { SITE_METADATA } from '../siteMetadata';

function MacInstallPage() {
  const script = `/bin/bash -c "$(curl -fsSL ${SITE_METADATA.siteUrl}/mac.sh)"`;
  const copyScript = () => {
    if (copy(script)) {
      toast.success('Copied Script');
    }
  };

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img style={{ height: '12rem' }} src="/mac.png" alt="Mac Setup" />
        <h2>Mac Setup</h2>
        <p>
          Run the following command in your terminal to fully configure/setup
          your Mac.
        </p>
        <p
          style={{
            cursor: 'pointer',
            borderRadius: '5px',
            border: '1px solid #2E333E',
            padding: '5px',
          }}
          role="button"
          tabIndex={0}
          aria-label="Copy Mac setup command"
          onClick={copyScript}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              copyScript();
            }
          }}
        >
          {script}
        </p>
        <a
          href="https://github.com/mcclayton/MacSetup"
          className="icon fa-github"
        >
          <span style={{ padding: '5px' }}>{' View MacSetup On Github'}</span>
        </a>
        <Toaster />
      </div>
    </Layout>
  );
}

export default MacInstallPage;

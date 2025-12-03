"use client";

import { useEffect } from 'react';

const AndroidRedirect: React.FC = () => {
  useEffect(() => {
    // window.location.href = 'https://play.google.com/store/apps/details?id=com.raizzify.hercules';

    window.location.href = 'https://offer.raizzify.com/';
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
      <p style={{
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
      }}>
        Redirecting to offer.raizzify.com...
      </p>

      {/*
      <meta
        httpEquiv="refresh"
        content="0;url=https://play.google.com/store/apps/details?id=com.raizzify.hercules"
      />
      */}

      <meta httpEquiv="refresh" content="0;url=https://offer.raizzify.com/" />
    </div>
  );
};

export default AndroidRedirect;

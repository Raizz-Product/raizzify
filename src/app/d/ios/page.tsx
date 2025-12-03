"use client";

import { useEffect } from "react";

const IOSRedirect: React.FC = () => {
  useEffect(() => {
    // window.location.href = "https://apps.apple.com/in/app/raizzify/id6636553867";

    window.location.href = "https://offer.raizzify.com/";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: 24,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Redirecting to offer.raizzify.com...
      </p>

      {/*
      <meta name="apple-itunes-app" content="app-id=id6636553867" />
      <meta
        httpEquiv="refresh"
        content="0;url=https://apps.apple.com/in/app/raizzify/id6636553867"
      />
      */}

      <meta httpEquiv="refresh" content="0;url=https://offer.raizzify.com/" />
    </div>
  );
};

export default IOSRedirect;

"use client";

import Script from "next/script";

export default function DrishtiScript() {
  return (
    <>
      {/* Drishti SDK Config — loaded BEFORE the script */}
      <Script id="drishti-config" strategy="beforeInteractive">
        {`
          window.DrishtiConfig = {
            apiKey: "dsk_858fbee52fe9ee1881d828e216b01025",
            apiUrl: "http://localhost:5000/analyze",
            emotionUrl: "http://localhost:5000/detect-emotion",
            selectors: {
              headline: "#headline",
              cta: "#cta"
            },
            interval: 5000,
            enabled: false,
            emotionDetection: false,
            emotionInterval: 10000,
            debug: true
          };
        `}
      </Script>

      {/* Drishti SDK Script */}
      <Script
        src="/drishti.js"
        strategy="afterInteractive"
      />
    </>
  );
}

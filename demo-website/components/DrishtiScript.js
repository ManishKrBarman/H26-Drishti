"use client";

import { useEffect } from "react";
import Script from "next/script";

<<<<<<< HEAD
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
=======
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
>>>>>>> 0acbfbe97d8c0f8f10f8fa528c061cf93a682a5f

export default function DrishtiScript() {
  // Set DrishtiConfig before SDK loads
  useEffect(() => {
    window.DrishtiConfig = {
      apiKey: "demo123",
      apiUrl: `${BACKEND_URL}/analyze`,
      emotionUrl: `${BACKEND_URL}/detect-emotion`,
      selectors: {
        headline: "#headline",
        cta: "#cta",
      },
      interval: 5000,
      enabled: false,
      emotionDetection: false,
      emotionInterval: 10000,
      debug: true,
    };
  }, []);

  return (
    <Script
      src="/drishti.js"
      strategy="afterInteractive"
    />
  );
}

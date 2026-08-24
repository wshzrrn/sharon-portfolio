"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const register = async () => {
      try {
        const registration =
          await navigator.serviceWorker.register(
            "/sw.js"
          );

        console.log(
          "Service Worker registered:",
          registration.scope
        );
      } catch (error) {
        console.error(
          "Service Worker registration failed:",
          error
        );
      }
    };

    register();
  }, []);

  return null;
}
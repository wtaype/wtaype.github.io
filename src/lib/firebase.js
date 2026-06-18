import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const app = initializeApp({
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID
});

if (typeof window !== 'undefined') {
  Promise.all([
    import('firebase/app-check'),
    import('./widev.js')
  ]).then(([{ initializeAppCheck, ReCaptchaV3Provider }, { wiSmart }]) => {
    wiSmart({
      appcheck: [
        async () => {
          if (import.meta.env.PUBLIC_DEV) {
            // @ts-ignore
            self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
          }
          initializeAppCheck(app, {
            provider: new ReCaptchaV3Provider(import.meta.env.PUBLIC_RECAPTCHA_WEB),
            isTokenAutoRefreshEnabled: true
          });
        }
      ]
    });
  });
}

export const auth = getAuth(app);
export const db = getFirestore(app);
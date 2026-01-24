import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const permitir = new Set(['chatwiil.web.app', 'localhost', '192.168.18.62']); // 'wtaype.me' <- agregar para ver en github pages
const permitido = permitir.has(window.location.hostname);

const app = permitido ? initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}) : null;

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
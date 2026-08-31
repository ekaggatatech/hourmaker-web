export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Firebase Functions endpoint (if using Firebase Functions)
export const functionsBaseUrl =
  import.meta.env.VITE_FIREBASE_FUNCTIONS_URL ||
  `https://${firebaseConfig.projectId}.cloudfunctions.net`;

// Email configuration
export const emailConfig = {
  supportEmail: "support@hourmaker.in",
  defaultSender: "Hourmaker Support <noreply@hourmaker.in>",
  defaultSubject: "Hourmaker Support Request",
};

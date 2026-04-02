import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);

const app = hasFirebaseConfig ? initializeApp(firebaseConfig) : null;
const auth = app ? getAuth(app) : null;

const firebaseSetupError =
  "Firebase is not configured. Add all VITE_FIREBASE_* variables to your .env file.";

const requireAuth = () => {
  if (!auth) {
    throw new Error(firebaseSetupError);
  }

  return auth;
};

export const loginWithEmailPassword = async (email, password) => {
  const authInstance = requireAuth();
  const credentials = await signInWithEmailAndPassword(
    authInstance,
    email,
    password,
  );
  return credentials.user;
};

export const registerWithEmailPassword = async (name, email, password) => {
  const authInstance = requireAuth();
  const credentials = await createUserWithEmailAndPassword(
    authInstance,
    email,
    password,
  );

  if (name?.trim()) {
    await updateProfile(credentials.user, {
      displayName: name.trim(),
    });
  }

  return credentials.user;
};

export const onAuthStateChangedListener = (callback) => {
  const authInstance = requireAuth();
  return onAuthStateChanged(authInstance, callback);
};

export const logoutUser = async () => {
  const authInstance = requireAuth();
  await signOut(authInstance);
};

export const getFirebaseFriendlyError = (error) => {
  if (!error || !error.code) {
    return error?.message || "Something went wrong. Please try again.";
  }

  const errorMap = {
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/user-disabled": "This account has been disabled.",
    "auth/user-not-found": "No account found with that email.",
    "auth/wrong-password": "Incorrect password. Try again.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/email-already-in-use": "This email is already in use.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/too-many-requests": "Too many attempts. Please wait and try again.",
    "auth/network-request-failed":
      "Network error. Check your connection and retry.",
  };

  return (
    errorMap[error.code] ||
    error.message ||
    "Authentication failed. Please try again."
  );
};

export const isFirebaseConfigured = () => hasFirebaseConfig;
export const getFirebaseSetupError = () => firebaseSetupError;

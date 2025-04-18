// Simple test script to verify Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Read environment variables
const apiKey = process.env.VITE_FIREBASE_API_KEY;
const projectId = process.env.VITE_FIREBASE_PROJECT_ID;
const appId = process.env.VITE_FIREBASE_APP_ID;

console.log('Testing Firebase Configuration:');
console.log('API Key present:', !!apiKey);
console.log('Project ID present:', !!projectId);
console.log('App ID present:', !!appId);

if (!apiKey || !projectId || !appId) {
  console.error('Missing required Firebase configuration values.');
  process.exit(1);
}

try {
  // Initialize Firebase with the configuration
  const firebaseConfig = {
    apiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    projectId,
    storageBucket: `${projectId}.appspot.com`,
    appId,
  };

  console.log('Firebase Config:', JSON.stringify(firebaseConfig, null, 2));

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  console.log('Firebase initialization successful!');
  console.log('Auth instance:', !!auth);
  console.log('Firestore instance:', !!db);

  console.log('\nAll Firebase components initialized successfully.');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  process.exit(1);
}
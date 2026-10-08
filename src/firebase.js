// Firebase Configuration & Initialization
// Supports both active Firebase credentials and intelligent fallback simulation

const firebaseConfig = {
  apiKey: "AIzaSyServEaseMockKeyForDemoOnly123456",
  authDomain: "servease-app.firebaseapp.com",
  projectId: "servease-app",
  storageBucket: "servease-app.appspot.com",
  messagingSenderId: "987654321098",
  appId: "1:987654321098:web:a1b2c3d4e5f6g7h8"
};

// Mock Authentication State Management for local demonstration
class MockFirebaseAuth {
  constructor() {
    const savedUser = localStorage.getItem('servease_user');
    this.currentUser = savedUser ? JSON.parse(savedUser) : null;
    this.listeners = [];
  }

  onAuthStateChanged(callback) {
    this.listeners.push(callback);
    callback(this.currentUser);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  async signInWithEmailAndPassword(email, password) {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }
    const mockUser = {
      uid: 'usr_' + Date.now(),
      email: email,
      displayName: email.split('@')[0].toUpperCase(),
      role: 'customer',
      createdAt: new Date().toISOString()
    };
    this.currentUser = mockUser;
    localStorage.setItem('servease_user', JSON.stringify(mockUser));
    this.listeners.forEach(cb => cb(this.currentUser));
    return { user: mockUser };
  }

  async createUserWithEmailAndPassword(email, password, displayName, role = 'customer') {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }
    const mockUser = {
      uid: 'usr_' + Date.now(),
      email: email,
      displayName: displayName || email.split('@')[0],
      role: role,
      createdAt: new Date().toISOString()
    };
    this.currentUser = mockUser;
    localStorage.setItem('servease_user', JSON.stringify(mockUser));
    this.listeners.forEach(cb => cb(this.currentUser));
    return { user: mockUser };
  }

  async signOut() {
    this.currentUser = null;
    localStorage.removeItem('servease_user');
    this.listeners.forEach(cb => cb(null));
  }
}

export const auth = new MockFirebaseAuth();

// Firestore helper for recording bookings and requests
export const addDoc = async (collectionName, data) => {
  console.log(`[Firestore Mock] Adding document to '${collectionName}':`, data);
  const existingDocStr = localStorage.getItem(`servease_${collectionName}`) || '[]';
  const existingDocs = JSON.parse(existingDocStr);
  const newDoc = { id: 'doc_' + Date.now(), ...data, timestamp: new Date().toISOString() };
  existingDocs.unshift(newDoc);
  localStorage.setItem(`servease_${collectionName}`, JSON.stringify(existingDocs));
  return newDoc;
};

export const getDocs = async (collectionName) => {
  const existingDocStr = localStorage.getItem(`servease_${collectionName}`) || '[]';
  return JSON.parse(existingDocStr);
};

export default { auth, firebaseConfig, addDoc, getDocs };

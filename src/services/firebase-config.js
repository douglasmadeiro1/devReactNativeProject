import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyADAocJcMZuEjUf7Psk814Q3nH723VBpYg",
    authDomain: "reactnativeproject-f94db.firebaseapp.com",
    projectId: "reactnativeproject-f94db",
    storageBucket: "reactnativeproject-f94db.appspot.com",
    messagingSenderId: "1024688556300",
    appId: "1:1024688556300:web:fde0a7217dd50e33aea129",
    measurementId: "G-91EVZ4WRN2"
};

export default firebaseConfig;
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
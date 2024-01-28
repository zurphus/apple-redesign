import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDlgimf4XDf7tgKpVmyS-gVoSKsVxH5pC0",
  authDomain: "apple-redesign-a8dbb.firebaseapp.com",
  projectId: "apple-redesign-a8dbb",
  storageBucket: "apple-redesign-a8dbb.appspot.com",
  messagingSenderId: "857996286829",
  appId: "1:857996286829:web:a042cd25d139409f2d1864"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "@firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCHn2AuR2X90-i32PCDHM4DpWJf2xV_arY",
  authDomain: "television-dbf15.firebaseapp.com",
  projectId: "television-dbf15",
  storageBucket: "television-dbf15.appspot.com",
  messagingSenderId: "957382647618",
  appId: "1:957382647618:web:947b8edb70a9788837f2db"
})

export const auth = app.auth()
export default app
export const db = getFirestore(app)
export { firebase }
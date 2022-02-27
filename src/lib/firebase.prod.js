import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyC6y2IiwDiWNwdoIYmg_iw6KNpBGKpRl9Q",
  authDomain: "stige-netflix.firebaseapp.com",
  projectId: "stige-netflix",
  storageBucket: "stige-netflix.appspot.com",
  messagingSenderId: "795728785276",
  appId: "1:795728785276:web:c61e8b3114674ba53abef9"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };

import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCoBFNtfr6W1QYEbk8_X_JBs1-roeIWgJA",
    authDomain: "football-club-ec6d1.firebaseapp.com",
    databaseURL: "https://football-club-ec6d1.firebaseio.com",
    projectId: "football-club-ec6d1",
    storageBucket: "football-club-ec6d1.appspot.com",
    messagingSenderId: "1001270373103"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
}
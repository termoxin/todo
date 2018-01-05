import * as firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCwVSG2Efog_Fy5-5mcv9e08eT1CFxlX2Q",
    authDomain: "react-b8ccd.firebaseapp.com",
    databaseURL: "https://react-b8ccd.firebaseio.com",
    projectId: "react-b8ccd",
    storageBucket: "react-b8ccd.appspot.com",
    messagingSenderId: "698631572688"
};
firebase.initializeApp(config);

export function writeUserData(userId, data) {
	firebase.database().ref('/users/' + userId).set({
	  data,
	});
}

export function readUserData(userId, callback) {
    firebase.database().ref('/users/' + userId).once('value').then((snaptshot) => {
        callback(snaptshot.val())
    });
}
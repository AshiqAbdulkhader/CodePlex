import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCpBPJzQkHkkSUnJdTyH8IuBJNUcg2sLx4",
	authDomain: "codeplex-cd65a.firebaseapp.com",
	projectId: "codeplex-cd65a",
	storageBucket: "codeplex-cd65a.appspot.com",
	messagingSenderId: "383605936635",
	appId: "1:383605936635:web:577587baf5f14f92d9fb5e",
	measurementId: "G-G01CDG8KFQ",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const res = await auth.signInWithPopup(googleProvider);
		const user = res.user;
		const query = await db
			.collection("users")
			.where("uid", "==", user.uid)
			.get();
		if (query.docs.length === 0) {
			await db.collection("users").add({
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const signInWithEmailAndPassword = async (email, password) => {
	try {
		await auth.signInWithEmailAndPassword(email, password);
	} catch (err) {
		console.error(err);
		alert("Wrong username or password");
	}
};

//[Function to register users using email and password]

// const registerWithEmailAndPassword = async (name, email, password) => {
// 	try {
// 		const res = await auth.createUserWithEmailAndPassword(email, password);
// 		const user = res.user;
// 		await db.collection("users").add({
// 			uid: user.uid,
// 			name,
// 			authProvider: "local",
// 			email,
// 		});
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

//[Password reset link]

const sendPasswordResetEmail = async (email) => {
	try {
		await auth.sendPasswordResetEmail(email);
		alert("Password reset link sent!");
	} catch (err) {
		console.error(err);
		alert("Enter a valid username before requesting a password reset.");
	}
};

const logout = () => {
	auth.signOut();
};

export {
	auth,
	db,
	signInWithGoogle,
	signInWithEmailAndPassword,
	// registerWithEmailAndPassword,
	sendPasswordResetEmail,
	logout,
};

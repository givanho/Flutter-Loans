<h1>React Native Flutter-Loans</h1>
This is a React Native application for managing loans for both personal and business purposes. <br>
The app uses Firebase for authentication, where both email signup and phone number signup are integrated. <br>
The app also uses Firebase Firestore to store users' data, and it connects to <br>
the Paystack API to get bank details of users.

<h2>Features</h2>
🔥 Firebase authentication <br>
✉️ Email signup and phone number signup <br>
🔥 Firebase Firestore for data storage <br>
🌠 Paystack API integration for getting bank details of users <br>
😊 Apply for personal loans <br>
😊 Apply for business loans <br>
<h2>Prerequisites</h2>
Before you start, make sure you have the following installed:

🤖 Node.js <br>
⚛️ React Native expo <br>
💻 VS Code or Your favorite IDE <br>
<h2>Installation</h2>

1.Clone the repository:<br>
```
git clone https://github.com/<your-username>/react-native-flutter-loans.git
```
<br>
2.Install dependencies:<br>

```
cd react-native-loan-app
npm install
```
<br>
3.Run the app on an Android device or emulator:<br>

```
npx react-native run-android
```
<br>
Or, run the app on an iOS device or emulator:<br>

```
npx react-native run-ios
```
<br>
Or, run the app on expo:<br>

```
npm expo start
```
<br>
<h2>Configuration</h2>
To configure Firebase authentication and Firestore, follow these steps:<br>

Go to the Firebase console and create a new project.<br>
Enable Authentication and Firestore in your Firebase project.<br>

1.Install Firebase using npm:

```
npm install firebase
```
<br>
2.Initialize Firebase in your app and create a Firebase App object:

```
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```
<br>
3.Access Firebase in your app:

```
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
```
To use the Paystack API, you will need to sign up for a Paystack account and obtain an API key. <br>
Once you have your API key, add it to the config.js file in the project.
<h2>Usage</h2>
Open the app on your Android or iOS device or emulator, and follow the on-screen instructions to sign up and apply for loans.

<h2>Contributing</h2>
Contributions are welcome! If you would like to contribute to this project, please fork the repository and create a pull request.

<h2>License</h2>
This project is licensed under the MIT License - see the LICENSE.md file for details.

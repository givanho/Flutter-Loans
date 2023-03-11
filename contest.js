import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import app, { auth } from "./firebase";
import { db , users} from "./firebase"
import {  getDoc, doc, } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';
import parsePhoneNumber from 'libphonenumber-js'


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  sendPasswordResetEmail
} from "firebase/auth";
import {FirebaseRecaptchaVerifierModal,FirebaseRecaptchaBanner} from 'expo-firebase-recaptcha';
import {getApp,initializeApp} from 'firebase/app';


const UserContext = createContext();

export function AuthContextProvider({ children  }) {

    const apps = getApp();
  const auth = getAuth(apps);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [phoneModalVisible, setPhoneModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [info, setInfo] = useState(null);
  const [errorinfo, setErrorInfo] = useState('');
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const recaptchaVerifier = useRef();
  const firebaseConfig = apps ? apps.options : undefined;
  const navigation = useNavigation();



  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
    
  };
const forgotPassword = (email) =>{
  return sendPasswordResetEmail(auth, email);
}
  const sendVerificationCode = async (phoneNumber) => {
    const phoneNumbers = parsePhoneNumber(phoneNumber, 'NG')
if (phoneNumbers) {
  phoneNumbers.country === 'NG'
  phoneNumbers.number === '+234'+ phoneNumber
  phoneNumbers.isValid() === true
  // Note: `.getType()` requires `/max` metadata: see below for an explanation.
  phoneNumbers.getType() === 'TOLL_FREE'
  setPhoneNumber(phoneNumbers.number)

}
    const phoneProvider = new PhoneAuthProvider(auth);
    try {
        console.log("Phone number:", phoneNumber);
      setIsLoading(true);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumbers.number,
        recaptchaVerifier.current
   
      );
      setInfo("Verification number Success:", verificationCode);
      
      setVerificationId(verificationId);
      setPhoneModalVisible(false);
      setIsLoading(false);
      console.log(verificationId +'first')
      setErrorInfo('');
    } 
    catch (error) {
      setErrorInfo(error.message);
      setIsLoading(false);
   console.log('error 2 '+error.message)

    }
  };

  const verifyVerificationCode = async (  verificationCode) => {
    try {
      setIsLoading(true);
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode,
        
      );

      const userCredential = await signInWithCredential(auth, credential);
      const user = userCredential.user;
      setUser(user);
      setIsLoading(true);

      setInfo("Verification code Success:", verificationCode);
      try{
        const docRef = doc(db, "users",user?.email || user?.phoneNumber || "default");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        console.log('USER: '+user.phoneNumber)
        
          navigation.navigate("Welcomed");
        
      setIsLoading(false);
      setVerificationId('')        

        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        console.log('USER: '+user.phoneNumber)
          navigation.navigate("profile");
        
      setIsLoading(false);
      setVerificationId('')        
      }
      }
      catch (error) {
        setErrorInfo(error.message)
      setIsLoading(false);

      }
      
      setErrorInfo(null)
    } catch (error) {
      setErrorInfo(error.message);
   console.log('error 2 '+error.message)
      setIsLoading(false);
     
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    
    });
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        signIn,
        sendVerificationCode,
        verifyVerificationCode,
        setIsLoading,
        isLoading,
        phoneModalVisible,
        setPhoneModalVisible,
        setPhoneNumber,
        setVerificationCode,
        recaptchaVerifier,
        info, 
        setErrorInfo,
        errorinfo,
        verificationId,
        forgotPassword,
        setVerificationId
      }}
    >
      <FirebaseRecaptchaVerifierModal 
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        // visible={modalVisible}
        // invisible={false}
        androidHardwareAccelerationDisabled={true}
        androidLayerType="software"
        attemptInvisibleVerification={true}
    />
      {children}
    </UserContext.Provider>
  );
}
//the end

export const UserAuth = () => {
  return useContext(UserContext);
};
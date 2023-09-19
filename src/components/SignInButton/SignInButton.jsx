import { db, auth, googleAuthProvider } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";

function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const uid = result.user.uid;
      
      // Check if the document already exists
      const userDocRef = doc(db, "users", uid);
      const docSnapshot = await getDoc(userDocRef);
      
      if (!docSnapshot.exists()) {
        // Document doesn't exist, create it
        await setDoc(userDocRef, {
          name: result.user.displayName,
          email: result.user.email
        });
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      GOOGLE
    </button>
  );
}

export default SignInButton;

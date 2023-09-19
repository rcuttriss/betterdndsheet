import { db } from "./firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const fetchCharFields = async () => {
  try {
    const charDocRef = doc(
      db,
      "users",
      "fKKVOyUGWteiKwfRqZ08DkaTLvS2",
      "characters",
      "WMrO6zkW6Y4eVFf5lF6i"
    );
    const docSnapshot = await getDoc(charDocRef);

    if (docSnapshot.exists()) {
      //   console.log("Document data:", docSnapshot.data());
      return docSnapshot.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching char data:", error);
  }
};

const fetchCharAttr = async () => {
  try {
    const charAttrRef = collection(
      db,
      "users",
      "fKKVOyUGWteiKwfRqZ08DkaTLvS2",
      "characters",
      "WMrO6zkW6Y4eVFf5lF6i",
      "attributes"
    );
    const attrSnapshot = await getDocs(charAttrRef);
    let attrMap = {};
    attrSnapshot.forEach((doc) => {
      attrMap[doc.id] = doc.data()["value"];
    });

    if (!attrSnapshot.empty) {
      //   console.log("Document data:", docSnapshot.data());
      return attrMap;
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching char data:", error);
  }
};

export { fetchCharFields, fetchCharAttr };

import { db } from "./firebase";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  setDoc,
} from "firebase/firestore";

const fetchSpellData = async (characterFields) => {
  const mapSpells = characterFields.mapSpells;
  const updatedSpellData = Array.from({ length: 9 }, () => []);

  for (const key of Object.keys(mapSpells)) {
    // values of mapSpells are DocumentReferences to spells
    const spellSnapshot = await getDoc(mapSpells[key]);
    if (spellSnapshot.exists()) {
      const spellData = spellSnapshot.data();
      const spellLevel = spellData.level - 1; // Adjust if levels start from 1
      if (spellLevel >= 0 && spellLevel < 9) {
        updatedSpellData[spellLevel].push(spellData);
      }
    } else {
      console.error(`Could not fetch spell ID ${key}`);
    }
  }

  return updatedSpellData;
};

const fetchCharFields = async () => {
  try {
    const charDocRef = doc(
      db,
      "users",
      "fKKVOyUGWteiKwfRqZ08DkaTLvS2",
      "characters",
      "WMrO6zkW6Y4eVFf5lF6i"
    );
    console.log("Querying Character Fields...");
    const docSnapshot = await getDoc(charDocRef);
    console.log("Success!");

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching char data:", error);
  }
};

const updateCharFields = async (changes) => {
  if (changes == null) {
    return;
  }

  const charDocRef = doc(
    db,
    "users",
    "fKKVOyUGWteiKwfRqZ08DkaTLvS2",
    "characters",
    "WMrO6zkW6Y4eVFf5lF6i"
  );
  console.log("Updating Character Fields in Firestore...");
  updateDoc(charDocRef, changes)
    .then(() => {
      console.log("Changes to Character Fields saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving changes:", error);
    });
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
    console.log("Querying Character Attributes...");
    const attrSnapshot = await getDocs(charAttrRef);
    console.log("Success!");
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

export { fetchCharFields, fetchCharAttr, updateCharFields, fetchSpellData };

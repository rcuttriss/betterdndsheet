import { db } from "./firebase";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
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
  if (changes == null || changes == {}) {
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

const fetchInventory = async () => {
  try {
    const inventoryRef = collection(
      db,
      "users",
      "fKKVOyUGWteiKwfRqZ08DkaTLvS2",
      "characters",
      "WMrO6zkW6Y4eVFf5lF6i",
      "inventory"
    );
    const invSnapshot = await getDocs(inventoryRef);
    let invMap = {};
    invSnapshot.forEach((doc) => {
      invMap[doc.id] = doc.data();
    });

    return invMap;
  } catch (error) {
    console.error("Error fetching character inventory:", error);
  }
};

const updateInventory = async (oldName, newName, desc, qty, category) => {
  try {
    const inventoryRef = doc(
      db,
      "users",
      "fKKVOyUGWteiKwfRqZ08DkaTLvS2",
      "characters",
      "WMrO6zkW6Y4eVFf5lF6i",
      "inventory",
      oldName
    );

    if (oldName !== newName) {
      // If the name has changed, delete the old document and create a new one
      await deleteDoc(inventoryRef);
      const newInventoryRef = doc(
        db,
        "users",
        "fKKVOyUGWteiKwfRqZ08DkaTLvS2",
        "characters",
        "WMrO6zkW6Y4eVFf5lF6i",
        "inventory",
        newName
      );
      await setDoc(newInventoryRef, {
        description: desc,
        quantity: qty,
        category: category,
      });
      console.log("Item updated and new document created successfully!");
    } else {
      // If the name has not changed, update the existing document
      await updateDoc(inventoryRef, {
        description: desc,
        quantity: qty,
        category: category,
      });
      console.log("Item updated successfully!");
    }
  } catch (error) {
    console.error("Error updating character inventory:", error);
  }
};

const deleteInventoryDoc = async (name) => {
  try {
    const inventoryRef = collection(
      db,
      "users",
      "fKKVOyUGWteiKwfRqZ08DkaTLvS2",
      "characters",
      "WMrO6zkW6Y4eVFf5lF6i",
      "inventory"
    );
    await deleteDoc(doc(inventoryRef, name));
    console.log("Item deleted successfully!");
  } catch (error) {
    console.error("Error deleting inventory item:", error);
  }
};

export {
  fetchCharFields,
  updateCharFields,
  fetchSpellData,
  fetchInventory,
  updateInventory,
  deleteInventoryDoc,
};

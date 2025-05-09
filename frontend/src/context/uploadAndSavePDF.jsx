import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../firebase";

/**
 * Uploads a file (PDF or DOCX) to Firebase Storage and stores metadata in Firestore.
 * 
 * @param {Blob} blob - The file blob to upload (PDF or DOCX)
 * @param {string} fileName - The full file name with extension
 * @param {string} fileType - Should be either 'pdf' or 'docx'
 * @param {object} userData - Logged in user's data with UID
 */
export const uploadAndSavePDF = async (blob, fileName, fileType = "unknown", userData) => {
  try {
    if (!userData) throw new Error("User not authenticated.");

    const uid = userData.id;
    const storageRef = ref(storage, `user_files/${uid}/${fileName}`);

    // Convert Blob to base64
    const base64String = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        const base64 = result.split(",")[1]; // Remove "data:...base64,"
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

    // Upload base64 string to Firebase Storage
    await uploadString(storageRef, base64String, "base64");

    const downloadURL = await getDownloadURL(storageRef);

    // Save metadata to Firestore using auto-generated document ID
    await addDoc(collection(db, `UserHistory/${uid}/files`), {
      fileName,
      downloadURL,
      fileType,
      uploadedAt: serverTimestamp(),
      autoDeleteAt: Date.now() + 60 * 24 * 60 * 60 * 1000, // 60 days from now
    });

    return { success: true, downloadURL };
  } catch (error) {
    console.error("Upload failed:", error.message);
    return { success: false, error: error.message };
  }
};

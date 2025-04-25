import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import {  db, storage } from "../firebase";


export const uploadAndSavePDF = async (pdfBlob, fileName, fileType = "business",userData) => {
  try {    
    if (!userData) throw new Error("User not authenticated.");

    const uid = userData.id;
    const storageRef = ref(storage, `user_files/${uid}/${fileName}`);

    // Upload using base64 workaround
    const reader = new FileReader();
    await new Promise((resolve, reject) => {
      reader.onload = async () => {
        try {
          const base64String = reader.result.split(",")[1];
          await uploadString(storageRef, base64String, "base64");
          resolve();
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(pdfBlob);
    });

    const downloadURL = await getDownloadURL(storageRef);

    const fileId = fileName.replace(/\.[^/.]+$/, "");
    const fileRef = doc(db, `UserHistory/${uid}/files/${fileId}`);

    await setDoc(fileRef, {
      fileName,
      downloadURL,
      fileType,
      uploadedAt: serverTimestamp(),
      autoDeleteAt: Date.now() + 60 * 24 * 60 * 60 * 1000,
    });

    return { success: true, downloadURL };
  } catch (error) {
    console.error("Upload failed:", error.message);
    return { success: false, error: error.message };
  }
};

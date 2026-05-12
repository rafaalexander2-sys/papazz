import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export async function uploadImage(file, folder = "imagens") {
  const ext = file.name.split(".").pop();
  const name = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const storageRef = ref(storage, name);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

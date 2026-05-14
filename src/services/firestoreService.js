import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
  increment,
} from "firebase/firestore";

// ─── RECEITAS ───────────────────────────────────────────────────────────────

export async function getReceitasFromFirestore() {
  try {
    const q = query(collection(db, "receitas"), orderBy("criadoEm", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ ...d.data(), id: d.id, _fromFirestore: true }));
  } catch {
    return [];
  }
}

export async function addReceita(data) {
  return addDoc(collection(db, "receitas"), {
    ...data,
    criadoEm: serverTimestamp(),
  });
}

export async function updateReceita(id, data) {
  return updateDoc(doc(db, "receitas", id), { ...data, atualizadoEm: serverTimestamp() });
}

export async function deleteReceita(id) {
  return deleteDoc(doc(db, "receitas", id));
}

// ─── POSTS ──────────────────────────────────────────────────────────────────

export async function getPostsFromFirestore() {
  try {
    const q = query(collection(db, "posts"), orderBy("criadoEm", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
      _fromFirestore: true,
      date: d.data().date || new Date().toISOString().split("T")[0],
    }));
  } catch {
    return [];
  }
}

export async function addPost(data) {
  return addDoc(collection(db, "posts"), {
    ...data,
    criadoEm: serverTimestamp(),
  });
}

export async function updatePost(id, data) {
  return updateDoc(doc(db, "posts", id), { ...data, atualizadoEm: serverTimestamp() });
}

export async function deletePost(id) {
  return deleteDoc(doc(db, "posts", id));
}

export async function incrementPostViews(id) {
  if (!id) return;
  try {
    await updateDoc(doc(db, "posts", id), { views: increment(1) });
  } catch {
    // silencioso — não bloqueia a leitura do post
  }
}

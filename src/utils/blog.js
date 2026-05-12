import { posts as postsData } from "../data/posts";
import { getPostsFromFirestore } from "../services/firestoreService";

export function getAllPostsStatic() {
  return postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlugStatic(slug) {
  return postsData.find((post) => post.slug === slug);
}

// Combina posts do Firestore (novos primeiro) com estáticos
export async function getAllPosts() {
  const firestorePosts = await getPostsFromFirestore();
  const combined = [...firestorePosts, ...postsData];
  return combined.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const firestorePosts = await getPostsFromFirestore();
  const fromFirestore = firestorePosts.find((p) => p.slug === slug);
  if (fromFirestore) return fromFirestore;
  return postsData.find((p) => p.slug === slug);
}

// Mantido para compatibilidade retroativa (síncrono, só estáticos)
export function getAllPosts_legacy() {
  return getAllPostsStatic();
}

import { posts as postsData } from "../data/posts";

export function getAllPosts() {
  return postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return postsData.find((post) => post.slug === slug);
}

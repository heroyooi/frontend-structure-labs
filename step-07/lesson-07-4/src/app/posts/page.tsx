import PostsList from "./PostsList";

export default async function PostsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" }
  );
  const posts = await res.json();

  return (
    <>
      <h1>게시글 목록</h1>
      <PostsList posts={posts} />
    </>
  );
}
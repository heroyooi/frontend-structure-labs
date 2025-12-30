export default async function HomePage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await res.json();

  return (
    <ul>
      {posts.slice(0, 5).map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
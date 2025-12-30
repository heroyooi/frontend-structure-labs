export const fetchPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!res.ok) {
    throw new Error("요청 실패");
  }

  return res.json();
};
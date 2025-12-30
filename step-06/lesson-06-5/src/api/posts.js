export const fetchPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!res.ok) {
    throw new Error("요청 실패");
  }

  return res.json();
};

export const createPost = async (newPost) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }
  );

  if (!res.ok) {
    throw new Error("생성 실패");
  }

  return res.json();
};
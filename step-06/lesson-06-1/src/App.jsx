import { useEffect, useState } from 'react';

function App() {
  // UI 상태
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 서버 상태
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('요청 실패');

        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>에러 발생: {error}</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;

import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './api/posts';

function App() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>에러 발생</p>;
  }

  return (
    <ul>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;

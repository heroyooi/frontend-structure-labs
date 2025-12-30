import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, createPost } from './api/posts';

function App() {
  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60,
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });

  const handleAddPost = () => {
    mutation.mutate({
      title: '새 게시글',
      body: '내용입니다',
      userId: 1,
    });
  };

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      <button onClick={handleAddPost}>게시글 추가</button>

      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

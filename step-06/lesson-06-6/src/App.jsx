import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchPosts, createPost } from "./api/posts";

function App() {
  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60,
  });

  const mutation = useMutation({
    mutationFn: createPost,

    // 1️⃣ UI를 먼저 바꾸는 단계
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({
        queryKey: ["posts"],
      });

      const previousPosts =
        queryClient.getQueryData(["posts"]);

      queryClient.setQueryData(["posts"], (old) => {
        return [{ id: Date.now(), ...newPost }, ...old];
      });

      return { previousPosts };
    },

    // 2️⃣ 실패 시 롤백
    onError: (error, newPost, context) => {
      queryClient.setQueryData(
        ["posts"],
        context.previousPosts
      );
    },

    // 3️⃣ 성공/실패 상관없이 서버 기준 재동기화
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const handleAddPost = () => {
    mutation.mutate({
      title: "Optimistic 게시글",
      body: "미리 추가된 글입니다",
      userId: 1,
    });
  };

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      <button onClick={handleAddPost}>
        게시글 추가
      </button>

      <ul>
        {posts.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
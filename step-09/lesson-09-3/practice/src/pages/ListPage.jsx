import { Link } from 'react-router-dom';
import { useItems, useDeleteItem } from '../hooks/useItems';

export default function ListPage() {
  const { data, isLoading, isError, error } = useItems();
  const del = useDeleteItem();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러: {error.message}</p>;

  return (
    <div style={{ padding: 16 }}>
      <h1>목록</h1>
      <Link to="/new">+ 새 글</Link>

      <ul style={{ marginTop: 12 }}>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: 8 }}>
            <Link to={`/${item.id}`}>{item.title}</Link>{' '}
            <button
              onClick={() => del.mutate(item.id)}
              disabled={del.isPending}
            >
              삭제
            </button>{' '}
            <Link to={`/${item.id}/edit`}>수정</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

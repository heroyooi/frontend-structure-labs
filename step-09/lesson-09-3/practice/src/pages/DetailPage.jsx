import { Link, useParams } from 'react-router-dom';
import { useItem } from '../hooks/useItems';

export default function DetailPage() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useItem(id);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러: {error.message}</p>;

  return (
    <div style={{ padding: 16 }}>
      <Link to="/">← 목록</Link>
      <h1 style={{ marginTop: 12 }}>{data.title}</h1>
      <p>{data.content}</p>
      <Link to={`/${data.id}/edit`}>수정하기</Link>
    </div>
  );
}

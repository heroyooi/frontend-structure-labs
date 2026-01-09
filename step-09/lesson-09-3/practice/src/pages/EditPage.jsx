import { Link, useNavigate, useParams } from 'react-router-dom';
import ItemForm from '../components/ItemForm';
import { useItem, useUpdateItem } from '../hooks/useItems';

export default function EditPage() {
  const { id } = useParams();
  const nav = useNavigate();

  const { data, isLoading, isError, error } = useItem(id);
  const update = useUpdateItem();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러: {error.message}</p>;

  const handleUpdate = (payload) => {
    update.mutate({ id, payload }, { onSuccess: () => nav(`/${id}`) });
  };

  return (
    <div style={{ padding: 16 }}>
      <Link to={`/${id}`}>← 상세</Link>
      <h1 style={{ marginTop: 12 }}>수정</h1>

      <ItemForm
        initialValue={data}
        onSubmit={handleUpdate}
        pendingText={update.isPending ? '수정 중...' : '수정'}
      />

      {update.isError && <p>에러: {update.error.message}</p>}
    </div>
  );
}

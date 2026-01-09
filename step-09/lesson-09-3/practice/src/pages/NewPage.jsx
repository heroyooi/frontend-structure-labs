import { Link, useNavigate } from 'react-router-dom';
import ItemForm from '../components/ItemForm';
import { useCreateItem } from '../hooks/useItems';

export default function NewPage() {
  const nav = useNavigate();
  const create = useCreateItem();

  const handleCreate = (payload) => {
    create.mutate(payload, {
      onSuccess: () => nav('/'),
    });
  };

  return (
    <div style={{ padding: 16 }}>
      <Link to="/">← 목록</Link>
      <h1 style={{ marginTop: 12 }}>새 글</h1>

      <ItemForm
        onSubmit={handleCreate}
        pendingText={create.isPending ? '등록 중...' : '등록'}
      />

      {create.isError && <p>에러: {create.error.message}</p>}
    </div>
  );
}

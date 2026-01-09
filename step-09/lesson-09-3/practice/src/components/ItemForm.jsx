import { useState } from 'react';

export default function ItemForm({
  initialValue,
  onSubmit,
  pendingText = '처리 중...',
}) {
  const [title, setTitle] = useState(initialValue?.title ?? '');
  const [content, setContent] = useState(initialValue?.content ?? '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title: title.trim(), content: content.trim() });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        rows={6}
      />
      <button type="submit" disabled={!title.trim() || !content.trim()}>
        {pendingText}
      </button>
    </form>
  );
}

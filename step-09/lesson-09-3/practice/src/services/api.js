const BASE_URL = 'http://localhost:4000';

export async function getItems() {
  const res = await fetch(`${BASE_URL}/items`);
  if (!res.ok) throw new Error('목록을 불러오지 못했습니다.');
  return res.json();
}

export async function getItem(id) {
  const res = await fetch(`${BASE_URL}/items/${id}`);
  if (!res.ok) throw new Error('상세를 불러오지 못했습니다.');
  return res.json();
}

export async function createItem(payload) {
  const res = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('생성에 실패했습니다.');
  return res.json();
}

export async function updateItem(id, payload) {
  const res = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('수정에 실패했습니다.');
  return res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('삭제에 실패했습니다.');
  return true;
}

import { Routes, Route, Navigate } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NewPage from './pages/NewPage';
import EditPage from './pages/EditPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/:id" element={<DetailPage />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/:id/edit" element={<EditPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

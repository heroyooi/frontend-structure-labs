"use client";

import { useState } from "react";

export default function PostsClient() {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <input
        placeholder="검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}
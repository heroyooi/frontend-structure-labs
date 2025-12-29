const app = document.getElementById("app");

let isLoading = false;
let data = null;
let error = null;

const endpoints = {
  GET: "https://jsonplaceholder.typicode.com/posts/1",
  POST: "https://jsonplaceholder.typicode.com/posts",
  PUT: "https://jsonplaceholder.typicode.com/posts/1",
  DELETE: "https://jsonplaceholder.typicode.com/posts/1",
};

const render = () => {
  app.innerHTML = "";

  if (isLoading) {
    app.textContent = "로딩 중입니다...";
    return;
  }

  if (error) {
    app.textContent = "요청에 실패했습니다.";
    return;
  }

  if (data) {
    app.innerHTML = `
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  }
};

const request = async (method) => {
  // 상태 초기화
  isLoading = true;
  data = null;
  error = null;
  render();

  const options = {
    method,
    headers: {},
  };

  if (method === "POST" || method === "PUT") {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(
      method === "POST"
        ? { title: "새 글", body: "내용", userId: 1 }
        : { id: 1, title: "수정된 글", body: "수정된 내용", userId: 1 }
    );
  }

  try {
    const response = await fetch(endpoints[method], options);

    if (!response.ok) {
      throw new Error(`Request failed (${response.status})`);
    }

    const text = await response.text();
    data = text ? JSON.parse(text) : { message: "삭제 완료 (응답 없음)" };
  } catch (e) {
    error = e;
  } finally {
    isLoading = false;
    render();
  }
};

document.getElementById("getBtn").onclick = () => request("GET");
document.getElementById("postBtn").onclick = () => request("POST");
document.getElementById("putBtn").onclick = () => request("PUT");
document.getElementById("deleteBtn").onclick = () => request("DELETE");

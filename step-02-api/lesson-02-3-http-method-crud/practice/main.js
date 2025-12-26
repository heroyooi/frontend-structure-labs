const result = document.getElementById("result");

const endpoints = {
  GET: "https://jsonplaceholder.typicode.com/posts/1",
  PUT: "https://jsonplaceholder.typicode.com/posts/1",
  DELETE: "https://jsonplaceholder.typicode.com/posts/1",
  POST: "https://jsonplaceholder.typicode.com/posts",
};

const request = async (method) => {
  result.textContent = "요청 중입니다...";

  const url = endpoints[method];

  const options = {
    method,
    headers: {},
  };

  if (method === "POST") {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify({ title: "새 글", body: "내용", userId: 1 });
  }

  if (method === "PUT") {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify({
      id: 1,
      title: "수정된 글",
      body: "수정된 내용",
      userId: 1,
    });
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed (${response.status})`);
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : { message: "삭제 완료(응답 바디 없음)" };

    result.textContent = JSON.stringify(
      { method, url, status: response.status, data },
      null,
      2
    );
  } catch (e) {
    result.textContent = `요청에 실패했습니다.\n${e.message}`;
  }
};

document.getElementById("getBtn").onclick = () => request("GET");
document.getElementById("postBtn").onclick = () => request("POST");
document.getElementById("putBtn").onclick = () => request("PUT");
document.getElementById("deleteBtn").onclick = () => request("DELETE");

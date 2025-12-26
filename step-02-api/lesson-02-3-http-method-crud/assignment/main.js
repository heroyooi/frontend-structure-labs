const result = document.getElementById("result");

/**
 * Method에 따라 사용할 API 주소를 직접 정의해보세요.
 *
 * 힌트:
 * - 조회 / 수정 / 삭제는 특정 리소스
 * - 생성은 컬렉션
 */
const endpoints = {
  GET: "",     // 예: https://.../posts/1
  POST: "",    // 예: https://.../posts
  PUT: "",     // 예: https://.../posts/1
  DELETE: "",  // 예: https://.../posts/1
};

const request = async (method) => {
  result.textContent = "요청 중입니다...";

  const url = endpoints[method];

  const options = {
    method,
    headers: {},
  };

  if (method === "POST" || method === "PUT") {
    options.headers["Content-Type"] = "application/json";

    options.body = JSON.stringify(
      method === "POST"
        ? {
          title: "새 글",
          body: "내용",
          userId: 1,
        }
        : {
          id: 1,
          title: "수정된 글",
          body: "수정된 내용",
          userId: 1,
        }
    );
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed (${response.status})`);
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : { message: "응답 바디 없음" };

    result.textContent = JSON.stringify(
      { method, url, status: response.status, data },
      null,
      2
    );
  } catch (error) {
    result.textContent = `요청에 실패했습니다.\n${error.message}`;
  }
};

document.getElementById("getBtn").onclick = () => request("GET");
document.getElementById("postBtn").onclick = () => request("POST");
document.getElementById("putBtn").onclick = () => request("PUT");
document.getElementById("deleteBtn").onclick = () => request("DELETE");

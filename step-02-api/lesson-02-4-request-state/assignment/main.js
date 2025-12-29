const app = document.getElementById("app");

// 1️⃣ 상태 정의
let isLoading = false;
let data = null;
let error = null;

// 2️⃣ API 엔드포인트
const endpoints = {
  GET: "https://jsonplaceholder.typicode.com/posts/1",
  POST: "https://jsonplaceholder.typicode.com/posts",
  PUT: "https://jsonplaceholder.typicode.com/posts/1",
  DELETE: "https://jsonplaceholder.typicode.com/posts/1",
};

// 3️⃣ 화면 렌더링 함수
const render = () => {
  app.innerHTML = "";

  // TODO
  // 1. 로딩 상태 화면
  // 2. 에러 상태 화면
  // 3. 성공 상태 화면
};

// 4️⃣ 요청 함수
const request = async (method) => {
  // TODO
  // 1. 상태 초기화 (로딩 시작)
  // 2. fetch 옵션 구성
  // 3. 요청 성공 시 data 설정
  // 4. 요청 실패 시 error 설정
  // 5. 로딩 종료 후 render 호출
};

// 버튼 이벤트
document.getElementById("getBtn").onclick = () => request("GET");
document.getElementById("postBtn").onclick = () => request("POST");
document.getElementById("putBtn").onclick = () => request("PUT");
document.getElementById("deleteBtn").onclick = () => request("DELETE");

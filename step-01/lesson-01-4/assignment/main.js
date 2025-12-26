let isLoading = false;
let data = null;
let error = null;

const app = document.getElementById("app");
const button = document.getElementById("loadButton");

const render = () => {
  app.innerHTML = "";

  // TODO:
  // 1. 로딩 상태 처리
  // 2. 에러 상태 처리
  // 3. 데이터 상태 처리
};

const fetchData = async () => {
  // TODO:
  // 1. 로딩 상태 변경
  // 2. API 요청
  // 3. 성공 / 실패 상태 처리
};

button.addEventListener("click", fetchData);

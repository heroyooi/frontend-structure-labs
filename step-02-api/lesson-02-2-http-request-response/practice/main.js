const button = document.getElementById("requestBtn");
const result = document.getElementById("result");

const requestData = async () => {
  result.textContent = "요청 중입니다...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    result.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    result.textContent = "요청에 실패했습니다.";
  }
};

button.addEventListener("click", requestData);
let isLoading = false;
let data = null;
let error = null;

const app = document.getElementById("app");
const button = document.getElementById("loadButton");

const render = () => {
  app.innerHTML = "";

  if (isLoading) {
    app.textContent = "로딩 중...";
    return;
  }

  if (error) {
    app.textContent = "에러가 발생했습니다.";
    return;
  }

  if (data) {
    const ul = document.createElement("ul");

    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.title;
      ul.appendChild(li);
    });

    app.appendChild(ul);
  }
};

const fetchData = async () => {
  isLoading = true;
  error = null;
  data = null;
  render();

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const result = await response.json();

    data = result.slice(0, 5);
  } catch (e) {
    error = e;
  } finally {
    isLoading = false;
    render();
  }
};

button.addEventListener("click", fetchData);

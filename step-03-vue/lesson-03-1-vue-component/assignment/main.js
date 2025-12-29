const { createApp } = Vue;

createApp({
  // 1️⃣ 상태 정의
  data() {
    return {
      isLoading: false,
      data: null,
      error: null,
    };
  },

  // 2️⃣ 동작 정의
  methods: {
    // TODO
    // request() 메서드 구현
  },

  // 3️⃣ 화면 정의
  template: `
    <div>
      <!-- TODO -->
      <!-- 상태에 따라 화면을 분기하세요 -->
    </div>
  `,
}).mount("#app");
const { createApp } = Vue;

createApp({
  data() {
    return {
      isLoading: false,
      items: null,
      error: null,
    };
  },

  methods: {
    // TODO
    // fetchItems() 구현
  },

  template: `
    <div>
      <button @click="fetchItems">목록 불러오기</button>

      <!-- TODO -->
      <!-- 상태에 따라 화면 분기 -->
    </div>
  `,
}).mount("#app");
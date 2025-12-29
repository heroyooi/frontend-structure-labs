const { createApp } = Vue;

createApp({
  data() {
    return {
      isLoading: false,
      data: null,
      error: null,
    };
  },

  methods: {
    async request() {
      this.isLoading = true;
      this.data = null;
      this.error = null;

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        this.data = await response.json();
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },
  },

  template: `
    <div>
      <button @click="request">요청 보내기</button>

      <div v-if="isLoading">로딩 중입니다...</div>
      <div v-else-if="error">요청에 실패했습니다.</div>
      <pre v-else-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
    </div>
  `,
}).mount("#app");
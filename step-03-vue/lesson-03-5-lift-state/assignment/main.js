const { createApp } = Vue;

// 아이템 개수 표시 컴포넌트
const ItemCount = {
  // TODO
  // props로 items 받기
  template: `
    <div>
      <!-- 아이템 개수 출력 -->
    </div>
  `,
};

// 아이템 리스트 컴포넌트
const ItemList = {
  // TODO
  // props로 items 받기
  template: `
    <ul>
      <!-- 리스트 렌더링 -->
    </ul>
  `,
};

// 부모 컴포넌트
createApp({
  components: {
    ItemList,
    ItemCount,
  },

  data() {
    return {
      isLoading: false,
      items: null,
      error: null,
    };
  },

  methods: {
    async fetchItems() {
      this.isLoading = true;
      this.items = null;
      this.error = null;

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        this.items = data.slice(0, 5);
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },
  },

  template: `
    <div>
      <button @click="fetchItems">목록 불러오기</button>

      <div v-if="isLoading">로딩 중입니다...</div>
      <div v-else-if="error">요청에 실패했습니다.</div>

      <ItemCount v-else-if="items" :items="items" />
      <ItemList v-if="items" :items="items" />
    </div>
  `,
}).mount("#app");

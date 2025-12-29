const { createApp } = Vue;

// 자식: 버튼
const FetchButton = {
  emits: ["fetch"],
  template: `
    <button @click="$emit('fetch')">
      목록 불러오기
    </button>
  `,
};

// 자식: 리스트
const ItemList = {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  `,
};

// 부모
createApp({
  components: {
    FetchButton,
    ItemList,
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
      <FetchButton @fetch="fetchItems" />

      <div v-if="isLoading">로딩 중입니다...</div>
      <div v-else-if="error">요청에 실패했습니다.</div>

      <ItemList v-else-if="items" :items="items" />
    </div>
  `,
}).mount("#app");

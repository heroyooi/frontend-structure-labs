const { createApp } = Vue;

const ItemCount = {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div>
      총 {{ items.length }}개
    </div>
  `,
};

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

createApp({
  components: {
    ItemList,
    ItemCount,
  },

  data() {
    return {
      isLoading: false,
      items: [],
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

      <div v-else>
        <ItemCount :items="items" />
        <ItemList :items="items" />
      </div>
    </div>
  `,
}).mount("#app");

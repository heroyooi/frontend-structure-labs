import { defineStore } from "pinia";

export const useItemStore = defineStore("item", {
  state: () => ({
    items: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchItems() {
      this.isLoading = true;
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
});

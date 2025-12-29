import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async login() {
      this.isLoading = true;
      this.error = null;

      try {
        // 로그인 API 가정
        this.user = {
          id: 1,
          name: "홍길동",
        };
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.user = null;
    },
  },
});

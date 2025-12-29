const { createApp } = Vue;

// FetchButton 컴포넌트
const FetchButton = {
  // TODO
  // emits 정의
  template: `
    <button>
      목록 불러오기
    </button>
  `,
};

// ItemList 컴포넌트
const ItemList = {
  // TODO
  // props 정의
  template: `
    <ul>
      <!-- 리스트 렌더링 -->
    </ul>
  `,
};

// App (부모 컴포넌트)
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
    // TODO
    // fetchItems 구현
  },

  template: `
    <div>
      <!-- FetchButton -->
      <!-- 상태별 화면 -->
      <!-- ItemList -->
    </div>
  `,
}).mount("#app");
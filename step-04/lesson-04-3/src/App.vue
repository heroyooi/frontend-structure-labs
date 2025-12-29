<script setup>
import { useItemStore } from './stores/itemStore';

const itemStore = useItemStore();
</script>

<template>
  <div style="padding: 20px">
    <h2>Step 4 – Pinia 전역 상태 실습</h2>

    <button @click="itemStore.fetchItems">목록 불러오기</button>

    <div v-if="itemStore.isLoading">로딩 중...</div>

    <div v-else-if="itemStore.error">요청 실패</div>

    <ul v-else>
      <li v-for="item in itemStore.items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

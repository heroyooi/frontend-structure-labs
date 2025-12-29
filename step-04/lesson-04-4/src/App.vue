<script setup>
import { useItemStore } from './stores/itemStore';
import { useUserStore } from './stores/userStore';

const itemStore = useItemStore();
const userStore = useUserStore();
</script>

<template>
  <div>
    <button @click="userStore.login">로그인</button>

    <div v-if="userStore.user">{{ userStore.user.name }}님 환영합니다</div>

    <hr />

    <button @click="itemStore.fetchItems">목록 불러오기</button>

    <ul>
      <li v-for="item in itemStore.items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

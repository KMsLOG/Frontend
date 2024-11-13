<template>
  <div>
    <h4>유저 목록</h4>
    <hr>
    <table>
      <tr>
        <th>ID</th>
        <th>PASSWORD</th>
        <th>이름</th>
        <th>이메일</th>
        <th>나이</th>
      </tr>
      <!-- users 객체의 값(배열)을 반복 -->
      <tr v-for="user in usersArray" :key="user.id">
        <td>
          <router-link :to="`/user/${user.id}`">{{ user.id }}</router-link>
        </td>
        <td>{{ user.password }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'; // Pinia store import
import { onMounted, computed } from 'vue';

const store = useUserStore();

// 컴포넌트가 마운트될 때 사용자 목록 가져오기
onMounted(() => {
  store.getUsers();
});

// users 객체를 배열로 변환하여 사용
const usersArray = computed(() => Object.values(store.users));
</script>

<style scoped>

table {
  width: 100%; 
  border-collapse: collapse; 
  table-layout: fixed; 
  margin-top: 20px; 
}


th {
  padding: 12px 15px;
  background-color: #f4f4f4; 
  text-align: center;
  font-weight: bold; 
  border-bottom: 2px solid #ddd; 
}


td {
  padding: 12px 15px; 
  border-bottom: 1px solid #ddd; 
  text-align: center; 
  vertical-align: middle; 
}


tr:nth-child(even) {
  background-color: #f9f9f9; 
}

tr:hover {
  background-color: #f1f1f1; 
  cursor: pointer;
}


a {
  text-decoration: none; 
  color: #007bff; 
}

a:hover {
  text-decoration: underline;
}
</style>

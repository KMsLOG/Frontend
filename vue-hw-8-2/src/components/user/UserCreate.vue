<template>
  <div>
    <h4>유저 등록</h4>
    <fieldset>
      <legend>등록</legend>
      <div>
        <label for="id">아이디 : </label>
        <input v-model="user.id" type="text" id="id" required />
      </div>
      <div>
        <label for="password">패스워드 : </label>
        <input v-model="user.password" type="password" id="password" required />
      </div>
      <div>
        <label for="name">이름 : </label>
        <input v-model="user.name" type="text" id="name" required />
      </div>
      <div>
        <label for="email">이메일 : </label>
        <input v-model="user.email" type="email" id="email" required />
      </div>
      <div>
        <label for="age">나이 : </label>
        <input v-model="user.age" type="number" id="age" required />
      </div>
      <div>
        <button @click.prevent="createUser">등록</button>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore'; // Pinia store import

// Pinia store에서 제공하는 createUser 함수 호출
const store = useUserStore();

// 사용자 입력을 관리할 reactive 객체
const user = ref({
  id: '',
  password: '',
  name: '',
  email: '',
  age: null,
});

// 사용자 등록 함수
const createUser = () => {
  if (!user.value.id || !user.value.password || !user.value.name || !user.value.email || !user.value.age) {
    alert('모든 필드를 채워 주세요!');
    return;
  }

  // 사용자 객체를 store에 전달하여 등록
  store.createUser(user.value);

  // 등록 후, 입력폼 초기화
  user.value = {
    id: '',
    password: '',
    name: '',
    email: '',
    age: null,
  };
  alert('사용자 등록이 완료되었습니다!');
};
</script>

<style scoped>
/* 폼 스타일링 */
fieldset {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

legend {
  font-weight: bold;
  font-size: 1.2em;
}

div {
  margin-bottom: 12px;
}

label {
  display: inline-block;
  width: 100px;
  font-size: 1em;
  margin-right: 10px;
}

input {
  padding: 8px;
  font-size: 1em;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

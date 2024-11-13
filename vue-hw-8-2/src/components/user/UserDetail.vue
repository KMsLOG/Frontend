<!-- UserDetail.vue 수정 -->
<template>
  <div class="user-detail">
    <h4>사용자 상세 정보</h4>
    <hr>
    
    <div v-if="userInfo" class="user-info">
      <div class="info-row">
        <span class="label">ID:</span>
        <span class="value">{{ userInfo.id }}</span>
      </div>
      <div class="info-row">
        <span class="label">이름:</span>
        <span class="value">{{ userInfo.name }}</span>
      </div>
      <div class="info-row">
        <span class="label">이메일:</span>
        <span class="value">{{ userInfo.email }}</span>
      </div>
      <div class="info-row">
        <span class="label">나이:</span>
        <span class="value">{{ userInfo.age }}</span>
      </div>
    </div>
    <div class="actions">
      <button @click="$router.push('/user')" class="back-button">
        목록으로 돌아가기
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const route = useRoute();
const store = useUserStore();
const userInfo = ref(null);

onMounted(() => {
  const userId = route.params.id;
  store.getUser(userId)
  .then((data) => {
    userInfo.value = data;
  });
});
</script>

<style scoped>
.user-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.loading {
  text-align: center;
  padding: 20px;
}

.user-info {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.info-row {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.info-row:last-child {
  border-bottom: none;
}

.label {
  width: 100px;
  font-weight: bold;
  color: #666;
}

.value {
  flex: 1;
}

.actions {
  margin-top: 20px;
  text-align: center;
}

.back-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
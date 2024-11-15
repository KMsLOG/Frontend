<template>
    <div>
        <h4>검색 컴포넌트</h4>
        <input type="text" v-model.trim="keyword">
        <button @click="search">검색</button>
    </div>
</template>

<script setup>

import { useYoutubeStore } from '@/stores/youtube';
import { ref } from 'vue';

const keyword = ref('')
const store = useYoutubeStore();  

const search = function () {
  store.youtubeSearch(keyword.value);  
}
</script>

<style scoped>

</style>
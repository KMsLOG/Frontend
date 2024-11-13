<template>
    <div v-for="family in store.familyInfo" :key="family.familyName">
        
    
        <h3>부모컴포넌트</h3>
         <p>{{ family.father }}</p>
         <p>{{ family.mother }}</p>
        <ChildPage :family="family"/>
    </div>
</template>

<script setup>
import ChildPage from './ChildPage.vue';
import { useFamilyStore } from '@/stores/family';

    const store = useFamilyStore();

</script>

<style scoped>
    div{
        border: solid;
        text-align: center;
        background-color: #0001;
        border-width: 0.1ch;
        margin: 5%;
    }
</style>
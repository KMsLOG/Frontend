<template>
    <div v-for="child in family.children" :key="child.name">
        <h4>자식 페이지</h4>
        <p>{{ child.name }}</p>
    </div>
</template>

<script setup>

    const props = defineProps({
        family: Object,
    })
</script>

<style scoped>
    div {
        border: solid;
        border-width: 0.1ch;
        padding: 1%;
        margin: 5%;
        text-align: center;
        background-color: white;
        
    }
</style>
<template>
    <div>
        <h2>Youtube View</h2>
        <!-- 검색 -->
        <YoutubeVideoSearch/>

        <!-- 상세보기 -->
        <hr>
        <YoutubeVideoDetail/>

        <!-- 리스트 -->
        <hr>
        <YoutubeVideoList/>
    </div>
</template>

<script setup>
    import YoutubeVideoDetail from '@/components/youtube/YoutubeVideoDetail.vue';
import YoutubeVideoList from '@/components/youtube/YoutubeVideoList.vue';
import YoutubeVideoSearch from '@/components/youtube/YoutubeVideoSearch.vue';
</script>

<style  scoped>

</style>
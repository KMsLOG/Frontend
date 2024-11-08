<template>
    <div>
        <h3>User View</h3>
        <!-- 아래와 같이 바로 접근이 되기는 하지만 권장은 아님-->
        <p>{{ $route.params.id }}</p>

        <!-- 아래의 방식으로 사용하는 것을 권장-->
        <p>{{ userid }}</p>
        <p>{{ userid2 }}</p>

        <hr>

        <button @click="goHome">홈으로 가기</button>
    </div>
</template>

<script setup>
import { onBeforeUpdate, ref, watch } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
    
    const route = useRoute()
    const router = useRouter()
    const userid = ref(route.params.id)
    const userid2 = ref(route.params.id)
    watch(()=>route.params.id,(newId)=>{
        userid.value=newId
    })

    const goHome = function(){
        // 직접 URL 경로를 작성할 수 있음
        //router.push("/")
        // 이름으로 호출할 수 있음
        // router.push({name: 'about'})
        router.replace({name: 'home'})
    }

    onBeforeRouteLeave(()=>{
        const answer = confirm("정말로 떠나실 건가요?")
        console.log(answer)
        // if(!answer) return false
        return answer 
    })

    onBeforeRouteUpdate((to)=>{
        userid2.value = to.params.id
    })
</script>

<style scoped>

</style>
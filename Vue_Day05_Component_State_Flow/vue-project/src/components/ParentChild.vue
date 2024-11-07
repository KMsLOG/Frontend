<template>
    <div>
        <h4>자식 컴포넌트</h4>
        <p>{{ myMsg }}</p>
        <p v-text="myMsg"></p>
        <p>{{ dynamicName }}</p>
        <p>{{ person }}</p>
        <p>name : {{ person.name }}, age : {{ person.age }}</p>
        <hr>
        <button @click="$emit('someEvent')">부모 전송</button>
        <button @click="buttonClick">부모 전송2</button>
        <button @click="emitArgs">추가인자전달</button>
        <hr>


        <ParentGrandChild 
            @update-namee = "updateNameee"
            :my-msg="myMsg"/> <!-- v-bind 시켜서 내리기-->
        
    </div>
</template>

<script setup>
    // 부모로 부터 받은 props를 사용하기 위한 방법은 크게 2가지
    // defineProps(['my-msg'])

    // 적어도 타입정도는 알려줘 더 자세히 써주면 땡큐
    defineProps({
        myMsg : String,
        dynamicName : String,
        person : Object
    });

    import ParentGrandChild from './ParentGrandChild.vue';

    const emit = defineEmits(["someEvent", "emitArgs","updateNameeee"])

    const buttonClick = function(){
        emit("someEvent")
    }

    const emitArgs = function(){
        emit("emitArgss", 1, 2, 3)
    }

    const updateNameee = function(name){
        emit("updateNameeee",name)
    }
</script>

<style scoped>

</style>
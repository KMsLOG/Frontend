<template>
    <div>
        <h4>간단한 챗봇</h4>
        <input v-model.trim="input" type="text" placeholder="질문을 남겨주세요" />
        <button @click="send">전송</button>
        <hr>
        <div class = "chat-container">
            <div v-for="(msg, index) in store.messages" 
            :key="msg.index"
            :class="[msg.input ? 'left':'right']">
            <span>{{ msg.messages }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useChatBotStore } from '@/stores/chatbot';
import { ref } from 'vue';

const input = ref('')
const store = useChatBotStore()
const send = function () {
    store.sendMsg(input.value)
    input.value=''
}
</script>

<style scoped>
    .chat-container{
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    .message{
        padding: 10px;
        margin : 5px 0;
        border-radius: 10px;
        max-width: 70%;
    }

    .left{
        align-self: flex-start;
        background-color: antiquewhite;
    }
    .right{
        align-self: flex-end;
        background-color: white;
    }
</style>
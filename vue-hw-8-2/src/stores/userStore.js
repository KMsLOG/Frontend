import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_API_URL = 'http://localhost:8080/userapi/user'

export const useUserStore = defineStore("user", () => {

  // users는 객체로 관리, id를 키로 사용자를 저장
  const users = ref({});

  // 사용자 목록 가져오기
  const getUsers = function() {
    axios.get(REST_API_URL)
    .then((response) => {
      // 응답 데이터가 배열일 때, id를 키로 하는 객체 형태로 변환
      const usersObject = {};
      response.data.forEach(user => {
        usersObject[user.id] = user;
      });
      users.value = usersObject; // users를 업데이트
    })
    .catch((error) => {
      console.error("사용자 목록을 가져오는 데 실패했습니다:", error);
    });
  }

  // 사용자 등록
  const createUser = function(user) {
    axios({
      url: REST_API_URL,
      method: 'POST',
      data: user
    })
    .then(() => {
      console.log("사용자 등록 완료");
      router.push({ name: 'userList' });
    })
    .catch((error) => {
      console.error("사용자 등록 실패:", error);
    });
  }
  const user = ref({})
  // 특정 사용자 가져오기
  const getUser = function(id) {
    return axios.get(`${REST_API_URL}/${id}`)
      .then((res) => {
        user.value = res.data;
        return res.data; // 데이터 반환 추가
      })
      .catch((error) => {
        console.error("사용자 정보 가져오기 실패:", error);
        return null;
      });
  }

  return {
    users,
    user,
    getUsers,
    createUser,
    getUser
  };
});

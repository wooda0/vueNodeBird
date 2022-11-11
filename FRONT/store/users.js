export const state = () => ({
  me: null
});

// mutations에서는 비동기 작업이 있으면 안됨
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
}

// 비동기 작업들은 여기에 넣어주는게 좋음
export const actions = {
  signup({commit}, payload){
    //서버에 회원가입 요청
    commit('setMe', payload)

  },
  login({commit}, payload){
    commit('setMe', payload)
  },
  logout({commit}){
    commit('setMe', null)
  },
  changeNickname({commit}, payload){
    commit('changeNickname', payload)
  },
}
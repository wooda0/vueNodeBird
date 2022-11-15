export const state = () => ({
  me: null,
  followerList: [{
    id: 1,
    nickname:'제로초'
  },
  {
    id: 2,
    nickname:'네로'
  },
  {
    id: 3,
    nickname:'히어로'
  }],
  followingList: [{
    id: 1,
    nickname:'제로초'
  },
  {
    id: 2,
    nickname:'네로'
  },
  {
    id: 3,
    nickname:'히어로'
  }]
});

// mutations에서는 비동기 작업이 있으면 안됨
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
  addFollowing(state, payload){
    state.followerList.push(payload)
  },
  addFollower(state, payload){
    state.followingList.push(payload)
  },
  removeFollowing(state, payload){
    const index = state.followingList.findIndex(v=> v.id === payload.id)
    state.followingList.splice(index, 1);
  },
  removeFollower(state, payload){
    const index = state.followerList.findIndex(v=> v.id === payload.id)
    state.followerList.splice(index, 1);
  }
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
  addFollowing({commit}, payload){
    commit('addFollowing', payload)
  },
  addFollower({commit}, payload){
    commit('addFollower', payload)
  },
  removeFollowing({commit}, payload){
    commit('removeFollowing', payload)
  },
  removeFollower({commit}, payload){
    commit('removeFollower', payload)
  }
} 
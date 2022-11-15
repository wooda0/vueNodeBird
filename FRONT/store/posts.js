export const state = () => ({
  mainPosts: [],
  hasMorePost: true,
});

export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload)
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex(el => el.id === payload.id)
    state.mainPosts.splice(index, 1)
  },
  addComment(state, payload){
    const index = state.mainPosts.findIndex(el => el.id === payload.postId)
    state.mainPosts[index].Comments.unshift(payload)
  },
  loadPosts(state) {
    const diff = totalPosts - state.mainPosts.length; // 아직 안불러온 게시글 수
    const fakePost = Array(diff > limit ? limit: diff).fill().map(v => ({
      id: Math.random().toString(),
      User: {
        id: 1,
        nickname: '제로초',
        email:"test!@test"
      },
    contents: `Hello ${Math.random()}`
    }))
    state.mainPosts = state.mainPosts.concat(fakePost)
    state.hasMorePost = fakePost.length === limit 
  }
}

const totalPosts = 101;
const limit = 10;

export const actions ={
  add({commit}, payload){
    //commit('addMainPost', payload, {root: true}) -> 인덱스로 부름
    // 서버에 게시글 등록
    commit('addMainPost', payload)
  },
  remove({commit}, payload) {
    commit('removeMainPost', payload)
  },
  addComment({commit}, payload) {
    commit('addComment', payload)
  },
  loadPosts({commit, state}, payload){
    if(state.hasMorePost) {
      commit('loadPosts', payload) 
    }
  }
}
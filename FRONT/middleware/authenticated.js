export default function({store, redirect}){
  // 로그인 안한 사람을 다시 돌려보냄
  if(!store.state.users.me){
    redirect('/')
  }
}
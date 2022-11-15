<template>
  <v-container>
    <PostForm v-if="me" />
    <div>
      <PostCard v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </v-container>
</template>
<script>
  import PostCard from '~/components/PostCard';  
  import PostForm from '~/components/PostForm';  

export default {
  name:"HomePage",
  components:{
    PostCard,
    PostForm
  },
  data() {
    return {
      name: 'Nuxt'
    }
  },
  //이 컴포넌트가 마운트(화면에 보이기 전에) 비동기적으로 데이터를 넣음
  fetch({store}){
    store.dispatch('posts/loadPosts')
  },
  computed: {
    me(){
      return this.$store.state.users.me
    },
    mainPosts(){
      return this.$store.state.posts.mainPosts
    },
    hasMorePost(){
      return this.$store.state.posts.hasMorePost
    }
  },
  mounted(){
    //created에서 windows나 document에 접근하명 에러가 날 수 잇음
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
        if(this.hasMorePost){
          this.$store.dispatch('posts/loadPosts');
        }
      }
    }
  }
}
</script>

<style>

</style>

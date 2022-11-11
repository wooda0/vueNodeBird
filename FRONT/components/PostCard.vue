<template>
  <div>
    <v-card class="mb-5">
      <v-img />
      <v-card-text>
        <div>
          <h3>{{ post.User.email }}</h3>
          <div>{{ post.contents }}</div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="orange">
          <v-icon>mdi-repeat-variant</v-icon>
        </v-btn>
        <v-btn text color="orange">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn text color="orange" @click="onToggleComment">
          <v-icon>mdi-comment-outline</v-icon>
        </v-btn>
        <v-menu 
          offset-y 
          open-on-hover 
        >
          <template #activator="{on}">
            <v-btn text color="orange" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-container>
              <v-btn dark color="red" @click="onRemovePost">
                삭제
              </v-btn>
              <v-btn dark color="green" @click="onEditPost">
                수정
              </v-btn>
            </v-container>
          </v-card>
        </v-menu>
      </v-card-actions>
    </v-card>
    <template v-if="commentOpened">
      <CommentForm :post-id="post.id" />
      <v-list>
        <v-list-item v-for="c in post.Comments" :key="c.id">
          <v-list-item-avatar color="teal">
            <span>{{ c.User.email[0] }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ c.User.email }}</v-list-item-title>
            <v-list-item-subtitle>{{ c.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </div>
</template>

<script>
import CommentForm from './CommentForm.vue'
export default {
  components: {
    CommentForm
  },
  props:{
    post: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      commentOpened: false
    }
  },
  methods: {
    onRemovePost() {
      this.$store.dispatch('posts/remove',{
        id: this.post.id
      })
    },
    onEditPost() {

    },
    onToggleComment(){
      this.commentOpened = !this.commentOpened
    }
  }

}
</script>

<style>

</style>
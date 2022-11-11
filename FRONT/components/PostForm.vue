<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea 
          v-model="contents"
          outlined
          auto-grow
          clearable
          :hide-details="hideDetails"
          :success="success"
          :success-messages="successMessages"
          label="어떤 신기한 일이 있었나요?"
          :rules="[v => !!v.trim() || '내용을 입력하세요']"
          @input="onChangeTextarea"
        />
        <v-btn color="green" type="submit" right absolute>
          <div>등록</div>
        </v-btn>
        <v-btn>이미지 업로드</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>

import { mapState } from 'vuex';
export default {
  data(){
    return{
      success: false,
      successMessages: '',
      valid: false,
      contents: '',
      hideDetails: true,
      commentOpened: false
    }
  },
  computed:{
    //...mapState(['users/me'])
    ...mapState('users', ['me'])
  },
  methods: {
    onChangeTextarea(value) {
      if(value.length){
        this.hideDetails = true;
        this.success = false
        this.successMessages = ''
      }
    },
    onSubmitForm(){
      if(this.$refs.form.validate()){
        this.$store.dispatch('posts/add', {
          contents: this.contents,
          User: {
            email: this.me.email
          },
          Comments:[],
          Images:[],
          id: Date.now(),
          createdAt: Date.now()
        })
        .then(() => {
          this.hideDetails = false
          this.success = true
          this.successMessages = "게시글 등록 성공"
          this.contents = ''
        })
      }
    }
  }
}
</script>

<style>

</style>
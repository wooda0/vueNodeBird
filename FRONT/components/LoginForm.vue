<template>
  <v-container v-if="!me">
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="Login">
        <v-container>
          <v-text-field
            v-model="email"
            label="이메일"
            type="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            :rules="passwordRules"
            required
          />
          <v-btn color="green" type="submit" :disabled="!valid">
            <div>로그인</div>
          </v-btn>
          <v-btn nuxt to="/signup">
            <div>회원가입</div>
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      {{ me.nickname }}님 로그인되었습니다.
      <v-btn @click="onLogOut">
        <div>로그아웃</div>
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: '',
      emailRules: [
        v => !!v || '이메일은 필수입니다.',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.'
      ],
      passwordRules: [
        v => !!v || '비밀번호는 필수입니다.'
      ],
    }
  },
  computed:{
    me() {
      return this.$store.state.users.me;
    }
  },
  methods: {
    Login() {
      if(this.$refs.form.validate()){
        this.$store.dispatch('users/login',{
          email: this.email,
          nickname: 'nickname'
        })  
        .then(() => {
          this.$router.push({
            path: '/'
          })
        })
        .catch(() => {
          alert('회원가입 실패');
        })
      }
    },
    onLogOut(){
      this.$store.dispatch('users/logout')
    }
  }

}
</script>

<style>

</style>
<template>
  <v-app>
    <div>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <nuxt-link to="/">
            NodeBird
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-item class="d-flex align-center">
          <v-text-field prepend-icon="mdi-magnify" label="검색" hide-details />
          <v-btn text nuxt to="/profile">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-item>
      </v-toolbar>
    </div>

    <v-row no-gutters>
      <v-col cols="12" md="4">
        <LoginForm />
      </v-col>
      <v-col cols="12" md="8">
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: "DefaultLayout",
  components: {
    LoginForm
  },
  head(){
    return {
      title: '노드버드'
    }
  }
}
</script>

<style>

</style>
 

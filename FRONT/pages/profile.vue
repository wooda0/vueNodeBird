<template>
  <div>
    <v-container>
      <v-card class="mb-5">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form v-model="valid" @submit.prevent="onChangeNickname">
            <v-text-field
              v-model="nickname"
              label="닉네임"          
              required
              :rules="nicknameRules"
            />
            <v-btn type="submit" color="blue">
              수정
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card class="mb-5">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <FollowList :users="followingList" :remove="removeFollowing" />
        </v-container>
      </v-card>
      <v-card class="mb-5">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <FollowList :users="followerList" :remove="removeFollower" />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FollowList from '~/components/FollowList.vue'
export default {
  name: "ProfilePage",
  components:{
    FollowList
  },
  middleware: 'authenticated',
  data() {
    return {
      name: 'myPage',
      valid: false,
      nickname: '',
      nicknameRules: [
        v => !!v || '닉네임을 입력하세요.'
      ]
    }
  },
  computed:{
    followerList(){
      return this.$store.state.users.followerList
    },
    followingList(){
      return this.$store.state.users.followingList
    }
  },
  methods: {
    onChangeNickname(){
      this.$store.dispatch('users/changeNickname',{
        nickname : this.nickname
      })
    },
    removeFollowing(id) {
      this.$store.dispatch('users/removeFollowing', { id })
    },
    removeFollower(id) {
      this.$store.dispatch('users/removeFollower', { id })
    }
  }
}
</script>

<style>

</style>

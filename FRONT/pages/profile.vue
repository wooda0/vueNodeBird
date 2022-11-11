<template>
  <div>
    <v-container>
      <v-card class="mb-5">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form>
            <v-text-field
              label="닉네임"
              required          
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
          <FollowList />
        </v-container>
      </v-card>
      <v-card class="mb-5">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <FollowList />
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
  data() {
    return {
      name: 'myPage'
    }
  },
  head(){
    return {
      title: '프로필'
    }
  }
}
</script>

<style>

</style>

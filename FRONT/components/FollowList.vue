<template>
  <v-list>
    <v-list-item v-for="item in users" :key="item.id">
      <span>{{ item.nickname }}</span>
      <v-icon @click="remove(item.id)">
        mdi-minus-circle-outline
      </v-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    },
    remove: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>

</style>
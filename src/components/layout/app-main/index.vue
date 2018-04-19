<!-- app-main -->
<template>
  <div class='app-main'>
    <!-- content -->
    <transition
      name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
.app-main {
  padding: 10px;
}
</style>

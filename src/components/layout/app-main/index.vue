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
  position: absolute;
  padding: 10px;
  padding-left: 210px;
  top: 50px;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: auto;
}
</style>

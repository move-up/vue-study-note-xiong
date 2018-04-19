<!-- layout -->
<template>
  <div class='layout'>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import appMain from './app-main/index'
import navbar from './navbar/index'
import sidebar from './sidebar/index'
import tagsView from './tags-view/index'

export default {
  name: '',

  components: {
    appMain,
    navbar,
    sidebar,
    tagsView
  },

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
</style>

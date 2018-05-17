<!--  -->
<template>
  <div class=''>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>echarts-line</span>
        <el-button style="float: right; padding: 3px 0" type="text">go</el-button>
      </div>
      <LineChart id="chart-line" width="100%" height="100%"></LineChart>
    </el-card>
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
</style>

<template>
  <div class="page-index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>echarts-line</span>
        <el-button style="float: right; padding: 3px 0" type="text">go</el-button>
      </div>
      <div id="line"></div>
    </el-card>
  </div>
</template>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>

<script>
  import echarts from 'echarts'

  export default {
    name: '',
    components: {

    },
    props: {
    },
    data () {
      return {
        line: null
      }
    },
    computed: {

    },
    watch: {

    },
    created () {
    },
    mounted () {
      this.initLine()
    },
    methods: {
      initLine () {
        this.$nextTick(() => {
          this.line = echarts.init(document.getElementById('line'))
          this.line.setOption({
              title: {
                  text: 'ECharts 入门示例'
              },
              tooltip: {},
              xAxis: {
                  data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
              }]
          })
        })
      }
    }
  }
</script>

<style>

</style>

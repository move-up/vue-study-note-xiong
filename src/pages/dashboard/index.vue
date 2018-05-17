<template>
  <div class="page-index">
    <el-row :gutter="16">

      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>加法计算器</span>
            <el-button style="float: right; padding: 3px 0" type="text">go</el-button>
          </div>
          <Add></Add>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Add from './add'
  import AutoComplete from './autoComplete'

  export default {
    name: '',
    components: {
      Add,
      AutoComplete,
    },
    props: {
    },
    data () {
      return {
      }
    },
    computed: {

    },
    watch: {

    },
    created () {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

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
    /* width: 480px; */
    margin-bottom: 15px;
  }
</style>

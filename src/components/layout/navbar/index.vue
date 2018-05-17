<!-- header -->
<template>
  <el-menu class="layout-navbar" mode="horizontal">
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <el-tooltip effect="dark" :content="userName" placement="bottom">
            <img class="user-avatar" src="https://avatars3.githubusercontent.com/u/16618956?s=40&v=4">
          </el-tooltip>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              主页
            </el-dropdown-item>
          </router-link>
          <a target='_blank' href="https://github.com/Miller547719886">
            <el-dropdown-item>
              Github
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { USER_SIGNOUT } from '@/store/modules/user'
import Breadcrumb from './breadcrumb'

export default {
  name: '',

  components: {
    Breadcrumb
  },

  props: {},

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters(['userName'])
  },

  watch: {},

  created () {},

  mounted () {},
  methods: {
    ...mapActions([USER_SIGNOUT]),
    logout () {
      this.USER_SIGNOUT().then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding-left: 200px;
  line-height: 50px;
  border-radius: 0px !important;
  z-index: 100;

  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

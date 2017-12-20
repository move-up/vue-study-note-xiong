<template>
  <div class="page-login">
    <form action="">
      <div class="form-group">
        <input class="form-control" type="text" name="username" placeholder="用户名">
      </div>
      <div class="form-group">
        <input class="form-control" type="password" name="pwd" placeholder="密码">
      </div>
      <div class="form-group">
        <button @link="handleLongin">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {

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
.page-login form {
  width: 400px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 15px;
  position: relative;
}
.form-group .form-control,
.form-group button {
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  outline: none;
  height: 30px;
  width: 100%;
  padding: 5px;
}
.form-group button {
  outline: none;
  border: 1px solid #41b883;
  background-color: #41b883;
  width: auto;
  color: #fff;
}
</style>

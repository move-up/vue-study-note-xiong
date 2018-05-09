<!-- component:add -->
<template>
  <div class=''>
    <el-input-number type="number" size="mini" controls-position="right" v-model="a"></el-input-number>
    +
    <el-input-number type="number" size="mini" controls-position="right" v-model="b"></el-input-number>
    +
    <el-input-number type="number" size="mini" controls-position="right" v-model="c"></el-input-number>
    <div>
      <p>
        总数:
        <span>{{ total }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      a: 0,
      b: 0,
      c: 0
    }
  },

  computed: {
    total () {
      return this.a + this.b + this.c
    }
  },

  watch: {
  },

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>

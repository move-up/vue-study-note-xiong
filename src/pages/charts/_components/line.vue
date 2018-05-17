<template>
  <div class='chart-container'>
    <chart :class="className" :id="id" height='100%' width='100%'></chart>
  </div>
</template>

<script>
import Chart from '@/components/Charts/lineMarker'

export default {
  name: 'lineChart',
  props: {
    className: {
      type: [ String ],
      default: 'charts'
    },
    id: {
      type: [ String ],
      default: 'charts',
      required: true
    }
  },
  components: { Chart }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
}
</style>


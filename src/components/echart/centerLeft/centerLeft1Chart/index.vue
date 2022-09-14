<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import {ajax} from "@/utils/ajax";
import {ChartApis} from "@/utils/apis";
export default {
  data () {
    return {
      cdata: {}
    };
  },
  components: {
    Chart,
  },
  mounted () {
    this.getcenterLeft1ChartDatalist()
  },
  methods: {
    // 根据自己的业务情况修改
    getcenterLeft1ChartDatalist() {
      ajax.get(ChartApis.leftoneChart).then(({data}) =>{
        this.cdata = data
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

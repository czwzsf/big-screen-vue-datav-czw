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
    this.getcenterLeft2ChartDatalist()
  },
  methods: {
    // 根据自己的业务情况修改
    getcenterLeft2ChartDatalist() {
      ajax.get(ChartApis.lefttwoChart).then(({data}) =>{
        this.cdata = data
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

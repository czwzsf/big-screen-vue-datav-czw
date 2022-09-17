<template>
  <div>
    <Chart :cdata="cdata"/>
  </div>
</template>

<script>
import Chart from './chart.vue'
import {ajax} from "@/utils/ajax";
import {ChartApis} from "@/utils/apis";

export default {
  data() {
    return {
      cdata: {}
    };
  },
  components: {
    Chart,
  },
  mounted() {
    this.getBottomCenterChartDataList()
  },
  methods: {
    getBottomCenterChartDataList() {
      ajax.get(ChartApis.bottomCenterUrl).then(({data}) => {
        this.cdata = data
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

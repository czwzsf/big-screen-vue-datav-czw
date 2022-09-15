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
    this.getbottomleftChartDataList()
  },
  methods: {
    getbottomleftChartDataList() {
      ajax.get(ChartApis.bottomLeftUrl).then(({data}) => {
        this.cdata = data
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

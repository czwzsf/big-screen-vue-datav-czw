<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="centerLeft1Chart"
      height="350px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(255,255,255,0.1)",
            axisPointer: {
              type: "shadow",
              label: {
                show: true,
                backgroundColor: "#7B7DDC"
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0,0.01]
          },
          yAxis: {
            type: 'category',
            data: newData.platform
          },
          series: [
            {
              name: '2012',
              type: 'bar',
              data: newData.mis_12
            }
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>

<template>
  <div>
    <Echart
        :options="options"
        id="bottomLeftChart"
        height="480px"
        width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'

export default {
  data() {
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
      handler(newData) {
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
          legend: {
            data: [],
            textStyle: {
              color: "#B4B4B4"
            },
            top: "5%"
          },
          grid: {
            x: "8%",
            width: "88%",
            y: "4%"
          },
          xAxis: [
            {
              data: newData.date_of_claim,
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },
              axisTick: {
                show: false
              }
            }],
          yAxis: [
            {
              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },

              axisLabel: {
                formatter: "{value} "
              }
            },
            {
              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4"
                }
              },
              axisLabel: {
                formatter: "{value} "
              }
            }
          ],
          series: [
            {
              type: "line",
              smooth: false,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#F02FC2"
                }
              },
              data: newData.frequency
            },
          ]
        }
      },
      immediate: true,
      deep: true
    },
  },
}
</script>

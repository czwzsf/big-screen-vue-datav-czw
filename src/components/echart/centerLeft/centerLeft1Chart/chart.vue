<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="centerLeft1Chart"
      height="400px"
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
          // legend: {
          //   data: ["已贯通", "计划贯通", "贯通率"],
          //   textStyle: {
          //     color: "#B4B4B4"
          //   },
          //   top: "0%"
          // },
          grid: {
            x: "8%",
            width: "88%",
            y: "4%"
          },
          xAxis: {
            data: newData.data_mis,
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: [
            {
              splitLine: { show: false },
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
              splitLine: { show: false },
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
              name: "公路",
              type: "line",
              smooth: true,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#F02FC2"
                }
              },
              data: newData.mis_12
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

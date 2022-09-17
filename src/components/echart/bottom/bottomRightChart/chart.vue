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
            data: ["mis3", "mis6", "mis9", "mis12"],
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
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return (
                        'Precipitation  ' +
                        params.value +
                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                    );
                  }
                }
              },
              // prettier-ignore
              data: newData.date_s
            },
            {
              data: newData.Number_of_samples,
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
              name: "mis3",
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
              data: newData.mis3
            },
            {
              name: "mis6",
              type: "line",
              smooth: false,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#1cef05"
                }
              },
              data: newData.mis6
            },
            {
              name: "mis9",
              type: "line",
              smooth: false,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#992ff0"
                }
              },
              data: newData.mis9
            },
            {
              name: "mis12",
              type: "line",
              smooth: false,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "#f02f3f"
                }
              },
              data: newData.mis12
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

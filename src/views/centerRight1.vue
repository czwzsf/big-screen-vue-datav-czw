<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">零部件最近月12MIS</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ajax} from "@/utils/ajax";
import {ChartApis} from "@/utils/apis";

export default {
  data() {
    return {
      config: {}
    }
  },
  mounted() {
    this.getcenterRight1ChartDatalist()
  },
  methods: {
    getcenterRight1ChartDatalist() {
      ajax.get(ChartApis.rightoneChart).then(({data}) =>{
        this.config = data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 410px;
$box-width: 300px;
#centerRight1 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;

  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }

  .text {
    color: #c3cbde;
  }

  .body-box {
    border-radius: 10px;
    overflow: hidden;

    .dv-scr-board {
      width: 270px;
      height: 340px;
    }
  }
}
</style>

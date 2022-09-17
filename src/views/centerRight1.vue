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
export default {
  data() {
    return {
      config: {
        header: ['零部件', '当前值', '环比', '比基础值', '同比'],
        data: [
          ['水泵总成', '21.3', '3.5', '9.7', '3.5'],
          ['制动电磁阀总成', '3.9', '-0.4', '-7', '-0.4'],
          ['垫密片-排气管', '21.3', '-1.1', '-4.2', '-1.1'],
          ['垫密片-上气缸盖罩盖', '6.2', '-2.5', '-3.6', '-2.5'],
          ['平惰轮总成', '10.8', '-0.1', '-4.6', '-0.1'],
          ['喷油器总成', '12.3', '-1.3', '0.5', '-1.3'],
          ['减速起动机', '4.5', '0.3', '-2.3', '0.3'],
          ['垫片-增压器', '4.2', '0.5', '2', '0.5'],
          ['排气歧管', '4.5', '1.3', '-2.7', '1.3'],
          ['涡轮增压器', '3.7', '-0.4', '-2.2', '-0.4'],
          ['进油计量比例阀', '2.4', '-1.2', '-2.3', '-1.2'],
        ],
        rowNum: 11, //表格行数
        headerHeight: 35,
        headerBGC: '#062a79', //表头
        oddRowBGC: '#8c0ed5', //奇数行
        evenRowBGC: '#e1786e', //偶数行
        index: false,
        columnWidth: [150],
        align: ['center']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 270px;
$box-width: 600px;
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
      width: 600px;
      height: 350px;
    }
  }
}
</style>

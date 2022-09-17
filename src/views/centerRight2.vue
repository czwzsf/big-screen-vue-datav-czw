<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">服务站索赔频次</span>
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
        // todo 未来直接采用数据库数据
        header: ['服务站', '当月', '当年累计'],
        data: [
          ['海伦众邦', 41, 198],
          ['洛阳卡友', 40, 212],
          ['沁阳通源', 39, 266],
          ['哈密隆祥', 28, 107],
          ['邢台鑫源', 27, 50],
          ['朝阳骏晟', 26, 155],
          ['葫芦岛诚信', 25, 120],
          ['长春众帮', 24, 73],
          ['公主岭赛博', 24, 115],
          ['聊城先锋', 22, 296],
        ],
        rowNum: 10, //表格行数
        headerHeight: 35,
        headerBGC: '#062a79', //表头
        oddRowBGC: '#8c0ed5', //奇数行
        evenRowBGC: '#e1786e', //偶数行
        index: false,
        columnWidth: [100],
        align: ['center']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 520px;
$box-width: 100%;
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
      width: 300px;
      height: 460px;
    }
  }
}
</style>

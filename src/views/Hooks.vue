<template>
  <div style="width: 300px; height: 300px"></div>
</template>

<script>
import { defineComponent } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  data() {
    return { chart: null };
  },

  mounted() {
    const option = {
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // 渲染图表
    const chart = echarts.init(this.$el);
    this.chart = chart;
    this.chart.setOption(option);
  },

  beforeUnmount() {
    alert("销毁echart");
    // 销毁echart实例
    this.chart.dispose();
  },
});
</script>

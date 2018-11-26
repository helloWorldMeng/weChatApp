import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: 300
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '折线图堆叠'
    },
    tooltip: {
      // trigger: 'axis',
      axisPointer: {
        animation: false
      }
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    dataZoom: [
      {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 30
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210],
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310],
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410],
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330, 320],
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320],
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
      }
    ]
  };





  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});

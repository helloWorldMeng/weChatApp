// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['苹果', '香蕉', '香梨', '葡挞'],
    multiArray:[
      ['蔬菜', '水果'],
      ['包菜', '白菜', '番茄', '西兰花', '豆角']
    ],
    region: ['广东省', '广州市', '海珠区']
  },
  bindPickerChange(e){
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    let data = this.data.multiArray;
    if (e.detail.column == 0 && e.detail.value==0) {
      data[1] = ['包菜', '白菜', '番茄', '西兰花', '豆角'];
    } else if (e.detail.column == 0 && e.detail.value == 1){
      data[1] = ["西瓜", "桃子", "香梨"];
    }
    this.setData({
      multiArray: data
    })
  },
  bindTimeChange(e){
    console.log(e);
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange(e){
    console.log(e);
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange(e){
    console.log(e);
    this.setData({
      region: e.detail.value
    })
  }
})
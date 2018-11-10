// components/list/list.js
var myBehavior = require('../../behaviors/myBehavior');
Component({
  behaviors: [myBehavior, 'wx://form-field'],
  attached() {
    this.setData({
      value: 'custom-value'
    })
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    proListDate: {
      type: Array,
      value: []
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  methods: {
    tap(e) {
      wx.getStorage({
        key: 'history',
        complete:function(res){
          console.log(res.data);
          let dataList = res.data || [];
          dataList.push(e.currentTarget.dataset.item);
          wx.setStorage({
            key: 'history',
            data: dataList,
          })
        }
      })

      wx.navigateTo({
        url: '/pages/detail/detail?id=' + e.currentTarget.dataset.item.id,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  created() {
    // console.log(111);
  },
  ready() {
    // console.log(this.data.proListDate.length);
    // console.log(this.data.myBehaviorProperty);
  },
  pageLifetimes:{
    show(){

    },
    hide(){

    },
    resize(){

    }
  },
  definitionFilter:{
    
  }

})
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
        src: "http://image.wawscm.com/product/489232210428170240-400x400.jpg",
        title: "aaaaaa"
      },{
        src: "http://image.wawscm.com/product/554806216363085824-400x400.jpg",
        title: "bbbbbb"
      },{
        src: "http://image.wawscm.com/product/554811498350776320-400x400.jpg",
        title: "cccccc"
      }
    ],
    start: 10,
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
  },
  loadData(){
    let { start, list } = this.data;
    wx.showLoading({
      title: '正在拼命加载...',
      mask: true
    })
    this.setData({
      loading: true
    })
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/list?start=${this.data.start}`,
      success: (res) => {
        start += 20;
        list.push(...res.data.subjects);
        this.setData({
          list,
          start,
          loading: false
        })
        wx.hideLoading();
      }
    })
  },
  lower() {
    console.log(111);
    if (!this.data.loading) {
      this.loadData();
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
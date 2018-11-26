// pages/scrollView/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { txt: 1 },
      { txt: 1 },
      { txt: 1 },
      { txt: 1 },
      { txt: 1 },
      { txt: 1 },
      { txt: 1 },
      { txt: 1 }
    ]
  },
  upper1: function() {
    wx.showToast({
      title: 'scrollView顶部',
      icon: 'success',
      duration: 2000
    })
  },
  lower1: function () {
    wx.showToast({
      title: 'scrollView底部',
      icon: 'success',
      duration: 2000
    })
  },
  upper2: function () {
    wx.showToast({
      title: 'scrollView左',
      icon: 'success',
      duration: 2000
    })
  },
  lower2: function () {
    wx.showToast({
      title: 'scrollView右',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.showToast({
      title: '监听用户下拉动作',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '页面上拉触底事件的处理函数',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
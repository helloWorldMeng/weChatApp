// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  getUser(e) {
    this.setData({
      userInfo: e.detail.userInfo
    })
    wx.setStorage({
      key: 'userInfo',
      data: e.detail.userInfo,
    })
  },
  signOut(){
    wx.setStorage({
      key: 'userInfo',
      data: null
    })

    this.setData({
      userInfo: null
    })
  },
  clearAll() {
    wx.clearStorage();
    this.setData({
      userInfo: null,
      list: null
    })
  },
  clearUser() {
    let _this = this;
    wx.removeStorage({
      key: 'userInfo',
      success(res){
        _this.setData({
          userInfo: null
        })
      }
    });
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
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.setData({
          userInfo: res.data
        })
      },
    })

    wx.getStorage({
      key: 'history',
      success: (res) => {
        this.setData({
          list: res.data
        })
      },
    })
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
// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      detail: {}
    },
    onShareAppMessage: function (res) {
      console.log("====================");
      console.log("1" +this.data);
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: this.data.title,
        // imageUrl: 'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',
        imageUrl: this.data.cover,
        path: 'pages/map/map'
      }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let app = getApp();
      this.setData({
        globalUrl: app.globalUrl
      })
      console.log(this.data.globalUrl);
      this.loadDetail(options.id);
      this.loadDetail(this.data.id);
    },
    loadDetail(id) {
      wx.showLoading({
        title: '加载详情...',
      })
      let _this = this;
      let url = _this.data.globalUrl + `/h5-view/v/movie/detail/?id=${id}`
      this.http(url, function (res) {
        console.log(res);
        wx.setNavigationBarTitle({
          title: res.data.title || '',
        })
        _this.setData({
          detail: res.data
        })
        wx.hideLoading();
      });
    },
    http: function (url,callback) {
      wx.request({
        url: url,
        success: (res) => {
          callback(res);
        }
      })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      var app = getApp();
      app.globalDate++;
      //console.log(app.globalDate);
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
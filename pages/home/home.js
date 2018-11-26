// pages/index/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{ "rate": "9.0", "cover_x": 1080, "title": "我不是药神", "url": "https:\/\/movie.douban.com\/subject\/26752088\/", "playable": true, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2519070834.jpg", "id": "26752088", "cover_y": 1512, "is_new": false }, { "rate": "5.8", "cover_x": 2143, "title": "悲伤逆流成河", "url": "https:\/\/movie.douban.com\/subject\/27102569\/", "playable": true, "cover": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529701498.jpg", "id": "27102569", "cover_y": 3000, "is_new": false }, { "rate": "6.6", "cover_x": 679, "title": "西虹市首富", "url": "https:\/\/movie.douban.com\/subject\/27605698\/", "playable": true, "cover": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529206747.jpg", "id": "27605698", "cover_y": 950, "is_new": false }, { "rate": "7.3", "cover_x": 1968, "title": "蚁人2：黄蜂女现身", "url": "https:\/\/movie.douban.com\/subject\/26636712\/", "playable": true, "cover": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529389608.jpg", "id": "26636712", "cover_y": 2756, "is_new": false }, { "rate": "7.1", "cover_x": 2048, "title": "邪不压正", "url": "https:\/\/movie.douban.com\/subject\/26366496\/", "playable": true, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2526297221.jpg", "id": "26366496", "cover_y": 2867, "is_new": false }, { "rate": "7.2", "cover_x": 1080, "title": "一出好戏", "url": "https:\/\/movie.douban.com\/subject\/26985127\/", "playable": true, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2529571873.jpg", "id": "26985127", "cover_y": 1512, "is_new": false }, { "rate": "5.6", "cover_x": 2953, "title": "反贪风暴3", "url": "https:\/\/movie.douban.com\/subject\/26996640\/", "playable": true, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2531887203.jpg", "id": "26996640", "cover_y": 4134, "is_new": false }, { "rate": "6.9", "cover_x": 5000, "title": "快把我哥带走", "url": "https:\/\/movie.douban.com\/subject\/30122633\/", "playable": true, "cover": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2531080870.jpg", "id": "30122633", "cover_y": 7000, "is_new": false }, { "rate": "7.3", "cover_x": 2999, "title": "动物世界", "url": "https:\/\/movie.douban.com\/subject\/26925317\/", "playable": true, "cover": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2525528688.jpg", "id": "26925317", "cover_y": 4181, "is_new": false }, { "rate": "6.9", "cover_x": 2143, "title": "镰仓物语", "url": "https:\/\/movie.douban.com\/subject\/26916229\/", "playable": true, "cover": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2532008868.jpg", "id": "26916229", "cover_y": 2993, "is_new": false }],
    start: 10,
    loading: false,
    headerTit: "你好",
    searchBarClass: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
    //wx.hideTabBar();
    wx.setTabBarBadge({
      index: 2,
      text: '1'
    })

    wx.showTabBarRedDot({
      index: 0
    })
  },
  loadData() {
    let { start, list } = this.data;
    // wx.showLoading({
    //   title: '正在拼命加载...',
    //   mask: true
    // })
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
    if (!this.data.loading) {
      this.loadData();
    }
  },
  scroll(e) {
    if (e.detail.scrollTop > 200) {
      this.setData({
        searchBarClass: 'writeBg'
      })
    } else {
      this.setData({
        searchBarClass: ''
      })
    }
  },
  formSubmit: function (e) {
    //console.info('表单提交携带数据', e.detail.value)
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
// pages/Clipboard/Clipboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    nowUrl: ''
  },
  onShareAppMessage: function (res) {
    console.log("=======onShareAppMessage=======");
    console.log(this.data.nowUrl);
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '生活如此多娇',
      // imageUrl: 'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',
      imageUrl: '../../assets/image/location.png',
      // path: 'pages/map/map',
      path: this.data.nowUrl
    }
  },
  onLoad:function(){
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
    wx.showNavigationBarLoading();
    setTimeout(function(){
      wx.hideNavigationBarLoading();
    }, 3000)
    wx.showShareMenu({
      withShareTicket: true
    })
    wx.updateShareMenu({
      withShareTicket: true,
      success() { }
    })

    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        // console.log(res.pixelRatio)
        // console.log(res.windowWidth)
        // console.log(res.windowHeight)
        // console.log(res.language)
        // console.log(res.version)
        // console.log(res.platform)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    const that = this;
    setTimeout(function () {
      let CurrentPages = getCurrentPages();
      that.setData({
        nowUrl: CurrentPages[CurrentPages.length - 1].route
      })
      console.log(CurrentPages);
      console.log(that.data.nowUrl);
    }, 1000);

    console.log("onShow");
    // wx.getClipboardData({
    //   success(res) {
    //     wx.showModal({
    //       title: '提示',
    //       content: res.data || '',
    //       success(res) {
    //         if (res.confirm) {
    //           console.log('用户点击确定')
    //         } else if (res.cancel) {
    //           console.log('用户点击取消')
    //         }
    //       }
    //     })
    //   }
    // })
    wx.onUserCaptureScreen(function (res) {
      console.log('用户截屏了111')
    })

    // wx.startSoterAuthentication({
    //   requestAuthModes: ['fingerPrint'],
    //   challenge: '123456',
    //   authContent: '请用指纹解锁',
    //   success(res) {
    //     wx.showToast({
    //       title: '识别指纹',
    //     })
    //   }
    // })
  },
  bindTextAreaBlur(e){
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value
    });
  },
  copy(){
    wx.setClipboardData({
      data: this.data.value,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data); // data
          }
        })
      }
    })
  },
  call(e){
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.tel //仅为示例，并非真实的电话号码
    })
  },
  scan(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
  getScreenBrightness(){
    wx.getScreenBrightness({
      success(res){
        wx.showToast({
          title: (res.value.toString())
        })
      }
    })
  },
  setKeepScreenOn(){
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },
  setScreenBrightness(){
    let _this=this;
    wx.setScreenBrightness({
      value: 1,
      success(res){
        _this.getScreenBrightness();
      }
    })
  },
  vibrateLong(){
    wx.vibrateLong();
  },
  vibrateShort() {
    wx.vibrateShort();
  },
  setBackgroundColor1(){
    wx.setBackgroundColor({
      backgroundColor: '#ff0000', // 窗口的背景色为白色
    })
  },
  setBackgroundColor2() {
    wx.setBackgroundColor({
      backgroundColorTop: '#00ff00', // 顶部窗口的背景色为白色
      backgroundColorBottom: '#0000ff', // 底部窗口的背景色为白色
    })
  },
  loading(){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  startPullDownRefresh(){
    wx.startPullDownRefresh();

    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 2000)
  },
  pageScrollTo(){
    wx.pageScrollTo({
      scrollTop: 30,
      duration: 300
    })
  },
  toTop() {
    wx.setTopBarText({
      text: 'hello, world!'
    })
  }
})
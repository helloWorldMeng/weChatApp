// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '../../assets/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '../../assets/image/location.png'
    }],
    polygons: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 115.324520,
        latitude: 23.21229
      }, {
        longitude: 115.324520,
        latitude: 28.21229
      }],
      fillColor: "#FF0000DD"
    }]
  },
  onReady(){
    this.mapCtx = wx.createMapContext('myMap');
  },
  getCenterLocation(){
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation();
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  bindtap(e) {
    console.log("bindtap");
    console.log(e);
  },
  bindupdated(e) {
    console.log("bindupdated");
    console.log(e);
  },
  bindpoitap(e) {
    console.log("bindpoitap");
    console.log(e);
  }

})
Page({
  data:{
    indicatorDots: false,
    autoplay: false,
    interval: 500,
    duration: 100,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    current: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  changeIndicatorDots: function(){
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(){
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e){
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e){
    this.setData({
      duration: e.detail.value
    })
  },
  changeCurrent: function(){
    this.setData({
      current: this.data.current < 2 ? this.data.current + 1 : 0
    })
  }
})
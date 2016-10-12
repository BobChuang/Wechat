var types = ['default', 'primary', 'warn']
var pageObject = {
  data:{
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    loading: false,
    plain: false,
    disabled: false,
    array:[]
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
  setDisabled: function(){
    var that = this
      this.setData({
          disabled: !this.data.disabled
      })
      wx.request({
        url: 'http://ols.sandboxol.com//minigame/api/v1/ranks/g2001/public?userId=12309&type=week&name=kills',
        method: 'GET',
        data: {
          x: '' ,
          y: ''
        },
        header: {
            'Content-Type': 'application/json;utf-8',
            'dataType': 'jsonp',
            'jsonp': 'jsoncallback',
            'timeout': 1000
        },
        success: function(res) {
          console.log(res.data)
          that.setData({
              array: that.data.array.concat(res.data.data)
          })
          for(var i = 0 ; i < that.data.array.length; i++){
            if(that.data.array[i].picUrl === null||that.data.array[i].picUrl === ""){
              that.setData({
                'array[i].picUrl': 'http://www.ninestore.ru/asset/activities/images/blockman/propaganda/tou.png'
              })
              console.log(that.data.array[i].nickName)
            }
          }
        }
      })
  },
  setPlain: function(){
      this.setData({
          plain: !this.data.plain
      })
  },
  setLoading: function(){
      this.setData({
          loading: !this.data.loading
      })
  }
}

for (var i = 0; i < types.length; ++i) {
  (function(type) {
    pageObject[type] = function(e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)
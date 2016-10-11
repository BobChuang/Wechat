var types = ['default', 'primary', 'warn']
var pageObject = {
  data:{
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    loading: false,
    plain: false,
    disabled: false
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
      this.setData({
          disabled: !this.data.disabled
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
Page({
  data:{
    focus: false,
    inputValue: ''
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
  bindButtonTap: function(){
      this.setData({
          focus: Date.now()
      })
  },
  bindKeyInput: function(e){
      this.setData({
          inputValue: e.detail.value
      })
  },
  bindReplaceInput: function(e){
      var value = e.detail.value
      var pos = e.detail.cursor
      if(pos != -1){
          var left = e.detail.value.slice(0, pos)
          pos = left.replace(/11/g, '2').length
      }

      return{
          value: value.replace(/11/g, '2'),
          cursor: pos
      }
  },
  bindHideKeyboard: function(e){
      if(e.detail.value === '123'){
          wx.hideKeyboard()
          console.log('hideKeyboard')
      }
  },

})
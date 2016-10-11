var initData = 'This is the first line. \n This is the second line.'
var extraLine = [];
Page({
  data:{
    text: initData
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
  add : function(e){
    extraLine.push(parseInt(10*Math.random()))
    this.setData({
        text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove : function(e){
      if(extraLine.length > 0){
          extraLine.pop()
          this.setData({
              text : initData + '\n' +extraLine.join('\n')
          })
      }
  },
  addBefore : function(e){
    extraLine.unshift(parseInt(10*Math.random()))
    this.setData({
        text: initData + '\n' + extraLine.join('\n')
    })
  },
  removeBefore : function(e){
      if(extraLine.length > 0){
          extraLine.shift()
          this.setData({
              text : initData + '\n' +extraLine.join('\n')
          })
      }
  },
  splice : function(e){
      if(extraLine.length > 1){
            extraLine.splice(1,1)
            this.setData({
            text: initData + '\n' + extraLine.join('\n')
            })
      }
  }
})
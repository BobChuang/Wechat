var pageDate = {}
for(var i = 1; i < 5 ; i++){
    (function (index){
        pageDate['slider' + index + 'change'] = function(e){
            console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
        }
    })(i)
}
Page(pageDate)
Page({
  data:{
    actionSheetHidden: true,
    actionSheetItems: ['item1', 'item2', 'item3', 'item4', 'Cancel']
  },
  actionSheetTap : function(){
      this.setData({
          actionSheetHidden : !this.data.actionSheetHidden
      })
  },
  bindItemTap : function(){
      this.setData({
          actionSheetHidden : !this.data.actionSheetHidden
      })
  }
})
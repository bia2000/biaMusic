// pages/home-video/index.js
import {getTopMV} from '../../services/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
      topMVs:[],
      hasMore:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    this.getTopMVData(0)
    // const res = await getTopMV(0)
    // this.setData({topMVs:res.data})
    // getTopMV(0).then(res =>{
    //   this.setData({topMVs: res.data})
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  //封装网络请求的方法
  getTopMVData: async function(offset){
    if(!this.data.hasMore && offset != 0) return
    // 展示加载动画
    if(offset === 0){
      wx.showNavigationBarLoading()
    }
    const res = await getTopMV(offset)
    let newData = this.data.topMVs
    if(offset == 0){
      newData = res.data
    }else{
      newData = newData.concat(res.data)
    }
    this.setData({topMVs:newData})
    this.setData({hasMore:res.hasMore})
    wx.hideNavigationBarLoading()
    if(offset ===0){
      wx.stopPullDownRefresh()
    }
  },
  //封装事件处理的方法
  handleVideoItemClick: function(event){
    const id = event.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: async function() {
    this.getTopMVData(0)
    // const res = await getTopMV(0)
    // this.setData({topMVs:res.data})
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom:async function() {
    // if(!this.data.hasMore) return
    this.getTopMVData(this.data.topMVs.length)
    // const res = await getTopMV(this.data.topMVs.length)
    // this.setData({topMVs:this.data.topMVs.concat(res.data)})
    // this.setData({hasMore:res.hasMore})
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
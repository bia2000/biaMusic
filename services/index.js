const BASE_URL = "http://123.207.32.32:9001/"
class BiaRequest{
  request(url,method,params){
      return new Promise((resolve,reject)=>{
        wx.request({
          url: BASE_URL + url,
          data: params,
          method: method,
          success: (res) => {
            resolve(res.data)     
          },
          fail: reject,
        });
      })
  }
  get(url,params){
    return this.request(url,"GET",params)
  }
  post(url,params){
    return this.request(url,"POST",params)
  }
  
}
const biaRequest = new BiaRequest()

export default biaRequest
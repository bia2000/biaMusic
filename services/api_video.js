import biaRequest from './index'

export function getTopMV(offset, limit = 10){
  return biaRequest.get("top/mv",{
    offset,
    limit
  })
}

/**
 * 请求MV的播放地址
 * @param {number} id MV的ids
 */

 export function getMVURL(id) {
  return biaRequest.get("mv/url", {
    id
  })
  
}
// 请求mv的详情
// @param {number} mvid mv的id  
export function getMVDetail(mvid){
  return biaRequest.get("mv/detail",{
    mvid
  })
}

// 请求mv的相关视频
// @param {number} id  
export function getRelatedVideo(id){
  return biaRequest.get("related/allvideo",{
    id
  })

}
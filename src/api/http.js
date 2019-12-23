// var Fly=require("flyio/dist/npm/wx")
import Fly from 'flyio/dist/npm/wx'
var fly=new Fly
fly.interceptors.request.use((config, promise) => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    return config;
})
const Url='http://192.168.50.177:8080/hp-hd/applet/activity/'

//活动列表
const getList=()=>{
    return fly.post(`${Url}getActivityList`).then(res=>res.data)
}
//home 轮播图
const getbanner=(data)=>{
    return fly.post(`${Url}list`,data).then(res=>res.data)
}
// //login 接口
const Login=(data)=>{
    return fly.post(`${Url}getAppid`,data).then(res=>res.data)
}
// //选手列表详情
const playerlist=(data)=>{
    return fly.post(`${Url}activityPlayer`,data).then(res=>res.data)
}
//排行榜
const Rankinglist=(data)=>{
    return fly.post(`${Url}playerRank`,data).then(res=>res.data)
}
//分组
const GroupList=(data)=>{
    return fly.post(`${Url}groupList`,data).then(res=>res.data)
}
//查询选手详情
const Player=(data)=>{
    return fly.post(`${Url}player`,data).then(res=>res.data)
}
//投票记录
const playerTicket=(data)=>{
    return fly.post(`${Url}playerTicket`,data).then(res=>res.data)
}
//投票
const vote=(data)=>{
    return fly.post(`${Url}vote`,data).then(res=>res.data)
}
//送礼礼物
const giftList=(data)=>{
    return fly.post(`${Url}giftList`,data).then(res=>res.data)
}
//送出礼物
const giftVote=(data)=>{
    return fly.post(`${Url}giftVote`,data).then(res=>res.data)
}
//报名
const add=(data)=>{
    return fly.post(`${Url}add`,data).then(res=>res.data)
}
const api={
    getList,
    getbanner,
    Login,
    playerlist,
    Rankinglist,
    GroupList,
    Player,
    playerTicket,
    vote,
    giftList,
    giftVote,
    add
}
export default api
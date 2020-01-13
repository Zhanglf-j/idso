let app = getApp();
//替换成开发者后台设置的安全域名
let url = "http://47.104.159.115:8080";
// let url = "http://127.0.0.1:8080"

//let url = "http://abcde.vaiwan.com";
//若要在测试应用中临时使用类似abcdef.vaiwan.com 的二级域名代理到无公网IP的服务端开发环境，
//请参考内网穿透工具介绍:
//https://open-doc.dingtalk.com/microapp/debug/ucof2g


Page({
    data:{
        // authCode:'',
        // openId:'',
        // nick:'',
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        imgUrls: [
            'https://p3.pstatp.com/large/43700001e49d85d3ab52',
            'https://p3.pstatp.com/large/39f600038907bf3b9c96',
            'https://p3.pstatp.com/large/31fa0003ed7228adf421'
        ]
    },
    firstVisit () {
      dd.redirectTo({
        url: '/page/firstvisit/firstvisit'
      })
    },
    onLoad(){
        let _this = this;
        dd.getAuthCode({
            success:(res)=>{
                console.log(res)
                _this.setData({
                    authCode:res.authCode
                })
                // dd.httpRequest({
                //     url: url+'/login',
                //     method: 'POST',
                //     data: {
                //         authCode: res.authCode
                //     },
                //     dataType: 'json',
                //     success: function(res) {
                //         let userInfo = res.data.result;
                //         _this.setData({
                //             openId:userInfo.openid,
                //             nick:userInfo.nick
                //         })
                //     },
                //     fail: function(res) {
                //         dd.alert({content: JSON.stringify(res)});
                //     },
                //     complete: function(res) {
                //         dd.hideLoading();
                //     }
                // });
                dd.httpRequest({
                    url: url+'/api',
                    method: 'GET',
                    data: {
                    },
                    dataType: 'json',
                    success: function(res) {
                        console.log(res)
                    },
                    fail: function(res) {
                        dd.alert({content: JSON.stringify(res)});
                    },
                    complete: function(res) {
                        dd.hideLoading();
                    }
                });
            },
            fail: (err)=>{
                dd.alert({
                    content: JSON.stringify(err)
                })
            }
        })
        
    }
})
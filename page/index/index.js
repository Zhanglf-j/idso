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
        authCode:'',
        // openId:'',
        // nick:'',
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        imgUrls: [
            'https://p3.pstatp.com/large/43700001e49d85d3ab52',
            'https://p3.pstatp.com/large/39f600038907bf3b9c96',
            'https://p3.pstatp.com/large/31fa0003ed7228adf421'
        ],
        show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
        selectData: [{
          value: '1',
          label: '固瑞(大族)'
        }, {
          value: '2',
          label: '合颌科技'
        }, {
          value: '3',
          label: '欢乐口腔'
        }, {
          value: '4',
          label: '博大口腔'
        }],//下拉列表的数据
        hospital: 1//选择的下拉列表下标
    },
    firstVisit () {
      dd.navigateTo({
        url: '/page/firstvisit/firstvisit'
      })
    },
    returnVisit () {
        dd.navigateTo({
            url: '/page/returnvisit/returnvisit'
        })
    },
    // 点击下拉显示框
    selectTap(){
        this.setData({
             show: !this.data.show
        });
    },
    // 点击下拉列表
    optionTap(e){
        let val = e.currentTarget.dataset.value;//获取点击的下拉列表的下标
        this.setData({
            hospital: val,
            show:!this.data.show
        });
    },
    onLoad(){
        let _this = this;
        dd.getAuthCode({
            success:(res)=>{
                console.log('code', res)
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
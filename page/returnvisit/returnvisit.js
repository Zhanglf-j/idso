Page({
    data:{
        showData: false
    },
    formSubmit: function(e) {
        if (!e.detail.value.input) {
            dd.alert({
                content: '请填写顾客手机号',
                buttonText: '我知道了',
                success: () => {
                },
            });
        } else {
            // if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(e.detail.value.input))) {
            //      dd.alert({
            //         content: '请输入正确的手机号码',
            //         buttonText: '我知道了',
            //         success: () => {
            //         },
            //     });
            // } else {
            //     console.log('form发生了submit事件，携带数据为：', e.detail.value)
            //     this.setData({
            //         showData: true
            //     })   
            // }
             console.log('form发生了submit事件，携带数据为：', e.detail.value)
                this.setData({
                    showData: true
                })   
        }
    },
    inputChange: function(e){
        var val = e.detail.value;
        if (!val) {
            this.setData({
                showData: false
            })
        }
    },
    onLoad(){
        let _this = this;
        dd.setNavigationBar({
            title:"复诊挂号"
        })
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
            },
            fail: (err)=>{
                dd.alert({
                    content: JSON.stringify(err)
                })
            }
        })
        
    }
})
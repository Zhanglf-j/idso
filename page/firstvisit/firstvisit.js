const util = require('../../util/util.js')
const time = require('../../util/time.js')
Page({
    data:{
        activeIndex:0,
        familyList: [{
                name: '父亲',
                id: 1,
                checked: false
            }, {
                name: '母亲',
                id: 2,
                checked: false
            }, {
                name: '祖父',
                id: 3,
                checked: false
            }, {
                name: '祖母',
                id: 4,
                checked: false
            }, {
                name: '亲属',
                id: 5,
                checked: false
        }],
        mainSuitList: [{
                name: 'A正畸',
                id: 1,
                checked: false
            }, {
                name: 'A种植',
                id: 2,
                checked: false
            }, {
                name: 'A美学贴面',
                id: 3,
                checked: false
            }, {
                name: 'B拔牙',
                id: 4,
                checked: false
            }, {
                name: 'B补牙',
                id: 5,
                checked: false
            }, {
                name: 'B镶牙',
                id: 6,
                checked: false
            }, {
                name: 'B牙周',
                id: 7,
                checked: false
            }, {
                name: 'B美白',
                id: 8,
                checked: false
             }, {
                name: 'B牙疼',
                id: 9,
                checked: false
            }, {
                name: 'C洗牙',
                id: 10,
                checked: false
            }, {
                name: 'C儿牙',
                id: 11,
                checked: false
        }],
        mainSuitList2: [{
                name: 'A正畸',
                id: 1,
                checked: false
            }, {
                name: 'A种植',
                id: 2,
                checked: false
            }, {
                name: 'A美学贴面',
                id: 3,
                checked: false
            }, {
                name: 'B拔牙',
                id: 4,
                checked: false
            }, {
                name: 'B补牙',
                id: 5,
                checked: false
            }, {
                name: 'B镶牙',
                id: 6,
                checked: false
            }, {
                name: 'B牙周',
                id: 7,
                checked: false
            }, {
                name: 'B美白',
                id: 8,
                checked: false
             }, {
                name: 'B根管',
                id: 9,
                checked: false
            }, {
                name: 'C洗牙',
                id: 10,
                checked: false
            }, {
                name: 'C儿牙',
                id: 11,
                checked: false
        }],
        mainSuitList3: [{
                name: 'A正畸',
                id: 1,
                checked: false
            }, {
                name: 'A种植',
                id: 2,
                checked: false
            }, {
                name: 'A美学贴面',
                id: 3,
                checked: false
            }, {
                name: 'B拔牙',
                id: 4,
                checked: false
            }, {
                name: 'B补牙',
                id: 5,
                checked: false
            }, {
                name: 'B镶牙',
                id: 6,
                checked: false
            }, {
                name: 'B牙周',
                id: 7,
                checked: false
            }, {
                name: 'B美白',
                id: 8,
                checked: false
             }, {
                name: 'B牙疼',
                id: 9,
                checked: false
            }, {
                name: 'C洗牙',
                id: 10,
                checked: false
            }, {
                name: 'C儿牙',
                id: 11,
                checked: false
            }, {
                name: '没有约',
                id: 12,
                checked: true
        }],
        familyValue: '',
        mainSuit: [],
        mainSuit2: [],
        mainSuit3: [],
        year:[],
        month:[1,2,3,4,5,6,7,8,9,10,11,12],
        day:[],
        value:[1,1,1],
        hoursList: [],
        minutesList: ['00', '15', '30', '45'],
        isChild: true,
        isSecond: false,
        showTime: false,
        selectData: [{
          value: '0',
          label: '请选择PM'
        }, {
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
        selectValue: 0, //选择的下拉列表下标
        show: false
    },
    // tab切换事件
    tabNav: function (e) {
        // console.log(e)
        this.setData({
          activeIndex: e.target.dataset.current
        });
        // console.log("navTabClick:" + e.target.dataset.current);
    },
    // 表单提交
    formSubmit: function(e) {
        if (!e.detail.value.input) {
          dd.alert({
            content: '请填写顾客姓名',
            buttonText: '我知道了',
            success: () => {
            },
        });
        } else {
             if (!e.detail.value.input2) {
                dd.alert({
                    content: '请填写手机号',
                    buttonText: '我知道了',
                    success: () => {
                    },
                });
            } else {
                if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(e.detail.value.input2))) {
                    dd.alert({
                        content: '请输入正确的手机号码',
                        buttonText: '我知道了',
                        success: () => {
                        },
                    });
                } else {
                    if (!e.detail.value.input4) {
                        dd.alert({
                            content: '请填写PM姓名',
                            buttonText: '我知道了',
                            success: () => {
                            },
                        });
                    } else {
                        if (!e.detail.value.input5) {
                            dd.alert({
                                content: '请填写医生姓名',
                                buttonText: '我知道了',
                                success: () => {
                                },
                            });
                        } else {
                            console.log('form发生了submit事件，携带数据为：', e.detail.value)
                        }
                    }
                }
            }
        }
    },
    formReset: function() {
        // console.log('form发生了reset事件')
    },
    // 开关监测
    switchChange: function(e) {
        var checkValue = e.detail.value
        if (e.target.dataset.type == 1) {
            this.setData({
                isChild: checkValue
            });
        } else {
            this.setData({
                isSecond: checkValue
            });
        }
    },
    switchChange2: function(e) {
        console.log('switchChange 事件，值:', e.detail.value)
        this.setData({
            familyValue: e.detail.value
        });
    },
    // 单选监测
    radioChange: function(e) {
        console.log(1111)
        var checkValue = e.detail.value;
        this.setData({
            familyValue: checkValue
        });
    },
    radioClick: util.throttle(function (e) {
        console.log(2222)
        var index = e.target.dataset.index;//获取当前点击的下标
        var familyList = this.data.familyList;//选项集合
        familyList.forEach((item, indexs) => {
            if (indexs == index) {
                item.checked = true //改变当前选中的checked值
            } else {
                item.checked = false
            }
        })
        this.setData({
            familyList: familyList
        });
    },100),
    // 多选监测
    checkboxClick: util.throttle(function (e) {
        console.log(111111)
        var index = e.target.dataset.index; //获取当前点击的下标
        if (e.target.dataset.type == 1) {
            var mainSuitList = this.data.mainSuitList;//选项集合
            mainSuitList[index].checked = !mainSuitList[index].checked;//改变当前选中的checked值
            this.setData({
                mainSuitList: mainSuitList
            });
        } else if (e.target.dataset.type == 2) {
            var mainSuitList2 = this.data.mainSuitList2;//选项集合
            mainSuitList2[index].checked = !mainSuitList2[index].checked;//改变当前选中的checked值
            this.setData({
                mainSuitList2: mainSuitList2
            });
        } else  {
            var mainSuitList3 = this.data.mainSuitList3;//选项集合
            if (index == 11) {
                mainSuitList3.forEach((item, index) => {
                     item.checked = false
                })
                mainSuitList3[11].checked = true
                this.setData({
                    mainSuitList3: mainSuitList3,
                    showTime: false
                });
            } else {
                mainSuitList3[11].checked = false
                mainSuitList3[index].checked = !mainSuitList3[index].checked;//改变当前选中的checked值
                this.setData({
                    mainSuitList3: mainSuitList3,
                    showTime: true
                });
            }
        }
    }, 100),
    checkboxChange: function (e) {
        console.log(22222)
        var checkValue = e.detail.value;
        if (e.target.dataset.type == 1) {
            this.setData({
                mainSuit: checkValue
            });
        } else if (e.target.dataset.type == 2) {
             this.setData({
                mainSuit2: checkValue
            });
        } else {
            if (checkValue.indexOf(12) != -1) {
                this.setData({
                    mainSuit3: [12]
                });
            } else {
                this.setData({
                    mainSuit3: checkValue
                });
            }
        }
    },
    // 全选
    allSelect:function (e) {
        let arr = []
        if (this.data.mainSuit2.length == 11) {
           this.data.mainSuitList2.forEach((item, index) => {
                item.checked = false
            })
        } else {
            this.data.mainSuitList2.forEach((item, index) => {
                item.checked = true
                arr.push(item.id)
            })
        }
        this.setData({
            mainSuitList2: this.data.mainSuitList2,
            mainSuit2: arr
        });
    },
    // 时间监测
    timeChange: function(e) {
        console.log(e)
        // y用户改变月份后 天数对着改变
        let year = this.data.year[e.detail.value[0]]
        let month = this.data.month[e.detail.value[1]]
        // 这个月有多少天
        let day = []
        let maxDay = Number(time.mGetDate(year,month))
        // 动态添加当前月的所有天数
        for(let i=1;i<=maxDay;i++){
            day.push(i)
        }
        this.setData({
            value: e.detail.value,
            day
        });
    },
    // 上传图片
    uploadImg: function(e) {
        console.log(e)
        console.log('上传图片')
        let url = "http://47.104.159.115:8080";
        dd.chooseImage({ //请求图片
            // count: 1,  //上传图片张数限制 
            success: (res) => {
                console.log("返回的文件信息为:");
                console.log(res);
                var filePaths = res.filePaths;
                dd.getAuthCode({
                    success: function(res) {
                        console.log('filePath的值为:');
                        console.log(filePaths);
                        var authCode = res.authCode;
                        dd.uploadFile({
                            // url: app.data.globalData.url + 'public/index.php/api/activity/upload_img',
                            url: url + 'public/index.php/api/activity/upload_img',
                            fileType: 'image',
                            fileName: 'img',
                            filePath: filePaths[0],
                            formData: {
                                authCode: authCode
                            },
                            success: (res) => {
                                var data = JSON.parse(res.data);
                                console.log("转换后的data为:");
                                console.log(data);
                                var img_url = data.data.img_url;
                                that.data.actImg = img_url;
                                that.data.isUp = 1; //同时将是否已经上传改为是
                                console.log('图片信息为:');
                                console.log(that.data.actImg);
                                that.setData({
                                    coverImg: that.data.actImg,
                                    isUp: 1
                                })
                            },
                            fail: function(res) {
                                dd.showToast({
                                    content: '上传信息失败',
                                    type: 'fail',
                                });
                            },
                        });
                    },
                    fail: function(res) {
                        dd.showToast({
                            content: '获取用户权限信息失败',
                            type: 'fail',
                        });
                    }
                })
            },
        });
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
            selectValue: val,
            show:!this.data.show
        });
    },
    onLoad(){
        dd.setNavigationBar({
            title:"初诊挂号"
        })

        // 时间
        let value = [1]
        let data = new Date() 
        // 年
        let year = []
        year[0] = Number(data.getFullYear()) -1
        year[1] = Number(data.getFullYear())
        // 月
        let month = Number(data.getMonth())+1
        // 当前月在数组的index
        value[1] = this.data.month.indexOf(month)
        // 这个月有多少天
        let day = []
        let maxDay = Number(time.mGetDate(year[1],month))
        // 动态添加当前月的所有天数
        for(let i=1;i<=maxDay;i++){
            day.push(i)
        }
        let hoursList = []
        for(let i=1;i<=24;i++){
            if (i < 10) {
                i = '0' + i
            }
            hoursList.push(i)
        }
        // 今天在数组的index
        value[2] = day.indexOf(data.getDate())
        this.setData({
            year,
            day,
            value,
            hoursList
        })
    }
})
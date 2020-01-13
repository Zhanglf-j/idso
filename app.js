import lodash from 'lodash'
App({
  onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', dd.getSystemInfoSync());
    console.log('SDKVersion', dd.SDKVersion);

    var sysInfo = dd.getSystemInfoSync(); 
    console.log(sysInfo);
    var winHeight = sysInfo.windowHeight;
    var winLength = sysInfo.windowWidth;
    console.log(winHeight);
    console.log(winLength);
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    hasLogin: false,
  },
});

var headerH;
apiready = function() {
    var header = $api.byId('wrap');// 获取 header 标签元素
    headerH = $api.fixStatusBar(header)

    fnNVTabBar_open();
    fnopenFrameGroup()
    fnOpenNvnBar();
};
//首页切换的位置及页面
function fnOpenNvnBar() {
    api.openFrame({
        name: 'nvnavigationbar',
        url: '../html/home/nvnavigationbar.html',
        bounces: false,
        rect: { // 推荐使用Margin布局，用于适配屏幕的动态变化
            marginTop: headerH, // main页面距离win顶部的高度
            w: 'auto', // main页面的宽度 自适应屏幕宽度
            h: 44
        }
    });
}
//切换的页面
function fnopenFrameGroup() {
    var arrs = [{
        name: 'tabChild',
        url: '../html/home/home.html',
        pageParam: {
            name: 'value'
        },
        bounces: true,
        customRefreshHeader: 'UIPullRefresh'
    }]
    for (var i = 0; i < 10; i++) {
        arrs.push({
            name: 'tabChildItem',
            url: '../html/home/tabChild.html',
            pageParam: {
                name: 'value'
            },
            bounces: true,
            customRefreshHeader: 'UIPullRefresh'
        })
    }
    api.openFrameGroup({
        name: 'tabChild',
        rect: {
            x: 0,
            y: headerH + 44,
            w: 'auto',
            marginBottom: 54
        },
        scrollEnabled: true,
        frames: arrs
    }, function(ret, err) {
        if (ret) {
            console.log(JSON.stringify(ret));
            if (ret.index > -1) {
                api.execScript({
                    frameName: 'nvnavigationbar',
                    script: 'fnNvnsetSelected("' + ret.index + '");'
                });
            }
        } else {
            alert(JSON.stringify(err));
        }
    });
}
//底部切换
function fnNVTabBar_open() {
    var NVTabBar = api.require('NVTabBar');
    NVTabBar.open({
        styles: {
            bg: '#fff',
            h: 49,
            dividingLine: {
                width: 0,
                color: '#000'
            },
            badge: {
                bgColor: '#fff',
                numColor: '#fff',
                size: 6.0,
                centerX: 40,
                centerY: 6
            }
        },
        items: [{
            w: api.winWidth / 5.0,
            bg: {
                marginB: 0
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/unhome.png',
                selected: 'widget://image/home.png'
            },
            title: {
                text: '首页',
                size: 12.0,
                normal: '#4D4D4D',
                selected: '#FF4E00',
                marginB: 3.0
            }
        }, {
            w: api.winWidth / 5.0,
            bg: {
                marginB: 0
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/unclassify.png',
                selected: 'widget://image/classify.png'
            },
            title: {
                text: '分类',
                size: 12.0,
                normal: '#4D4D4D',
                selected: '#FF4E00',
                marginB: 3.0
            }
        }, {
            w: api.winWidth / 5.0,
            bg: {
                marginB: 7
            },
            iconRect: {
                w: 45,
                h: 45,
            },
            icon: {
                normal: 'widget://image/vip.png',
                selected: 'widget://image/vip.png'
            },
            title: {
                text: 'VIP权益',
                size: 12.0,
                normal: '#4D4D4D',
                selected: '#D4B07C',
                marginB: 3.0
            }
        }, {
            w: api.winWidth / 5.0,
            bg: {
                marginB: 0
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/unmessage.png',
                selected: 'widget://image/message.png'
            },
            title: {
                text: '淘社区',
                size: 12.0,
                normal: '#4D4D4D',
                selected: '#FF4E00',
                marginB: 3.0
            }
        }, {
            w: api.winWidth / 5.0,
            bg: {
                marginB: 0
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/unown.png',
                selected: 'widget://image/own.png'
            },
            title: {
                text: '我的',
                size: 12.0,
                normal: '#4D4D4D',
                selected: '#FF4E00',
                marginB: 3.0
            }
        }],
        selectedIndex: 0
    }, function(ret, err) {

      NVTabBar.bringToFront();
        if (0 == ret.index) {
            name = 'home';
            url = 'widget://html/home/home.html';
            fnopenFrameGroup();
            hiddens.hiddenClassify();
            hiddens.hiddenVip();
            hiddens.hiddenMessage();
            hiddens.hiddenOwn();
        } else if (1 == ret.index) {
            name = 'classify';
            url = 'widget://html/classify/classify.html';
            fnOpenMessageFrame(name, url)
        } else if (2 == ret.index) {
            name = 'vip';
            url = 'widget://html/vip/vip.html';
            fnOpenMessageFrame(name, url)
        } else if (3 == ret.index) {
            name = 'message';
            url = 'widget://html/message/message.html';
            fnOpenMessageFrame(name, url)
        } else if (4 == ret.index) {
            name = 'own';
            url = 'widget://html/own/own.html';
            fnOpenMessageFrame(name, url)
        }
    });
}


//打开Frame
function fnOpenMessageFrame(name, url) {
    api.openFrame({
        name: name,
        url: url,
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            marginBottom: 54
        },
        pageParam: {
            name: 'test'
        },
        bounces: false,
        bgColor: 'rgba(0,0,0,0)',
        vScrollBarEnabled: true,
        hScrollBarEnabled: true
    });
}

//隐藏首页Frame
var hiddens = {
  hiddenClassify(){
    api.setFrameAttr({
        name: 'classify',
        hidden: true
    });
  },
  hiddenVip(){
    api.setFrameAttr({
        name: 'message',
        hidden: true
    });
  },
  hiddenMessage(){
    api.setFrameAttr({
        name: 'vip',
        hidden: true
    });
  },
  hiddenOwn(){
    api.setFrameAttr({
        name: 'own',
        hidden: true
    });
  },
}

//打开切换的子窗口
function fnsetFrameGroupIndex(name, index) {
    api.setFrameGroupIndex({
        name: name,
        index: index,
        scroll: true
    });
}

apiready = function() {
  var NVTabBar = api.require('NVTabBar');
  NVTabBar.open({
      styles: {
          bg: '#fff',
          h:49,
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
              marginB:7
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
      },  {
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
      var name = 'home';
      var url = 'widget://html/home/home.html';
      if(0 == ret.index){
        name = 'home';
       url = 'widget://html/home/home.html';
      }else if(1 == ret.index){
        name = 'classify';
        url = 'widget://html/classify/classify.html';
      }else if(2 == ret.index){
        name = 'vip';
        url = 'widget://html/vip/vip.html';
      }else if(3 == ret.index){
        name = 'message';
        url = 'widget://html/message/message.html';
      }else if(4 == ret.index){
        name = 'own';
        url = 'widget://html/own/own.html';
      }
      api.openFrame({
          name: name,
          url: url,
          rect: {
              x:0,
              y:0,
              w:api.frameWidth,
              h:api.frameHeight -49
          }
      });
      NVTabBar.bringToFront();
  });

};

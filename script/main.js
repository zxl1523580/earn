apiready = function() {
 funIniGroup();
};
function funIniGroup(){
   var eHeaderLis = $api.domAll('header li')
   api.openFrameGroup({
       name: 'group',
       scrollEnabled: false,
       rect: {
           x: 0,
           y: 0,
           w: api.winWidth,
           h: $api.dom('main').offsetHeight
       },
       index: 0,
       frames:[{
           name: 'home',
           url: '../html/home/home.html',
           bgColor: '#fff'
       }, {
           name: 'classify',
           url: '../html/classify/classify.html',
           bgColor: '#fff'
       }, {
           name: 'vip',
           url: '../html/vip/vip.html',
           bgColor: '#fff'
       }, {
           name: 'message',
           url: '../html/message/message.html',
           bgColor: '#fff'
       }, {
           name: 'own',
           url: '../html/own/own.html',
           bgColor: '#fff'
       }]

   }, function (ret, err) {

   });
   api.openFrame({
     name: 'footervip',
     url: '../html/template/footervip.html',
     rect: {
         x: $api.dom('.flex-con').offsetWidth *2,
         y: $api.dom('main').offsetHeight-$api.dom('footer').offsetHeight/4,
         w: $api.dom('.flex-con').offsetWidth,
         h: $api.dom('footer').offsetHeight*2- $api.dom('footer').offsetHeight/4
     }
 });
}

// 随意切换按钮
function randomSwitchBtn( tag ) {
  api.closeFrame({
      name: 'vip'
  });

   if( tag == $api.dom('#footer li.active') )return;
   var eFootLis = $api.domAll('#footer li'),
       eHeaderLis = $api.domAll('header li'),
       index = 0;
   for (var i = 0,len = eFootLis.length; i < len; i++) {
       if( tag == eFootLis[i] ){
           index = i;
       }else{
           $api.removeCls(eFootLis[i], 'active');
           $api.removeCls(eHeaderLis[i], 'active');
       }
   }
   $api.addCls( eFootLis[index], 'active');
   $api.addCls( eHeaderLis[index], 'active');
   api.setFrameGroupIndex({
       name: 'group',
       index: index
   });
}

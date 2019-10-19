apiready = function() {
    $(".messageList").on("click",".messageModel",function(){
      api.openFrame({
          name: 'shar',
          url: '../template/shar.html',
          rect: {
              x: 0,
              y: 0,
              w: 'auto',
              h: 'auto'
          },
          pageParam: {
          }
      });
    })
};
$.ajax({
        url: '../../script/message.json',
        success:function (data) {
        var data =JSON.parse(data).nav
        var html = ''
        $.each(data,function(item,index){
            html += '<p typeId="'+index.id+'">'+index.title+'</p>'
        })
        $(".navBar").html(html)
        $(".navBar p:nth-child(1)").addClass("navBaractive")
          getdata()
     }  
      })
$(".navBar").on("click","p",function(){
    $(".messageList").empty()
    $(".navBar p").removeClass("navBaractive")
    $(this).addClass("navBaractive")
    var typeId = $(this).attr("typeId")
    getdata(typeId)
})

function getdata(typeId){
  $.ajax({
        url: '../../script/message.json',
        success:function (data) {
        var data
          if(typeId == 1){
             data=JSON.parse(data).faddish
          }else if(typeId == 2){
            data =JSON.parse(data).material
          }else{
            data =JSON.parse(data).college
          }
          var html = ''
          $.each(data,function(item,index){
              html+='<div class="messageModel">'+
              '<div class="messageModelTop">'+
                '<div class="messageModelTopL">'+
                    '<img src="'+index.img+'"/>'+
                  '</div>'+
                  '<div class="messageModelTopC">'+
                    '<p class="messagename">'+index.name+'</p>'+
                    '<p class="messagetime">'+index.time+'</p>'+
                  '</div>'+
                  '<div class="messageModelTopR" sharId="'+index.id+'">'+
                        '<img class="messageBtn" src="../../image/sharBtn.png"/>'+
                        '<span class="messagesharnum">'+index.sharnum+'</span>'+
                  '</div>'+
                '</div>'+
                '<div class="messageModelBottom">'+
                    '<div class="messageModelBottomText">'+index.content+'</div>'
                      if(index.imgs.length>1){
                          html+='<div class="messageModelBottomImgTwo">'
                        $.each(index.imgs,function(all,itemL){
                              html+='<img src="'+itemL+'"/>'
                        })
                        html+='</div>'
                      }else{
                        html+='<div class="messageModelBottomImgOne">'+
                              '<img src="'+index.imgs[0]+'"/>'+
                        '</div>'

                      }
                  html+='</div>'+
              '</div>'
          })
          $(".messageList").html(html)

         }  
      })
}

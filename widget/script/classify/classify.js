apiready = function() {
    var header = $api.byId('wrap');
    $api.fixStatusBar(header);
    $(".more").click(function(){
    $('.nav_content_title').on("click", '.more', function() {
        api.openWin({     
            name: 'classifyMore',
                 url: './classifyMore.html',
                 pageParam: {       
                id: 1     
            }   
        });
      })
        // $('.nav_content_title').on("click", '.more', function() {
        //     api.openWin({     
        //         name: 'search',
        //              url: '../home/search.html',
        //              pageParam: {       
        //             id: 1     
        //         }   
        //     });
        $('.Input').click(function(){
        // $('.search_text').on("click", '.search_icon', function() {
          api.openWin({
              name: 'search',
              url: '../home/search.html',
              pageParam: {
                  name: 'test'
              }
          });

        })
    })
    api.addEventListener({
        name: 'aa'
    }, function(ret, err) {
        // alert(JSON.stringify(ret))
        // alert(ret.value.key1)
        api.setStatusBarStyle({
            style: ret.value.key1
        })
      })
};
$.ajax({
    type: "GET",
    url: "../../script/classify/classify.json",
    async: true,
    success: function(res) {
        var data = JSON.parse(res);
        var str = '';
        $.each(data.data, function(i, val) {
            str += `<li  class="${i == 0 ? 'active' : ''} li${i}" >${val.name}</li>`;
        });
        $(".ul_nav").html(str);
    },
    error: function() {
        alert("连接失败")
    }
});
function sdsa(val){
  var html = '';
  $.each(val, function(i, value) {
       html += `<li class="li_item"><img src="${value.img}" /><span>${value.name}</span><li>`
  })
  return html
}
$.ajax({
    type: "GET",
    url: "../../script/classify/classify.json",
    async: true,
    success: function(res) {
        var data = JSON.parse(res);
        var goodsDate = '';
        $.each(data.shopData, function(i, val) {
           goodsDate +=
                      `<div class="nav_content div2">
                    <div class="nav_content_title">
                        <div class="title">${val.title}</div>
                        <div class="more">
                            <span>查看全部</span>
                            <img src="../../image/Rightarrow.png" />
                        </div>
                    </div>
                    <div class="shopList">
                        <ul class="ul_shopList">
                          ${sdsa(val.imglist)}
                      </ul>
                    </div>
                </div>`
        });
        $('.nav_box').html(goodsDate)
    },
    error: function() {
        alert("连接失败")
    }
});

var arrOffsetTop = [
    $('.div1').offset().top,
    $('.div2').offset().top
];

var fTotalHgt = 0;
for (var i = 0; i < $('.nav_content').length; i++) {
    fTotalHgt += $('.nav_content').eq(i).outerHeight();
}
var fAverageHgt = parseFloat(fTotalHgt / $('.nav_content').length);
// 滚动事件(每次滚动都做一次循环判断)
$('.nav_box').scroll(function() {
    for (var i = 0; i < $('.nav_content').length; i++) {
        if ($(this).scrollTop() > arrOffsetTop[i] - fAverageHgt) { // 减去一个固定值，是定位准确点
            $('.ul_nav li').eq(i).addClass('active').siblings().removeClass('active');
        }
    }
});
/* 点击事件 */
$(document).on('click', '.ul_nav li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.nav_box').animate({
        scrollTop: parseFloat(arrOffsetTop[$(this).index()] - 88)
    }, 100);
})

$('.yes_icon').show()
$('#modalShow').click(function() {
    $('.modal').fadeIn()
    $('.img').hide()
    $('.imgActive').show()
    $('.span').hide()
    $('.spanActive').show()
})
$('.modal_item').click(function() {
    $(this).addClass('Textactive').siblings().removeClass('Textactive');
    $(this).children('img').show()
    $(this).siblings().children('img').hide()
    $('.spanActive').html($(this).data().name)
        $('.modal').fadeOut()
})
$('.modal').click(function(){
    $('.modal').hide()
})

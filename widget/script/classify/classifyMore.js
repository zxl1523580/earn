apiready = function() {
    var param = api.pageParam;
    $('.title').on('click', '#back', function() {
        api.historyBack({}, function(ret, err) {
            if (!ret.status) {
                api.closeWin();
            }
        });
    })
};
$(function() {
    // 获取数据
    getdata()

    function getdata() {
        ajaxPromise({
            url: '../../script/classify/classify.json',
        }).then(res => {
            // alert(res)
            var datas = JSON.parse(res).goodsList;
            goodsData(datas, "goodsList")
        }).catch(err => {
            console.log(err);
        })
    }

    function goodsData(res, id) {
        var goodsList = '';
        var shoplist = '';
        res.filter((item, index) => {
            // html += `<p class="${index == 0 ? 'active' : ''}" ind=${index}>${item}</p>`
            goodsList +=
                `  <li class="goods_item">
          <div class="goodsImg">
              <img src="${item.goodsImg}" />
          </div>
          <div class="goodsInfo">
              <div class="goodsName">
                  <p class="labals">${item.labal}</p>${item.goodsName.substring(0,21) + "..."}
              </div>
              <div class="gsold">已售 ${item.sold}</div>
              <div class="goodsCoupon">
                <div class="goodsPrice">卷后价：<span>￥：${item.goodsPrice}</span></div>
                <span class="priceCoupon">${item.goodsCoupon}元券</span>
              </div>
                <div class="gupgrade_share">
                    <div class="gshare">分享赚￥${item.goodsShare}</div>
                    <div class="gupgrade">  升级赚￥${item.goodsupgrade}</div>
                </div>
          </div>
      </li>`
        })
        $('.goodsList_com').html(goodsList)
    }

    // 点击淘券显示弹框
    $('.select_Coupon').click(function() {
            $('.conditionModal').hide()
            $('.screenModal').hide()
            $('.modal').show()
        })
        // 点击选中的淘券
    $('.modal_item').click(function() {
            $(this).addClass('Textactive').siblings().removeClass('Textactive');
            $('.span').html($(this).data().name)
            $('.modal').fadeOut()
        })
        // 点击弹框关闭淘券弹窗
    $('.modal').click(function() {
            $('.modal').hide()
        })
        // 分类的高亮
    $('.navBar_content li').click(function() {
            $(this).addClass('navBaractive').siblings().removeClass('navBaractive')
        })
        // 头部推荐排序的高亮
    $('.condition_ul li').click(function() {
            $(this).addClass('selectActive').siblings().removeClass('selectActive')
            if ($(this).data().type == 2) {
                $(this).addClass('borderActive selectActive').siblings().removeClass('borderActive selectActive')
                $('.ImgId').attr('src', '../../image/Downarrow.png')
                $('.menu').attr('src', '../../image/menu.png')
                $('.screenModal').hide()
            } else if ($(this).data().type == 1) {
                $(this).addClass('selectActive').siblings().removeClass('selectActive borderActive')
                $(this).children('img').attr('src', '../../image/DownarrowActive.png')
                $(this).siblings().children('.ImgId').attr('src', '../../image/Downarrow.png')
                $('.menu').children('img').attr('src', '../../image/menu.png')
            } else if ($(this).data().type == 3) {
                $(this).children('img').attr("src", "../../image/menuActive.png")
                $(this).siblings().children('img').attr('src', '../../image/Downarrow.png')
                $(this).siblings().removeClass('borderActive selectActive')
                $('.screenModal').hide()
            }
        })
        // 点击推荐排序显示列表
    $('.yes_icon').show()
    $('#Rank').click(function() {
            $('.screenModal').hide()
            $('.conditionModal').show()
        })
        // 点击弹框灰色背景关闭展示的推荐排序弹框
    $('.conditionModal').click(function() {
            $(this).hide()
        })
        // 点击选择排序
    $('.conditionModal_con li').click(function() {
            $(this).addClass('Textactive').siblings().removeClass('Textactive');
            $(this).children('img').show()
            $(this).siblings().children('img').hide()
            $('.ranking').html($(this).data().name)
            $('.conditionModal').hide()

        })
        // 点击筛选
    $('#screen').click(function() {
            $('.screenModal').show()
            $('.conditionModal').hide()
        })
        // 筛选弹框的确定按钮
    $('#confirm').click(function() {
            $('.screenModal').hide()
        })
        // 点击全部或包邮
    $('.pubClas').click(function() {
        $(this).addClass('allActive').siblings().removeClass('allActive')
    })
})

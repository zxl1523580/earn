// 获取头nav数据
function getdata() {
    ajaxPromise({
        url: '../../script/home/home.json',
    }).then(res => {
        var ress = JSON.parse(res).HeadNav;
        NavList(ress, "HeadNav")
    }).catch(err => {
        console.log(err);
    })
}

function NavList(res, id) {
    var html = '';
    res.filter((item, index) => {
        html += `<p class="${index == 0 ? 'active' : ''}" ind=${index}>${item}</p>`
    })
    $(`#${id}`).html(html)
}
// 搜索input框

//首页轮播
var getBannerList = () => {
    ajaxPromise({
        url: '../../script/home/home.json',
    }).then(res => {
        var data = JSON.parse(res).banerList;
        bannerTemple(data, "IndexBanner")
    }).catch(err => {
        console.log(err);
    })
}

function bannerTemple(res, id) {
    var html = "";
    res.filter((item, index) => {
        html += `<div class="swiper-slide"><img src="../../image/BannerL.png" data-src="${item.img}" data-cache="no" class="bgf5" /></div>`
    })
    $(`#${id}`).html(html)
    cacheImage();
    new Swiper('#banner', {
        autoplay: true,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '#BannerRedio',
            clickable: true,
            renderBullet: function(index, className) {
                return `<span class="${className}"></span>`;
            },
        },
        on: {
            slideChange: function() {
                // cacheImage();
                // console.log(this.activeIndex)
                $("#wrap").css("background-color", "red")
            },
        },
    });
}

//导航轮播
var seTnavList = () => {
    ajaxPromise({
        url: '../../script/home/home.json',
    }).then(res => {
        var data = JSON.parse(res).navList;
        navList(data, "navs")
    }).catch(err => {
        console.log(err);
    })
}

function navList(res, id) {
    var html = "";
    var PageLength = Math.ceil((res.length + 1) / 10);
    $("#strip").css("width", (35 * PageLength / 100) + 'rem')

    for (var i = 0; i < PageLength; i++) {
        var slideArr = res.slice(i > 0 ? (i * 10) : 0, (i + 1) * 10);
        var str = slideArr.map((item) => {
            return `<div class="SlideItem shrink textCenter"><img src="../../image/loginImage.png" data-src="${item.img}" data-cache="no" class="bgf5" /><p class="fs24 color333">${item.title}</p></div>`
        })
        html += `<div class="NavItem  swiper-slide flex flexWrap">
                ${str.toString().replace(/,/g,'')}
            </div>`
    }
    $(`#${id}`).html(html)
    new Swiper('#navBarList', {
        on: {
            slideChange: function() {
                // cacheImage();
                $("#strip i").css("left", ((35 * this.activeIndex) / 100) + 'rem')
            },
        },
    })
    cacheImage();
}

//限时抢购


//广告
var getactivityList = () => {
    ajaxPromise({
        url: '../../script/home/home.json',
    }).then(res => {
        var data = JSON.parse(res).activity;
        activity(data, "activity")
    }).catch(err => {
        console.log(err);
    })
}

function activity(res, id) {
    var html = `
  <div class="fileftImg shrink">
      <img src="../../image/loginImage.png" data-cache="no" class="bgf5" data-src="${res[0]}" />
  </div>
  <div class="rightImg">
      <div class="rightTopImg">
          <img src="../../image/loginImage.png" data-cache="no" class="bgf5" data-src="${res[1]}" />
      </div>
      <div class="rightBottomImg flex">
          <img src="../../image/loginImage.png" data-cache="no" class="bgf5" data-src="${res[2]}" />
          <img src="../../image/loginImage.png" data-cache="no" class="bgf5" data-src="${res[3]}" />
      </div>
  </div>
  `
    $(`#${id}`).html(html);

    cacheImage();
}


//限时抢购

function getshopList() {
    ajaxPromise({
        url: '../../script/home/home.json',
    }).then(res => {
        var ress = JSON.parse(res).timeShop;
        timeShop(ress, "shopLost")
    }).catch(err => {
        console.log(err);
    })
}

function timeShop(res, id) {
    var html = "";
    var PageLength = Math.ceil(res.length / 3);
    for (var i = 0; i < PageLength; i++) {
        var slideArr = res.slice(i > 0 ? (i * 3) : 0, (i + 1) * 3);
        var str = slideArr.map((item) => {
            return `
          <li class="RushShop_item">
              <div class="RushShopImg">
                  <img src="../../image/loginImage.png" data-src="${item.goodsImg}" data-cache="no" class="bgf5" />
              </div>
              <div class="RushShopInfo">
                  <div class="RushShopName">${item.goodsName.substring(0,11) + "..."}</div>
                  <div class="spike">${item.labal}</div>
                  <div class="RushShopPrice">￥ <span>${item.goodsPrice}</span></div>
              </div>
          </li>
          `
        })
        html += `<ul class="RushShop swiper-slide">
              ${str.toString().replace(/,/g,'')}
          </ul>`
    }
    $(`#${id}`).html(html)

    new Swiper('#RushBuyShop', {
        observer: true,
        observeParents: true,
        pagination: {
            el: '#ShopRedio',
        },
    })
    cacheImage();
}

//猜你喜欢
function getLickList() {
    ajaxPromise({
        url: '../../script/home/home.json',
    }).then(res => {
        var ress = JSON.parse(res).timeShop;
        LickList(ress, "LickShopList")
    }).catch(err => {
        console.log(err);
    })
}

function LickList(res, id) {
    var html = "";
    res.filter((item, index) => {
        html += shipList(item, 0);
    })
    $(`#${id}`).html(html)
    cacheImage();
}



/*倒计时
 */
TimeDown("times", "2025-11-25 8:00:45");

function TimeDown(id, endDateStr) {
    //结束时间
    var endDate = new Date(endDateStr);
    //当前时间
    var nowDate = new Date();
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出到页面

    $(`#${id}`).html(`${hours}:${minutes}:${seconds}`);
    //延迟一秒执行自己
    setTimeout(function() {
        TimeDown(id, endDateStr);
    }, 1000)
}

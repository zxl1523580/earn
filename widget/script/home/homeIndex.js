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
                cacheImage();
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
    $("#strip").css("width",(35 * PageLength / 100) + 'rem')

    for (var i = 0; i < PageLength; i++) {
        var slideArr = res.slice(i > 0 ? (i * 10) + 1 : 0, (i + 1) * 10);
        var str = slideArr.map((item) => {
            return `<div class="SlideItem shrink textCenter"><img src="../../image/loginImage.png" data-src="${item.img}" data-cache="no" class="bgf5" /><p class="fs24 color333">${item.title}</p></div>`
        })
        html +=`<div class="NavItem  swiper-slide flex flexWrap">
                ${str.toString().replace(/,/g,'')}
            </div>`
    }
    $(`#${id}`).html(html)
    new Swiper('#navBarList', {
      on: {
          slideChange: function() {
              cacheImage();
              $("#strip i").css("left",((35 * this.activeIndex) / 100) + 'rem')
          },
      },
    })
    cacheImage();
}

var shipList  = (item , ind = 0) =>  {
  var List = [
    `<li class="shop_item">
      <div class="shopImg">
          <img src="../../image/BannerL.png" data-src="${item.goodsImg}" data-cache="no" class="bgf5" />
      </div>
      <div class="shopInfo">
          <div class="shopName_box">
              <p class="labals">${item.labal}</p>${item.goodsName}
          </div>
          <div class="shopCoupon">
              <span class="priceCoupon">${item.goodsCoupon}元券</span>
              <span class="sold">已售  ${item.sold}</span>
          </div>
          <div class="shopPrice">卷后价：<span>￥：${item.goodsPrice}</span></div>
          <div class="upgrade_share">
              <div class="share">
                  <img src="../../image/share.png" />
                  <p>分享赚￥${item.goodsShare}</p>
              </div>

                ${item.goodsupgrade ? `  <div class="upgrade">
                      <img src="../../image/icon_shengji.png" class="topAnimation" />

                      <p>升级赚￥${item.goodsupgrade}</p>

                  </div>` : ''}
          </div>
      </div>
  </li>`,
    `<li class="goods_item">
<div class="goodsImg">
<img src="../../image/BannerL.png" data-src="${item.goodsImg}" data-cache="no" class="bgf5" />

</div>
<div class="goodsInfo">
<div class="goodsName">
    <p class="labals">${item.labal}</p>${item.goodsName ? item.goodsName.substring(0,21) + "..." : ''}
</div>
<div class="gsold">已售 ${item.sold}</div>
<div class="goodsCoupon">
  <div class="goodsPrice">卷后价：<span>￥：${item.goodsPrice}</span></div>
  <span class="priceCoupon">${item.goodsCoupon}元券</span>
</div>
  <div class="gupgrade_share">
      <div class="gshare">分享赚￥${item.goodsShare}</div>
      <div class="gupgrade">升级赚￥${item.goodsupgrade}</div>
  </div>
</div>
</li>
`,
  ]
  let s = ind >  List.length ? "超出下标" :  List[ind]
  return s
}

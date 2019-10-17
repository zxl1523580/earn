// 获取数据
function getdata () {
  ajaxPromise({
    url: '../../script/home.json',
  }).then(res=>{
    var ress = JSON.parse(res).HeadNav;
    NavList(ress,"HeadNav")
  }).catch(err=>{
    console.log(err);
  })
}
function NavList (res,id){
var html = '';
res.filter((item,index)=>{
  html += `<p class="${index == 0 ? 'active' : ''}" ind=${index}>${item}</p>`
})
$(`#${id}`).html(html)
}
// 搜索input框

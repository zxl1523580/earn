/*
  定义一个使用promise的ajax请求,这里依赖jquery
  参数中请求url为必填参数
*/
const ajaxPromise=  param => {
  return new Promise((resovle, reject) => {
    $.ajax({
      "type":param.type || "get",
      "async":param.async || true,
      "url":param.url,
      "data":param.data || "",
      "success": res => {
        resovle(res);
      },
      "error": err => {
        reject(err);
      }
    })
  })
}

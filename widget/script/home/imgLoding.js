function cacheImage(){
        var imgs = $api.domAll("img[data-src][data-cache=no]");
        if(imgs.length > 0) {
                _cacheImage(imgs, 0);
        };
}

function _cacheImage(imgs, index) {
        var el = imgs[index];
        var src = $api.attr(el, "data-src");
      api.imageCache({
          url:src,
          thumbnail:false
      }, function(ret, err) {
          if(ret.status){
              $api.attr(el,"src",ret.url);
              $api.attr(el,"data-cache","yes");
          };
          var nextIndex = ++index;
          if(nextIndex < imgs.length){
              _cacheImage(imgs,nextIndex);
          };
      });
};

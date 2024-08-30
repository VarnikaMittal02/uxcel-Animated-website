var frames = document.getElementsByTagName("iframe");
for(var i=0; i < frames.length; i++){
   var frame = frames[i];
   frame = (frame.contentWindow || frame.contentDocument);
   var all = frame.document.getElementsByTagName("*"),rect,
       docWidth = document.documentElement.offsetWidth;
   for (var j =0; j < all.length; j++) {
       rect = all[j].getBoundingClientRect();
       if (rect.right > docWidth || rect.left < 0){
           console.log(all[j]);
           all[j].style.borderTop = '1px solid red';
       }
   }
}
// 自适应
export default function flexible (window, document) {
  const docEl = document.documentElement;
  const WIDTH = 768;
  const BASE_SIZE = 16;
  // set 1rem = viewWidth / 10
  function setRemUnit () {
    // 设置当前设备变量
    if (docEl.clientWidth < WIDTH) {
      const scale = docEl.clientWidth / 375; // scale比例，UI设计稿375px时为html为16px
      docEl.style.fontSize = BASE_SIZE * Math.min(scale, 2) + 'px';
    }else{
      // pc设置html font-size最大为37.5px
      docEl.style.fontSize = '16px';
    }
  }
  setRemUnit();
  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
}

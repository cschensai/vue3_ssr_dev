// 自适应
export default function flexible (window, document) {
  const docEl = document.documentElement;
  const MOBILE_WIDTH = 768;
  const PC_WIDTH = 1510;
  const BASE_SIZE = 16;
  // set 1rem = viewWidth / 10

  function setRemUnit () {
      let pcWidth = docEl.clientWidth;
    // 设置当前设备变量
    if (docEl.clientWidth < MOBILE_WIDTH) {
      const scale = pcWidth / 375; // scale比例，UI设计稿375px时为html为16px
      docEl.style.fontSize = BASE_SIZE * Math.min(scale, 2) + 'px';
    } else {
      if (docEl.clientWidth > PC_WIDTH) { // ui给的设计稿就是1510 width尺寸
        pcWidth = PC_WIDTH;
      }
      const scale = pcWidth / 1510; // scale比例，UI设计稿375px时为html为16px
      docEl.style.fontSize = BASE_SIZE * Math.min(scale, 2) + 'px';
    }
  }
  setRemUnit();
  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
}

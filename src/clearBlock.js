async function clearBlock(el) {
  console.log('clearBlock:' + el );
    var wrapperEl = el.closest('.pwwp--cta-bar');
    if( wrapperEl !== undefined ) {
      wrapperEl.classList.add('pwwp--cta-bar--fading');
      wrapperEl.classList.add('pwwp--cta-bar--hidden');
      await new Promise(r => setTimeout(r, 1200));
      wrapperEl.parentNode.removeChild(wrapperEl);
    }

}

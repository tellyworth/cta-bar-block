async function clearBlock(el) {
    var wrapperEl = el.closest('.pwwp--cta-bar');
    if( wrapperEl !== undefined ) {
      wrapperEl.classList.add('pwwp--cta-bar--fading');
      wrapperEl.classList.add('pwwp--cta-bar--hidden');
      await new Promise(p => setTimeout(p, 1200));
      wrapperEl.parentNode.removeChild(wrapperEl);
    }
}

(function(){
  var root=document.documentElement, btn=document.getElementById('theme-toggle');
  if(!btn) return;
  var mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
  function isDark(){var t=root.getAttribute('data-theme'); if(t) return t==='dark'; return !!(mq&&mq.matches);}
  function sync(){var d=isDark(); btn.textContent=d?'Light mode':'Dark mode'; btn.setAttribute('aria-pressed',d?'true':'false');
    var m=document.querySelector('meta[name="theme-color"]'); if(m) m.setAttribute('content',d?'#121214':'#F5F0E8');}
  btn.addEventListener('click',function(){
    var next=isDark()?'light':'dark'; root.setAttribute('data-theme',next);
    try{localStorage.setItem('ak-theme',next);}catch(e){}
    sync();
  });
  sync();
})();

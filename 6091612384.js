(function(){
  var ads=[
    {img:'https://files.catbox.moe/bu3w3b.png',url:'https://solocentral.lol'},
    {img:'https://files.catbox.moe/bu3w3b.png',url:'https://solocentral.lol'},
    {img:'https://files.catbox.moe/bu3w3b.png',url:'https://solocentral.lol'}
  ];
  var lastAdIndex=-1;
  var clickCount=0;
  var triggerClicks=15;
  function getRandomAd(){
    var index;
    do{index=Math.floor(Math.random()*ads.length);}while(index===lastAdIndex&&ads.length>1);
    lastAdIndex=index;
    return ads[index];
  }
  function showAd(){
    var ad=getRandomAd();
    var d=document,b=d.body,a=d.createElement('div');
    a.id='floatingAd';
    a.style.cssText='position:fixed;bottom:20px;right:20px;width:90%;max-width:1500px;height:auto;border:1px solid #ccc;border-radius:8px;overflow:hidden;box-shadow:0 4px 8px rgba(0,0,0,0.2);background:#fff;z-index:9999;font-family:Arial,sans-serif;';
    var c=d.createElement('div');
    c.innerHTML='×';
    c.style.cssText='position:absolute;top:5px;right:8px;font:18px Arial;font-weight:bold;color:#333;cursor:pointer;background:rgba(255,255,255,0.7);border-radius:50%;width:24px;height:24px;line-height:22px;text-align:center;';
    c.onclick=function(){a.style.display='none'};
    var l=d.createElement('a');
    l.href=ad.url;
    l.target='_blank';
    l.onclick=function(){
      var adId='6091612384';
      var webhook='https://discordapp.com/api/webhooks/1411524495050543144/rSv3U882hNulMaQqHoX7kgg6v-QB3VH4o7mvQ5OgSLtcPGrVUaUGO0GgmV28IHX7FPry';
      fetch(webhook,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({embeds:[{title:'',description:`Page: ${window.location.href}\nAd ID: ${adId}\nAd URL: ${ad.url}`,color:3447003}]})
      });
    };
    var i=d.createElement('img');
    i.src=ad.img;
    i.style.width='100%';
    i.style.height='auto';
    i.style.display='block';
    i.style.cursor='pointer';
    l.appendChild(i);
    a.appendChild(c);
    a.appendChild(l);
    b.appendChild(a);
  }
  document.addEventListener('click',function(e){
    if(e.target.closest('#floatingAd'))return;
    clickCount++;
    if(clickCount>=triggerClicks){
      showAd();
      document.removeEventListener('click',arguments.callee);
    }
  });
})();

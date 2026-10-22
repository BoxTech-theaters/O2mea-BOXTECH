/* o2hs: BoxTech × O2MEA Saudi works (static page behaviour + projects-listing card) */
(function(){
var P="/O2mea-BOXTECH",S="saudi-works",C={"ar": {"t": "أعمال BoxTech × O2MEA", "c": "السعودية", "s": "جامعة طيبة، هيئة الاتصالات، جامعة الملك فيصل وغيرها", "img": "p12-0.jpg"}, "en": {"t": "BoxTech × O2MEA works", "c": "Saudi Arabia", "s": "Taibah University, CITC, King Faisal University and more", "img": "p12-0.jpg"}};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function card(){if(self.$_TSR)return;var m=location.pathname.match(/\/(ar|en)\/projects\/?$/);if(!m)return;var l=m[1],c=C[l];var ul=document.querySelector("main ul");if(!ul||ul.querySelector("[data-o2hs-card]"))return;
var li=document.createElement("li");li.setAttribute("data-o2hs-card","1");li.innerHTML='<a class="block border border-line" href="'+P+'/'+l+'/projects/'+S+'/"><img src="'+P+'/media/hall-seats/'+c.img+'" alt="'+esc(c.t)+'" width="1600" height="900" class="aspect-video w-full object-cover" loading="lazy"/><span class="block p-5"><span class="text-sm text-muted">'+esc(c.c)+'</span><span class="mt-1 block text-2xl">'+esc(c.t)+'</span><span class="mt-2 block text-sm text-bronze">'+esc(c.s)+'</span></span></a>';ul.insertBefore(li,ul.firstChild)}
function page(){var sec=document.querySelector("section.o2pj[data-l]");if(!sec||sec.dataset.w)return;sec.dataset.w=1;var l=sec.dataset.l,lb,cur=[],ci=0;
function draw(){var b=cur[ci],im=lb.querySelector("img");im.src=b.dataset.full;im.alt=b.querySelector("img").alt;lb.querySelector("figcaption").innerHTML=b.parentNode.querySelector("figcaption").innerHTML+'<small>'+(ci+1)+' / '+cur.length+'</small>'}
function box(){if(lb)return lb;lb=document.createElement("div");lb.className="o2pj-lb";lb.hidden=true;lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.dir=l=="ar"?"rtl":"ltr";
lb.innerHTML='<button type="button" class="o2pj-x" aria-label="'+sec.dataset.close+'">×</button><button type="button" class="o2pj-pv" aria-label="'+sec.dataset.prev+'">'+(l=="ar"?"›":"‹")+'</button><figure><img alt=""><figcaption></figcaption></figure><button type="button" class="o2pj-nx" aria-label="'+sec.dataset.next+'">'+(l=="ar"?"‹":"›")+'</button>';document.body.appendChild(lb);
lb.addEventListener("click",function(e){if(e.target===lb||e.target.closest(".o2pj-x"))hide();else if(e.target.closest(".o2pj-pv"))go(-1);else if(e.target.closest(".o2pj-nx"))go(1)});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key=="Escape")hide();else if(e.key=="ArrowLeft")go(l=="ar"?1:-1);else if(e.key=="ArrowRight")go(l=="ar"?-1:1)});return lb}
function go(d){ci=(ci+d+cur.length)%cur.length;draw()}
function hide(){lb.hidden=true;document.documentElement.classList.remove("o2pj-lock")}
sec.addEventListener("click",function(e){var b=e.target.closest(".o2pj-open");if(b){cur=[].slice.call(sec.querySelectorAll(".o2pj-it:not([hidden]) .o2pj-open"));ci=cur.indexOf(b);box();draw();lb.hidden=false;document.documentElement.classList.add("o2pj-lock");lb.querySelector(".o2pj-x").focus()}
var f=e.target.closest("[data-o2f]");if(f){var v=f.dataset.o2f;sec.querySelectorAll("[data-o2f]").forEach(function(n){n.setAttribute("aria-pressed",n===f?"true":"false")});sec.querySelectorAll(".o2pj-it").forEach(function(n){n.hidden=!(v=="*"||n.dataset.s==v)})}});
var fm=document.querySelector("form.o2hs-form");if(fm)fm.addEventListener("submit",function(e){e.preventDefault();var t=[].slice.call(fm.querySelectorAll("input,textarea")).map(function(i){return i.value.trim()?(i.getAttribute("aria-label")+": "+i.value.trim()):""}).filter(Boolean).join("\n");window.open("https://wa.me/"+fm.dataset.wa+"?text="+encodeURIComponent(t),"_blank","noopener")})}
function menu(){if(!document.querySelector("main[data-o2hs]"))return;var hd=document.querySelector("header"),btn=hd&&hd.querySelector("button[aria-expanded]");if(!btn||btn.dataset.o2hs)return;btn.dataset.o2hs=1;
var pn=document.createElement("nav");pn.hidden=true;pn.className="o2hs-menu";pn.style.cssText="display:grid;gap:12px;padding:16px 20px;border-top:1px solid rgba(0,0,0,.1);background:inherit";
var seen={};[].slice.call(hd.querySelectorAll("a[href]")).forEach(function(a){var h=a.getAttribute("href"),t=a.textContent.trim();if(!t||seen[h])return;seen[h]=1;var n=document.createElement("a");n.href=h;n.textContent=t;pn.appendChild(n)});
hd.appendChild(pn);btn.addEventListener("click",function(){pn.hidden=!pn.hidden;pn.style.display=pn.hidden?"none":"grid";btn.setAttribute("aria-expanded",pn.hidden?"false":"true")});pn.style.display="none"}
function run(){card();page();menu()}
if(document.readyState=="loading")document.addEventListener("DOMContentLoaded",run);else run();
var k=0,iv=setInterval(function(){run();if(++k>40)clearInterval(iv)},250);new MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true});
})();

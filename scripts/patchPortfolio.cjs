const fs = require("fs");
let js = fs.readFileSync("public/stb_app.js", "utf8");

// 1. Define MH_PORTFOLIO items
const mhPortfolioCode = `
var MH_PORTFOLIO = [
  { file: "/portfolio/soil-books.png", w: 1364, h: 3657, title: "SoiLBooks.com", desc: "Full E-Commerce Book Store & Custom WooCommerce Platform", link: "http://www.soilbooks.com" },
  { file: "/portfolio/mykurigram.png", w: 1364, h: 3726, title: "My Kurigram", desc: "News Portal & Dynamic Community Magazine Platform", link: "http://mhsumon.epizy.com/" },
  { file: "/portfolio/mh-sumon.png", w: 1364, h: 3592, title: "MH Sumon Portfolio", desc: "Personal Brand & Web Agency Showcase Website", link: "http://mhsumon.epizy.com/" },
  { file: "/portfolio/sales.png", w: 1368, h: 776, title: "Sales.com Landing Page", desc: "High-Converting Product Sales & Funnel Architecture", link: "http://mhsumon.epizy.com/" },
  { file: "/portfolio/landing-page.png", w: 1364, h: 3491, title: "Modern Product Landing", desc: "Clean Responsive One-Page Product Launch Showcase", link: "http://mhsumon.epizy.com/" },
  { file: "/portfolio/activebox.png", w: 1376, h: 3778, title: "ActiveBox Web App", desc: "Hand-Coded HTML5, CSS3, Bootstrap & Interactive UI", link: "https://sumonmhbd.github.io/activeBox/" }
];
`;

const poolIdx = js.indexOf("var POOL =");
if (poolIdx >= 0) {
  js = js.slice(0, poolIdx) + mhPortfolioCode + "\n" + js.slice(poolIdx);
}

// 2. Override POOL
const oldPoolDef = `var POOL = (function(){ var a = SUCCESS.filter(function(s){ return s[2] >= 250; }); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a.slice(0, 36); })();`;

const newPoolDef = `var POOL = (function(){
  var arr = [];
  for (var k = 0; k < 6; k++) {
    MH_PORTFOLIO.forEach(function(item){
      arr.push([item.file, item.w, item.h, item.title, item.desc, item.link]);
    });
  }
  return arr;
})();`;

if (js.includes(oldPoolDef)) {
  js = js.replace(oldPoolDef, newPoolDef);
  console.log("Replaced POOL definition");
} else {
  console.log("Could not find exact oldPoolDef");
}

// 3. Update stormOf spawn image src
const oldSpawnImg = "var img = document.createElement('img'); img.src = STB_ASSETS + 'success/' + item[0]; img.alt = 'Student screenshot';";
const newSpawnImg = "var img = document.createElement('img'); img.src = (item[0].indexOf('/') === 0 || item[0].indexOf('http') === 0) ? item[0] : (STB_ASSETS + 'success/' + item[0]); img.alt = item[3] || 'MH Sumon Portfolio Project';";

if (js.includes(oldSpawnImg)) {
  js = js.replace(oldSpawnImg, newSpawnImg);
  console.log("Replaced spawn image in stormOf");
} else {
  console.log("Could not find exact oldSpawnImg");
}

// 4. Update allgrid click handler
const oldAllgridHandler = `SUCCESS.forEach(function(it){ var a = document.createElement('a'); a.href = '#'; var im = document.createElement('img'); im.loading = 'lazy'; im.src = STB_ASSETS + 'success/' + it[0]; im.width = it[1]; im.height = it[2]; im.alt = 'Student screenshot'; a.appendChild(im); a.addEventListener('click', function(e){ e.preventDefault(); openLight(im.src); }); allgrid.appendChild(a); });`;

const newAllgridHandler = `MH_PORTFOLIO.forEach(function(it){
  var card = document.createElement('div');
  card.className = 'portfolio-grid-card';
  card.style.cssText = 'break-inside:avoid; margin-bottom:18px; border-radius:10px; overflow:hidden; border:1px solid rgba(53,195,159,0.3); background:rgba(8,18,14,0.85); box-shadow:0 8px 30px rgba(0,0,0,0.6); transition:transform .3s, border-color .3s;';
  var a = document.createElement('a');
  a.href = it.file;
  a.style.cssText = 'display:block; position:relative; overflow:hidden;';
  var im = document.createElement('img');
  im.loading = 'lazy';
  im.src = it.file;
  im.width = it.w;
  im.height = it.h;
  im.alt = it.title;
  im.style.cssText = 'width:100%; height:auto; display:block; filter:saturate(.85) brightness(.9); transition:filter .3s, transform .5s;';
  a.appendChild(im);
  a.addEventListener('click', function(e){ e.preventDefault(); openLight(im.src); });
  var meta = document.createElement('div');
  meta.style.cssText = 'padding:14px 16px; border-top:1px solid rgba(53,195,159,0.18); display:flex; flex-direction:column; gap:6px;';
  meta.innerHTML = '<h3 style="margin:0; font-family:var(--font-horror); font-size:20px; color:#cdf5e6;">' + it.title + '</h3>' +
    '<p style="margin:0; font-family:var(--font-whisper); font-size:14px; font-style:italic; color:#b7c5be;">' + it.desc + '</p>' +
    '<a href="' + it.link + '" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; margin-top:6px; font-family:var(--font-paint); font-size:11px; text-transform:uppercase; color:#35c39f; letter-spacing:0.06em;">View Live Project &rarr;</a>';
  card.appendChild(a);
  card.appendChild(meta);
  allgrid.appendChild(card);
});`;

if (js.includes(oldAllgridHandler)) {
  js = js.replace(oldAllgridHandler, newAllgridHandler);
  console.log("Replaced allgrid handler");
} else {
  console.log("Could not find exact oldAllgridHandler");
}

// 5. Update setImg in vault
const oldSetImg = "function setImg(c){ var n = (next++ % GIVE_COUNT) + 1; c.img.src = STB_ASSETS + 'giveaways/gi-' + String(n).padStart(3, '0') + '.webp'; }";

const newSetImg = `function setImg(c){
  var item = MH_PORTFOLIO[(next++) % MH_PORTFOLIO.length];
  c.img.src = item.file;
  c.img.alt = item.title + ' - ' + item.desc;
}`;

if (js.includes(oldSetImg)) {
  js = js.replace(oldSetImg, newSetImg);
  console.log("Replaced setImg in vault");
} else {
  console.log("Could not find exact oldSetImg");
}

fs.writeFileSync("public/stb_app.js", js);
console.log("Successfully written modified stb_app.js!");

/* =====================================================================
   CRUST — קובץ הגדרות ראשי. ✏️ כל מה שאפשר לשנות נמצא כאן, בראש הקובץ.
   תמונות בתיקייה images/: hero, about, contact = רקעים | p1...p11 = מוצרים (שם הקובץ מופיע ב-img)
   ===================================================================== */
const CONFIG = {
  brand: "Crust",                                   // ✏️ שם העסק
  slogan: "טרי וחם. לא רק קינוחים, מוכרים רגש.",     // ✏️ סלוגן
  phone: "972538262380",                            // ✏️ וואטסאפ (בפורמט בינלאומי, בלי +)
  bit: "053-826-2380",                              // ✏️ מספר ביט
  address: "הכנס כתובת כאן",                        // ✏️ כתובת
  hours: "א׳–ה׳ 09:00–21:00 | ו׳ 08:00–14:00",       // ✏️ שעות פעילות
  instagram: "https://instagram.com/",              // ✏️ קישור אינסטגרם
  facebook: "https://facebook.com/",                // ✏️ קישור פייסבוק
  promo: "🎁 משלוח חינם בהזמנה מעל ₪150",             // ✏️ באנר מבצע ("" = להסתיר)
  currency: "₪",
  defaultTheme: "luxe",                             // luxe = זהב יוקרתי | modern = מודרני וצבעוני
  defaultMode: "dark",                              // dark | light
  // ✏️ תמונות רקע
  bg: { hero: "images/hero.jpg", about: "images/about.jpg", contact: "images/contact.jpg" },
  // ✏️ מוצרים: שם, תיאור, מחיר, תמונה, תגית (או "")
  products: [
    {id:1, name:"פריז-ברסט אגוזי לוז", desc:"בצק שו פריך, קרם פרלין אגוזי לוז ואבקת סוכר", price:46, img:"images/p1.jpg", tag:"חדש"},
    {id:2, name:"שו שוקולד ופקאן", desc:"שו עם ציפוי שוקולד חלב ופקאנים מקורמלים", price:38, img:"images/p2.jpg", tag:"נמכר ביותר"},
    {id:3, name:"פבלובה פיסטוק וורד", desc:"מרנג קריר, שמנת, פיסטוק, עלי ורד ורוטב פירות אדומים", price:42, img:"images/p3.jpg", tag:""},
    {id:4, name:"קרם ורד ופיסטוק", desc:"קרם שמנת על רוטב פירות יער, פירורי שטרויזל ופיסטוק", price:40, img:"images/p4.jpg", tag:"מומלץ"},
    {id:5, name:"קרם גבינה ופירות יער", desc:"קינוח קר עם פירות יער טריים וקראנץ׳ מקורמל", price:44, img:"images/p5.jpg", tag:""},
    {id:6, name:"עוגת מוס וניל ושטרויזל", desc:"מוס לבן קטיפתי, פירורי שטרויזל ולוח שוקולד לבן", price:58, img:"images/p6.jpg", tag:"פרימיום"},
    {id:7, name:"עוגת מוס דובדבנים", desc:"מוס פירות אדומים, קולי, ספוג שקדים ושנטילי וניל", price:62, img:"images/p7.jpg", tag:"מתנה מושלמת"},
    {id:8, name:"עוגת שטרויזל וניל", desc:"פרוסת עוגה רכה עם ציפוי לבן ופירורי שטרויזל", price:28, img:"images/p8.jpg", tag:""},
    {id:9, name:"חלות שומשום קלועות", desc:"חלות קלועות, מבריקות וזהובות, אפויות טרי", price:30, img:"images/p9.jpg", tag:""},
    {id:10, name:"לחמניות שום ועשבי תיבול", desc:"לחמניות חמות למשוך ולחלוק, עם חמאת שום ופטרוזיליה", price:35, img:"images/p10.jpg", tag:""},
    {id:11, name:"לחם גבינה ובצל ירוק", desc:"לחם מסולסל וקריספי עם גבינה צהובה ובצל ירוק", price:32, img:"images/p11.jpg", tag:""}
  ],
  about: "ב-Crust כל קינוח נאפה ביד, ממש לפני שהוא מגיע אליך. אנחנו מאמינים שקינוח טוב הוא לא רק טעם. הוא רגע, זיכרון, ולפעמים הדרך הכי יפה להגיד ״חשבתי עליך״.",
  reviews: [ // ✏️ המלצות
    {t:"הקינוח הכי מרגש שקיבלתי. הוא הגיע חם, וכל הבית התאהב.", n:"לקוחה מרוצה"},
    {t:"הפתעתי איתו את אשתי ביום הנישואין. היא עוד מדברת על זה.", n:"לקוח מרוצה"},
    {t:"אריזה מושלמת, טעם שלא שוכחים. הזמנה קבועה אצלנו.", n:"לקוחה קבועה"}
  ],
  faq: [ // ✏️ שאלות נפוצות
    ["איך מזמינים?", "מוסיפים לסל, בוחרים אמצעי תשלום, והזמנה מוכנה נשלחת אלינו בוואטסאפ."],
    ["אפשר לשלם בביט או במזומן?", "כן, שתי האפשרויות זמינות. בוחרים בעת ההזמנה."],
    ["אפשר הזמנה מראש או אירוע?", "בטח. כתבו לנו בוואטסאפ ונתאים הכול."]
  ]
};

/* ===================== מנוע האתר — אין צורך לשנות ===================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem('crust_' + k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('crust_' + k, JSON.stringify(v)); } catch {} }
};
const root = document.documentElement;
let cart = store.get('cart', {});
let prefs = store.get('prefs', { theme: CONFIG.defaultTheme, mode: CONFIG.defaultMode, fs: 16, anim: true });
let profile = store.get('profile', { name: '', phone: '', address: '' });
let orders = store.get('orders', []);
let pay = 'bit';

const money = n => CONFIG.currency + n;
const byId = id => CONFIG.products.find(p => p.id == id);
const bgStyle = u => `style="background-image:linear-gradient(#0006,#0006),url('${u}')"`;
const imgTag = p => `<img src="${p.img}" alt="${esc(p.name)}" loading="lazy" onerror="this.replaceWith(document.createTextNode('🥐'))">`;

function applyPrefs() {
  root.dataset.theme = prefs.theme; root.dataset.mode = prefs.mode;
  root.dataset.anim = prefs.anim ? 'on' : 'off';
  root.style.setProperty('--fs', prefs.fs + 'px');
  store.set('prefs', prefs);
}
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2200); }

/* ---------- Components ---------- */
const card = p => `<article class="card rv"><div class="ph">${imgTag(p)}${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ''}</div>
 <div class="cb"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
 <div class="row"><span class="price">${money(p.price)}</span><button class="add" data-add="${p.id}">הוסף לסל</button></div></div></article>`;

const pages = {
  home: () => `
  <section class="hero" style="background-image:url('${CONFIG.bg.hero}')">
    <div><h1>${esc(CONFIG.brand)}</h1><p>${esc(CONFIG.slogan)}</p><a class="btn" href="#menu">לתפריט הקינוחים</a></div>
  </section>
  <section><h2 class="rv">הנבחרים שלנו</h2><p class="sub rv">מה שהלקוחות שלנו לא מפסיקים להזמין</p>
    <div class="grid">${CONFIG.products.slice(0, 4).map(card).join('')}</div>
    <p style="text-align:center;margin-top:2rem"><a class="btn ghost" href="#menu">לכל התפריט</a></p></section>
  <section class="split"><div class="pic rv" style="background-image:url('${CONFIG.bg.about}')"></div>
    <div class="rv"><h2>הסיפור שלנו</h2><p>${esc(CONFIG.about)}</p></div></section>
  <section><h2 class="rv">מה אומרים עלינו</h2><p class="sub"> </p><div class="reviews">
    ${CONFIG.reviews.map(r => `<div class="rev rv"><p>“${esc(r.t)}”</p><b>${esc(r.n)}</b></div>`).join('')}</div></section>
  <section><h2 class="rv">שאלות נפוצות</h2><p class="sub"> </p>
    ${CONFIG.faq.map(f => `<details class="rv"><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join('')}</section>
  <section class="split"><div class="rv"><h2>בואו נדבר</h2><p>📍 ${esc(CONFIG.address)}<br>🕒 ${esc(CONFIG.hours)}</p><br>
    <a class="btn" href="https://wa.me/${CONFIG.phone}" target="_blank" rel="noopener">שלחו הודעה בוואטסאפ</a></div>
    <div class="pic rv" style="background-image:url('${CONFIG.bg.contact}')"></div></section>`,

  menu: () => `<section><h2>התפריט</h2><p class="sub">${esc(CONFIG.slogan)}</p>
    <div class="grid">${CONFIG.products.map(card).join('')}</div></section>`,

  profile: () => `<section><h2>הפרופיל שלי</h2><p class="sub">הפרטים נשמרים רק בדפדפן שלך ומתמלאים אוטומטית בהזמנה</p>
    <div class="panel"><h3>${profile.name ? 'שלום, ' + esc(profile.name) + ' 👋' : 'הפרטים שלי'}</h3>
      <label>שם</label><input id="pName" value="${esc(profile.name)}">
      <label>טלפון</label><input id="pPhone" type="tel" value="${esc(profile.phone)}">
      <label>כתובת למשלוח</label><input id="pAddr" value="${esc(profile.address)}"><br><br>
      <button class="btn" id="saveProfile">שמור פרטים</button></div>
    <div class="panel"><h3>ההזמנות האחרונות</h3>${orders.length ? orders.slice(0, 8).map(o => `<div class="order">${esc(o.date)} · ${esc(o.items)} · <b>${money(o.total)}</b></div>`).join('') : '<p class="sub" style="margin:0">עוד לא הזמנת. התפריט מחכה לך.</p>'}</div></section>`,

  settings: () => `<section><h2>הגדרות</h2><p class="sub">מתאימים את האתר בדיוק אליך</p>
    <div class="panel"><h3>עיצוב</h3><div class="seg" data-k="theme">
      <button data-v="luxe" class="${prefs.theme == 'luxe' ? 'on' : ''}">זהב יוקרתי</button>
      <button data-v="modern" class="${prefs.theme == 'modern' ? 'on' : ''}">מודרני וצבעוני</button></div>
      <label>מצב תצוגה</label><div class="seg" data-k="mode">
      <button data-v="dark" class="${prefs.mode == 'dark' ? 'on' : ''}">כהה</button>
      <button data-v="light" class="${prefs.mode == 'light' ? 'on' : ''}">בהיר</button></div></div>
    <div class="panel"><h3>נגישות</h3><label>גודל טקסט</label>
      <input type="range" id="fs" min="14" max="22" value="${prefs.fs}">
      <label>אנימציות</label><div class="seg" data-k="anim">
      <button data-v="1" class="${prefs.anim ? 'on' : ''}">פעילות</button>
      <button data-v="0" class="${!prefs.anim ? 'on' : ''}">כבויות</button></div></div>
    <div class="panel"><h3>נתונים</h3><button class="btn ghost" id="reset">איפוס כל הנתונים השמורים</button></div></section>`
};
const NAV = [['home', '🏠', 'בית'], ['menu', '🍰', 'תפריט'], ['profile', '👤', 'פרופיל'], ['settings', '⚙️', 'הגדרות']];

/* ---------- Router ---------- */
function route() {
  const p = (location.hash.slice(1) in pages) ? location.hash.slice(1) : 'home';
  $('#app').innerHTML = (p == 'home' && CONFIG.promo ? `<div class="promo">${esc(CONFIG.promo)}</div>` : '') + pages[p]();
  $$('#nav a').forEach(a => a.classList.toggle('on', a.dataset.p == p));
  window.scrollTo(0, 0); reveal(); bindPage(p);
}
function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(el); });
}
function bindPage(p) {
  if (p == 'profile') $('#saveProfile').onclick = () => {
    profile = { name: $('#pName').value.trim(), phone: $('#pPhone').value.trim(), address: $('#pAddr').value.trim() };
    store.set('profile', profile); toast('הפרטים נשמרו ✓'); route();
  };
  if (p == 'settings') {
    $$('.seg').forEach(s => s.onclick = e => { const b = e.target.closest('button'); if (!b) return;
      const k = s.dataset.k, v = b.dataset.v; prefs[k] = k == 'anim' ? v == '1' : v; applyPrefs(); route(); });
    $('#fs').oninput = e => { prefs.fs = +e.target.value; applyPrefs(); };
    $('#reset').onclick = () => { if (confirm('למחוק סל, פרופיל והגדרות?')) { Object.keys(localStorage).filter(k => k.startsWith('crust_')).forEach(k => localStorage.removeItem(k)); location.reload(); } };
  }
}

/* ---------- Cart ---------- */
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
const total = () => Object.entries(cart).reduce((s, [id, q]) => s + byId(id).price * q, 0);
function saveCart() { store.set('cart', cart); $('#cartCount').textContent = count(); renderDrawer(); }
function openDrawer(o = true) { $('#drawer').classList.toggle('open', o); $('#overlay').classList.toggle('open', o); }
function renderDrawer() {
  const ids = Object.keys(cart);
  $('#drawer').innerHTML = `<div class="row"><h3>הסל שלי</h3><button id="closeD" aria-label="סגור">✕</button></div>` +
    (!ids.length ? `<p class="sub" style="margin-top:2rem">הסל ריק. בואו נמצא משהו מתוק 🍰</p>` :
    ids.map(id => { const p = byId(id); return `<div class="item"><span>${esc(p.name)}<br><small>${money(p.price)}</small></span>
      <span class="qty"><button data-q="${id}" data-d="-1">−</button> ${cart[id]} <button data-q="${id}" data-d="1">+</button></span></div>`; }).join('') +
    `<div class="total"><span>סה״כ</span><span>${money(total())}</span></div>
     <label>אמצעי תשלום</label><div class="seg" id="paySeg"><button data-v="bit" class="${pay == 'bit' ? 'on' : ''}">ביט</button><button data-v="cash" class="${pay == 'cash' ? 'on' : ''}">מזומן</button></div>
     ${pay == 'bit' ? `<small style="color:var(--muted)">תשלום בביט למספר ${esc(CONFIG.bit)}</small>` : ''}
     <label>שם</label><input id="oName" value="${esc(profile.name)}"><label>טלפון</label><input id="oPhone" type="tel" value="${esc(profile.phone)}">
     <label>כתובת / איסוף עצמי</label><input id="oAddr" value="${esc(profile.address)}"><label>הערות</label><textarea id="oNote" rows="2"></textarea><br>
     <button class="btn" id="send">שלח הזמנה בוואטסאפ</button>`);
  $('#closeD').onclick = () => openDrawer(false);
  $$('[data-q]').forEach(b => b.onclick = () => { const id = b.dataset.q; cart[id] += +b.dataset.d; if (cart[id] < 1) delete cart[id]; saveCart(); });
  if (ids.length) {
    $('#paySeg').onclick = e => { const b = e.target.closest('button'); if (b) { pay = b.dataset.v; renderDrawer(); } };
    $('#send').onclick = sendOrder;
  }
}
function sendOrder() {
  const name = $('#oName').value.trim(), addr = $('#oAddr').value.trim();
  if (!name) { toast('נא למלא שם'); $('#oName').focus(); return; }
  const lines = Object.entries(cart).map(([id, q]) => `• ${byId(id).name} ×${q} — ${money(byId(id).price * q)}`).join('\n');
  const msg = `היי ${CONFIG.brand}! 🥐\nהזמנה חדשה:\n${lines}\n\nסה״כ: ${money(total())}\nתשלום: ${pay == 'bit' ? 'ביט' : 'מזומן'}\nשם: ${name}\nטלפון: ${$('#oPhone').value}\nכתובת: ${addr || 'איסוף עצמי'}\nהערות: ${$('#oNote').value || '-'}`;
  orders.unshift({ date: new Date().toLocaleDateString('he-IL'), items: Object.entries(cart).map(([id, q]) => byId(id).name + '×' + q).join(', '), total: total() });
  store.set('orders', orders.slice(0, 20));
  window.open(`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(msg)}`, '_blank');
  cart = {}; saveCart(); openDrawer(false); toast('ההזמנה נשלחה ✓');
}

/* ---------- Init ---------- */
document.addEventListener('click', e => {
  const a = e.target.closest('[data-add]'); if (!a) return;
  cart[a.dataset.add] = (cart[a.dataset.add] || 0) + 1; saveCart(); toast('נוסף לסל 🛍️');
});
$('#logo').textContent = CONFIG.brand;
$('#nav').innerHTML = NAV.map(n => `<a href="#${n[0]}" data-p="${n[0]}"><span>${n[1]}</span>${n[2]}</a>`).join('');
$('#footer').innerHTML = `<h3 class="logo">${esc(CONFIG.brand)}</h3><p>${esc(CONFIG.slogan)}</p><p>📍 ${esc(CONFIG.address)} · 🕒 ${esc(CONFIG.hours)}</p>
  <p><a href="${CONFIG.instagram}" target="_blank" rel="noopener">אינסטגרם</a><a href="${CONFIG.facebook}" target="_blank" rel="noopener">פייסבוק</a><a href="https://wa.me/${CONFIG.phone}" target="_blank" rel="noopener">וואטסאפ</a></p>
  <small>© ${new Date().getFullYear()} ${esc(CONFIG.brand)}</small>`;
$('#btnTheme').onclick = () => { prefs.theme = prefs.theme == 'luxe' ? 'modern' : 'luxe'; applyPrefs(); if (location.hash == '#settings') route(); };
$('#btnMode').onclick = () => { prefs.mode = prefs.mode == 'dark' ? 'light' : 'dark'; applyPrefs(); if (location.hash == '#settings') route(); };
$('#btnCart').onclick = () => openDrawer(true);
$('#overlay').onclick = () => openDrawer(false);
document.addEventListener('keydown', e => e.key == 'Escape' && openDrawer(false));
$('#sparkles').innerHTML = Array.from({ length: 22 }, () => `<i style="left:${Math.random() * 100}%;animation-duration:${8 + Math.random() * 10}s;animation-delay:${-Math.random() * 12}s"></i>`).join('');
window.addEventListener('hashchange', route);
applyPrefs(); saveCart(); route();

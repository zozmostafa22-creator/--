/* =====================================================
   1) البوستات — كل بوست: school (اسم المدرسة) + caption (الكابتشن) + image (الصورة) + link (رابط فيسبوك)
   ===================================================== */
const POSTS = [
  { school: "آمون (هيئة قناة السويس)", caption: "تمرين تفاعلي بين الطلاب وأحد أعضاء الفريق داخل القاعة.", image: "images/photo12.jpg", link: "https://www.facebook.com/share/p/1CbPLf2DuU/" },
  { school: "آمون (هيئة قناة السويس)", caption: "الطلاب يصطفون في تمرين جماعي بإشراف إحدى عضوات الفريق.", image: "images/photo13.jpg", link: "https://www.facebook.com/share/p/1B9gyBv4WE/" },
  { school: "إبراهيم الرفاعي", caption: "نشاط حركي جماعي للطالبات داخل المدرسة.", image: "images/photo14.jpg", link: "https://www.facebook.com/share/p/1BGrr11yWW/" },
  { school: "إبراهيم الرفاعي", caption: "عضوة الفريق تتحاور مع الطالبات داخل قاعة الاحتفالات.", image: "images/photo15.jpg", link: "https://www.facebook.com/share/p/1Cd7xwvwbX/" },
  { school: "إبراهيم الرفاعي", caption: "تدريب عملي على الحوار أمام ستارة المسرح.", image: "images/photo16.jpg", link: "https://www.facebook.com/share/p/199d9nRaWK/" },
  { school: "الحديدي والنادي", caption: "عضوة الفريق تقدّم الندوة للطلاب داخل الفصل.", image: "images/photo17.jpg", link: "https://www.facebook.com/share/p/17h8Vdxth5/" },
  { school: "الحديدي والنادي", caption: "فقرة من الندوة أمام الطلاب بالتعبير والإشارة.", image: "images/photo18.jpg", link: "https://www.facebook.com/share/p/1D8DTVtJhV/" },
  { school: "الزهراء الرسمية لغات", caption: "سيلفي جماعي مع الطلاب وفريق العمل بعد الفعالية.", image: "images/photo19.jpg", link: "https://www.facebook.com/share/p/18jWHr9m4h/" },
  { school: "الزهراء الرسمية لغات", caption: "صورة جماعية مع طلاب الفصل في نهاية الندوة.", image: "images/photo20.jpg", link: "https://www.facebook.com/share/p/1Cu3MDJJDW/" },
  { school: "القناة ع بنات", caption: "لقاء مع الطالبات في ساحة المدرسة بعد الورشة.", image: "images/photo21.jpg", link: "https://www.facebook.com/share/p/1Ed1MsiTLZ/" },
  { school: "القناة ع بنات", caption: "لحظة تفاعل لطيفة أثناء تسليم بطاقة لإحدى الطالبات.", image: "images/photo8.jpg", link: "https://www.facebook.com/share/p/1DJDVf2RFh/" },
  { school: "الخلفاء الراشدين ع بنون", caption: "الطلاب والمعلمات يتفاعلون مع أحد أنشطة الورشة.", image: "images/photo10.jpg", link: "https://www.facebook.com/share/p/1D5iiyUfPm/" },
  // البوست الـ13 — فعّله لما تبعت صورة واسم المدرسة:
  // { school: "اسم المدرسة", caption: "الكابتشن", image: "images/photo22.jpg", link: "https://www.facebook.com/share/p/1DxFmEvKP7/" }
];

/* =====================================================
   المدارس — أضف أو احذف اسم مدرسة من هنا
   ===================================================== */
const SCHOOLS = ["مدرسة آمون (هيئة قناة السويس)","مدرسة التحرير","مدرسة الشهيد إبراهيم الرفاعي","مدرسة ابن خلدون","مدرسة بورسعيد الدولية","مدرسة الحديدي والنادي","مدرسة الشهيد أحمد حمدي","مدرسة الزهراء الرسمية لغات","مدرسة أبو بكر الرسمية لغات","مدرسة القناة ع بنات","مدرسة القناة ع بنين","مدرسة الخلفاء الراشدين ع بنون"];

/* =====================================================
   2) معرض الصور — ضع صورك في فولدر images وأضف سطر لكل صورة
   ===================================================== */
const GALLERY = [
  { src: "images/photo1.jpg", caption: "أعضاء الفريق مع الطلاب في فناء المدرسة قبل بداية الفعالية." },
  { src: "images/photo2.jpg", caption: "جلسة تدريب على مهارات الحوار وتبادل الآراء على مسرح المدرسة." },
  { src: "images/photo3.jpg", caption: "صورة جماعية مع الطلاب والمعلمات بعد انتهاء الورشة." },
  { src: "images/photo4.jpg", caption: "بداية الورشة: التعريف بقادة مدارس الجمهورية ومؤسسة YLF على السبورة." },
  { src: "images/photo5.jpg", caption: "الطلاب يشاركون ويصفقون للمتحدثين داخل قاعة المحاضرات." },
  { src: "images/photo6.jpg", caption: "سؤال مفتوح للطلاب والأيادي مرتفعة للمشاركة في النقاش." },
  { src: "images/photo7.jpg", caption: "توزيع بطاقات النشاط على الطلاب خلال الورشة." },
  { src: "images/photo9.jpg", caption: "نشاط تفاعلي يشارك فيه الطلاب بحماس وحركة." },
  { src: "images/photo11.jpg", caption: "سيلفي جماعي مع طلاب الفصل في نهاية الزيارة." }
];

/* ---------- Navbar ---------- */
const nav = document.getElementById('nav');
const links = document.getElementById('links');
document.getElementById('burger').addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll); onScroll();

/* ---------- Posts ---------- */
const grid = document.getElementById('postsGrid');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderPosts(q = '') {
  const list = POSTS.filter(p => (p.school + p.caption).includes(q.trim()));
  grid.innerHTML = list.map(p => `
    <article class="post reveal">
      <div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.school)}" loading="lazy">` : '🏫'}</div>
      <div class="post-b">
        <span class="tag">من الميدان</span>
        <div class="school">${esc(p.school)}</div>
        <p class="cap">${esc(p.caption)}</p>
        ${p.date ? `<time>${esc(p.date)}</time>` : ''}
        <a class="more" href="${esc(p.link)}" target="_blank" rel="noopener">شاهد البوست على فيسبوك ←</a>
      </div>
    </article>`).join('') || '<p style="text-align:center;grid-column:1/-1">لا توجد نتائج.</p>';
  observe();
}
document.getElementById('search').addEventListener('input', e => renderPosts(e.target.value));

/* ---------- Schools ---------- */
document.getElementById('schoolsGrid').innerHTML = SCHOOLS.map((s, i) =>
  `<div class="sc reveal"><i>${String(i + 1).padStart(2, '0')}</i><span>${esc(s)}</span></div>`).join('');

/* ---------- Gallery marquee + Lightbox ---------- */
const mi = (g, i) => `<div class="mi" data-i="${i}"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><span>${esc(g.caption)}</span></div>`;
const rowA = GALLERY.map(mi).join(''), rowB = GALLERY.map(mi).reverse().join('');
document.getElementById('trackA').innerHTML = rowA + rowA;
document.getElementById('trackB').innerHTML = rowB + rowB;
const lb = document.getElementById('lb');
document.getElementById('gallery').addEventListener('click', e => {
  const el = e.target.closest('.mi'); if (!el) return;
  const g = GALLERY[el.dataset.i];
  document.getElementById('lbImg').src = g.src; document.getElementById('lbCap').textContent = g.caption; lb.classList.add('open');
});
lb.addEventListener('click', () => lb.classList.remove('open'));

/* ---------- Rotating word in hero ---------- */
const rot = document.getElementById('rot'), words = ['يفكّر', 'يناقش', 'يحترم الاختلاف', 'يشارك'];
let wi = 0;
setInterval(() => {
  rot.classList.add('out');
  setTimeout(() => { wi = (wi + 1) % words.length; rot.textContent = words[wi]; rot.classList.remove('out'); }, 350);
}, 2400);

/* ---------- 3D tilt on cards ---------- */
let tiltEl = null;
document.addEventListener('mousemove', e => {
  const el = e.target.closest('.card,.post,.member,.sc,.step');
  if (tiltEl && tiltEl !== el) tiltEl.style.transform = '';
  tiltEl = el; if (!el) return;
  const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  el.style.transform = `perspective(800px) rotateY(${x * -8}deg) rotateX(${y * 8}deg) translateY(-6px)`;
});
document.addEventListener('mouseleave', () => { if (tiltEl) tiltEl.style.transform = ''; });

/* ---------- Progress bar + back to top ---------- */
const bar = document.getElementById('progress'), toTop = document.getElementById('totop');
window.addEventListener('scroll', () => {
  const d = document.documentElement;
  bar.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + '%';
  toTop.classList.toggle('show', d.scrollTop > 500);
});
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: .15 });
function observe() { document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el)); }

/* ---------- Counters ---------- */
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count, t0 = performance.now(), dur = 1800;
    const tick = t => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.floor(end * (1 - Math.pow(1 - p, 3))).toLocaleString('ar-EG');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: .6 });
document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));

renderPosts();

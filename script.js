const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('.service-card, .experience-title, .experience-copy, .showcase-large, .showcase-small, .visit-panel');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

const languageButton = document.querySelector('.lang-toggle');
const translations = {
  en: {
    navServices: 'Services', navExperience: 'Experience', navContact: 'Contact', book: 'Book a visit',
    eyebrow: 'AUTOMOTIVE DETAILING', hero: 'WHERE<br><em>DETAILS</em><br>MATTER.',
    heroSub: 'Precision care for vehicles that deserve more than a quick clean.',
    standard: '01 / THE STANDARD', display: 'Clean is expected.<br><span>Exceptional is detailed.</span>',
    intro: 'Detailer is built around precision, presentation and the small things that change the way a vehicle looks and feels. Every finish starts with careful preparation and ends with a surface worth looking at twice.',
    services: '02 / SERVICES', servicesNote: 'A focused approach to exterior finish, protection and presentation.',
    exterior: 'Exterior<br>Detailing', exteriorP: 'Carefully prepared exterior surfaces with attention to finish, cleanliness and presentation.',
    correction: 'Paint<br>Correction', correctionP: 'Refined paintwork focused on clarity, gloss and a cleaner, more controlled finish.',
    protection: 'Protection &<br>Finish', protectionP: 'Professional finishing designed to preserve the look and feel of carefully maintained paintwork.',
    kuwait: 'DETAILER / KUWAIT', statement: 'Precision<br>you can <em>see.</em>',
    statementP: 'From the first reflection to the final inspection, every surface gets the attention it deserves.',
    experience: '03 / THE EXPERIENCE', experienceTitle: 'More than<br><em>clean.</em>',
    experienceP: 'Step into a clean, considered environment where the vehicle remains the focus. Bright inspection lighting, precise work and a professional setting come together to make the detailing process feel as premium as the result.',
    precision: 'Precision', precisionP: 'Detail-led work', presentation: 'Presentation', presentationP: 'Finish-led results', care: 'Care', careP: 'Handled properly',
    finish: '04 / THE FINISH', finishP: 'Photography will live here. The layout is already built for the final image set.',
    visit: '05 / VISIT DETAILER', visitTitle: 'Bring your<br><em>vehicle.</em>',
    visitP: 'Professional detailing in a dedicated environment. Contact Detailer for appointments, service information and availability.',
    directions: 'Get directions', footerServices:'Services', footerExperience:'Experience', footerContact:'Contact'
  },
  ar: {
    navServices: 'الخدمات', navExperience: 'التجربة', navContact: 'تواصل معنا', book: 'احجز موعداً',
    eyebrow: 'العناية الاحترافية بالسيارات', hero: 'حيث<br><em>التفاصيل</em><br>تصنع الفرق.',
    heroSub: 'عناية دقيقة لسيارات تستحق أكثر من مجرد تنظيف سريع.',
    standard: '01 / المعايير', display: 'النظافة متوقعة.<br><span>والتميّز في التفاصيل.</span>',
    intro: 'يعتمد ديتيلر على الدقة، وحسن المظهر، والتفاصيل الصغيرة التي تغيّر شكل السيارة وإحساسها. تبدأ كل نتيجة بتحضير دقيق وتنتهي بسطح يستحق نظرة ثانية.',
    services: '02 / الخدمات', servicesNote: 'نهج دقيق للعناية بالمظهر الخارجي والحماية واللمسة النهائية.',
    exterior: 'العناية<br>الخارجية', exteriorP: 'تحضير دقيق للأسطح الخارجية مع اهتمام باللمعان والنظافة والمظهر النهائي.',
    correction: 'تصحيح<br>الطلاء', correctionP: 'تحسين الطلاء للارتقاء بصفائه ولمعانه والوصول إلى نتيجة أكثر نقاءً.',
    protection: 'الحماية<br>واللمسة النهائية', protectionP: 'تشطيب احترافي يساعد على الحفاظ على مظهر الطلاء الذي تمت العناية به بعناية.',
    kuwait: 'ديتيلر / الكويت', statement: 'دقة<br>يمكنك <em>رؤيتها.</em>',
    statementP: 'من أول انعكاس إلى الفحص النهائي، كل سطح يحصل على العناية التي يستحقها.',
    experience: '03 / التجربة', experienceTitle: 'أكثر من<br><em>مجرد تنظيف.</em>',
    experienceP: 'ادخل إلى بيئة نظيفة ومدروسة يبقى فيها تركيزنا على السيارة. إضاءة فحص واضحة، عمل دقيق ومكان احترافي يجتمعون ليجعلوا تجربة العناية بمستوى النتيجة.',
    precision: 'الدقة', precisionP: 'عمل يهتم بالتفاصيل', presentation: 'المظهر', presentationP: 'نتيجة تهتم باللمسة النهائية', care: 'العناية', careP: 'تعامل احترافي',
    finish: '04 / اللمسة النهائية', finishP: 'ستُعرض الصور هنا. التصميم جاهز لاستقبال مجموعة الصور النهائية.',
    visit: '05 / زوروا ديتيلر', visitTitle: 'أحضر<br><em>سيارتك.</em>',
    visitP: 'عناية احترافية بالسيارات في بيئة مخصصة. تواصل مع ديتيلر للمواعيد ومعلومات الخدمات والتوافر.',
    directions: 'احصل على الاتجاهات', footerServices:'الخدمات', footerExperience:'التجربة', footerContact:'تواصل معنا'
  }
};

function applyLanguage(lang){
  const t=translations[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  const set=(selector,value)=>{const el=document.querySelector(selector); if(el) el.innerHTML=value;};
  set('.nav-links a:nth-child(1)',t.navServices); set('.nav-links a:nth-child(2)',t.navExperience); set('.nav-links a:nth-child(3)',t.navContact);
  set('.nav-cta',t.book+' <span>↗</span>'); set('.eyebrow', '<span></span> '+t.eyebrow);
  set('.hero h1',t.hero); set('.hero-bottom p',t.heroSub); set('.section-kicker',t.standard);
  set('.display',t.display); set('.body-copy',t.intro);
  set('.services .section-kicker',t.services); set('.section-note',t.servicesNote);
  set('.service-card:nth-child(1) h2',t.exterior); set('.service-card:nth-child(1) p',t.exteriorP);
  set('.service-card:nth-child(2) h2',t.correction); set('.service-card:nth-child(2) p',t.correctionP);
  set('.service-card:nth-child(3) h2',t.protection); set('.service-card:nth-child(3) p',t.protectionP);
  set('.statement-small',t.kuwait); set('.statement h2',t.statement); set('.statement-copy',t.statementP);
  set('.experience > .section-kicker',t.experience); set('.experience-title p',t.experienceTitle); set('.experience-copy > p',t.experienceP);
  set('.facts div:nth-child(1) strong',t.precision); set('.facts div:nth-child(1) small',t.precisionP);
  set('.facts div:nth-child(2) strong',t.presentation); set('.facts div:nth-child(2) small',t.presentationP);
  set('.facts div:nth-child(3) strong',t.care); set('.facts div:nth-child(3) small',t.careP);
  set('.showcase .section-kicker',t.finish); set('.showcase-head p',t.finishP);
  set('.visit .section-kicker',t.visit); set('.visit h2',t.visitTitle); set('.visit-copy > p',t.visitP);
  set('.button-dark',t.book+' <span>↗</span>'); set('.text-link',t.directions+' <span>↗</span>');
  set('.footer-links a:nth-child(1)',t.footerServices); set('.footer-links a:nth-child(2)',t.footerExperience); set('.footer-links a:nth-child(3)',t.footerContact);
  languageButton.textContent=lang==='en'?'العربية':'English';
  localStorage.setItem('detailer-language',lang);
}
const savedLanguage=localStorage.getItem('detailer-language') || 'en';
applyLanguage(savedLanguage);
languageButton?.addEventListener('click',()=>applyLanguage(document.documentElement.lang==='en'?'ar':'en'));

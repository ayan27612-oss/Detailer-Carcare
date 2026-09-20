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
    navServices: 'Services', navExperience: 'Experience', navContact: 'Contact', heroLocation:'SHUWAIKH INDUSTRIAL / KUWAIT', since:'SINCE 2018', book: 'Book a visit',
    eyebrow: 'AUTOMOTIVE DETAILING', hero: 'WHERE<br><em>DETAILS</em><br>MATTER.',
    heroSub: 'Precision care for vehicles that deserve more than a quick clean.',
    standard: '01 / THE STANDARD', display: 'Clean is expected.<br><span>Exceptional is detailed.</span>',
    intro: 'Detailer is built around precision, presentation and the small things that change the way a vehicle looks and feels. Every finish starts with careful preparation and ends with a surface worth looking at twice.',
    services: '02 / SERVICES', servicesNote: 'A focused approach to exterior finish, protection and presentation.',
    exterior: 'PPF<br>& Protection', exteriorP: 'Paint protection and finishing focused on preserving the vehicle’s surface and appearance.',
    correction: 'Window<br>Tint', correctionP: 'Professional window tinting for a cleaner look, added privacy and a refined finish.',
    protection: 'Paint &<br>Detailing', protectionP: 'Careful polishing, detailing and finishing work for a cleaner, sharper vehicle presentation.',
    kuwait: 'DETAILER / KUWAIT', statement: 'Precision<br>you can <em>see.</em>',
    statementP: 'From the first reflection to the final inspection, every surface gets the attention it deserves.',
    experience: '03 / THE EXPERIENCE', experienceTitle: 'More than<br><em>clean.</em>',
    experienceP: 'Step into a clean, considered environment where the vehicle remains the focus. Bright inspection lighting, precise work and a professional setting come together to make the detailing process feel as premium as the result.',
    precision: 'Precision', precisionP: 'Detail-led work', presentation: 'Presentation', presentationP: 'Finish-led results', care: 'Care', careP: 'Handled properly',
    finish: '04 / THE FINISH', finishP: 'Precision work, clean finishes and a closer look at what goes into every detail.',
    visit: '05 / VISIT DETAILER', visitTitle: 'Bring your<br><em>vehicle.</em>',
    visitP: 'Professional detailing in Shuwaikh Industrial, Kuwait. Book directly through WhatsApp or contact the team for service information and availability.',
    directions: 'Get directions', instagram:'INSTAGRAM', whatsapp:'WHATSAPP', call:'CALL DETAILER', footerServices:'Services', footerExperience:'Experience', footerContact:'Contact'
  },
  ar: {
    navServices: 'الخدمات', navExperience: 'التجربة', navContact: 'تواصل معنا', heroLocation:'الشويخ الصناعية / الكويت', since:'منذ 2018', book: 'احجز موعداً',
    eyebrow: 'العناية الاحترافية بالسيارات', hero: 'حيث<br><em>التفاصيل</em><br>تصنع الفرق.',
    heroSub: 'عناية دقيقة لسيارات تستحق أكثر من مجرد تنظيف سريع.',
    standard: '01 / المعايير', display: 'النظافة متوقعة.<br><span>والتميّز في التفاصيل.</span>',
    intro: 'يعتمد ديتيلر على الدقة، وحسن المظهر، والتفاصيل الصغيرة التي تغيّر شكل السيارة وإحساسها. تبدأ كل نتيجة بتحضير دقيق وتنتهي بسطح يستحق نظرة ثانية.',
    services: '02 / الخدمات', servicesNote: 'نهج دقيق للعناية بالمظهر الخارجي والحماية واللمسة النهائية.',
    exterior: 'حماية<br>الطلاء PPF', exteriorP: 'حماية وتشطيب احترافيان للمحافظة على سطح السيارة ومظهرها.',
    correction: 'تظليل<br>النوافذ', correctionP: 'تظليل احترافي للنوافذ يمنح السيارة مظهراً أنظف وخصوصية ولمسة نهائية أنيقة.',
    protection: 'طلاء<br>وتفصيل', protectionP: 'تلميع وعناية وتشطيب دقيق لمظهر أنظف وأكثر أناقة للسيارة.',
    kuwait: 'ديتيلر / الكويت', statement: 'دقة<br>يمكنك <em>رؤيتها.</em>',
    statementP: 'من أول انعكاس إلى الفحص النهائي، كل سطح يحصل على العناية التي يستحقها.',
    experience: '03 / التجربة', experienceTitle: 'أكثر من<br><em>مجرد تنظيف.</em>',
    experienceP: 'ادخل إلى بيئة نظيفة ومدروسة يبقى فيها تركيزنا على السيارة. إضاءة فحص واضحة، عمل دقيق ومكان احترافي يجتمعون ليجعلوا تجربة العناية بمستوى النتيجة.',
    precision: 'الدقة', precisionP: 'عمل يهتم بالتفاصيل', presentation: 'المظهر', presentationP: 'نتيجة تهتم باللمسة النهائية', care: 'العناية', careP: 'تعامل احترافي',
    finish: '04 / اللمسة النهائية', finishP: 'عمل دقيق، لمسات نهائية نظيفة ونظرة أقرب على التفاصيل التي تدخل في كل خدمة.',
    visit: '05 / زوروا ديتيلر', visitTitle: 'أحضر<br><em>سيارتك.</em>',
    visitP: 'عناية احترافية بالسيارات في الشويخ الصناعية، الكويت. احجز مباشرة عبر واتساب أو تواصل معنا لمعرفة الخدمات والمواعيد المتاحة.',
    directions: 'احصل على الاتجاهات', instagram:'إنستغرام', whatsapp:'واتساب', call:'اتصل بديتيلر', footerServices:'الخدمات', footerExperience:'التجربة', footerContact:'تواصل معنا'
  }
};

function applyLanguage(lang){
  const t=translations[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  const set=(selector,value)=>{const el=document.querySelector(selector); if(el) el.innerHTML=value;};
  set('.nav-links a:nth-child(1)',t.navServices); set('.nav-links a:nth-child(2)',t.navExperience); set('.nav-links a:nth-child(3)',t.navContact);
  set('.nav-cta',t.book+' <span>↗</span>'); set('.eyebrow', '<span></span> '+t.eyebrow); set('.hero-location',t.heroLocation); set('.hero-side-note span:last-child',t.since);
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
  set('.button-dark',t.book+' <span>↗</span>'); set('.text-link',t.directions+' <span>↗</span>'); set('.contact-item:nth-child(1) .contact-detail small',t.instagram); set('.contact-item:nth-child(2) .contact-detail small',t.whatsapp); set('.contact-item:nth-child(3) .contact-detail small',t.call);
  set('.footer-links a:nth-child(1)',t.footerServices); set('.footer-links a:nth-child(2)',t.footerExperience); set('.footer-links a:nth-child(3)',t.footerContact);
  languageButton.textContent=lang==='en'?'العربية':'English';
  localStorage.setItem('detailer-language',lang);
}
const savedLanguage=localStorage.getItem('detailer-language') || 'en';
applyLanguage(savedLanguage);
languageButton?.addEventListener('click',()=>applyLanguage(document.documentElement.lang==='en'?'ar':'en'));

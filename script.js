(() => {
  const modal = document.getElementById('leadModal');
  const form = document.getElementById('leadForm');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }
  if (modal && form) {
    const closeButtons = modal.querySelectorAll('[data-close]');
    const show = () => { modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; };
    const hide = () => { modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
    document.querySelectorAll('.open-form, a[href="#enquire"]').forEach(el => el.addEventListener('click', e => {
      if (el.getAttribute('href') === '#enquire') e.preventDefault(); show();
    }));
    closeButtons.forEach(el => el.addEventListener('click',hide));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')hide();});
    form.addEventListener('submit',e=>{
      e.preventDefault(); if(!form.reportValidity())return;
      const name=document.getElementById('leadName').value.trim();
      const phone=document.getElementById('leadPhone').value.trim();
      const size=document.getElementById('plotSize').value;
      const message=`Hello, I am interested in Ganga Rivera, Brij Ghat.\nName: ${name}\nMobile: ${phone}\nPreferred plot size: ${size}\nPlease call me with current price, availability and site visit details.`;
      window.open(`https://wa.me/918851386063?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
      hide(); form.reset();
    });
  }
  document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
})();
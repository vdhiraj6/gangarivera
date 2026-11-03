(() => {
  const modal = document.getElementById('leadModal');
  const form = document.getElementById('leadForm');
  const openers = document.querySelectorAll('.open-form, a[href="#enquire"]');
  const closeButtons = modal.querySelectorAll('[data-close]');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav nav');
  const showModal = () => { modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; setTimeout(() => document.getElementById('leadName').focus(),100); };
  const hideModal = () => { modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
  openers.forEach(el => el.addEventListener('click', e => { if (el.getAttribute('href') === '#enquire') e.preventDefault(); showModal(); }));
  closeButtons.forEach(el => el.addEventListener('click', hideModal));
  document.addEventListener('keydown', e => { if(e.key === 'Escape') hideModal(); });
  menuToggle.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(isOpen)); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const name = document.getElementById('leadName').value.trim();
    const phone = document.getElementById('leadPhone').value.trim();
    const size = document.getElementById('plotSize').value;
    const message = `Hello, I am interested in Ganga Rivera, Brij Ghat.\nName: ${name}\nMobile: ${phone}\nPreferred plot size: ${size}\nPlease call me with current price, availability and site visit details.`;
    window.open(`https://wa.me/918851386063?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    hideModal();
    form.reset();
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  // One-time callback prompt per browser tab; visitor can close it without being interrupted again.
  if (!sessionStorage.getItem('grLeadPromptSeen')) {
    setTimeout(() => { if (!modal.classList.contains('show')) showModal(); sessionStorage.setItem('grLeadPromptSeen','1'); }, 9000);
  }
})();

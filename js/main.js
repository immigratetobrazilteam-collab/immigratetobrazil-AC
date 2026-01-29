/** AC JS - Rio Branco - Nature-serene with green gradients and curves */
const STATE_CONFIG = {
  stateCode: 'ac',
  capital: 'Rio Branco',
  formspreeUrl: 'https://formspree.io/f/xeeqbddb',
  colors: { primary: '#2d5016', secondary: '#4a7c2f', accent: '#8fbc8f' },
  animations: {"enabled": true, "header": {"type": "fadeIn", "duration": "0.8s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "fadeSlideUp", "duration": "1s", "easing": "ease-out", "stagger": "0.2s"}, "hero": {"type": "parallax", "speed": 0.5, "direction": "vertical"}, "cards": {"type": "hoverLift", "scale": 1.03, "shadow": "elevated"}, "images": {"type": "lazyLoad", "effect": "fade", "threshold": 0.2}},
  interactions: {"hover": "subtle-lift", "scroll": "smooth-reveal", "transitions": "organic-fade", "click": "gentle-ripple"},
  premiumEffects: ["leaf-particles", "nature-gradient", "soft-shadows", "ambient-light"]
};

const SECTIONS = ["ac-index-section--map", "ac-index-section-frequently-asked-questions-about-living-in-", "ac-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});

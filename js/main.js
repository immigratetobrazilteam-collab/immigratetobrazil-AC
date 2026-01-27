
// Master JS for State: AC - Persona: Remote Explorer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 800;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const ac_index_section_immigrate_to_acre = document.getElementById('ac-index-section-immigrate-to-acre');
  if (ac_index_section_immigrate_to_acre) {
    gsap.fromTo('#ac-index-section-immigrate-to-acre', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_form_immigrate_to_acre = document.getElementById('ac-index-form-immigrate-to-acre');
  if (ac_index_form_immigrate_to_acre) {
    gsap.from('#ac-index-form-immigrate-to-acre input, #ac-index-form-immigrate-to-acre textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_state_vibe = document.getElementById('ac-index-section-state-vibe');
  if (ac_index_section_state_vibe) {
    gsap.fromTo('#ac-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_quick_facts_snapshot = document.getElementById('ac-index-section-quick-facts-snapshot');
  if (ac_index_section_quick_facts_snapshot) {
    gsap.fromTo('#ac-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_acre_map = document.getElementById('ac-index-section-acre-map');
  if (ac_index_section_acre_map) {
    gsap.fromTo('#ac-index-section-acre-map', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_cost_of_living_acre = document.getElementById('ac-index-section-cost-of-living-acre');
  if (ac_index_section_cost_of_living_acre) {
    gsap.fromTo('#ac-index-section-cost-of-living-acre', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_government_context = document.getElementById('ac-index-section-government-context');
  if (ac_index_section_government_context) {
    gsap.fromTo('#ac-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_hero_immigration_notes = document.getElementById('ac-index-hero-immigration-notes');
  if (ac_index_hero_immigration_notes) {
    gsap.fromTo('#ac-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_common_applicant_profiles = document.getElementById('ac-index-list-common-applicant-profiles');
  if (ac_index_list_common_applicant_profiles) {
    gsap.from('#ac-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_economic_drivers = document.getElementById('ac-index-list-economic-drivers');
  if (ac_index_list_economic_drivers) {
    gsap.from('#ac-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_demographics = document.getElementById('ac-index-section-demographics');
  if (ac_index_section_demographics) {
    gsap.fromTo('#ac-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_regional_challenges = document.getElementById('ac-index-section-regional-challenges');
  if (ac_index_section_regional_challenges) {
    gsap.fromTo('#ac-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_regional_opportunities = document.getElementById('ac-index-section-regional-opportunities');
  if (ac_index_section_regional_opportunities) {
    gsap.fromTo('#ac-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_culture_daily_life = document.getElementById('ac-index-section-culture-daily-life');
  if (ac_index_section_culture_daily_life) {
    gsap.fromTo('#ac-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_local_language_expressions = document.getElementById('ac-index-list-local-language-expressions');
  if (ac_index_list_local_language_expressions) {
    gsap.from('#ac-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_food_cuisine = document.getElementById('ac-index-list-food-cuisine');
  if (ac_index_list_food_cuisine) {
    gsap.from('#ac-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_festivals_traditions = document.getElementById('ac-index-list-festivals-traditions');
  if (ac_index_list_festivals_traditions) {
    gsap.from('#ac-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_music_artistic_expression = document.getElementById('ac-index-list-music-artistic-expression');
  if (ac_index_list_music_artistic_expression) {
    gsap.from('#ac-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_sports_recreation = document.getElementById('ac-index-list-sports-recreation');
  if (ac_index_list_sports_recreation) {
    gsap.from('#ac-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_landmarks_historical_sites = document.getElementById('ac-index-list-landmarks-historical-sites');
  if (ac_index_list_landmarks_historical_sites) {
    gsap.from('#ac-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_natural_features = document.getElementById('ac-index-list-natural-features');
  if (ac_index_list_natural_features) {
    gsap.from('#ac-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_parks_protected_areas = document.getElementById('ac-index-list-parks-protected-areas');
  if (ac_index_list_parks_protected_areas) {
    gsap.from('#ac-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_museums_cultural_institutions = document.getElementById('ac-index-list-museums-cultural-institutions');
  if (ac_index_list_museums_cultural_institutions) {
    gsap.from('#ac-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_image_gallery = document.getElementById('ac-index-section-image-gallery');
  if (ac_index_section_image_gallery) {
    gsap.fromTo('#ac-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_useful_government_links = document.getElementById('ac-index-section-useful-government-links');
  if (ac_index_section_useful_government_links) {
    gsap.fromTo('#ac-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_hero_federal_police_immigration_links = document.getElementById('ac-index-hero-federal-police-immigration-links');
  if (ac_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#ac-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_external_references = document.getElementById('ac-index-section-external-references');
  if (ac_index_section_external_references) {
    gsap.fromTo('#ac-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_immigration_services_overview = document.getElementById('ac-index-list-immigration-services-overview');
  if (ac_index_list_immigration_services_overview) {
    gsap.from('#ac-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section_why_immigrate_here = document.getElementById('ac-index-section-why-immigrate-here');
  if (ac_index_section_why_immigrate_here) {
    gsap.fromTo('#ac-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_travel_services = document.getElementById('ac-index-list-travel-services');
  if (ac_index_list_travel_services) {
    gsap.from('#ac-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_list_how_the_process_works = document.getElementById('ac-index-list-how-the-process-works');
  if (ac_index_list_how_the_process_works) {
    gsap.from('#ac-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_index_section__frequently_asked_questions_about_living_in_acre_ = document.getElementById('ac-index-section--frequently-asked-questions-about-living-in-acre-');
  if (ac_index_section__frequently_asked_questions_about_living_in_acre_) {
    gsap.fromTo('#ac-index-section--frequently-asked-questions-about-living-in-acre-', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_contactcta_section_get_started_in_acre = document.getElementById('ac-contactcta-section-get-started-in-acre');
  if (ac_contactcta_section_get_started_in_acre) {
    gsap.fromTo('#ac-contactcta-section-get-started-in-acre', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('ac-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (ac_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#ac-renouncingcitizenship-form-renounce-brazilian-citizenship input, #ac-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_list_quick_facts = document.getElementById('ac-renouncingcitizenship-list-quick-facts');
  if (ac_renouncingcitizenship_list_quick_facts) {
    gsap.from('#ac-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('ac-renouncingcitizenship-list-common-challenges-applicants-face');
  if (ac_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ac-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('ac-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (ac_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ac-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_renunciation_overview = document.getElementById('ac-renouncingcitizenship-section-renunciation-overview');
  if (ac_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#ac-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_form_who_is_this_for = document.getElementById('ac-renouncingcitizenship-form-who-is-this-for');
  if (ac_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#ac-renouncingcitizenship-form-who-is-this-for input, #ac-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_list_required_documents = document.getElementById('ac-renouncingcitizenship-list-required-documents');
  if (ac_renouncingcitizenship_list_required_documents) {
    gsap.from('#ac-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_list_process = document.getElementById('ac-renouncingcitizenship-list-process');
  if (ac_renouncingcitizenship_list_process) {
    gsap.from('#ac-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_timelines_deadlines = document.getElementById('ac-renouncingcitizenship-section-timelines-deadlines');
  if (ac_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ac-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_fees_costs = document.getElementById('ac-renouncingcitizenship-section-fees-costs');
  if (ac_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#ac-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('ac-renouncingcitizenship-list-risks-common-mistakes');
  if (ac_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#ac-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('ac-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (ac_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_acre_specific_context = document.getElementById('ac-renouncingcitizenship-section-acre-specific-context');
  if (ac_renouncingcitizenship_section_acre_specific_context) {
    gsap.fromTo('#ac-renouncingcitizenship-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_what_our_clients_say = document.getElementById('ac-renouncingcitizenship-section-what-our-clients-say');
  if (ac_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ac-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('ac-renouncingcitizenship-section-frequently-asked-questions');
  if (ac_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ac-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_international_support = document.getElementById('ac-renouncingcitizenship-section-international-support');
  if (ac_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#ac-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_list_our_credentials = document.getElementById('ac-renouncingcitizenship-list-our-credentials');
  if (ac_renouncingcitizenship_list_our_credentials) {
    gsap.from('#ac-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_list_related_services = document.getElementById('ac-renouncingcitizenship-list-related-services');
  if (ac_renouncingcitizenship_list_related_services) {
    gsap.from('#ac-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('ac-renouncingcitizenship-section-youre-in-good-hands');
  if (ac_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ac-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_renouncingcitizenship_section_21 = document.getElementById('ac-renouncingcitizenship-section-21');
  if (ac_renouncingcitizenship_section_21) {
    gsap.fromTo('#ac-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('ac-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (ac_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#ac-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #ac-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_list_quick_facts = document.getElementById('ac-provisional-list-quick-facts');
  if (ac_provisional_list_quick_facts) {
    gsap.from('#ac-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_list_common_challenges_applicants_face = document.getElementById('ac-provisional-list-common-challenges-applicants-face');
  if (ac_provisional_list_common_challenges_applicants_face) {
    gsap.from('#ac-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_list_how_we_solve_these_challenges = document.getElementById('ac-provisional-list-how-we-solve-these-challenges');
  if (ac_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#ac-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_naturalisation_overview = document.getElementById('ac-provisional-section-naturalisation-overview');
  if (ac_provisional_section_naturalisation_overview) {
    gsap.fromTo('#ac-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_form_who_is_this_naturalisation_for = document.getElementById('ac-provisional-form-who-is-this-naturalisation-for');
  if (ac_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#ac-provisional-form-who-is-this-naturalisation-for input, #ac-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_list_required_documents = document.getElementById('ac-provisional-list-required-documents');
  if (ac_provisional_list_required_documents) {
    gsap.from('#ac-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_list_application_process = document.getElementById('ac-provisional-list-application-process');
  if (ac_provisional_list_application_process) {
    gsap.from('#ac-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_timelines_deadlines = document.getElementById('ac-provisional-section-timelines-deadlines');
  if (ac_provisional_section_timelines_deadlines) {
    gsap.fromTo('#ac-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_fees_costs = document.getElementById('ac-provisional-section-fees-costs');
  if (ac_provisional_section_fees_costs) {
    gsap.fromTo('#ac-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_list_risks_common_mistakes = document.getElementById('ac-provisional-list-risks-common-mistakes');
  if (ac_provisional_list_risks_common_mistakes) {
    gsap.from('#ac-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_diy_vs_professional_assistance = document.getElementById('ac-provisional-section-diy-vs-professional-assistance');
  if (ac_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_acre_specific_context = document.getElementById('ac-provisional-section-acre-specific-context');
  if (ac_provisional_section_acre_specific_context) {
    gsap.fromTo('#ac-provisional-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_what_our_clients_say = document.getElementById('ac-provisional-section-what-our-clients-say');
  if (ac_provisional_section_what_our_clients_say) {
    gsap.fromTo('#ac-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_frequently_asked_questions = document.getElementById('ac-provisional-section-frequently-asked-questions');
  if (ac_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#ac-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_international_support = document.getElementById('ac-provisional-section-international-support');
  if (ac_provisional_section_international_support) {
    gsap.fromTo('#ac-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_list_our_credentials = document.getElementById('ac-provisional-list-our-credentials');
  if (ac_provisional_list_our_credentials) {
    gsap.from('#ac-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_list_related_services = document.getElementById('ac-provisional-list-related-services');
  if (ac_provisional_list_related_services) {
    gsap.from('#ac-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_youre_in_good_hands = document.getElementById('ac-provisional-section-youre-in-good-hands');
  if (ac_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#ac-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_provisional_section_21 = document.getElementById('ac-provisional-section-21');
  if (ac_provisional_section_21) {
    gsap.fromTo('#ac-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('ac-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (ac_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#ac-special-form-special-naturalisation-in-brazil-for-particular-cases input, #ac-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_list_quick_facts = document.getElementById('ac-special-list-quick-facts');
  if (ac_special_list_quick_facts) {
    gsap.from('#ac-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_list_common_challenges_applicants_face = document.getElementById('ac-special-list-common-challenges-applicants-face');
  if (ac_special_list_common_challenges_applicants_face) {
    gsap.from('#ac-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_list_how_we_solve_these_challenges = document.getElementById('ac-special-list-how-we-solve-these-challenges');
  if (ac_special_list_how_we_solve_these_challenges) {
    gsap.from('#ac-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_naturalisation_overview = document.getElementById('ac-special-section-naturalisation-overview');
  if (ac_special_section_naturalisation_overview) {
    gsap.fromTo('#ac-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_form_who_is_this_naturalisation_for = document.getElementById('ac-special-form-who-is-this-naturalisation-for');
  if (ac_special_form_who_is_this_naturalisation_for) {
    gsap.from('#ac-special-form-who-is-this-naturalisation-for input, #ac-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_list_required_documents = document.getElementById('ac-special-list-required-documents');
  if (ac_special_list_required_documents) {
    gsap.from('#ac-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_list_application_process = document.getElementById('ac-special-list-application-process');
  if (ac_special_list_application_process) {
    gsap.from('#ac-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_timelines_deadlines = document.getElementById('ac-special-section-timelines-deadlines');
  if (ac_special_section_timelines_deadlines) {
    gsap.fromTo('#ac-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_fees_costs = document.getElementById('ac-special-section-fees-costs');
  if (ac_special_section_fees_costs) {
    gsap.fromTo('#ac-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_list_risks_common_mistakes = document.getElementById('ac-special-list-risks-common-mistakes');
  if (ac_special_list_risks_common_mistakes) {
    gsap.from('#ac-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_diy_vs_professional_assistance = document.getElementById('ac-special-section-diy-vs-professional-assistance');
  if (ac_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_acre_specific_context = document.getElementById('ac-special-section-acre-specific-context');
  if (ac_special_section_acre_specific_context) {
    gsap.fromTo('#ac-special-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_what_our_clients_say = document.getElementById('ac-special-section-what-our-clients-say');
  if (ac_special_section_what_our_clients_say) {
    gsap.fromTo('#ac-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_frequently_asked_questions = document.getElementById('ac-special-section-frequently-asked-questions');
  if (ac_special_section_frequently_asked_questions) {
    gsap.fromTo('#ac-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_international_support = document.getElementById('ac-special-section-international-support');
  if (ac_special_section_international_support) {
    gsap.fromTo('#ac-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_list_our_credentials = document.getElementById('ac-special-list-our-credentials');
  if (ac_special_list_our_credentials) {
    gsap.from('#ac-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_list_related_services = document.getElementById('ac-special-list-related-services');
  if (ac_special_list_related_services) {
    gsap.from('#ac-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_youre_in_good_hands = document.getElementById('ac-special-section-youre-in-good-hands');
  if (ac_special_section_youre_in_good_hands) {
    gsap.fromTo('#ac-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_special_section_21 = document.getElementById('ac-special-section-21');
  if (ac_special_section_21) {
    gsap.fromTo('#ac-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('ac-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (ac_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#ac-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #ac-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_list_quick_facts = document.getElementById('ac-ordinary-list-quick-facts');
  if (ac_ordinary_list_quick_facts) {
    gsap.from('#ac-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_list_common_challenges_applicants_face = document.getElementById('ac-ordinary-list-common-challenges-applicants-face');
  if (ac_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#ac-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_list_how_we_solve_these_challenges = document.getElementById('ac-ordinary-list-how-we-solve-these-challenges');
  if (ac_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ac-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_naturalisation_overview = document.getElementById('ac-ordinary-section-naturalisation-overview');
  if (ac_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#ac-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_form_who_is_this_naturalisation_for = document.getElementById('ac-ordinary-form-who-is-this-naturalisation-for');
  if (ac_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ac-ordinary-form-who-is-this-naturalisation-for input, #ac-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_list_required_documents = document.getElementById('ac-ordinary-list-required-documents');
  if (ac_ordinary_list_required_documents) {
    gsap.from('#ac-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_list_application_process = document.getElementById('ac-ordinary-list-application-process');
  if (ac_ordinary_list_application_process) {
    gsap.from('#ac-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_timelines_deadlines = document.getElementById('ac-ordinary-section-timelines-deadlines');
  if (ac_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#ac-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_fees_costs = document.getElementById('ac-ordinary-section-fees-costs');
  if (ac_ordinary_section_fees_costs) {
    gsap.fromTo('#ac-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_list_risks_common_mistakes = document.getElementById('ac-ordinary-list-risks-common-mistakes');
  if (ac_ordinary_list_risks_common_mistakes) {
    gsap.from('#ac-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_diy_vs_professional_assistance = document.getElementById('ac-ordinary-section-diy-vs-professional-assistance');
  if (ac_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_acre_specific_context = document.getElementById('ac-ordinary-section-acre-specific-context');
  if (ac_ordinary_section_acre_specific_context) {
    gsap.fromTo('#ac-ordinary-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_what_our_clients_say = document.getElementById('ac-ordinary-section-what-our-clients-say');
  if (ac_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#ac-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_frequently_asked_questions = document.getElementById('ac-ordinary-section-frequently-asked-questions');
  if (ac_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ac-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_international_support = document.getElementById('ac-ordinary-section-international-support');
  if (ac_ordinary_section_international_support) {
    gsap.fromTo('#ac-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_list_our_credentials = document.getElementById('ac-ordinary-list-our-credentials');
  if (ac_ordinary_list_our_credentials) {
    gsap.from('#ac-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_list_related_services = document.getElementById('ac-ordinary-list-related-services');
  if (ac_ordinary_list_related_services) {
    gsap.from('#ac-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_youre_in_good_hands = document.getElementById('ac-ordinary-section-youre-in-good-hands');
  if (ac_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ac-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_ordinary_section_21 = document.getElementById('ac-ordinary-section-21');
  if (ac_ordinary_section_21) {
    gsap.fromTo('#ac-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('ac-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (ac_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#ac-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #ac-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_list_quick_facts = document.getElementById('ac-extraordinary-list-quick-facts');
  if (ac_extraordinary_list_quick_facts) {
    gsap.from('#ac-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_list_common_challenges_applicants_face = document.getElementById('ac-extraordinary-list-common-challenges-applicants-face');
  if (ac_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#ac-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_list_how_we_solve_these_challenges = document.getElementById('ac-extraordinary-list-how-we-solve-these-challenges');
  if (ac_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ac-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_naturalisation_overview = document.getElementById('ac-extraordinary-section-naturalisation-overview');
  if (ac_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#ac-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('ac-extraordinary-form-who-is-this-naturalisation-for');
  if (ac_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ac-extraordinary-form-who-is-this-naturalisation-for input, #ac-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_list_required_documents = document.getElementById('ac-extraordinary-list-required-documents');
  if (ac_extraordinary_list_required_documents) {
    gsap.from('#ac-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_list_application_process = document.getElementById('ac-extraordinary-list-application-process');
  if (ac_extraordinary_list_application_process) {
    gsap.from('#ac-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_timelines_deadlines = document.getElementById('ac-extraordinary-section-timelines-deadlines');
  if (ac_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#ac-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_fees_costs = document.getElementById('ac-extraordinary-section-fees-costs');
  if (ac_extraordinary_section_fees_costs) {
    gsap.fromTo('#ac-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_list_risks_common_mistakes = document.getElementById('ac-extraordinary-list-risks-common-mistakes');
  if (ac_extraordinary_list_risks_common_mistakes) {
    gsap.from('#ac-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_diy_vs_professional_assistance = document.getElementById('ac-extraordinary-section-diy-vs-professional-assistance');
  if (ac_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_acre_specific_context = document.getElementById('ac-extraordinary-section-acre-specific-context');
  if (ac_extraordinary_section_acre_specific_context) {
    gsap.fromTo('#ac-extraordinary-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_what_our_clients_say = document.getElementById('ac-extraordinary-section-what-our-clients-say');
  if (ac_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#ac-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_frequently_asked_questions = document.getElementById('ac-extraordinary-section-frequently-asked-questions');
  if (ac_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ac-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_international_support = document.getElementById('ac-extraordinary-section-international-support');
  if (ac_extraordinary_section_international_support) {
    gsap.fromTo('#ac-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_list_our_credentials = document.getElementById('ac-extraordinary-list-our-credentials');
  if (ac_extraordinary_list_our_credentials) {
    gsap.from('#ac-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_list_related_services = document.getElementById('ac-extraordinary-list-related-services');
  if (ac_extraordinary_list_related_services) {
    gsap.from('#ac-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_youre_in_good_hands = document.getElementById('ac-extraordinary-section-youre-in-good-hands');
  if (ac_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ac-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extraordinary_section_21 = document.getElementById('ac-extraordinary-section-21');
  if (ac_extraordinary_section_21) {
    gsap.fromTo('#ac-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('ac-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (ac_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#ac-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #ac-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_list_quick_facts = document.getElementById('ac-reacquisitioncitizenship-list-quick-facts');
  if (ac_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#ac-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('ac-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (ac_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ac-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('ac-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (ac_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ac-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('ac-reacquisitioncitizenship-section-reacquisition-overview');
  if (ac_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('ac-reacquisitioncitizenship-form-who-is-this-for');
  if (ac_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#ac-reacquisitioncitizenship-form-who-is-this-for input, #ac-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_list_required_documents = document.getElementById('ac-reacquisitioncitizenship-list-required-documents');
  if (ac_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#ac-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_list_process = document.getElementById('ac-reacquisitioncitizenship-list-process');
  if (ac_reacquisitioncitizenship_list_process) {
    gsap.from('#ac-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('ac-reacquisitioncitizenship-section-timelines-deadlines');
  if (ac_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_fees_costs = document.getElementById('ac-reacquisitioncitizenship-section-fees-costs');
  if (ac_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('ac-reacquisitioncitizenship-list-risks-common-mistakes');
  if (ac_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#ac-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('ac-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (ac_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_acre_specific_context = document.getElementById('ac-reacquisitioncitizenship-section-acre-specific-context');
  if (ac_reacquisitioncitizenship_section_acre_specific_context) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('ac-reacquisitioncitizenship-section-what-our-clients-say');
  if (ac_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('ac-reacquisitioncitizenship-section-frequently-asked-questions');
  if (ac_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_international_support = document.getElementById('ac-reacquisitioncitizenship-section-international-support');
  if (ac_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_list_our_credentials = document.getElementById('ac-reacquisitioncitizenship-list-our-credentials');
  if (ac_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#ac-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_list_related_services = document.getElementById('ac-reacquisitioncitizenship-list-related-services');
  if (ac_reacquisitioncitizenship_list_related_services) {
    gsap.from('#ac-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('ac-reacquisitioncitizenship-section-youre-in-good-hands');
  if (ac_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_reacquisitioncitizenship_section_21 = document.getElementById('ac-reacquisitioncitizenship-section-21');
  if (ac_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#ac-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('ac-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (ac_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#ac-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #ac-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_list_quick_facts = document.getElementById('ac-scientificresearch-list-quick-facts');
  if (ac_scientificresearch_list_quick_facts) {
    gsap.from('#ac-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_list_common_challenges_applicants_face = document.getElementById('ac-scientificresearch-list-common-challenges-applicants-face');
  if (ac_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#ac-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('ac-scientificresearch-list-how-we-solve-these-challenges');
  if (ac_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#ac-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_residency_overview = document.getElementById('ac-scientificresearch-section-residency-overview');
  if (ac_scientificresearch_section_residency_overview) {
    gsap.fromTo('#ac-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_form_who_is_this_residency_for = document.getElementById('ac-scientificresearch-form-who-is-this-residency-for');
  if (ac_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#ac-scientificresearch-form-who-is-this-residency-for input, #ac-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_list_required_documents = document.getElementById('ac-scientificresearch-list-required-documents');
  if (ac_scientificresearch_list_required_documents) {
    gsap.from('#ac-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_list_application_process = document.getElementById('ac-scientificresearch-list-application-process');
  if (ac_scientificresearch_list_application_process) {
    gsap.from('#ac-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_timelines_deadlines = document.getElementById('ac-scientificresearch-section-timelines-deadlines');
  if (ac_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#ac-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_fees_costs = document.getElementById('ac-scientificresearch-section-fees-costs');
  if (ac_scientificresearch_section_fees_costs) {
    gsap.fromTo('#ac-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_list_risks_common_mistakes = document.getElementById('ac-scientificresearch-list-risks-common-mistakes');
  if (ac_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#ac-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('ac-scientificresearch-section-diy-vs-professional-assistance');
  if (ac_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_acre_specific_context = document.getElementById('ac-scientificresearch-section-acre-specific-context');
  if (ac_scientificresearch_section_acre_specific_context) {
    gsap.fromTo('#ac-scientificresearch-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_what_our_clients_say = document.getElementById('ac-scientificresearch-section-what-our-clients-say');
  if (ac_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#ac-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_frequently_asked_questions = document.getElementById('ac-scientificresearch-section-frequently-asked-questions');
  if (ac_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#ac-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_international_support = document.getElementById('ac-scientificresearch-section-international-support');
  if (ac_scientificresearch_section_international_support) {
    gsap.fromTo('#ac-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_list_our_credentials = document.getElementById('ac-scientificresearch-list-our-credentials');
  if (ac_scientificresearch_list_our_credentials) {
    gsap.from('#ac-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_list_related_services = document.getElementById('ac-scientificresearch-list-related-services');
  if (ac_scientificresearch_list_related_services) {
    gsap.from('#ac-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_youre_in_good_hands = document.getElementById('ac-scientificresearch-section-youre-in-good-hands');
  if (ac_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#ac-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_scientificresearch_section_21 = document.getElementById('ac-scientificresearch-section-21');
  if (ac_scientificresearch_section_21) {
    gsap.fromTo('#ac-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_form_study_in_brazil_with_study_residency = document.getElementById('ac-study-form-study-in-brazil-with-study-residency');
  if (ac_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#ac-study-form-study-in-brazil-with-study-residency input, #ac-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_list_quick_facts = document.getElementById('ac-study-list-quick-facts');
  if (ac_study_list_quick_facts) {
    gsap.from('#ac-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_list_common_challenges_applicants_face = document.getElementById('ac-study-list-common-challenges-applicants-face');
  if (ac_study_list_common_challenges_applicants_face) {
    gsap.from('#ac-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_list_how_we_solve_these_challenges = document.getElementById('ac-study-list-how-we-solve-these-challenges');
  if (ac_study_list_how_we_solve_these_challenges) {
    gsap.from('#ac-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_residency_overview = document.getElementById('ac-study-section-residency-overview');
  if (ac_study_section_residency_overview) {
    gsap.fromTo('#ac-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_form_who_is_this_residency_for = document.getElementById('ac-study-form-who-is-this-residency-for');
  if (ac_study_form_who_is_this_residency_for) {
    gsap.from('#ac-study-form-who-is-this-residency-for input, #ac-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_list_required_documents = document.getElementById('ac-study-list-required-documents');
  if (ac_study_list_required_documents) {
    gsap.from('#ac-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_list_application_process = document.getElementById('ac-study-list-application-process');
  if (ac_study_list_application_process) {
    gsap.from('#ac-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_timelines_deadlines = document.getElementById('ac-study-section-timelines-deadlines');
  if (ac_study_section_timelines_deadlines) {
    gsap.fromTo('#ac-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_fees_costs = document.getElementById('ac-study-section-fees-costs');
  if (ac_study_section_fees_costs) {
    gsap.fromTo('#ac-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_list_risks_common_mistakes = document.getElementById('ac-study-list-risks-common-mistakes');
  if (ac_study_list_risks_common_mistakes) {
    gsap.from('#ac-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_diy_vs_professional_assistance = document.getElementById('ac-study-section-diy-vs-professional-assistance');
  if (ac_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_acre_specific_context = document.getElementById('ac-study-section-acre-specific-context');
  if (ac_study_section_acre_specific_context) {
    gsap.fromTo('#ac-study-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_what_our_clients_say = document.getElementById('ac-study-section-what-our-clients-say');
  if (ac_study_section_what_our_clients_say) {
    gsap.fromTo('#ac-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_frequently_asked_questions = document.getElementById('ac-study-section-frequently-asked-questions');
  if (ac_study_section_frequently_asked_questions) {
    gsap.fromTo('#ac-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_international_support = document.getElementById('ac-study-section-international-support');
  if (ac_study_section_international_support) {
    gsap.fromTo('#ac-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_list_our_credentials = document.getElementById('ac-study-list-our-credentials');
  if (ac_study_list_our_credentials) {
    gsap.from('#ac-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_list_related_services = document.getElementById('ac-study-list-related-services');
  if (ac_study_list_related_services) {
    gsap.from('#ac-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_youre_in_good_hands = document.getElementById('ac-study-section-youre-in-good-hands');
  if (ac_study_section_youre_in_good_hands) {
    gsap.fromTo('#ac-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_study_section_21 = document.getElementById('ac-study-section-21');
  if (ac_study_section_21) {
    gsap.fromTo('#ac-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('ac-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (ac_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#ac-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #ac-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_list_quick_facts = document.getElementById('ac-educationalexchange-list-quick-facts');
  if (ac_educationalexchange_list_quick_facts) {
    gsap.from('#ac-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_list_common_challenges_applicants_face = document.getElementById('ac-educationalexchange-list-common-challenges-applicants-face');
  if (ac_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#ac-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('ac-educationalexchange-list-how-we-solve-these-challenges');
  if (ac_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ac-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_residency_overview = document.getElementById('ac-educationalexchange-section-residency-overview');
  if (ac_educationalexchange_section_residency_overview) {
    gsap.fromTo('#ac-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_form_who_is_this_residency_for = document.getElementById('ac-educationalexchange-form-who-is-this-residency-for');
  if (ac_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#ac-educationalexchange-form-who-is-this-residency-for input, #ac-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_list_required_documents = document.getElementById('ac-educationalexchange-list-required-documents');
  if (ac_educationalexchange_list_required_documents) {
    gsap.from('#ac-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_list_application_process = document.getElementById('ac-educationalexchange-list-application-process');
  if (ac_educationalexchange_list_application_process) {
    gsap.from('#ac-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_timelines_deadlines = document.getElementById('ac-educationalexchange-section-timelines-deadlines');
  if (ac_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#ac-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_fees_costs = document.getElementById('ac-educationalexchange-section-fees-costs');
  if (ac_educationalexchange_section_fees_costs) {
    gsap.fromTo('#ac-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_list_risks_common_mistakes = document.getElementById('ac-educationalexchange-list-risks-common-mistakes');
  if (ac_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#ac-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('ac-educationalexchange-section-diy-vs-professional-assistance');
  if (ac_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_acre_specific_context = document.getElementById('ac-educationalexchange-section-acre-specific-context');
  if (ac_educationalexchange_section_acre_specific_context) {
    gsap.fromTo('#ac-educationalexchange-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_what_our_clients_say = document.getElementById('ac-educationalexchange-section-what-our-clients-say');
  if (ac_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#ac-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_frequently_asked_questions = document.getElementById('ac-educationalexchange-section-frequently-asked-questions');
  if (ac_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ac-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_international_support = document.getElementById('ac-educationalexchange-section-international-support');
  if (ac_educationalexchange_section_international_support) {
    gsap.fromTo('#ac-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_list_our_credentials = document.getElementById('ac-educationalexchange-list-our-credentials');
  if (ac_educationalexchange_list_our_credentials) {
    gsap.from('#ac-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_list_related_services = document.getElementById('ac-educationalexchange-list-related-services');
  if (ac_educationalexchange_list_related_services) {
    gsap.from('#ac-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_youre_in_good_hands = document.getElementById('ac-educationalexchange-section-youre-in-good-hands');
  if (ac_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ac-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_educationalexchange_section_21 = document.getElementById('ac-educationalexchange-section-21');
  if (ac_educationalexchange_section_21) {
    gsap.fromTo('#ac-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('ac-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (ac_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#ac-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #ac-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_list_quick_facts = document.getElementById('ac-humanitarian-list-quick-facts');
  if (ac_humanitarian_list_quick_facts) {
    gsap.from('#ac-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_list_common_challenges_applicants_face = document.getElementById('ac-humanitarian-list-common-challenges-applicants-face');
  if (ac_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#ac-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_list_how_we_solve_these_challenges = document.getElementById('ac-humanitarian-list-how-we-solve-these-challenges');
  if (ac_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#ac-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_residency_overview = document.getElementById('ac-humanitarian-section-residency-overview');
  if (ac_humanitarian_section_residency_overview) {
    gsap.fromTo('#ac-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_form_who_is_this_residency_for = document.getElementById('ac-humanitarian-form-who-is-this-residency-for');
  if (ac_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#ac-humanitarian-form-who-is-this-residency-for input, #ac-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_list_required_documents = document.getElementById('ac-humanitarian-list-required-documents');
  if (ac_humanitarian_list_required_documents) {
    gsap.from('#ac-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_list_application_process = document.getElementById('ac-humanitarian-list-application-process');
  if (ac_humanitarian_list_application_process) {
    gsap.from('#ac-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_timelines_deadlines = document.getElementById('ac-humanitarian-section-timelines-deadlines');
  if (ac_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#ac-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_fees_costs = document.getElementById('ac-humanitarian-section-fees-costs');
  if (ac_humanitarian_section_fees_costs) {
    gsap.fromTo('#ac-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_list_risks_common_mistakes = document.getElementById('ac-humanitarian-list-risks-common-mistakes');
  if (ac_humanitarian_list_risks_common_mistakes) {
    gsap.from('#ac-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_diy_vs_professional_assistance = document.getElementById('ac-humanitarian-section-diy-vs-professional-assistance');
  if (ac_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_acre_specific_context = document.getElementById('ac-humanitarian-section-acre-specific-context');
  if (ac_humanitarian_section_acre_specific_context) {
    gsap.fromTo('#ac-humanitarian-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_what_our_clients_say = document.getElementById('ac-humanitarian-section-what-our-clients-say');
  if (ac_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#ac-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_frequently_asked_questions = document.getElementById('ac-humanitarian-section-frequently-asked-questions');
  if (ac_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#ac-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_international_support = document.getElementById('ac-humanitarian-section-international-support');
  if (ac_humanitarian_section_international_support) {
    gsap.fromTo('#ac-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_list_our_credentials = document.getElementById('ac-humanitarian-list-our-credentials');
  if (ac_humanitarian_list_our_credentials) {
    gsap.from('#ac-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_list_related_services = document.getElementById('ac-humanitarian-list-related-services');
  if (ac_humanitarian_list_related_services) {
    gsap.from('#ac-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_youre_in_good_hands = document.getElementById('ac-humanitarian-section-youre-in-good-hands');
  if (ac_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#ac-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_humanitarian_section_21 = document.getElementById('ac-humanitarian-section-21');
  if (ac_humanitarian_section_21) {
    gsap.fromTo('#ac-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('ac-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (ac_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#ac-digitalnomad-form-digital-nomad-residency-in-brazil input, #ac-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_list_quick_facts = document.getElementById('ac-digitalnomad-list-quick-facts');
  if (ac_digitalnomad_list_quick_facts) {
    gsap.from('#ac-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_list_common_challenges_applicants_face = document.getElementById('ac-digitalnomad-list-common-challenges-applicants-face');
  if (ac_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#ac-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('ac-digitalnomad-list-how-we-solve-these-challenges');
  if (ac_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#ac-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_residency_overview = document.getElementById('ac-digitalnomad-section-residency-overview');
  if (ac_digitalnomad_section_residency_overview) {
    gsap.fromTo('#ac-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_form_who_is_this_residency_for = document.getElementById('ac-digitalnomad-form-who-is-this-residency-for');
  if (ac_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#ac-digitalnomad-form-who-is-this-residency-for input, #ac-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_list_required_documents = document.getElementById('ac-digitalnomad-list-required-documents');
  if (ac_digitalnomad_list_required_documents) {
    gsap.from('#ac-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_list_application_process = document.getElementById('ac-digitalnomad-list-application-process');
  if (ac_digitalnomad_list_application_process) {
    gsap.from('#ac-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_timelines_deadlines = document.getElementById('ac-digitalnomad-section-timelines-deadlines');
  if (ac_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#ac-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_fees_costs = document.getElementById('ac-digitalnomad-section-fees-costs');
  if (ac_digitalnomad_section_fees_costs) {
    gsap.fromTo('#ac-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_list_risks_common_mistakes = document.getElementById('ac-digitalnomad-list-risks-common-mistakes');
  if (ac_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#ac-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('ac-digitalnomad-section-diy-vs-professional-assistance');
  if (ac_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_acre_specific_context = document.getElementById('ac-digitalnomad-section-acre-specific-context');
  if (ac_digitalnomad_section_acre_specific_context) {
    gsap.fromTo('#ac-digitalnomad-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_what_our_clients_say = document.getElementById('ac-digitalnomad-section-what-our-clients-say');
  if (ac_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#ac-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_frequently_asked_questions = document.getElementById('ac-digitalnomad-section-frequently-asked-questions');
  if (ac_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#ac-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_international_support = document.getElementById('ac-digitalnomad-section-international-support');
  if (ac_digitalnomad_section_international_support) {
    gsap.fromTo('#ac-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_list_our_credentials = document.getElementById('ac-digitalnomad-list-our-credentials');
  if (ac_digitalnomad_list_our_credentials) {
    gsap.from('#ac-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_list_related_services = document.getElementById('ac-digitalnomad-list-related-services');
  if (ac_digitalnomad_list_related_services) {
    gsap.from('#ac-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_youre_in_good_hands = document.getElementById('ac-digitalnomad-section-youre-in-good-hands');
  if (ac_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#ac-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_digitalnomad_section_21 = document.getElementById('ac-digitalnomad-section-21');
  if (ac_digitalnomad_section_21) {
    gsap.fromTo('#ac-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('ac-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (ac_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#ac-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #ac-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_list_quick_facts = document.getElementById('ac-familyreunion-list-quick-facts');
  if (ac_familyreunion_list_quick_facts) {
    gsap.from('#ac-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_list_common_challenges_applicants_face = document.getElementById('ac-familyreunion-list-common-challenges-applicants-face');
  if (ac_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#ac-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_list_how_we_solve_these_challenges = document.getElementById('ac-familyreunion-list-how-we-solve-these-challenges');
  if (ac_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#ac-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_residency_overview = document.getElementById('ac-familyreunion-section-residency-overview');
  if (ac_familyreunion_section_residency_overview) {
    gsap.fromTo('#ac-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_form_who_is_this_residency_for = document.getElementById('ac-familyreunion-form-who-is-this-residency-for');
  if (ac_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#ac-familyreunion-form-who-is-this-residency-for input, #ac-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_list_required_documents = document.getElementById('ac-familyreunion-list-required-documents');
  if (ac_familyreunion_list_required_documents) {
    gsap.from('#ac-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_list_application_process = document.getElementById('ac-familyreunion-list-application-process');
  if (ac_familyreunion_list_application_process) {
    gsap.from('#ac-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_timelines_deadlines = document.getElementById('ac-familyreunion-section-timelines-deadlines');
  if (ac_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#ac-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_fees_costs = document.getElementById('ac-familyreunion-section-fees-costs');
  if (ac_familyreunion_section_fees_costs) {
    gsap.fromTo('#ac-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_list_risks_common_mistakes = document.getElementById('ac-familyreunion-list-risks-common-mistakes');
  if (ac_familyreunion_list_risks_common_mistakes) {
    gsap.from('#ac-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_diy_vs_professional_assistance = document.getElementById('ac-familyreunion-section-diy-vs-professional-assistance');
  if (ac_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_acre_specific_context = document.getElementById('ac-familyreunion-section-acre-specific-context');
  if (ac_familyreunion_section_acre_specific_context) {
    gsap.fromTo('#ac-familyreunion-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_what_our_clients_say = document.getElementById('ac-familyreunion-section-what-our-clients-say');
  if (ac_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#ac-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_frequently_asked_questions = document.getElementById('ac-familyreunion-section-frequently-asked-questions');
  if (ac_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#ac-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_international_support = document.getElementById('ac-familyreunion-section-international-support');
  if (ac_familyreunion_section_international_support) {
    gsap.fromTo('#ac-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_list_our_credentials = document.getElementById('ac-familyreunion-list-our-credentials');
  if (ac_familyreunion_list_our_credentials) {
    gsap.from('#ac-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_list_related_services = document.getElementById('ac-familyreunion-list-related-services');
  if (ac_familyreunion_list_related_services) {
    gsap.from('#ac-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_youre_in_good_hands = document.getElementById('ac-familyreunion-section-youre-in-good-hands');
  if (ac_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#ac-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_familyreunion_section_21 = document.getElementById('ac-familyreunion-section-21');
  if (ac_familyreunion_section_21) {
    gsap.fromTo('#ac-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('ac-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (ac_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#ac-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #ac-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_list_quick_facts = document.getElementById('ac-mercosul-list-quick-facts');
  if (ac_mercosul_list_quick_facts) {
    gsap.from('#ac-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_list_common_challenges_applicants_face = document.getElementById('ac-mercosul-list-common-challenges-applicants-face');
  if (ac_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#ac-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_list_how_we_solve_these_challenges = document.getElementById('ac-mercosul-list-how-we-solve-these-challenges');
  if (ac_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#ac-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_residency_overview = document.getElementById('ac-mercosul-section-residency-overview');
  if (ac_mercosul_section_residency_overview) {
    gsap.fromTo('#ac-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_form_who_is_this_residency_for = document.getElementById('ac-mercosul-form-who-is-this-residency-for');
  if (ac_mercosul_form_who_is_this_residency_for) {
    gsap.from('#ac-mercosul-form-who-is-this-residency-for input, #ac-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_list_required_documents = document.getElementById('ac-mercosul-list-required-documents');
  if (ac_mercosul_list_required_documents) {
    gsap.from('#ac-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_list_application_process = document.getElementById('ac-mercosul-list-application-process');
  if (ac_mercosul_list_application_process) {
    gsap.from('#ac-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_timelines_deadlines = document.getElementById('ac-mercosul-section-timelines-deadlines');
  if (ac_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#ac-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_fees_costs = document.getElementById('ac-mercosul-section-fees-costs');
  if (ac_mercosul_section_fees_costs) {
    gsap.fromTo('#ac-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_list_risks_common_mistakes = document.getElementById('ac-mercosul-list-risks-common-mistakes');
  if (ac_mercosul_list_risks_common_mistakes) {
    gsap.from('#ac-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_diy_vs_professional_assistance = document.getElementById('ac-mercosul-section-diy-vs-professional-assistance');
  if (ac_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_acre_specific_context = document.getElementById('ac-mercosul-section-acre-specific-context');
  if (ac_mercosul_section_acre_specific_context) {
    gsap.fromTo('#ac-mercosul-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_what_our_clients_say = document.getElementById('ac-mercosul-section-what-our-clients-say');
  if (ac_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#ac-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_frequently_asked_questions = document.getElementById('ac-mercosul-section-frequently-asked-questions');
  if (ac_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#ac-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_international_support = document.getElementById('ac-mercosul-section-international-support');
  if (ac_mercosul_section_international_support) {
    gsap.fromTo('#ac-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_list_our_credentials = document.getElementById('ac-mercosul-list-our-credentials');
  if (ac_mercosul_list_our_credentials) {
    gsap.from('#ac-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_list_related_services = document.getElementById('ac-mercosul-list-related-services');
  if (ac_mercosul_list_related_services) {
    gsap.from('#ac-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_youre_in_good_hands = document.getElementById('ac-mercosul-section-youre-in-good-hands');
  if (ac_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#ac-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_mercosul_section_21 = document.getElementById('ac-mercosul-section-21');
  if (ac_mercosul_section_21) {
    gsap.fromTo('#ac-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('ac-retiree-form-retire-in-brazil-with-retiree-residency');
  if (ac_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#ac-retiree-form-retire-in-brazil-with-retiree-residency input, #ac-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_list_quick_facts = document.getElementById('ac-retiree-list-quick-facts');
  if (ac_retiree_list_quick_facts) {
    gsap.from('#ac-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_list_common_challenges_applicants_face = document.getElementById('ac-retiree-list-common-challenges-applicants-face');
  if (ac_retiree_list_common_challenges_applicants_face) {
    gsap.from('#ac-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_list_how_we_solve_these_challenges = document.getElementById('ac-retiree-list-how-we-solve-these-challenges');
  if (ac_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#ac-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_residency_overview = document.getElementById('ac-retiree-section-residency-overview');
  if (ac_retiree_section_residency_overview) {
    gsap.fromTo('#ac-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_form_who_is_this_residency_for = document.getElementById('ac-retiree-form-who-is-this-residency-for');
  if (ac_retiree_form_who_is_this_residency_for) {
    gsap.from('#ac-retiree-form-who-is-this-residency-for input, #ac-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_list_required_documents = document.getElementById('ac-retiree-list-required-documents');
  if (ac_retiree_list_required_documents) {
    gsap.from('#ac-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_list_application_process = document.getElementById('ac-retiree-list-application-process');
  if (ac_retiree_list_application_process) {
    gsap.from('#ac-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_timelines_deadlines = document.getElementById('ac-retiree-section-timelines-deadlines');
  if (ac_retiree_section_timelines_deadlines) {
    gsap.fromTo('#ac-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_fees_costs = document.getElementById('ac-retiree-section-fees-costs');
  if (ac_retiree_section_fees_costs) {
    gsap.fromTo('#ac-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_list_risks_common_mistakes = document.getElementById('ac-retiree-list-risks-common-mistakes');
  if (ac_retiree_list_risks_common_mistakes) {
    gsap.from('#ac-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_diy_vs_professional_assistance = document.getElementById('ac-retiree-section-diy-vs-professional-assistance');
  if (ac_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_acre_specific_context = document.getElementById('ac-retiree-section-acre-specific-context');
  if (ac_retiree_section_acre_specific_context) {
    gsap.fromTo('#ac-retiree-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_what_our_clients_say = document.getElementById('ac-retiree-section-what-our-clients-say');
  if (ac_retiree_section_what_our_clients_say) {
    gsap.fromTo('#ac-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_frequently_asked_questions = document.getElementById('ac-retiree-section-frequently-asked-questions');
  if (ac_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#ac-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_international_support = document.getElementById('ac-retiree-section-international-support');
  if (ac_retiree_section_international_support) {
    gsap.fromTo('#ac-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_list_our_credentials = document.getElementById('ac-retiree-list-our-credentials');
  if (ac_retiree_list_our_credentials) {
    gsap.from('#ac-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_list_related_services = document.getElementById('ac-retiree-list-related-services');
  if (ac_retiree_list_related_services) {
    gsap.from('#ac-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_youre_in_good_hands = document.getElementById('ac-retiree-section-youre-in-good-hands');
  if (ac_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#ac-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_retiree_section_21 = document.getElementById('ac-retiree-section-21');
  if (ac_retiree_section_21) {
    gsap.fromTo('#ac-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('ac-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (ac_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#ac-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #ac-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_list_quick_facts = document.getElementById('ac-volunteer-list-quick-facts');
  if (ac_volunteer_list_quick_facts) {
    gsap.from('#ac-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_list_common_challenges_applicants_face = document.getElementById('ac-volunteer-list-common-challenges-applicants-face');
  if (ac_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#ac-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_list_how_we_solve_these_challenges = document.getElementById('ac-volunteer-list-how-we-solve-these-challenges');
  if (ac_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#ac-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_residency_overview = document.getElementById('ac-volunteer-section-residency-overview');
  if (ac_volunteer_section_residency_overview) {
    gsap.fromTo('#ac-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_form_who_is_this_residency_for = document.getElementById('ac-volunteer-form-who-is-this-residency-for');
  if (ac_volunteer_form_who_is_this_residency_for) {
    gsap.from('#ac-volunteer-form-who-is-this-residency-for input, #ac-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_list_required_documents = document.getElementById('ac-volunteer-list-required-documents');
  if (ac_volunteer_list_required_documents) {
    gsap.from('#ac-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_list_application_process = document.getElementById('ac-volunteer-list-application-process');
  if (ac_volunteer_list_application_process) {
    gsap.from('#ac-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_timelines_deadlines = document.getElementById('ac-volunteer-section-timelines-deadlines');
  if (ac_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#ac-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_fees_costs = document.getElementById('ac-volunteer-section-fees-costs');
  if (ac_volunteer_section_fees_costs) {
    gsap.fromTo('#ac-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_list_risks_common_mistakes = document.getElementById('ac-volunteer-list-risks-common-mistakes');
  if (ac_volunteer_list_risks_common_mistakes) {
    gsap.from('#ac-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_diy_vs_professional_assistance = document.getElementById('ac-volunteer-section-diy-vs-professional-assistance');
  if (ac_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_acre_specific_context = document.getElementById('ac-volunteer-section-acre-specific-context');
  if (ac_volunteer_section_acre_specific_context) {
    gsap.fromTo('#ac-volunteer-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_what_our_clients_say = document.getElementById('ac-volunteer-section-what-our-clients-say');
  if (ac_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#ac-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_frequently_asked_questions = document.getElementById('ac-volunteer-section-frequently-asked-questions');
  if (ac_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#ac-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_international_support = document.getElementById('ac-volunteer-section-international-support');
  if (ac_volunteer_section_international_support) {
    gsap.fromTo('#ac-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_list_our_credentials = document.getElementById('ac-volunteer-list-our-credentials');
  if (ac_volunteer_list_our_credentials) {
    gsap.from('#ac-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_list_related_services = document.getElementById('ac-volunteer-list-related-services');
  if (ac_volunteer_list_related_services) {
    gsap.from('#ac-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_youre_in_good_hands = document.getElementById('ac-volunteer-section-youre-in-good-hands');
  if (ac_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#ac-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_volunteer_section_21 = document.getElementById('ac-volunteer-section-21');
  if (ac_volunteer_section_21) {
    gsap.fromTo('#ac-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('ac-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (ac_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#ac-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #ac-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_list_quick_facts = document.getElementById('ac-skilledworker-list-quick-facts');
  if (ac_skilledworker_list_quick_facts) {
    gsap.from('#ac-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_list_common_challenges_applicants_face = document.getElementById('ac-skilledworker-list-common-challenges-applicants-face');
  if (ac_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#ac-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_list_how_we_solve_these_challenges = document.getElementById('ac-skilledworker-list-how-we-solve-these-challenges');
  if (ac_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#ac-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_residency_overview = document.getElementById('ac-skilledworker-section-residency-overview');
  if (ac_skilledworker_section_residency_overview) {
    gsap.fromTo('#ac-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_form_who_is_this_residency_for = document.getElementById('ac-skilledworker-form-who-is-this-residency-for');
  if (ac_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#ac-skilledworker-form-who-is-this-residency-for input, #ac-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_list_required_documents = document.getElementById('ac-skilledworker-list-required-documents');
  if (ac_skilledworker_list_required_documents) {
    gsap.from('#ac-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_list_application_process = document.getElementById('ac-skilledworker-list-application-process');
  if (ac_skilledworker_list_application_process) {
    gsap.from('#ac-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_timelines_deadlines = document.getElementById('ac-skilledworker-section-timelines-deadlines');
  if (ac_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#ac-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_fees_costs = document.getElementById('ac-skilledworker-section-fees-costs');
  if (ac_skilledworker_section_fees_costs) {
    gsap.fromTo('#ac-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_list_risks_common_mistakes = document.getElementById('ac-skilledworker-list-risks-common-mistakes');
  if (ac_skilledworker_list_risks_common_mistakes) {
    gsap.from('#ac-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_diy_vs_professional_assistance = document.getElementById('ac-skilledworker-section-diy-vs-professional-assistance');
  if (ac_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_acre_specific_context = document.getElementById('ac-skilledworker-section-acre-specific-context');
  if (ac_skilledworker_section_acre_specific_context) {
    gsap.fromTo('#ac-skilledworker-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_what_our_clients_say = document.getElementById('ac-skilledworker-section-what-our-clients-say');
  if (ac_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#ac-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_frequently_asked_questions = document.getElementById('ac-skilledworker-section-frequently-asked-questions');
  if (ac_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#ac-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_international_support = document.getElementById('ac-skilledworker-section-international-support');
  if (ac_skilledworker_section_international_support) {
    gsap.fromTo('#ac-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_list_our_credentials = document.getElementById('ac-skilledworker-list-our-credentials');
  if (ac_skilledworker_list_our_credentials) {
    gsap.from('#ac-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_list_related_services = document.getElementById('ac-skilledworker-list-related-services');
  if (ac_skilledworker_list_related_services) {
    gsap.from('#ac-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_youre_in_good_hands = document.getElementById('ac-skilledworker-section-youre-in-good-hands');
  if (ac_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#ac-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_skilledworker_section_21 = document.getElementById('ac-skilledworker-section-21');
  if (ac_skilledworker_section_21) {
    gsap.fromTo('#ac-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('ac-religious-form-religious-residency-in-brazil-for-missions');
  if (ac_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#ac-religious-form-religious-residency-in-brazil-for-missions input, #ac-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_list_quick_facts = document.getElementById('ac-religious-list-quick-facts');
  if (ac_religious_list_quick_facts) {
    gsap.from('#ac-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_list_common_challenges_applicants_face = document.getElementById('ac-religious-list-common-challenges-applicants-face');
  if (ac_religious_list_common_challenges_applicants_face) {
    gsap.from('#ac-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_list_how_we_solve_these_challenges = document.getElementById('ac-religious-list-how-we-solve-these-challenges');
  if (ac_religious_list_how_we_solve_these_challenges) {
    gsap.from('#ac-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_residency_overview = document.getElementById('ac-religious-section-residency-overview');
  if (ac_religious_section_residency_overview) {
    gsap.fromTo('#ac-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_form_who_is_this_residency_for = document.getElementById('ac-religious-form-who-is-this-residency-for');
  if (ac_religious_form_who_is_this_residency_for) {
    gsap.from('#ac-religious-form-who-is-this-residency-for input, #ac-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_list_required_documents = document.getElementById('ac-religious-list-required-documents');
  if (ac_religious_list_required_documents) {
    gsap.from('#ac-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_list_application_process = document.getElementById('ac-religious-list-application-process');
  if (ac_religious_list_application_process) {
    gsap.from('#ac-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_timelines_deadlines = document.getElementById('ac-religious-section-timelines-deadlines');
  if (ac_religious_section_timelines_deadlines) {
    gsap.fromTo('#ac-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_fees_costs = document.getElementById('ac-religious-section-fees-costs');
  if (ac_religious_section_fees_costs) {
    gsap.fromTo('#ac-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_list_risks_common_mistakes = document.getElementById('ac-religious-list-risks-common-mistakes');
  if (ac_religious_list_risks_common_mistakes) {
    gsap.from('#ac-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_diy_vs_professional_assistance = document.getElementById('ac-religious-section-diy-vs-professional-assistance');
  if (ac_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_acre_specific_context = document.getElementById('ac-religious-section-acre-specific-context');
  if (ac_religious_section_acre_specific_context) {
    gsap.fromTo('#ac-religious-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_what_our_clients_say = document.getElementById('ac-religious-section-what-our-clients-say');
  if (ac_religious_section_what_our_clients_say) {
    gsap.fromTo('#ac-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_frequently_asked_questions = document.getElementById('ac-religious-section-frequently-asked-questions');
  if (ac_religious_section_frequently_asked_questions) {
    gsap.fromTo('#ac-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_international_support = document.getElementById('ac-religious-section-international-support');
  if (ac_religious_section_international_support) {
    gsap.fromTo('#ac-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_list_our_credentials = document.getElementById('ac-religious-list-our-credentials');
  if (ac_religious_list_our_credentials) {
    gsap.from('#ac-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_list_related_services = document.getElementById('ac-religious-list-related-services');
  if (ac_religious_list_related_services) {
    gsap.from('#ac-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_youre_in_good_hands = document.getElementById('ac-religious-section-youre-in-good-hands');
  if (ac_religious_section_youre_in_good_hands) {
    gsap.fromTo('#ac-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_religious_section_21 = document.getElementById('ac-religious-section-21');
  if (ac_religious_section_21) {
    gsap.fromTo('#ac-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('ac-investor-form-gain-residency-in-brazil-through-investment');
  if (ac_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#ac-investor-form-gain-residency-in-brazil-through-investment input, #ac-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_list_quick_facts = document.getElementById('ac-investor-list-quick-facts');
  if (ac_investor_list_quick_facts) {
    gsap.from('#ac-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_list_common_challenges_applicants_face = document.getElementById('ac-investor-list-common-challenges-applicants-face');
  if (ac_investor_list_common_challenges_applicants_face) {
    gsap.from('#ac-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_list_how_we_solve_these_challenges = document.getElementById('ac-investor-list-how-we-solve-these-challenges');
  if (ac_investor_list_how_we_solve_these_challenges) {
    gsap.from('#ac-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_residency_overview = document.getElementById('ac-investor-section-residency-overview');
  if (ac_investor_section_residency_overview) {
    gsap.fromTo('#ac-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_form_who_is_this_residency_for = document.getElementById('ac-investor-form-who-is-this-residency-for');
  if (ac_investor_form_who_is_this_residency_for) {
    gsap.from('#ac-investor-form-who-is-this-residency-for input, #ac-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_list_required_documents = document.getElementById('ac-investor-list-required-documents');
  if (ac_investor_list_required_documents) {
    gsap.from('#ac-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_list_application_process = document.getElementById('ac-investor-list-application-process');
  if (ac_investor_list_application_process) {
    gsap.from('#ac-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_timelines_deadlines = document.getElementById('ac-investor-section-timelines-deadlines');
  if (ac_investor_section_timelines_deadlines) {
    gsap.fromTo('#ac-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_fees_costs = document.getElementById('ac-investor-section-fees-costs');
  if (ac_investor_section_fees_costs) {
    gsap.fromTo('#ac-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_list_risks_common_mistakes = document.getElementById('ac-investor-list-risks-common-mistakes');
  if (ac_investor_list_risks_common_mistakes) {
    gsap.from('#ac-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_diy_vs_professional_assistance = document.getElementById('ac-investor-section-diy-vs-professional-assistance');
  if (ac_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_acre_specific_context = document.getElementById('ac-investor-section-acre-specific-context');
  if (ac_investor_section_acre_specific_context) {
    gsap.fromTo('#ac-investor-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_what_our_clients_say = document.getElementById('ac-investor-section-what-our-clients-say');
  if (ac_investor_section_what_our_clients_say) {
    gsap.fromTo('#ac-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_frequently_asked_questions = document.getElementById('ac-investor-section-frequently-asked-questions');
  if (ac_investor_section_frequently_asked_questions) {
    gsap.fromTo('#ac-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_international_support = document.getElementById('ac-investor-section-international-support');
  if (ac_investor_section_international_support) {
    gsap.fromTo('#ac-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_list_our_credentials = document.getElementById('ac-investor-list-our-credentials');
  if (ac_investor_list_our_credentials) {
    gsap.from('#ac-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_list_related_services = document.getElementById('ac-investor-list-related-services');
  if (ac_investor_list_related_services) {
    gsap.from('#ac-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_youre_in_good_hands = document.getElementById('ac-investor-section-youre-in-good-hands');
  if (ac_investor_section_youre_in_good_hands) {
    gsap.fromTo('#ac-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_investor_section_21 = document.getElementById('ac-investor-section-21');
  if (ac_investor_section_21) {
    gsap.fromTo('#ac-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('ac-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (ac_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#ac-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #ac-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_list_quick_facts = document.getElementById('ac-healthtreatment-list-quick-facts');
  if (ac_healthtreatment_list_quick_facts) {
    gsap.from('#ac-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_list_common_challenges_applicants_face = document.getElementById('ac-healthtreatment-list-common-challenges-applicants-face');
  if (ac_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#ac-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('ac-healthtreatment-list-how-we-solve-these-challenges');
  if (ac_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#ac-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_residency_overview = document.getElementById('ac-healthtreatment-section-residency-overview');
  if (ac_healthtreatment_section_residency_overview) {
    gsap.fromTo('#ac-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_form_who_is_this_residency_for = document.getElementById('ac-healthtreatment-form-who-is-this-residency-for');
  if (ac_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#ac-healthtreatment-form-who-is-this-residency-for input, #ac-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_list_required_documents = document.getElementById('ac-healthtreatment-list-required-documents');
  if (ac_healthtreatment_list_required_documents) {
    gsap.from('#ac-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_list_application_process = document.getElementById('ac-healthtreatment-list-application-process');
  if (ac_healthtreatment_list_application_process) {
    gsap.from('#ac-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_timelines_deadlines = document.getElementById('ac-healthtreatment-section-timelines-deadlines');
  if (ac_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#ac-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_fees_costs = document.getElementById('ac-healthtreatment-section-fees-costs');
  if (ac_healthtreatment_section_fees_costs) {
    gsap.fromTo('#ac-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_list_risks_common_mistakes = document.getElementById('ac-healthtreatment-list-risks-common-mistakes');
  if (ac_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#ac-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('ac-healthtreatment-section-diy-vs-professional-assistance');
  if (ac_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_acre_specific_context = document.getElementById('ac-healthtreatment-section-acre-specific-context');
  if (ac_healthtreatment_section_acre_specific_context) {
    gsap.fromTo('#ac-healthtreatment-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_what_our_clients_say = document.getElementById('ac-healthtreatment-section-what-our-clients-say');
  if (ac_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#ac-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_frequently_asked_questions = document.getElementById('ac-healthtreatment-section-frequently-asked-questions');
  if (ac_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#ac-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_international_support = document.getElementById('ac-healthtreatment-section-international-support');
  if (ac_healthtreatment_section_international_support) {
    gsap.fromTo('#ac-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_list_our_credentials = document.getElementById('ac-healthtreatment-list-our-credentials');
  if (ac_healthtreatment_list_our_credentials) {
    gsap.from('#ac-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_list_related_services = document.getElementById('ac-healthtreatment-list-related-services');
  if (ac_healthtreatment_list_related_services) {
    gsap.from('#ac-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_youre_in_good_hands = document.getElementById('ac-healthtreatment-section-youre-in-good-hands');
  if (ac_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#ac-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_healthtreatment_section_21 = document.getElementById('ac-healthtreatment-section-21');
  if (ac_healthtreatment_section_21) {
    gsap.fromTo('#ac-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('ac-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (ac_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#ac-cplp-form-residency-for-cplp-citizens-in-brazil input, #ac-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_list_quick_facts = document.getElementById('ac-cplp-list-quick-facts');
  if (ac_cplp_list_quick_facts) {
    gsap.from('#ac-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_list_common_challenges_applicants_face = document.getElementById('ac-cplp-list-common-challenges-applicants-face');
  if (ac_cplp_list_common_challenges_applicants_face) {
    gsap.from('#ac-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_list_how_we_solve_these_challenges = document.getElementById('ac-cplp-list-how-we-solve-these-challenges');
  if (ac_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#ac-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_residency_overview = document.getElementById('ac-cplp-section-residency-overview');
  if (ac_cplp_section_residency_overview) {
    gsap.fromTo('#ac-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_form_who_is_this_residency_for = document.getElementById('ac-cplp-form-who-is-this-residency-for');
  if (ac_cplp_form_who_is_this_residency_for) {
    gsap.from('#ac-cplp-form-who-is-this-residency-for input, #ac-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_list_required_documents = document.getElementById('ac-cplp-list-required-documents');
  if (ac_cplp_list_required_documents) {
    gsap.from('#ac-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_list_application_process = document.getElementById('ac-cplp-list-application-process');
  if (ac_cplp_list_application_process) {
    gsap.from('#ac-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_timelines_deadlines = document.getElementById('ac-cplp-section-timelines-deadlines');
  if (ac_cplp_section_timelines_deadlines) {
    gsap.fromTo('#ac-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_fees_costs = document.getElementById('ac-cplp-section-fees-costs');
  if (ac_cplp_section_fees_costs) {
    gsap.fromTo('#ac-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_list_risks_common_mistakes = document.getElementById('ac-cplp-list-risks-common-mistakes');
  if (ac_cplp_list_risks_common_mistakes) {
    gsap.from('#ac-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_diy_vs_professional_assistance = document.getElementById('ac-cplp-section-diy-vs-professional-assistance');
  if (ac_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_acre_specific_context = document.getElementById('ac-cplp-section-acre-specific-context');
  if (ac_cplp_section_acre_specific_context) {
    gsap.fromTo('#ac-cplp-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_what_our_clients_say = document.getElementById('ac-cplp-section-what-our-clients-say');
  if (ac_cplp_section_what_our_clients_say) {
    gsap.fromTo('#ac-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_frequently_asked_questions = document.getElementById('ac-cplp-section-frequently-asked-questions');
  if (ac_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#ac-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_international_support = document.getElementById('ac-cplp-section-international-support');
  if (ac_cplp_section_international_support) {
    gsap.fromTo('#ac-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_list_our_credentials = document.getElementById('ac-cplp-list-our-credentials');
  if (ac_cplp_list_our_credentials) {
    gsap.from('#ac-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_list_related_services = document.getElementById('ac-cplp-list-related-services');
  if (ac_cplp_list_related_services) {
    gsap.from('#ac-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_youre_in_good_hands = document.getElementById('ac-cplp-section-youre-in-good-hands');
  if (ac_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#ac-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_cplp_section_21 = document.getElementById('ac-cplp-section-21');
  if (ac_cplp_section_21) {
    gsap.fromTo('#ac-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('ac-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (ac_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#ac-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #ac-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_list_quick_facts = document.getElementById('ac-youthexchange-list-quick-facts');
  if (ac_youthexchange_list_quick_facts) {
    gsap.from('#ac-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_list_common_challenges_applicants_face = document.getElementById('ac-youthexchange-list-common-challenges-applicants-face');
  if (ac_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#ac-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_list_how_we_solve_these_challenges = document.getElementById('ac-youthexchange-list-how-we-solve-these-challenges');
  if (ac_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ac-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_residency_overview = document.getElementById('ac-youthexchange-section-residency-overview');
  if (ac_youthexchange_section_residency_overview) {
    gsap.fromTo('#ac-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_form_who_is_this_residency_for = document.getElementById('ac-youthexchange-form-who-is-this-residency-for');
  if (ac_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#ac-youthexchange-form-who-is-this-residency-for input, #ac-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_list_required_documents = document.getElementById('ac-youthexchange-list-required-documents');
  if (ac_youthexchange_list_required_documents) {
    gsap.from('#ac-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_list_application_process = document.getElementById('ac-youthexchange-list-application-process');
  if (ac_youthexchange_list_application_process) {
    gsap.from('#ac-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_timelines_deadlines = document.getElementById('ac-youthexchange-section-timelines-deadlines');
  if (ac_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#ac-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_fees_costs = document.getElementById('ac-youthexchange-section-fees-costs');
  if (ac_youthexchange_section_fees_costs) {
    gsap.fromTo('#ac-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_list_risks_common_mistakes = document.getElementById('ac-youthexchange-list-risks-common-mistakes');
  if (ac_youthexchange_list_risks_common_mistakes) {
    gsap.from('#ac-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_diy_vs_professional_assistance = document.getElementById('ac-youthexchange-section-diy-vs-professional-assistance');
  if (ac_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_acre_specific_context = document.getElementById('ac-youthexchange-section-acre-specific-context');
  if (ac_youthexchange_section_acre_specific_context) {
    gsap.fromTo('#ac-youthexchange-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_what_our_clients_say = document.getElementById('ac-youthexchange-section-what-our-clients-say');
  if (ac_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#ac-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_frequently_asked_questions = document.getElementById('ac-youthexchange-section-frequently-asked-questions');
  if (ac_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ac-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_international_support = document.getElementById('ac-youthexchange-section-international-support');
  if (ac_youthexchange_section_international_support) {
    gsap.fromTo('#ac-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_list_our_credentials = document.getElementById('ac-youthexchange-list-our-credentials');
  if (ac_youthexchange_list_our_credentials) {
    gsap.from('#ac-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_list_related_services = document.getElementById('ac-youthexchange-list-related-services');
  if (ac_youthexchange_list_related_services) {
    gsap.from('#ac-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_youre_in_good_hands = document.getElementById('ac-youthexchange-section-youre-in-good-hands');
  if (ac_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ac-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_youthexchange_section_21 = document.getElementById('ac-youthexchange-section-21');
  if (ac_youthexchange_section_21) {
    gsap.fromTo('#ac-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('ac-work-form-work-and-reside-in-brazil-with-work-residency');
  if (ac_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#ac-work-form-work-and-reside-in-brazil-with-work-residency input, #ac-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_list_quick_facts = document.getElementById('ac-work-list-quick-facts');
  if (ac_work_list_quick_facts) {
    gsap.from('#ac-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_list_common_challenges_applicants_face = document.getElementById('ac-work-list-common-challenges-applicants-face');
  if (ac_work_list_common_challenges_applicants_face) {
    gsap.from('#ac-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_list_how_we_solve_these_challenges = document.getElementById('ac-work-list-how-we-solve-these-challenges');
  if (ac_work_list_how_we_solve_these_challenges) {
    gsap.from('#ac-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_residency_overview = document.getElementById('ac-work-section-residency-overview');
  if (ac_work_section_residency_overview) {
    gsap.fromTo('#ac-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_form_who_is_this_residency_for = document.getElementById('ac-work-form-who-is-this-residency-for');
  if (ac_work_form_who_is_this_residency_for) {
    gsap.from('#ac-work-form-who-is-this-residency-for input, #ac-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_list_required_documents = document.getElementById('ac-work-list-required-documents');
  if (ac_work_list_required_documents) {
    gsap.from('#ac-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_list_application_process = document.getElementById('ac-work-list-application-process');
  if (ac_work_list_application_process) {
    gsap.from('#ac-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_timelines_deadlines = document.getElementById('ac-work-section-timelines-deadlines');
  if (ac_work_section_timelines_deadlines) {
    gsap.fromTo('#ac-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_fees_costs = document.getElementById('ac-work-section-fees-costs');
  if (ac_work_section_fees_costs) {
    gsap.fromTo('#ac-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_list_risks_common_mistakes = document.getElementById('ac-work-list-risks-common-mistakes');
  if (ac_work_list_risks_common_mistakes) {
    gsap.from('#ac-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_diy_vs_professional_assistance = document.getElementById('ac-work-section-diy-vs-professional-assistance');
  if (ac_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_acre_specific_context = document.getElementById('ac-work-section-acre-specific-context');
  if (ac_work_section_acre_specific_context) {
    gsap.fromTo('#ac-work-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_what_our_clients_say = document.getElementById('ac-work-section-what-our-clients-say');
  if (ac_work_section_what_our_clients_say) {
    gsap.fromTo('#ac-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_frequently_asked_questions = document.getElementById('ac-work-section-frequently-asked-questions');
  if (ac_work_section_frequently_asked_questions) {
    gsap.fromTo('#ac-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_international_support = document.getElementById('ac-work-section-international-support');
  if (ac_work_section_international_support) {
    gsap.fromTo('#ac-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_list_our_credentials = document.getElementById('ac-work-list-our-credentials');
  if (ac_work_list_our_credentials) {
    gsap.from('#ac-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_list_related_services = document.getElementById('ac-work-list-related-services');
  if (ac_work_list_related_services) {
    gsap.from('#ac-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_youre_in_good_hands = document.getElementById('ac-work-section-youre-in-good-hands');
  if (ac_work_section_youre_in_good_hands) {
    gsap.fromTo('#ac-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_work_section_21 = document.getElementById('ac-work-section-21');
  if (ac_work_section_21) {
    gsap.fromTo('#ac-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('ac-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (ac_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#ac-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #ac-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_list_quick_facts = document.getElementById('ac-startup-list-quick-facts');
  if (ac_startup_list_quick_facts) {
    gsap.from('#ac-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_list_common_challenges_applicants_face = document.getElementById('ac-startup-list-common-challenges-applicants-face');
  if (ac_startup_list_common_challenges_applicants_face) {
    gsap.from('#ac-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_list_how_we_solve_these_challenges = document.getElementById('ac-startup-list-how-we-solve-these-challenges');
  if (ac_startup_list_how_we_solve_these_challenges) {
    gsap.from('#ac-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_visa_overview = document.getElementById('ac-startup-section-visa-overview');
  if (ac_startup_section_visa_overview) {
    gsap.fromTo('#ac-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_form_who_is_this_visa_for = document.getElementById('ac-startup-form-who-is-this-visa-for');
  if (ac_startup_form_who_is_this_visa_for) {
    gsap.from('#ac-startup-form-who-is-this-visa-for input, #ac-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_list_required_documents = document.getElementById('ac-startup-list-required-documents');
  if (ac_startup_list_required_documents) {
    gsap.from('#ac-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_list_application_process = document.getElementById('ac-startup-list-application-process');
  if (ac_startup_list_application_process) {
    gsap.from('#ac-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_timelines_deadlines = document.getElementById('ac-startup-section-timelines-deadlines');
  if (ac_startup_section_timelines_deadlines) {
    gsap.fromTo('#ac-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_fees_costs = document.getElementById('ac-startup-section-fees-costs');
  if (ac_startup_section_fees_costs) {
    gsap.fromTo('#ac-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_list_risks_common_mistakes = document.getElementById('ac-startup-list-risks-common-mistakes');
  if (ac_startup_list_risks_common_mistakes) {
    gsap.from('#ac-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_diy_vs_professional_assistance = document.getElementById('ac-startup-section-diy-vs-professional-assistance');
  if (ac_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_acre_specific_context = document.getElementById('ac-startup-section-acre-specific-context');
  if (ac_startup_section_acre_specific_context) {
    gsap.fromTo('#ac-startup-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_what_our_clients_say = document.getElementById('ac-startup-section-what-our-clients-say');
  if (ac_startup_section_what_our_clients_say) {
    gsap.fromTo('#ac-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_frequently_asked_questions = document.getElementById('ac-startup-section-frequently-asked-questions');
  if (ac_startup_section_frequently_asked_questions) {
    gsap.fromTo('#ac-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_international_support = document.getElementById('ac-startup-section-international-support');
  if (ac_startup_section_international_support) {
    gsap.fromTo('#ac-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_list_our_credentials = document.getElementById('ac-startup-list-our-credentials');
  if (ac_startup_list_our_credentials) {
    gsap.from('#ac-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_list_related_services = document.getElementById('ac-startup-list-related-services');
  if (ac_startup_list_related_services) {
    gsap.from('#ac-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_youre_in_good_hands = document.getElementById('ac-startup-section-youre-in-good-hands');
  if (ac_startup_section_youre_in_good_hands) {
    gsap.fromTo('#ac-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_startup_section_21 = document.getElementById('ac-startup-section-21');
  if (ac_startup_section_21) {
    gsap.fromTo('#ac-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('ac-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (ac_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#ac-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #ac-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_list_quick_facts = document.getElementById('ac-family-list-quick-facts');
  if (ac_family_list_quick_facts) {
    gsap.from('#ac-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_list_common_challenges_applicants_face = document.getElementById('ac-family-list-common-challenges-applicants-face');
  if (ac_family_list_common_challenges_applicants_face) {
    gsap.from('#ac-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_list_how_we_solve_these_challenges = document.getElementById('ac-family-list-how-we-solve-these-challenges');
  if (ac_family_list_how_we_solve_these_challenges) {
    gsap.from('#ac-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_visa_overview = document.getElementById('ac-family-section-visa-overview');
  if (ac_family_section_visa_overview) {
    gsap.fromTo('#ac-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_form_who_is_this_visa_for = document.getElementById('ac-family-form-who-is-this-visa-for');
  if (ac_family_form_who_is_this_visa_for) {
    gsap.from('#ac-family-form-who-is-this-visa-for input, #ac-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_list_required_documents = document.getElementById('ac-family-list-required-documents');
  if (ac_family_list_required_documents) {
    gsap.from('#ac-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_list_application_process = document.getElementById('ac-family-list-application-process');
  if (ac_family_list_application_process) {
    gsap.from('#ac-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_timelines_deadlines = document.getElementById('ac-family-section-timelines-deadlines');
  if (ac_family_section_timelines_deadlines) {
    gsap.fromTo('#ac-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_fees_costs = document.getElementById('ac-family-section-fees-costs');
  if (ac_family_section_fees_costs) {
    gsap.fromTo('#ac-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_list_risks_common_mistakes = document.getElementById('ac-family-list-risks-common-mistakes');
  if (ac_family_list_risks_common_mistakes) {
    gsap.from('#ac-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_diy_vs_professional_assistance = document.getElementById('ac-family-section-diy-vs-professional-assistance');
  if (ac_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_acre_specific_context = document.getElementById('ac-family-section-acre-specific-context');
  if (ac_family_section_acre_specific_context) {
    gsap.fromTo('#ac-family-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_what_our_clients_say = document.getElementById('ac-family-section-what-our-clients-say');
  if (ac_family_section_what_our_clients_say) {
    gsap.fromTo('#ac-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_frequently_asked_questions = document.getElementById('ac-family-section-frequently-asked-questions');
  if (ac_family_section_frequently_asked_questions) {
    gsap.fromTo('#ac-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_international_support = document.getElementById('ac-family-section-international-support');
  if (ac_family_section_international_support) {
    gsap.fromTo('#ac-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_list_our_credentials = document.getElementById('ac-family-list-our-credentials');
  if (ac_family_list_our_credentials) {
    gsap.from('#ac-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_list_related_services = document.getElementById('ac-family-list-related-services');
  if (ac_family_list_related_services) {
    gsap.from('#ac-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_youre_in_good_hands = document.getElementById('ac-family-section-youre-in-good-hands');
  if (ac_family_section_youre_in_good_hands) {
    gsap.fromTo('#ac-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_family_section_21 = document.getElementById('ac-family-section-21');
  if (ac_family_section_21) {
    gsap.fromTo('#ac-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('ac-sports-form-compete-in-brazil-with-the-sports-visa');
  if (ac_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#ac-sports-form-compete-in-brazil-with-the-sports-visa input, #ac-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_list_quick_facts = document.getElementById('ac-sports-list-quick-facts');
  if (ac_sports_list_quick_facts) {
    gsap.from('#ac-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_list_common_challenges_applicants_face = document.getElementById('ac-sports-list-common-challenges-applicants-face');
  if (ac_sports_list_common_challenges_applicants_face) {
    gsap.from('#ac-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_list_how_we_solve_these_challenges = document.getElementById('ac-sports-list-how-we-solve-these-challenges');
  if (ac_sports_list_how_we_solve_these_challenges) {
    gsap.from('#ac-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_visa_overview = document.getElementById('ac-sports-section-visa-overview');
  if (ac_sports_section_visa_overview) {
    gsap.fromTo('#ac-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_form_who_is_this_visa_for = document.getElementById('ac-sports-form-who-is-this-visa-for');
  if (ac_sports_form_who_is_this_visa_for) {
    gsap.from('#ac-sports-form-who-is-this-visa-for input, #ac-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_list_required_documents = document.getElementById('ac-sports-list-required-documents');
  if (ac_sports_list_required_documents) {
    gsap.from('#ac-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_list_application_process = document.getElementById('ac-sports-list-application-process');
  if (ac_sports_list_application_process) {
    gsap.from('#ac-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_timelines_deadlines = document.getElementById('ac-sports-section-timelines-deadlines');
  if (ac_sports_section_timelines_deadlines) {
    gsap.fromTo('#ac-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_fees_costs = document.getElementById('ac-sports-section-fees-costs');
  if (ac_sports_section_fees_costs) {
    gsap.fromTo('#ac-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_list_risks_common_mistakes = document.getElementById('ac-sports-list-risks-common-mistakes');
  if (ac_sports_list_risks_common_mistakes) {
    gsap.from('#ac-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_diy_vs_professional_assistance = document.getElementById('ac-sports-section-diy-vs-professional-assistance');
  if (ac_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_acre_specific_context = document.getElementById('ac-sports-section-acre-specific-context');
  if (ac_sports_section_acre_specific_context) {
    gsap.fromTo('#ac-sports-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_what_our_clients_say = document.getElementById('ac-sports-section-what-our-clients-say');
  if (ac_sports_section_what_our_clients_say) {
    gsap.fromTo('#ac-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_frequently_asked_questions = document.getElementById('ac-sports-section-frequently-asked-questions');
  if (ac_sports_section_frequently_asked_questions) {
    gsap.fromTo('#ac-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_international_support = document.getElementById('ac-sports-section-international-support');
  if (ac_sports_section_international_support) {
    gsap.fromTo('#ac-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_list_our_credentials = document.getElementById('ac-sports-list-our-credentials');
  if (ac_sports_list_our_credentials) {
    gsap.from('#ac-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_list_related_services = document.getElementById('ac-sports-list-related-services');
  if (ac_sports_list_related_services) {
    gsap.from('#ac-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_youre_in_good_hands = document.getElementById('ac-sports-section-youre-in-good-hands');
  if (ac_sports_section_youre_in_good_hands) {
    gsap.fromTo('#ac-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_sports_section_21 = document.getElementById('ac-sports-section-21');
  if (ac_sports_section_21) {
    gsap.fromTo('#ac-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('ac-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (ac_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#ac-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #ac-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_list_quick_facts = document.getElementById('ac-medical-list-quick-facts');
  if (ac_medical_list_quick_facts) {
    gsap.from('#ac-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_list_common_challenges_applicants_face = document.getElementById('ac-medical-list-common-challenges-applicants-face');
  if (ac_medical_list_common_challenges_applicants_face) {
    gsap.from('#ac-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_list_how_we_solve_these_challenges = document.getElementById('ac-medical-list-how-we-solve-these-challenges');
  if (ac_medical_list_how_we_solve_these_challenges) {
    gsap.from('#ac-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_visa_overview = document.getElementById('ac-medical-section-visa-overview');
  if (ac_medical_section_visa_overview) {
    gsap.fromTo('#ac-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_form_who_is_this_visa_for = document.getElementById('ac-medical-form-who-is-this-visa-for');
  if (ac_medical_form_who_is_this_visa_for) {
    gsap.from('#ac-medical-form-who-is-this-visa-for input, #ac-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_list_required_documents = document.getElementById('ac-medical-list-required-documents');
  if (ac_medical_list_required_documents) {
    gsap.from('#ac-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_list_application_process = document.getElementById('ac-medical-list-application-process');
  if (ac_medical_list_application_process) {
    gsap.from('#ac-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_timelines_deadlines = document.getElementById('ac-medical-section-timelines-deadlines');
  if (ac_medical_section_timelines_deadlines) {
    gsap.fromTo('#ac-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_fees_costs = document.getElementById('ac-medical-section-fees-costs');
  if (ac_medical_section_fees_costs) {
    gsap.fromTo('#ac-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_list_risks_common_mistakes = document.getElementById('ac-medical-list-risks-common-mistakes');
  if (ac_medical_list_risks_common_mistakes) {
    gsap.from('#ac-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_diy_vs_professional_assistance = document.getElementById('ac-medical-section-diy-vs-professional-assistance');
  if (ac_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_acre_specific_context = document.getElementById('ac-medical-section-acre-specific-context');
  if (ac_medical_section_acre_specific_context) {
    gsap.fromTo('#ac-medical-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_what_our_clients_say = document.getElementById('ac-medical-section-what-our-clients-say');
  if (ac_medical_section_what_our_clients_say) {
    gsap.fromTo('#ac-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_frequently_asked_questions = document.getElementById('ac-medical-section-frequently-asked-questions');
  if (ac_medical_section_frequently_asked_questions) {
    gsap.fromTo('#ac-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_international_support = document.getElementById('ac-medical-section-international-support');
  if (ac_medical_section_international_support) {
    gsap.fromTo('#ac-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_list_our_credentials = document.getElementById('ac-medical-list-our-credentials');
  if (ac_medical_list_our_credentials) {
    gsap.from('#ac-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_list_related_services = document.getElementById('ac-medical-list-related-services');
  if (ac_medical_list_related_services) {
    gsap.from('#ac-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_youre_in_good_hands = document.getElementById('ac-medical-section-youre-in-good-hands');
  if (ac_medical_section_youre_in_good_hands) {
    gsap.fromTo('#ac-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_medical_section_21 = document.getElementById('ac-medical-section-21');
  if (ac_medical_section_21) {
    gsap.fromTo('#ac-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('ac-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (ac_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#ac-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #ac-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_list_quick_facts = document.getElementById('ac-tourist-list-quick-facts');
  if (ac_tourist_list_quick_facts) {
    gsap.from('#ac-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_list_common_challenges_applicants_face = document.getElementById('ac-tourist-list-common-challenges-applicants-face');
  if (ac_tourist_list_common_challenges_applicants_face) {
    gsap.from('#ac-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_list_how_we_solve_these_challenges = document.getElementById('ac-tourist-list-how-we-solve-these-challenges');
  if (ac_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#ac-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_visa_overview = document.getElementById('ac-tourist-section-visa-overview');
  if (ac_tourist_section_visa_overview) {
    gsap.fromTo('#ac-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_form_who_is_this_visa_for = document.getElementById('ac-tourist-form-who-is-this-visa-for');
  if (ac_tourist_form_who_is_this_visa_for) {
    gsap.from('#ac-tourist-form-who-is-this-visa-for input, #ac-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_list_required_documents = document.getElementById('ac-tourist-list-required-documents');
  if (ac_tourist_list_required_documents) {
    gsap.from('#ac-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_list_application_process = document.getElementById('ac-tourist-list-application-process');
  if (ac_tourist_list_application_process) {
    gsap.from('#ac-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_timelines_deadlines = document.getElementById('ac-tourist-section-timelines-deadlines');
  if (ac_tourist_section_timelines_deadlines) {
    gsap.fromTo('#ac-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_fees_costs = document.getElementById('ac-tourist-section-fees-costs');
  if (ac_tourist_section_fees_costs) {
    gsap.fromTo('#ac-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_list_risks_common_mistakes = document.getElementById('ac-tourist-list-risks-common-mistakes');
  if (ac_tourist_list_risks_common_mistakes) {
    gsap.from('#ac-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_diy_vs_professional_assistance = document.getElementById('ac-tourist-section-diy-vs-professional-assistance');
  if (ac_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_acre_specific_context = document.getElementById('ac-tourist-section-acre-specific-context');
  if (ac_tourist_section_acre_specific_context) {
    gsap.fromTo('#ac-tourist-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_what_our_clients_say = document.getElementById('ac-tourist-section-what-our-clients-say');
  if (ac_tourist_section_what_our_clients_say) {
    gsap.fromTo('#ac-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_frequently_asked_questions = document.getElementById('ac-tourist-section-frequently-asked-questions');
  if (ac_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#ac-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_international_support = document.getElementById('ac-tourist-section-international-support');
  if (ac_tourist_section_international_support) {
    gsap.fromTo('#ac-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_list_our_credentials = document.getElementById('ac-tourist-list-our-credentials');
  if (ac_tourist_list_our_credentials) {
    gsap.from('#ac-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_list_related_services = document.getElementById('ac-tourist-list-related-services');
  if (ac_tourist_list_related_services) {
    gsap.from('#ac-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_youre_in_good_hands = document.getElementById('ac-tourist-section-youre-in-good-hands');
  if (ac_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#ac-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_tourist_section_21 = document.getElementById('ac-tourist-section-21');
  if (ac_tourist_section_21) {
    gsap.fromTo('#ac-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('ac-transit-form-transit-through-brazil-with-the-transit-visa');
  if (ac_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#ac-transit-form-transit-through-brazil-with-the-transit-visa input, #ac-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_list_quick_facts = document.getElementById('ac-transit-list-quick-facts');
  if (ac_transit_list_quick_facts) {
    gsap.from('#ac-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_list_common_challenges_applicants_face = document.getElementById('ac-transit-list-common-challenges-applicants-face');
  if (ac_transit_list_common_challenges_applicants_face) {
    gsap.from('#ac-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_list_how_we_solve_these_challenges = document.getElementById('ac-transit-list-how-we-solve-these-challenges');
  if (ac_transit_list_how_we_solve_these_challenges) {
    gsap.from('#ac-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_visa_overview = document.getElementById('ac-transit-section-visa-overview');
  if (ac_transit_section_visa_overview) {
    gsap.fromTo('#ac-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_form_who_is_this_visa_for = document.getElementById('ac-transit-form-who-is-this-visa-for');
  if (ac_transit_form_who_is_this_visa_for) {
    gsap.from('#ac-transit-form-who-is-this-visa-for input, #ac-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_list_required_documents = document.getElementById('ac-transit-list-required-documents');
  if (ac_transit_list_required_documents) {
    gsap.from('#ac-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_list_application_process = document.getElementById('ac-transit-list-application-process');
  if (ac_transit_list_application_process) {
    gsap.from('#ac-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_timelines_deadlines = document.getElementById('ac-transit-section-timelines-deadlines');
  if (ac_transit_section_timelines_deadlines) {
    gsap.fromTo('#ac-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_fees_costs = document.getElementById('ac-transit-section-fees-costs');
  if (ac_transit_section_fees_costs) {
    gsap.fromTo('#ac-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_list_risks_common_mistakes = document.getElementById('ac-transit-list-risks-common-mistakes');
  if (ac_transit_list_risks_common_mistakes) {
    gsap.from('#ac-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_diy_vs_professional_assistance = document.getElementById('ac-transit-section-diy-vs-professional-assistance');
  if (ac_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_acre_specific_context = document.getElementById('ac-transit-section-acre-specific-context');
  if (ac_transit_section_acre_specific_context) {
    gsap.fromTo('#ac-transit-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_what_our_clients_say = document.getElementById('ac-transit-section-what-our-clients-say');
  if (ac_transit_section_what_our_clients_say) {
    gsap.fromTo('#ac-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_frequently_asked_questions = document.getElementById('ac-transit-section-frequently-asked-questions');
  if (ac_transit_section_frequently_asked_questions) {
    gsap.fromTo('#ac-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_international_support = document.getElementById('ac-transit-section-international-support');
  if (ac_transit_section_international_support) {
    gsap.fromTo('#ac-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_list_our_credentials = document.getElementById('ac-transit-list-our-credentials');
  if (ac_transit_list_our_credentials) {
    gsap.from('#ac-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_list_related_services = document.getElementById('ac-transit-list-related-services');
  if (ac_transit_list_related_services) {
    gsap.from('#ac-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_youre_in_good_hands = document.getElementById('ac-transit-section-youre-in-good-hands');
  if (ac_transit_section_youre_in_good_hands) {
    gsap.fromTo('#ac-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_transit_section_21 = document.getElementById('ac-transit-section-21');
  if (ac_transit_section_21) {
    gsap.fromTo('#ac-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_form_study_in_brazil_with_the_student_visa = document.getElementById('ac-student-form-study-in-brazil-with-the-student-visa');
  if (ac_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#ac-student-form-study-in-brazil-with-the-student-visa input, #ac-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_list_quick_facts = document.getElementById('ac-student-list-quick-facts');
  if (ac_student_list_quick_facts) {
    gsap.from('#ac-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_list_common_challenges_applicants_face = document.getElementById('ac-student-list-common-challenges-applicants-face');
  if (ac_student_list_common_challenges_applicants_face) {
    gsap.from('#ac-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_list_how_we_solve_these_challenges = document.getElementById('ac-student-list-how-we-solve-these-challenges');
  if (ac_student_list_how_we_solve_these_challenges) {
    gsap.from('#ac-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_visa_overview = document.getElementById('ac-student-section-visa-overview');
  if (ac_student_section_visa_overview) {
    gsap.fromTo('#ac-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_form_who_is_this_visa_for = document.getElementById('ac-student-form-who-is-this-visa-for');
  if (ac_student_form_who_is_this_visa_for) {
    gsap.from('#ac-student-form-who-is-this-visa-for input, #ac-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_list_required_documents = document.getElementById('ac-student-list-required-documents');
  if (ac_student_list_required_documents) {
    gsap.from('#ac-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_list_application_process = document.getElementById('ac-student-list-application-process');
  if (ac_student_list_application_process) {
    gsap.from('#ac-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_timelines_deadlines = document.getElementById('ac-student-section-timelines-deadlines');
  if (ac_student_section_timelines_deadlines) {
    gsap.fromTo('#ac-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_fees_costs = document.getElementById('ac-student-section-fees-costs');
  if (ac_student_section_fees_costs) {
    gsap.fromTo('#ac-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_list_risks_common_mistakes = document.getElementById('ac-student-list-risks-common-mistakes');
  if (ac_student_list_risks_common_mistakes) {
    gsap.from('#ac-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_diy_vs_professional_assistance = document.getElementById('ac-student-section-diy-vs-professional-assistance');
  if (ac_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_acre_specific_context = document.getElementById('ac-student-section-acre-specific-context');
  if (ac_student_section_acre_specific_context) {
    gsap.fromTo('#ac-student-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_what_our_clients_say = document.getElementById('ac-student-section-what-our-clients-say');
  if (ac_student_section_what_our_clients_say) {
    gsap.fromTo('#ac-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_frequently_asked_questions = document.getElementById('ac-student-section-frequently-asked-questions');
  if (ac_student_section_frequently_asked_questions) {
    gsap.fromTo('#ac-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_international_support = document.getElementById('ac-student-section-international-support');
  if (ac_student_section_international_support) {
    gsap.fromTo('#ac-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_list_our_credentials = document.getElementById('ac-student-list-our-credentials');
  if (ac_student_list_our_credentials) {
    gsap.from('#ac-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_list_related_services = document.getElementById('ac-student-list-related-services');
  if (ac_student_list_related_services) {
    gsap.from('#ac-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_youre_in_good_hands = document.getElementById('ac-student-section-youre-in-good-hands');
  if (ac_student_section_youre_in_good_hands) {
    gsap.fromTo('#ac-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_student_section_21 = document.getElementById('ac-student-section-21');
  if (ac_student_section_21) {
    gsap.fromTo('#ac-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('ac-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (ac_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#ac-business-form-conduct-business-in-brazil-with-the-business-visa input, #ac-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_list_quick_facts = document.getElementById('ac-business-list-quick-facts');
  if (ac_business_list_quick_facts) {
    gsap.from('#ac-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_list_common_challenges_applicants_face = document.getElementById('ac-business-list-common-challenges-applicants-face');
  if (ac_business_list_common_challenges_applicants_face) {
    gsap.from('#ac-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_list_how_we_solve_these_challenges = document.getElementById('ac-business-list-how-we-solve-these-challenges');
  if (ac_business_list_how_we_solve_these_challenges) {
    gsap.from('#ac-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_visa_overview = document.getElementById('ac-business-section-visa-overview');
  if (ac_business_section_visa_overview) {
    gsap.fromTo('#ac-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_form_who_is_this_visa_for = document.getElementById('ac-business-form-who-is-this-visa-for');
  if (ac_business_form_who_is_this_visa_for) {
    gsap.from('#ac-business-form-who-is-this-visa-for input, #ac-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_list_required_documents = document.getElementById('ac-business-list-required-documents');
  if (ac_business_list_required_documents) {
    gsap.from('#ac-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_list_application_process = document.getElementById('ac-business-list-application-process');
  if (ac_business_list_application_process) {
    gsap.from('#ac-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_timelines_deadlines = document.getElementById('ac-business-section-timelines-deadlines');
  if (ac_business_section_timelines_deadlines) {
    gsap.fromTo('#ac-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_fees_costs = document.getElementById('ac-business-section-fees-costs');
  if (ac_business_section_fees_costs) {
    gsap.fromTo('#ac-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_list_risks_common_mistakes = document.getElementById('ac-business-list-risks-common-mistakes');
  if (ac_business_list_risks_common_mistakes) {
    gsap.from('#ac-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_diy_vs_professional_assistance = document.getElementById('ac-business-section-diy-vs-professional-assistance');
  if (ac_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_acre_specific_context = document.getElementById('ac-business-section-acre-specific-context');
  if (ac_business_section_acre_specific_context) {
    gsap.fromTo('#ac-business-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_what_our_clients_say = document.getElementById('ac-business-section-what-our-clients-say');
  if (ac_business_section_what_our_clients_say) {
    gsap.fromTo('#ac-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_frequently_asked_questions = document.getElementById('ac-business-section-frequently-asked-questions');
  if (ac_business_section_frequently_asked_questions) {
    gsap.fromTo('#ac-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_international_support = document.getElementById('ac-business-section-international-support');
  if (ac_business_section_international_support) {
    gsap.fromTo('#ac-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_list_our_credentials = document.getElementById('ac-business-list-our-credentials');
  if (ac_business_list_our_credentials) {
    gsap.from('#ac-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_list_related_services = document.getElementById('ac-business-list-related-services');
  if (ac_business_list_related_services) {
    gsap.from('#ac-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_youre_in_good_hands = document.getElementById('ac-business-section-youre-in-good-hands');
  if (ac_business_section_youre_in_good_hands) {
    gsap.fromTo('#ac-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_business_section_21 = document.getElementById('ac-business-section-21');
  if (ac_business_section_21) {
    gsap.fromTo('#ac-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('ac-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (ac_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#ac-research-form-conduct-research-in-brazil-with-the-research-visa input, #ac-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_list_quick_facts = document.getElementById('ac-research-list-quick-facts');
  if (ac_research_list_quick_facts) {
    gsap.from('#ac-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_list_common_challenges_applicants_face = document.getElementById('ac-research-list-common-challenges-applicants-face');
  if (ac_research_list_common_challenges_applicants_face) {
    gsap.from('#ac-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_list_how_we_solve_these_challenges = document.getElementById('ac-research-list-how-we-solve-these-challenges');
  if (ac_research_list_how_we_solve_these_challenges) {
    gsap.from('#ac-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_visa_overview = document.getElementById('ac-research-section-visa-overview');
  if (ac_research_section_visa_overview) {
    gsap.fromTo('#ac-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_form_who_is_this_visa_for = document.getElementById('ac-research-form-who-is-this-visa-for');
  if (ac_research_form_who_is_this_visa_for) {
    gsap.from('#ac-research-form-who-is-this-visa-for input, #ac-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_list_required_documents = document.getElementById('ac-research-list-required-documents');
  if (ac_research_list_required_documents) {
    gsap.from('#ac-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_list_application_process = document.getElementById('ac-research-list-application-process');
  if (ac_research_list_application_process) {
    gsap.from('#ac-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_timelines_deadlines = document.getElementById('ac-research-section-timelines-deadlines');
  if (ac_research_section_timelines_deadlines) {
    gsap.fromTo('#ac-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_fees_costs = document.getElementById('ac-research-section-fees-costs');
  if (ac_research_section_fees_costs) {
    gsap.fromTo('#ac-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_list_risks_common_mistakes = document.getElementById('ac-research-list-risks-common-mistakes');
  if (ac_research_list_risks_common_mistakes) {
    gsap.from('#ac-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_diy_vs_professional_assistance = document.getElementById('ac-research-section-diy-vs-professional-assistance');
  if (ac_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_acre_specific_context = document.getElementById('ac-research-section-acre-specific-context');
  if (ac_research_section_acre_specific_context) {
    gsap.fromTo('#ac-research-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_what_our_clients_say = document.getElementById('ac-research-section-what-our-clients-say');
  if (ac_research_section_what_our_clients_say) {
    gsap.fromTo('#ac-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_frequently_asked_questions = document.getElementById('ac-research-section-frequently-asked-questions');
  if (ac_research_section_frequently_asked_questions) {
    gsap.fromTo('#ac-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_international_support = document.getElementById('ac-research-section-international-support');
  if (ac_research_section_international_support) {
    gsap.fromTo('#ac-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_list_our_credentials = document.getElementById('ac-research-list-our-credentials');
  if (ac_research_list_our_credentials) {
    gsap.from('#ac-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_list_related_services = document.getElementById('ac-research-list-related-services');
  if (ac_research_list_related_services) {
    gsap.from('#ac-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_youre_in_good_hands = document.getElementById('ac-research-section-youre-in-good-hands');
  if (ac_research_section_youre_in_good_hands) {
    gsap.fromTo('#ac-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_research_section_21 = document.getElementById('ac-research-section-21');
  if (ac_research_section_21) {
    gsap.fromTo('#ac-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('ac-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (ac_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#ac-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #ac-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_list_quick_facts = document.getElementById('ac-diplomatic-list-quick-facts');
  if (ac_diplomatic_list_quick_facts) {
    gsap.from('#ac-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_list_common_challenges_applicants_face = document.getElementById('ac-diplomatic-list-common-challenges-applicants-face');
  if (ac_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#ac-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_list_how_we_solve_these_challenges = document.getElementById('ac-diplomatic-list-how-we-solve-these-challenges');
  if (ac_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#ac-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_visa_overview = document.getElementById('ac-diplomatic-section-visa-overview');
  if (ac_diplomatic_section_visa_overview) {
    gsap.fromTo('#ac-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_form_who_is_this_visa_for = document.getElementById('ac-diplomatic-form-who-is-this-visa-for');
  if (ac_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#ac-diplomatic-form-who-is-this-visa-for input, #ac-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_list_required_documents = document.getElementById('ac-diplomatic-list-required-documents');
  if (ac_diplomatic_list_required_documents) {
    gsap.from('#ac-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_list_application_process = document.getElementById('ac-diplomatic-list-application-process');
  if (ac_diplomatic_list_application_process) {
    gsap.from('#ac-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_timelines_deadlines = document.getElementById('ac-diplomatic-section-timelines-deadlines');
  if (ac_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#ac-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_fees_costs = document.getElementById('ac-diplomatic-section-fees-costs');
  if (ac_diplomatic_section_fees_costs) {
    gsap.fromTo('#ac-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_list_risks_common_mistakes = document.getElementById('ac-diplomatic-list-risks-common-mistakes');
  if (ac_diplomatic_list_risks_common_mistakes) {
    gsap.from('#ac-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_diy_vs_professional_assistance = document.getElementById('ac-diplomatic-section-diy-vs-professional-assistance');
  if (ac_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_acre_specific_context = document.getElementById('ac-diplomatic-section-acre-specific-context');
  if (ac_diplomatic_section_acre_specific_context) {
    gsap.fromTo('#ac-diplomatic-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_what_our_clients_say = document.getElementById('ac-diplomatic-section-what-our-clients-say');
  if (ac_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#ac-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_frequently_asked_questions = document.getElementById('ac-diplomatic-section-frequently-asked-questions');
  if (ac_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#ac-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_international_support = document.getElementById('ac-diplomatic-section-international-support');
  if (ac_diplomatic_section_international_support) {
    gsap.fromTo('#ac-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_list_our_credentials = document.getElementById('ac-diplomatic-list-our-credentials');
  if (ac_diplomatic_list_our_credentials) {
    gsap.from('#ac-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_list_related_services = document.getElementById('ac-diplomatic-list-related-services');
  if (ac_diplomatic_list_related_services) {
    gsap.from('#ac-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_youre_in_good_hands = document.getElementById('ac-diplomatic-section-youre-in-good-hands');
  if (ac_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#ac-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_diplomatic_section_21 = document.getElementById('ac-diplomatic-section-21');
  if (ac_diplomatic_section_21) {
    gsap.fromTo('#ac-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('ac-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (ac_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#ac-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #ac-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_list_quick_facts = document.getElementById('ac-journalist-list-quick-facts');
  if (ac_journalist_list_quick_facts) {
    gsap.from('#ac-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_list_common_challenges_applicants_face = document.getElementById('ac-journalist-list-common-challenges-applicants-face');
  if (ac_journalist_list_common_challenges_applicants_face) {
    gsap.from('#ac-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_list_how_we_solve_these_challenges = document.getElementById('ac-journalist-list-how-we-solve-these-challenges');
  if (ac_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#ac-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_visa_overview = document.getElementById('ac-journalist-section-visa-overview');
  if (ac_journalist_section_visa_overview) {
    gsap.fromTo('#ac-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_form_who_is_this_visa_for = document.getElementById('ac-journalist-form-who-is-this-visa-for');
  if (ac_journalist_form_who_is_this_visa_for) {
    gsap.from('#ac-journalist-form-who-is-this-visa-for input, #ac-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_list_required_documents = document.getElementById('ac-journalist-list-required-documents');
  if (ac_journalist_list_required_documents) {
    gsap.from('#ac-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_list_application_process = document.getElementById('ac-journalist-list-application-process');
  if (ac_journalist_list_application_process) {
    gsap.from('#ac-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_timelines_deadlines = document.getElementById('ac-journalist-section-timelines-deadlines');
  if (ac_journalist_section_timelines_deadlines) {
    gsap.fromTo('#ac-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_fees_costs = document.getElementById('ac-journalist-section-fees-costs');
  if (ac_journalist_section_fees_costs) {
    gsap.fromTo('#ac-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_list_risks_common_mistakes = document.getElementById('ac-journalist-list-risks-common-mistakes');
  if (ac_journalist_list_risks_common_mistakes) {
    gsap.from('#ac-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_diy_vs_professional_assistance = document.getElementById('ac-journalist-section-diy-vs-professional-assistance');
  if (ac_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_acre_specific_context = document.getElementById('ac-journalist-section-acre-specific-context');
  if (ac_journalist_section_acre_specific_context) {
    gsap.fromTo('#ac-journalist-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_what_our_clients_say = document.getElementById('ac-journalist-section-what-our-clients-say');
  if (ac_journalist_section_what_our_clients_say) {
    gsap.fromTo('#ac-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_frequently_asked_questions = document.getElementById('ac-journalist-section-frequently-asked-questions');
  if (ac_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#ac-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_international_support = document.getElementById('ac-journalist-section-international-support');
  if (ac_journalist_section_international_support) {
    gsap.fromTo('#ac-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_list_our_credentials = document.getElementById('ac-journalist-list-our-credentials');
  if (ac_journalist_list_our_credentials) {
    gsap.from('#ac-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_list_related_services = document.getElementById('ac-journalist-list-related-services');
  if (ac_journalist_list_related_services) {
    gsap.from('#ac-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_youre_in_good_hands = document.getElementById('ac-journalist-section-youre-in-good-hands');
  if (ac_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#ac-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_journalist_section_21 = document.getElementById('ac-journalist-section-21');
  if (ac_journalist_section_21) {
    gsap.fromTo('#ac-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('ac-fines-form-resolve-immigration-fines-in-brazil');
  if (ac_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#ac-fines-form-resolve-immigration-fines-in-brazil input, #ac-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_list_quick_facts = document.getElementById('ac-fines-list-quick-facts');
  if (ac_fines_list_quick_facts) {
    gsap.from('#ac-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_list_common_challenges_applicants_face = document.getElementById('ac-fines-list-common-challenges-applicants-face');
  if (ac_fines_list_common_challenges_applicants_face) {
    gsap.from('#ac-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_list_how_we_solve_these_challenges = document.getElementById('ac-fines-list-how-we-solve-these-challenges');
  if (ac_fines_list_how_we_solve_these_challenges) {
    gsap.from('#ac-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_service_overview = document.getElementById('ac-fines-section-service-overview');
  if (ac_fines_section_service_overview) {
    gsap.fromTo('#ac-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_form_who_is_this_service_for = document.getElementById('ac-fines-form-who-is-this-service-for');
  if (ac_fines_form_who_is_this_service_for) {
    gsap.from('#ac-fines-form-who-is-this-service-for input, #ac-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_list_required_documents = document.getElementById('ac-fines-list-required-documents');
  if (ac_fines_list_required_documents) {
    gsap.from('#ac-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_list_process = document.getElementById('ac-fines-list-process');
  if (ac_fines_list_process) {
    gsap.from('#ac-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_timelines_deadlines = document.getElementById('ac-fines-section-timelines-deadlines');
  if (ac_fines_section_timelines_deadlines) {
    gsap.fromTo('#ac-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_fees_costs = document.getElementById('ac-fines-section-fees-costs');
  if (ac_fines_section_fees_costs) {
    gsap.fromTo('#ac-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_list_risks_common_mistakes = document.getElementById('ac-fines-list-risks-common-mistakes');
  if (ac_fines_list_risks_common_mistakes) {
    gsap.from('#ac-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_diy_vs_professional_assistance = document.getElementById('ac-fines-section-diy-vs-professional-assistance');
  if (ac_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_acre_specific_context = document.getElementById('ac-fines-section-acre-specific-context');
  if (ac_fines_section_acre_specific_context) {
    gsap.fromTo('#ac-fines-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_what_our_clients_say = document.getElementById('ac-fines-section-what-our-clients-say');
  if (ac_fines_section_what_our_clients_say) {
    gsap.fromTo('#ac-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_frequently_asked_questions = document.getElementById('ac-fines-section-frequently-asked-questions');
  if (ac_fines_section_frequently_asked_questions) {
    gsap.fromTo('#ac-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_international_support = document.getElementById('ac-fines-section-international-support');
  if (ac_fines_section_international_support) {
    gsap.fromTo('#ac-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_list_our_credentials = document.getElementById('ac-fines-list-our-credentials');
  if (ac_fines_list_our_credentials) {
    gsap.from('#ac-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_list_related_services = document.getElementById('ac-fines-list-related-services');
  if (ac_fines_list_related_services) {
    gsap.from('#ac-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_youre_in_good_hands = document.getElementById('ac-fines-section-youre-in-good-hands');
  if (ac_fines_section_youre_in_good_hands) {
    gsap.fromTo('#ac-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_fines_section_21 = document.getElementById('ac-fines-section-21');
  if (ac_fines_section_21) {
    gsap.fromTo('#ac-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_form_deportation_assistance_in_brazil = document.getElementById('ac-deportation-form-deportation-assistance-in-brazil');
  if (ac_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#ac-deportation-form-deportation-assistance-in-brazil input, #ac-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_list_quick_facts = document.getElementById('ac-deportation-list-quick-facts');
  if (ac_deportation_list_quick_facts) {
    gsap.from('#ac-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_list_common_challenges_applicants_face = document.getElementById('ac-deportation-list-common-challenges-applicants-face');
  if (ac_deportation_list_common_challenges_applicants_face) {
    gsap.from('#ac-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_list_how_we_solve_these_challenges = document.getElementById('ac-deportation-list-how-we-solve-these-challenges');
  if (ac_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#ac-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_service_overview = document.getElementById('ac-deportation-section-service-overview');
  if (ac_deportation_section_service_overview) {
    gsap.fromTo('#ac-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_form_who_is_this_service_for = document.getElementById('ac-deportation-form-who-is-this-service-for');
  if (ac_deportation_form_who_is_this_service_for) {
    gsap.from('#ac-deportation-form-who-is-this-service-for input, #ac-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_list_required_documents = document.getElementById('ac-deportation-list-required-documents');
  if (ac_deportation_list_required_documents) {
    gsap.from('#ac-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_list_process = document.getElementById('ac-deportation-list-process');
  if (ac_deportation_list_process) {
    gsap.from('#ac-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_timelines_deadlines = document.getElementById('ac-deportation-section-timelines-deadlines');
  if (ac_deportation_section_timelines_deadlines) {
    gsap.fromTo('#ac-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_fees_costs = document.getElementById('ac-deportation-section-fees-costs');
  if (ac_deportation_section_fees_costs) {
    gsap.fromTo('#ac-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_list_risks_common_mistakes = document.getElementById('ac-deportation-list-risks-common-mistakes');
  if (ac_deportation_list_risks_common_mistakes) {
    gsap.from('#ac-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_diy_vs_professional_assistance = document.getElementById('ac-deportation-section-diy-vs-professional-assistance');
  if (ac_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_acre_specific_context = document.getElementById('ac-deportation-section-acre-specific-context');
  if (ac_deportation_section_acre_specific_context) {
    gsap.fromTo('#ac-deportation-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_what_our_clients_say = document.getElementById('ac-deportation-section-what-our-clients-say');
  if (ac_deportation_section_what_our_clients_say) {
    gsap.fromTo('#ac-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_frequently_asked_questions = document.getElementById('ac-deportation-section-frequently-asked-questions');
  if (ac_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#ac-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_international_support = document.getElementById('ac-deportation-section-international-support');
  if (ac_deportation_section_international_support) {
    gsap.fromTo('#ac-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_list_our_credentials = document.getElementById('ac-deportation-list-our-credentials');
  if (ac_deportation_list_our_credentials) {
    gsap.from('#ac-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_list_related_services = document.getElementById('ac-deportation-list-related-services');
  if (ac_deportation_list_related_services) {
    gsap.from('#ac-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_youre_in_good_hands = document.getElementById('ac-deportation-section-youre-in-good-hands');
  if (ac_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#ac-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_deportation_section_21 = document.getElementById('ac-deportation-section-21');
  if (ac_deportation_section_21) {
    gsap.fromTo('#ac-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('ac-translation-form-sworn-document-translation-services-in-brazil');
  if (ac_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#ac-translation-form-sworn-document-translation-services-in-brazil input, #ac-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_list_quick_facts = document.getElementById('ac-translation-list-quick-facts');
  if (ac_translation_list_quick_facts) {
    gsap.from('#ac-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_list_common_challenges_applicants_face = document.getElementById('ac-translation-list-common-challenges-applicants-face');
  if (ac_translation_list_common_challenges_applicants_face) {
    gsap.from('#ac-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_list_how_we_solve_these_challenges = document.getElementById('ac-translation-list-how-we-solve-these-challenges');
  if (ac_translation_list_how_we_solve_these_challenges) {
    gsap.from('#ac-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_service_overview = document.getElementById('ac-translation-section-service-overview');
  if (ac_translation_section_service_overview) {
    gsap.fromTo('#ac-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_form_who_is_this_service_for = document.getElementById('ac-translation-form-who-is-this-service-for');
  if (ac_translation_form_who_is_this_service_for) {
    gsap.from('#ac-translation-form-who-is-this-service-for input, #ac-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_list_required_documents = document.getElementById('ac-translation-list-required-documents');
  if (ac_translation_list_required_documents) {
    gsap.from('#ac-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_list_process = document.getElementById('ac-translation-list-process');
  if (ac_translation_list_process) {
    gsap.from('#ac-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_timelines_deadlines = document.getElementById('ac-translation-section-timelines-deadlines');
  if (ac_translation_section_timelines_deadlines) {
    gsap.fromTo('#ac-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_fees_costs = document.getElementById('ac-translation-section-fees-costs');
  if (ac_translation_section_fees_costs) {
    gsap.fromTo('#ac-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_list_risks_common_mistakes = document.getElementById('ac-translation-list-risks-common-mistakes');
  if (ac_translation_list_risks_common_mistakes) {
    gsap.from('#ac-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_diy_vs_professional_assistance = document.getElementById('ac-translation-section-diy-vs-professional-assistance');
  if (ac_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_acre_specific_context = document.getElementById('ac-translation-section-acre-specific-context');
  if (ac_translation_section_acre_specific_context) {
    gsap.fromTo('#ac-translation-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_what_our_clients_say = document.getElementById('ac-translation-section-what-our-clients-say');
  if (ac_translation_section_what_our_clients_say) {
    gsap.fromTo('#ac-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_frequently_asked_questions = document.getElementById('ac-translation-section-frequently-asked-questions');
  if (ac_translation_section_frequently_asked_questions) {
    gsap.fromTo('#ac-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_international_support = document.getElementById('ac-translation-section-international-support');
  if (ac_translation_section_international_support) {
    gsap.fromTo('#ac-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_list_our_credentials = document.getElementById('ac-translation-list-our-credentials');
  if (ac_translation_list_our_credentials) {
    gsap.from('#ac-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_list_related_services = document.getElementById('ac-translation-list-related-services');
  if (ac_translation_list_related_services) {
    gsap.from('#ac-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_youre_in_good_hands = document.getElementById('ac-translation-section-youre-in-good-hands');
  if (ac_translation_section_youre_in_good_hands) {
    gsap.fromTo('#ac-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_translation_section_21 = document.getElementById('ac-translation-section-21');
  if (ac_translation_section_21) {
    gsap.fromTo('#ac-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('ac-expulsion-form-expulsion-assistance-in-brazil');
  if (ac_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#ac-expulsion-form-expulsion-assistance-in-brazil input, #ac-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_list_quick_facts = document.getElementById('ac-expulsion-list-quick-facts');
  if (ac_expulsion_list_quick_facts) {
    gsap.from('#ac-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_list_common_challenges_applicants_face = document.getElementById('ac-expulsion-list-common-challenges-applicants-face');
  if (ac_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#ac-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_list_how_we_solve_these_challenges = document.getElementById('ac-expulsion-list-how-we-solve-these-challenges');
  if (ac_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#ac-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_service_overview = document.getElementById('ac-expulsion-section-service-overview');
  if (ac_expulsion_section_service_overview) {
    gsap.fromTo('#ac-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_form_who_is_this_service_for = document.getElementById('ac-expulsion-form-who-is-this-service-for');
  if (ac_expulsion_form_who_is_this_service_for) {
    gsap.from('#ac-expulsion-form-who-is-this-service-for input, #ac-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_list_required_documents = document.getElementById('ac-expulsion-list-required-documents');
  if (ac_expulsion_list_required_documents) {
    gsap.from('#ac-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_list_process = document.getElementById('ac-expulsion-list-process');
  if (ac_expulsion_list_process) {
    gsap.from('#ac-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_timelines_deadlines = document.getElementById('ac-expulsion-section-timelines-deadlines');
  if (ac_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#ac-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_fees_costs = document.getElementById('ac-expulsion-section-fees-costs');
  if (ac_expulsion_section_fees_costs) {
    gsap.fromTo('#ac-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_list_risks_common_mistakes = document.getElementById('ac-expulsion-list-risks-common-mistakes');
  if (ac_expulsion_list_risks_common_mistakes) {
    gsap.from('#ac-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_diy_vs_professional_assistance = document.getElementById('ac-expulsion-section-diy-vs-professional-assistance');
  if (ac_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_acre_specific_context = document.getElementById('ac-expulsion-section-acre-specific-context');
  if (ac_expulsion_section_acre_specific_context) {
    gsap.fromTo('#ac-expulsion-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_what_our_clients_say = document.getElementById('ac-expulsion-section-what-our-clients-say');
  if (ac_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#ac-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_frequently_asked_questions = document.getElementById('ac-expulsion-section-frequently-asked-questions');
  if (ac_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#ac-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_international_support = document.getElementById('ac-expulsion-section-international-support');
  if (ac_expulsion_section_international_support) {
    gsap.fromTo('#ac-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_list_our_credentials = document.getElementById('ac-expulsion-list-our-credentials');
  if (ac_expulsion_list_our_credentials) {
    gsap.from('#ac-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_list_related_services = document.getElementById('ac-expulsion-list-related-services');
  if (ac_expulsion_list_related_services) {
    gsap.from('#ac-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_youre_in_good_hands = document.getElementById('ac-expulsion-section-youre-in-good-hands');
  if (ac_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#ac-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_expulsion_section_21 = document.getElementById('ac-expulsion-section-21');
  if (ac_expulsion_section_21) {
    gsap.fromTo('#ac-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('ac-appeals-form-appeal-immigration-denials-in-brazil');
  if (ac_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#ac-appeals-form-appeal-immigration-denials-in-brazil input, #ac-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_list_quick_facts = document.getElementById('ac-appeals-list-quick-facts');
  if (ac_appeals_list_quick_facts) {
    gsap.from('#ac-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_list_common_challenges_applicants_face = document.getElementById('ac-appeals-list-common-challenges-applicants-face');
  if (ac_appeals_list_common_challenges_applicants_face) {
    gsap.from('#ac-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_list_how_we_solve_these_challenges = document.getElementById('ac-appeals-list-how-we-solve-these-challenges');
  if (ac_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#ac-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_service_overview = document.getElementById('ac-appeals-section-service-overview');
  if (ac_appeals_section_service_overview) {
    gsap.fromTo('#ac-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_form_who_is_this_service_for = document.getElementById('ac-appeals-form-who-is-this-service-for');
  if (ac_appeals_form_who_is_this_service_for) {
    gsap.from('#ac-appeals-form-who-is-this-service-for input, #ac-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_list_required_documents = document.getElementById('ac-appeals-list-required-documents');
  if (ac_appeals_list_required_documents) {
    gsap.from('#ac-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_list_appeal_process = document.getElementById('ac-appeals-list-appeal-process');
  if (ac_appeals_list_appeal_process) {
    gsap.from('#ac-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_timelines_deadlines = document.getElementById('ac-appeals-section-timelines-deadlines');
  if (ac_appeals_section_timelines_deadlines) {
    gsap.fromTo('#ac-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_fees_costs = document.getElementById('ac-appeals-section-fees-costs');
  if (ac_appeals_section_fees_costs) {
    gsap.fromTo('#ac-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_list_risks_common_mistakes = document.getElementById('ac-appeals-list-risks-common-mistakes');
  if (ac_appeals_list_risks_common_mistakes) {
    gsap.from('#ac-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_diy_vs_professional_assistance = document.getElementById('ac-appeals-section-diy-vs-professional-assistance');
  if (ac_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_acre_specific_context = document.getElementById('ac-appeals-section-acre-specific-context');
  if (ac_appeals_section_acre_specific_context) {
    gsap.fromTo('#ac-appeals-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_what_our_clients_say = document.getElementById('ac-appeals-section-what-our-clients-say');
  if (ac_appeals_section_what_our_clients_say) {
    gsap.fromTo('#ac-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_frequently_asked_questions = document.getElementById('ac-appeals-section-frequently-asked-questions');
  if (ac_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#ac-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_international_support = document.getElementById('ac-appeals-section-international-support');
  if (ac_appeals_section_international_support) {
    gsap.fromTo('#ac-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_list_our_credentials = document.getElementById('ac-appeals-list-our-credentials');
  if (ac_appeals_list_our_credentials) {
    gsap.from('#ac-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_list_related_services = document.getElementById('ac-appeals-list-related-services');
  if (ac_appeals_list_related_services) {
    gsap.from('#ac-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_youre_in_good_hands = document.getElementById('ac-appeals-section-youre-in-good-hands');
  if (ac_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#ac-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_appeals_section_21 = document.getElementById('ac-appeals-section-21');
  if (ac_appeals_section_21) {
    gsap.fromTo('#ac-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('ac-consular-form-consular-services-in-brazil-for-citizens');
  if (ac_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#ac-consular-form-consular-services-in-brazil-for-citizens input, #ac-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_list_quick_facts = document.getElementById('ac-consular-list-quick-facts');
  if (ac_consular_list_quick_facts) {
    gsap.from('#ac-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_list_common_challenges_applicants_face = document.getElementById('ac-consular-list-common-challenges-applicants-face');
  if (ac_consular_list_common_challenges_applicants_face) {
    gsap.from('#ac-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_list_how_we_solve_these_challenges = document.getElementById('ac-consular-list-how-we-solve-these-challenges');
  if (ac_consular_list_how_we_solve_these_challenges) {
    gsap.from('#ac-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_service_overview = document.getElementById('ac-consular-section-service-overview');
  if (ac_consular_section_service_overview) {
    gsap.fromTo('#ac-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_form_who_is_this_service_for = document.getElementById('ac-consular-form-who-is-this-service-for');
  if (ac_consular_form_who_is_this_service_for) {
    gsap.from('#ac-consular-form-who-is-this-service-for input, #ac-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_list_required_documents = document.getElementById('ac-consular-list-required-documents');
  if (ac_consular_list_required_documents) {
    gsap.from('#ac-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_list_process = document.getElementById('ac-consular-list-process');
  if (ac_consular_list_process) {
    gsap.from('#ac-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_timelines_deadlines = document.getElementById('ac-consular-section-timelines-deadlines');
  if (ac_consular_section_timelines_deadlines) {
    gsap.fromTo('#ac-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_fees_costs = document.getElementById('ac-consular-section-fees-costs');
  if (ac_consular_section_fees_costs) {
    gsap.fromTo('#ac-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_list_risks_common_mistakes = document.getElementById('ac-consular-list-risks-common-mistakes');
  if (ac_consular_list_risks_common_mistakes) {
    gsap.from('#ac-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_diy_vs_professional_assistance = document.getElementById('ac-consular-section-diy-vs-professional-assistance');
  if (ac_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_acre_specific_context = document.getElementById('ac-consular-section-acre-specific-context');
  if (ac_consular_section_acre_specific_context) {
    gsap.fromTo('#ac-consular-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_what_our_clients_say = document.getElementById('ac-consular-section-what-our-clients-say');
  if (ac_consular_section_what_our_clients_say) {
    gsap.fromTo('#ac-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_frequently_asked_questions = document.getElementById('ac-consular-section-frequently-asked-questions');
  if (ac_consular_section_frequently_asked_questions) {
    gsap.fromTo('#ac-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_international_support = document.getElementById('ac-consular-section-international-support');
  if (ac_consular_section_international_support) {
    gsap.fromTo('#ac-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_list_our_credentials = document.getElementById('ac-consular-list-our-credentials');
  if (ac_consular_list_our_credentials) {
    gsap.from('#ac-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_list_related_services = document.getElementById('ac-consular-list-related-services');
  if (ac_consular_list_related_services) {
    gsap.from('#ac-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_youre_in_good_hands = document.getElementById('ac-consular-section-youre-in-good-hands');
  if (ac_consular_section_youre_in_good_hands) {
    gsap.fromTo('#ac-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_consular_section_21 = document.getElementById('ac-consular-section-21');
  if (ac_consular_section_21) {
    gsap.fromTo('#ac-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('ac-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (ac_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#ac-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #ac-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_list_quick_facts = document.getElementById('ac-criminalrecords-list-quick-facts');
  if (ac_criminalrecords_list_quick_facts) {
    gsap.from('#ac-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_list_common_challenges_applicants_face = document.getElementById('ac-criminalrecords-list-common-challenges-applicants-face');
  if (ac_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#ac-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('ac-criminalrecords-list-how-we-solve-these-challenges');
  if (ac_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#ac-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_service_overview = document.getElementById('ac-criminalrecords-section-service-overview');
  if (ac_criminalrecords_section_service_overview) {
    gsap.fromTo('#ac-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_form_who_is_this_service_for = document.getElementById('ac-criminalrecords-form-who-is-this-service-for');
  if (ac_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#ac-criminalrecords-form-who-is-this-service-for input, #ac-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_list_required_documents = document.getElementById('ac-criminalrecords-list-required-documents');
  if (ac_criminalrecords_list_required_documents) {
    gsap.from('#ac-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_list_process = document.getElementById('ac-criminalrecords-list-process');
  if (ac_criminalrecords_list_process) {
    gsap.from('#ac-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_timelines_deadlines = document.getElementById('ac-criminalrecords-section-timelines-deadlines');
  if (ac_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#ac-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_fees_costs = document.getElementById('ac-criminalrecords-section-fees-costs');
  if (ac_criminalrecords_section_fees_costs) {
    gsap.fromTo('#ac-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_list_risks_common_mistakes = document.getElementById('ac-criminalrecords-list-risks-common-mistakes');
  if (ac_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#ac-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('ac-criminalrecords-section-diy-vs-professional-assistance');
  if (ac_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_acre_specific_context = document.getElementById('ac-criminalrecords-section-acre-specific-context');
  if (ac_criminalrecords_section_acre_specific_context) {
    gsap.fromTo('#ac-criminalrecords-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_what_our_clients_say = document.getElementById('ac-criminalrecords-section-what-our-clients-say');
  if (ac_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#ac-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_frequently_asked_questions = document.getElementById('ac-criminalrecords-section-frequently-asked-questions');
  if (ac_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#ac-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_international_support = document.getElementById('ac-criminalrecords-section-international-support');
  if (ac_criminalrecords_section_international_support) {
    gsap.fromTo('#ac-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_list_our_credentials = document.getElementById('ac-criminalrecords-list-our-credentials');
  if (ac_criminalrecords_list_our_credentials) {
    gsap.from('#ac-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_list_related_services = document.getElementById('ac-criminalrecords-list-related-services');
  if (ac_criminalrecords_list_related_services) {
    gsap.from('#ac-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_youre_in_good_hands = document.getElementById('ac-criminalrecords-section-youre-in-good-hands');
  if (ac_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#ac-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_criminalrecords_section_21 = document.getElementById('ac-criminalrecords-section-21');
  if (ac_criminalrecords_section_21) {
    gsap.fromTo('#ac-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_form_extradition_assistance_in_brazil = document.getElementById('ac-extradition-form-extradition-assistance-in-brazil');
  if (ac_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#ac-extradition-form-extradition-assistance-in-brazil input, #ac-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_list_quick_facts = document.getElementById('ac-extradition-list-quick-facts');
  if (ac_extradition_list_quick_facts) {
    gsap.from('#ac-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_list_common_challenges_applicants_face = document.getElementById('ac-extradition-list-common-challenges-applicants-face');
  if (ac_extradition_list_common_challenges_applicants_face) {
    gsap.from('#ac-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_list_how_we_solve_these_challenges = document.getElementById('ac-extradition-list-how-we-solve-these-challenges');
  if (ac_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#ac-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_service_overview = document.getElementById('ac-extradition-section-service-overview');
  if (ac_extradition_section_service_overview) {
    gsap.fromTo('#ac-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_form_who_is_this_service_for = document.getElementById('ac-extradition-form-who-is-this-service-for');
  if (ac_extradition_form_who_is_this_service_for) {
    gsap.from('#ac-extradition-form-who-is-this-service-for input, #ac-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_list_required_documents = document.getElementById('ac-extradition-list-required-documents');
  if (ac_extradition_list_required_documents) {
    gsap.from('#ac-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_list_process = document.getElementById('ac-extradition-list-process');
  if (ac_extradition_list_process) {
    gsap.from('#ac-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_timelines_deadlines = document.getElementById('ac-extradition-section-timelines-deadlines');
  if (ac_extradition_section_timelines_deadlines) {
    gsap.fromTo('#ac-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_fees_costs = document.getElementById('ac-extradition-section-fees-costs');
  if (ac_extradition_section_fees_costs) {
    gsap.fromTo('#ac-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_list_risks_common_mistakes = document.getElementById('ac-extradition-list-risks-common-mistakes');
  if (ac_extradition_list_risks_common_mistakes) {
    gsap.from('#ac-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_diy_vs_professional_assistance = document.getElementById('ac-extradition-section-diy-vs-professional-assistance');
  if (ac_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_acre_specific_context = document.getElementById('ac-extradition-section-acre-specific-context');
  if (ac_extradition_section_acre_specific_context) {
    gsap.fromTo('#ac-extradition-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_what_our_clients_say = document.getElementById('ac-extradition-section-what-our-clients-say');
  if (ac_extradition_section_what_our_clients_say) {
    gsap.fromTo('#ac-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_frequently_asked_questions = document.getElementById('ac-extradition-section-frequently-asked-questions');
  if (ac_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#ac-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_international_support = document.getElementById('ac-extradition-section-international-support');
  if (ac_extradition_section_international_support) {
    gsap.fromTo('#ac-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_list_our_credentials = document.getElementById('ac-extradition-list-our-credentials');
  if (ac_extradition_list_our_credentials) {
    gsap.from('#ac-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_list_related_services = document.getElementById('ac-extradition-list-related-services');
  if (ac_extradition_list_related_services) {
    gsap.from('#ac-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_youre_in_good_hands = document.getElementById('ac-extradition-section-youre-in-good-hands');
  if (ac_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#ac-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_extradition_section_21 = document.getElementById('ac-extradition-section-21');
  if (ac_extradition_section_21) {
    gsap.fromTo('#ac-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_form_discover_the_north_amazon_and_beyond = document.getElementById('ac-north-form-discover-the-north-amazon-and-beyond');
  if (ac_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#ac-north-form-discover-the-north-amazon-and-beyond input, #ac-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_list_quick_facts = document.getElementById('ac-north-list-quick-facts');
  if (ac_north_list_quick_facts) {
    gsap.from('#ac-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_list_common_challenges_applicants_face = document.getElementById('ac-north-list-common-challenges-applicants-face');
  if (ac_north_list_common_challenges_applicants_face) {
    gsap.from('#ac-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_list_how_we_solve_these_challenges = document.getElementById('ac-north-list-how-we-solve-these-challenges');
  if (ac_north_list_how_we_solve_these_challenges) {
    gsap.from('#ac-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_trip_overview = document.getElementById('ac-north-section-trip-overview');
  if (ac_north_section_trip_overview) {
    gsap.fromTo('#ac-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_form_who_is_this_trip_for = document.getElementById('ac-north-form-who-is-this-trip-for');
  if (ac_north_form_who_is_this_trip_for) {
    gsap.from('#ac-north-form-who-is-this-trip-for input, #ac-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_list_required_documents = document.getElementById('ac-north-list-required-documents');
  if (ac_north_list_required_documents) {
    gsap.from('#ac-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_list_booking_process = document.getElementById('ac-north-list-booking-process');
  if (ac_north_list_booking_process) {
    gsap.from('#ac-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_timelines_deadlines = document.getElementById('ac-north-section-timelines-deadlines');
  if (ac_north_section_timelines_deadlines) {
    gsap.fromTo('#ac-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_fees_costs = document.getElementById('ac-north-section-fees-costs');
  if (ac_north_section_fees_costs) {
    gsap.fromTo('#ac-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_list_risks_common_mistakes = document.getElementById('ac-north-list-risks-common-mistakes');
  if (ac_north_list_risks_common_mistakes) {
    gsap.from('#ac-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_diy_vs_professional_assistance = document.getElementById('ac-north-section-diy-vs-professional-assistance');
  if (ac_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_acre_specific_context = document.getElementById('ac-north-section-acre-specific-context');
  if (ac_north_section_acre_specific_context) {
    gsap.fromTo('#ac-north-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_what_our_clients_say = document.getElementById('ac-north-section-what-our-clients-say');
  if (ac_north_section_what_our_clients_say) {
    gsap.fromTo('#ac-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_frequently_asked_questions = document.getElementById('ac-north-section-frequently-asked-questions');
  if (ac_north_section_frequently_asked_questions) {
    gsap.fromTo('#ac-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_international_support = document.getElementById('ac-north-section-international-support');
  if (ac_north_section_international_support) {
    gsap.fromTo('#ac-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_list_our_credentials = document.getElementById('ac-north-list-our-credentials');
  if (ac_north_list_our_credentials) {
    gsap.from('#ac-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_list_related_services = document.getElementById('ac-north-list-related-services');
  if (ac_north_list_related_services) {
    gsap.from('#ac-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_youre_in_good_hands = document.getElementById('ac-north-section-youre-in-good-hands');
  if (ac_north_section_youre_in_good_hands) {
    gsap.fromTo('#ac-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_north_section_21 = document.getElementById('ac-north-section-21');
  if (ac_north_section_21) {
    gsap.fromTo('#ac-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('ac-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (ac_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#ac-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #ac-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_list_quick_facts = document.getElementById('ac-centralwest-list-quick-facts');
  if (ac_centralwest_list_quick_facts) {
    gsap.from('#ac-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_list_common_challenges_applicants_face = document.getElementById('ac-centralwest-list-common-challenges-applicants-face');
  if (ac_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#ac-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_list_how_we_solve_these_challenges = document.getElementById('ac-centralwest-list-how-we-solve-these-challenges');
  if (ac_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#ac-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_trip_overview = document.getElementById('ac-centralwest-section-trip-overview');
  if (ac_centralwest_section_trip_overview) {
    gsap.fromTo('#ac-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_form_who_is_this_trip_for = document.getElementById('ac-centralwest-form-who-is-this-trip-for');
  if (ac_centralwest_form_who_is_this_trip_for) {
    gsap.from('#ac-centralwest-form-who-is-this-trip-for input, #ac-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_list_required_documents = document.getElementById('ac-centralwest-list-required-documents');
  if (ac_centralwest_list_required_documents) {
    gsap.from('#ac-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_list_booking_process = document.getElementById('ac-centralwest-list-booking-process');
  if (ac_centralwest_list_booking_process) {
    gsap.from('#ac-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_timelines_deadlines = document.getElementById('ac-centralwest-section-timelines-deadlines');
  if (ac_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#ac-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_fees_costs = document.getElementById('ac-centralwest-section-fees-costs');
  if (ac_centralwest_section_fees_costs) {
    gsap.fromTo('#ac-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_list_risks_common_mistakes = document.getElementById('ac-centralwest-list-risks-common-mistakes');
  if (ac_centralwest_list_risks_common_mistakes) {
    gsap.from('#ac-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_diy_vs_professional_assistance = document.getElementById('ac-centralwest-section-diy-vs-professional-assistance');
  if (ac_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_acre_specific_context = document.getElementById('ac-centralwest-section-acre-specific-context');
  if (ac_centralwest_section_acre_specific_context) {
    gsap.fromTo('#ac-centralwest-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_what_our_clients_say = document.getElementById('ac-centralwest-section-what-our-clients-say');
  if (ac_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#ac-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_frequently_asked_questions = document.getElementById('ac-centralwest-section-frequently-asked-questions');
  if (ac_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#ac-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_international_support = document.getElementById('ac-centralwest-section-international-support');
  if (ac_centralwest_section_international_support) {
    gsap.fromTo('#ac-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_list_our_credentials = document.getElementById('ac-centralwest-list-our-credentials');
  if (ac_centralwest_list_our_credentials) {
    gsap.from('#ac-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_list_related_services = document.getElementById('ac-centralwest-list-related-services');
  if (ac_centralwest_list_related_services) {
    gsap.from('#ac-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_youre_in_good_hands = document.getElementById('ac-centralwest-section-youre-in-good-hands');
  if (ac_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#ac-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_centralwest_section_21 = document.getElementById('ac-centralwest-section-21');
  if (ac_centralwest_section_21) {
    gsap.fromTo('#ac-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('ac-southeast-form-dynamic-southeast-cities-and-history');
  if (ac_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#ac-southeast-form-dynamic-southeast-cities-and-history input, #ac-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_list_quick_facts = document.getElementById('ac-southeast-list-quick-facts');
  if (ac_southeast_list_quick_facts) {
    gsap.from('#ac-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_list_common_challenges_applicants_face = document.getElementById('ac-southeast-list-common-challenges-applicants-face');
  if (ac_southeast_list_common_challenges_applicants_face) {
    gsap.from('#ac-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_list_how_we_solve_these_challenges = document.getElementById('ac-southeast-list-how-we-solve-these-challenges');
  if (ac_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#ac-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_trip_overview = document.getElementById('ac-southeast-section-trip-overview');
  if (ac_southeast_section_trip_overview) {
    gsap.fromTo('#ac-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_form_who_is_this_trip_for = document.getElementById('ac-southeast-form-who-is-this-trip-for');
  if (ac_southeast_form_who_is_this_trip_for) {
    gsap.from('#ac-southeast-form-who-is-this-trip-for input, #ac-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_list_required_documents = document.getElementById('ac-southeast-list-required-documents');
  if (ac_southeast_list_required_documents) {
    gsap.from('#ac-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_list_booking_process = document.getElementById('ac-southeast-list-booking-process');
  if (ac_southeast_list_booking_process) {
    gsap.from('#ac-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_timelines_deadlines = document.getElementById('ac-southeast-section-timelines-deadlines');
  if (ac_southeast_section_timelines_deadlines) {
    gsap.fromTo('#ac-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_fees_costs = document.getElementById('ac-southeast-section-fees-costs');
  if (ac_southeast_section_fees_costs) {
    gsap.fromTo('#ac-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_list_risks_common_mistakes = document.getElementById('ac-southeast-list-risks-common-mistakes');
  if (ac_southeast_list_risks_common_mistakes) {
    gsap.from('#ac-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_diy_vs_professional_assistance = document.getElementById('ac-southeast-section-diy-vs-professional-assistance');
  if (ac_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_acre_specific_context = document.getElementById('ac-southeast-section-acre-specific-context');
  if (ac_southeast_section_acre_specific_context) {
    gsap.fromTo('#ac-southeast-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_what_our_clients_say = document.getElementById('ac-southeast-section-what-our-clients-say');
  if (ac_southeast_section_what_our_clients_say) {
    gsap.fromTo('#ac-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_frequently_asked_questions = document.getElementById('ac-southeast-section-frequently-asked-questions');
  if (ac_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#ac-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_international_support = document.getElementById('ac-southeast-section-international-support');
  if (ac_southeast_section_international_support) {
    gsap.fromTo('#ac-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_list_our_credentials = document.getElementById('ac-southeast-list-our-credentials');
  if (ac_southeast_list_our_credentials) {
    gsap.from('#ac-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_list_related_services = document.getElementById('ac-southeast-list-related-services');
  if (ac_southeast_list_related_services) {
    gsap.from('#ac-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_youre_in_good_hands = document.getElementById('ac-southeast-section-youre-in-good-hands');
  if (ac_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#ac-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_southeast_section_21 = document.getElementById('ac-southeast-section-21');
  if (ac_southeast_section_21) {
    gsap.fromTo('#ac-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('ac-northeast-form-vibrant-northeast-beaches-and-culture');
  if (ac_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#ac-northeast-form-vibrant-northeast-beaches-and-culture input, #ac-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_list_quick_facts = document.getElementById('ac-northeast-list-quick-facts');
  if (ac_northeast_list_quick_facts) {
    gsap.from('#ac-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_list_common_challenges_applicants_face = document.getElementById('ac-northeast-list-common-challenges-applicants-face');
  if (ac_northeast_list_common_challenges_applicants_face) {
    gsap.from('#ac-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_list_how_we_solve_these_challenges = document.getElementById('ac-northeast-list-how-we-solve-these-challenges');
  if (ac_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#ac-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_trip_overview = document.getElementById('ac-northeast-section-trip-overview');
  if (ac_northeast_section_trip_overview) {
    gsap.fromTo('#ac-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_form_who_is_this_trip_for = document.getElementById('ac-northeast-form-who-is-this-trip-for');
  if (ac_northeast_form_who_is_this_trip_for) {
    gsap.from('#ac-northeast-form-who-is-this-trip-for input, #ac-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_list_required_documents = document.getElementById('ac-northeast-list-required-documents');
  if (ac_northeast_list_required_documents) {
    gsap.from('#ac-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_list_booking_process = document.getElementById('ac-northeast-list-booking-process');
  if (ac_northeast_list_booking_process) {
    gsap.from('#ac-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_timelines_deadlines = document.getElementById('ac-northeast-section-timelines-deadlines');
  if (ac_northeast_section_timelines_deadlines) {
    gsap.fromTo('#ac-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_fees_costs = document.getElementById('ac-northeast-section-fees-costs');
  if (ac_northeast_section_fees_costs) {
    gsap.fromTo('#ac-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_list_risks_common_mistakes = document.getElementById('ac-northeast-list-risks-common-mistakes');
  if (ac_northeast_list_risks_common_mistakes) {
    gsap.from('#ac-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_diy_vs_professional_assistance = document.getElementById('ac-northeast-section-diy-vs-professional-assistance');
  if (ac_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_acre_specific_context = document.getElementById('ac-northeast-section-acre-specific-context');
  if (ac_northeast_section_acre_specific_context) {
    gsap.fromTo('#ac-northeast-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_what_our_clients_say = document.getElementById('ac-northeast-section-what-our-clients-say');
  if (ac_northeast_section_what_our_clients_say) {
    gsap.fromTo('#ac-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_frequently_asked_questions = document.getElementById('ac-northeast-section-frequently-asked-questions');
  if (ac_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#ac-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_international_support = document.getElementById('ac-northeast-section-international-support');
  if (ac_northeast_section_international_support) {
    gsap.fromTo('#ac-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_list_our_credentials = document.getElementById('ac-northeast-list-our-credentials');
  if (ac_northeast_list_our_credentials) {
    gsap.from('#ac-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_list_related_services = document.getElementById('ac-northeast-list-related-services');
  if (ac_northeast_list_related_services) {
    gsap.from('#ac-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_youre_in_good_hands = document.getElementById('ac-northeast-section-youre-in-good-hands');
  if (ac_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#ac-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_northeast_section_21 = document.getElementById('ac-northeast-section-21');
  if (ac_northeast_section_21) {
    gsap.fromTo('#ac-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_form_charming_south_wine_and_gauchos = document.getElementById('ac-south-form-charming-south-wine-and-gauchos');
  if (ac_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#ac-south-form-charming-south-wine-and-gauchos input, #ac-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_list_quick_facts = document.getElementById('ac-south-list-quick-facts');
  if (ac_south_list_quick_facts) {
    gsap.from('#ac-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_list_common_challenges_applicants_face = document.getElementById('ac-south-list-common-challenges-applicants-face');
  if (ac_south_list_common_challenges_applicants_face) {
    gsap.from('#ac-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_list_how_we_solve_these_challenges = document.getElementById('ac-south-list-how-we-solve-these-challenges');
  if (ac_south_list_how_we_solve_these_challenges) {
    gsap.from('#ac-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_trip_overview = document.getElementById('ac-south-section-trip-overview');
  if (ac_south_section_trip_overview) {
    gsap.fromTo('#ac-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_form_who_is_this_trip_for = document.getElementById('ac-south-form-who-is-this-trip-for');
  if (ac_south_form_who_is_this_trip_for) {
    gsap.from('#ac-south-form-who-is-this-trip-for input, #ac-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_list_required_documents = document.getElementById('ac-south-list-required-documents');
  if (ac_south_list_required_documents) {
    gsap.from('#ac-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_list_booking_process = document.getElementById('ac-south-list-booking-process');
  if (ac_south_list_booking_process) {
    gsap.from('#ac-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_timelines_deadlines = document.getElementById('ac-south-section-timelines-deadlines');
  if (ac_south_section_timelines_deadlines) {
    gsap.fromTo('#ac-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_fees_costs = document.getElementById('ac-south-section-fees-costs');
  if (ac_south_section_fees_costs) {
    gsap.fromTo('#ac-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_list_risks_common_mistakes = document.getElementById('ac-south-list-risks-common-mistakes');
  if (ac_south_list_risks_common_mistakes) {
    gsap.from('#ac-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_diy_vs_professional_assistance = document.getElementById('ac-south-section-diy-vs-professional-assistance');
  if (ac_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ac-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_acre_specific_context = document.getElementById('ac-south-section-acre-specific-context');
  if (ac_south_section_acre_specific_context) {
    gsap.fromTo('#ac-south-section-acre-specific-context', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_what_our_clients_say = document.getElementById('ac-south-section-what-our-clients-say');
  if (ac_south_section_what_our_clients_say) {
    gsap.fromTo('#ac-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_frequently_asked_questions = document.getElementById('ac-south-section-frequently-asked-questions');
  if (ac_south_section_frequently_asked_questions) {
    gsap.fromTo('#ac-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_international_support = document.getElementById('ac-south-section-international-support');
  if (ac_south_section_international_support) {
    gsap.fromTo('#ac-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_list_our_credentials = document.getElementById('ac-south-list-our-credentials');
  if (ac_south_list_our_credentials) {
    gsap.from('#ac-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_list_related_services = document.getElementById('ac-south-list-related-services');
  if (ac_south_list_related_services) {
    gsap.from('#ac-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_youre_in_good_hands = document.getElementById('ac-south-section-youre-in-good-hands');
  if (ac_south_section_youre_in_good_hands) {
    gsap.fromTo('#ac-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

  const ac_south_section_21 = document.getElementById('ac-south-section-21');
  if (ac_south_section_21) {
    gsap.fromTo('#ac-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.6, ease: 'bounce.out'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});

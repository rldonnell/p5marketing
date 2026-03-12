'use client';

import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    // FAQ Accordion
    function handleFaqClick(e) {
      var q = e.target.closest('.p5-faq-q');
      if (!q) return;
      var item = q.closest('.p5-faq-item');
      if (!item) return;
      var isOpen = item.classList.contains('p5-open');
      document.querySelectorAll('.p5-faq-item.p5-open').forEach(function (el) {
        el.classList.remove('p5-open');
      });
      if (!isOpen) item.classList.add('p5-open');
    }
    document.addEventListener('click', handleFaqClick);

    // Scroll Animations
    var targets = document.querySelectorAll('.p5-fade-up');
    var observer;
    if (targets.length && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('p5-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      targets.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      targets.forEach(function (el) {
        el.classList.add('p5-visible');
      });
    }

    // Smooth scroll
    function handleSmoothScroll(e) {
      var link = e.target.closest('a[href*="#"]');
      if (!link) return;
      var href = link.getAttribute('href');
      var hash = href.split('#')[1];
      if (!hash) return;
      var target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleFaqClick);
      document.removeEventListener('click', handleSmoothScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is IntentID and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "We track what millions of Americans are searching for across the web and social media every day. When someone starts researching the kind of services you offer, we see that activity. We use it to build a custom audience of people who are actively looking for what you sell right now. That audience gets loaded into your ad platforms, like Meta, Google, X, TikTok, or LinkedIn, so your ads only show to people who are already looking." } },
                { "@type": "Question", "name": "What is VisitorID and what information do I get?", "acceptedAnswer": { "@type": "Answer", "text": "VisitorID is a pixel that sits on your website and identifies up to 60% of your visitors. For each identified visitor, you can receive their name, email address, phone number, home address, and household income, along with details about what pages they visited and how they behaved on your site." } },
                { "@type": "Question", "name": "What is InboxID and what happens after a visitor is identified?", "acceptedAnswer": { "@type": "Answer", "text": "InboxID is our conversion engine. Within minutes of identification, visitors enter our follow-up system. Depending on your setup, that can include retargeting ads to keep your brand visible, and automated email sequences tailored to the pages they viewed. Their contact information also feeds directly into your CRM so your team can follow up personally." } },
                { "@type": "Question", "name": "Does VisitorID only work on traffic you generate?", "acceptedAnswer": { "@type": "Answer", "text": "No. VisitorID identifies visitors regardless of how they got to your site. Your SEO traffic, your Google Ads, your Meta campaigns, referral traffic, direct visits, all of it. If someone lands on your website, we can identify them." } },
                { "@type": "Question", "name": "Do I need all four services?", "acceptedAnswer": { "@type": "Answer", "text": "The ID Suite is built as a system. IntentID finds your audience. The SEO Accelerator attracts them through organic content. Paid ads accelerate that reach. VisitorID tracks who is interested. InboxID converts them. You could start with one tool, but you will see the real ROI when they work together. Most of our clients use all four within 90 days." } },
                { "@type": "Question", "name": "What does up to 60% mean exactly?", "acceptedAnswer": { "@type": "Answer", "text": "It refers to unique website visitors we can resolve into identifiable profiles. We cap expectations so we can over-deliver. Performance varies based on traffic mix, geography, and volume." } },
                { "@type": "Question", "name": "How fast does visitor identification happen?", "acceptedAnswer": { "@type": "Answer", "text": "Typically in minutes, which means your team can follow up the same day a prospect visits your site." } },
                { "@type": "Question", "name": "Is this U.S. only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our identification and audience data are designed for U.S. visitors and consumers." } },
                { "@type": "Question", "name": "What kinds of businesses does this work best for?", "acceptedAnswer": { "@type": "Answer", "text": "High-trust, high-ticket businesses where a booked call, tour, or consult is valuable. Wedding venues and plastic surgeons are our primary verticals, but the system works for legal, luxury services, and specialty medical practices." } },
                { "@type": "Question", "name": "Is this compliant?", "acceptedAnswer": { "@type": "Answer", "text": "We support opt-out and suppression handling and implement responsible segmentation so outreach is targeted and measurable. We will align implementation to your needs and applicable U.S. requirements during setup." } },
                { "@type": "Question", "name": "What do we need to get started?", "acceptedAnswer": { "@type": "Answer", "text": "Website access for pixel installation, plus ad account access and your CRM details. Once tracking is installed, most clients can go live quickly." } },
                { "@type": "Question", "name": "What is the SEO Accelerator?", "acceptedAnswer": { "@type": "Answer", "text": "The SEO Accelerator is your organic traffic engine covering SEO, GEO, and content repurposing powered by 25 years of P5 SEO expertise." } },
                { "@type": "Question", "name": "What is GEO?", "acceptedAnswer": { "@type": "Answer", "text": "Generative Engine Optimization (GEO) optimizes your content for AI search platforms like ChatGPT, Claude, and Perplexity." } }
              ]
            })
        }}
      />

      {/* ===== HERO ===== */}
      <section className="p5-hero">
        <div className="p5-wrap">
          <div className="p5-hero-grid">
            <div className="p5-hero-copy p5-fade-up">
              <p className="p5-kicker">Colleyville, TX &middot; U.S. Only &middot; High-Trust, High-Value Businesses</p>
              <h1>Plastic Surgery Marketing That Builds a Pipeline You Can See, Track, and Close</h1>
              <p className="p5-sub">We find people actively searching for your services. We drive them to your site. We identify them by name. And we follow up until they convert. One system. Full visibility. Built for plastic surgeons and high-trust businesses.</p>
              <div className="p5-cta-row">
                <a href="/contact-us/" className="p5-btn p5-btn-primary">Book a Demo</a>
                <a href="#cycle" className="p5-btn p5-btn-ghost">See the Full Cycle</a>
              </div>
            </div>
            <div className="p5-hero-illus p5-fade-up p5-delay-1">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '580px', margin: '0 auto', display: 'block' }}>
                <circle cx="200" cy="200" r="160" stroke="#00e5c7" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
                <circle cx="200" cy="48" r="40" fill="#0d1420" stroke="#00e5c7" strokeWidth="2" />
                <text x="200" y="44" textAnchor="middle" fill="#00e5c7" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">FIND</text>
                <text x="200" y="59" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">IntentID</text>Ú\ÛHÞHÍLÞOHH[HÌMÝÚÙOHÍØYÝÚÙUÚYHÏ^HÍLOHNM^[ÚÜHZYH[HÍØYÛÚ^OHLÈÛ[Z[OHÜXÙH[ÛË[ÛÜÜXÙHÛÙZYÚHÌUOÝ^^HÍLOHLH^[ÚÜHZYH[HÎMLØÛÚ^OHLÛ[Z[OHHØ[ËØ[Ë\Ù\YÑSÈXØÙ[\]Ü
ÈYÏÝ^Ú\ÛHÞHÞOHÍLH[HÌMÝÚÙOHÌMXÍÈÝÚÙUÚYHÏ^HOHÍ^[ÚÜHZYH[HÌMXÍÈÛÚ^OHLÈÛ[Z[OHÜXÙH[ÛË[ÛÜÜXÙHÛÙZYÚHÌQSQOÝ^^HOHÍÈ^[ÚÜHZYH[HÎMLØÛÚ^OHLÛ[Z[OHHØ[ËØ[Ë\Ù\Y\Ú]ÜQÝ^Ú\ÛHÞHÞOHH[HÌMÝÚÙOHÍØYÝÚÙUÚYHÏ^HOHNM^[ÚÜHZYH[HÍØYÛÚ^OHLÈÛ[Z[OHÜXÙH[ÛË[ÛÜÜXÙHÛÙZYÚHÌÓÓTÝ^^HOHLH^[ÚÜHZYH[HÎMLØÛÚ^OHLÛ[Z[OHHØ[ËØ[Ë\Ù\Y[ÞQÝ^]HLÌ
MHÌMHMÌÝÚÙOHÌMXÍÈÝÚÙUÚYHKHÜXÚ]OHHX\Ù\[H\
Ø\HÏ]HLÍ
HÍHÌÍÝÚÙOHÍØYÝÚÙUÚYHKHÜXÚ]OHHX\Ù\[H\
Ø\HÏ¢ÇFCÒ$Ós3CRÃR#3"7G&ö¶SÒ"3SV3r"7G&ö¶UvGFÒ#ãR"÷6GÒ#ãR"Ö&¶W$VæCÒ'W&Â6'""óà¢ÇFCÒ$ÓSRcRÃsc"7G&ö¶SÒ"3v#cfb"7G&ö¶UvGFÒ#ãR"÷6GÒ#ãR"Ö&¶W$VæCÒ'W&Â6'#""óà¢ÆFVg3à¢ÆÖ&¶W"CÒ&'""Ö&¶W%vGFÒ#"Ö&¶W$VvCÒ#"&VeÒ#"&VeÒ#B"÷&VçCÒ&WFò#à¢ÇFCÒ$ÓÃBÃ"fÆÃÒ&æöæR"7G&ö¶SÒ"3SV3r"7G&ö¶UvGFÒ#ãR"óà¢ÂöÖ&¶W#à¢ÆÖ&¶W"CÒ&'#""Ö&¶W%vGFÒ#"Ö&¶W$VvCÒ#"&VeÒ#"&VeÒ#B"÷&VçCÒ&WFò#à¢ÇFCÒ$ÓÃBÃ"fÆÃÒ&æöæR"7G&ö¶SÒ"3v#cfb"7G&ö¶UvGFÒ#ãR"óà¢ÂöÖ&¶W#à¢ÂöFVg3à¢ÇFWBÒ##"Ò#"FWDæ6÷#Ò&ÖFFÆR"fÆÃÒ"3F6#"föçE6¦SÒ#"föçDfÖÇÒ$DÒ6ç2Â6ç2×6W&b"föçEvVvCÒ#C#ä÷FW"vVæ6W3Â÷FWCà¢ÇFWBÒ##"Ò#b"FWDæ6÷#Ò&ÖFFÆR"fÆÃÒ"3F6#"föçE6¦SÒ#"föçDfÖÇÒ$DÒ6ç2Â6ç2×6W&b"föçEvVvCÒ#C#ævfR÷RV6W2ãÂ÷FWCà¢ÇFWBÒ##"Ò##R"FWDæ6÷#Ò&ÖFFÆR"fÆÃÒ"3SV3r"föçE6¦SÒ#""föçDfÖÇÒ$DÒ6ç2Â6ç2×6W&b"föçEvVvCÒ#s#åvRvfR÷SÂ÷FWCà¢ÇFWBÒ##"Ò##3"FWDæ6÷#Ò&ÖFFÆR"fÆÃÒ"3SV3r"föçE6¦SÒ#""föçDfÖÇÒ$DÒ6ç2Â6ç2×6W&b"föçEvVvCÒ#s#çFRgVÆÂ76ÆRãÂ÷FWCà¢Â÷7fsà¢ÂöFcà¢ÂöFcà¢ÂöFcà¢Â÷6V7Föãà ¢²ò¢ÓÓÓÓÒ5DB$"ÓÓÓÓÒ¢÷Ð¢Ç6V7Föâ6Æ74æÖSÒ'R×7FBÖ&"RÖfFR×W#à¢ÆFb6Æ74æÖSÒ'R×w&"7GÆS×·²F7Æ¢vfÆWrÂ§W7Fg6öçFVçC¢v6VçFW"rÂv¢s7&VÒrÂfÆWw&¢ww&rÂFWDÆvã¢v6VçFW"r×Óà(ñ¥Ø±ÍÍ9µôÀÔµÍÑÐø(ñÍÁ¸±ÍÍ9µôÀÔµÍÑÐµ¹Õ´øØÀð½ÍÁ¸ø(ñÍÁ¸±ÍÍ9µôÀÔµÍÑÐµ±°ù]Í¥ÑY¥Í¥Ñ½ÉÌ%¹Ñ¥¥ð½ÍÁ¸ø(ð½¥Øø(ñ¥Ø±ÍÍ9µôÀÔµÍÑÐø(ñÍÁ¸±ÍÍ9µôÀÔµÍÑÐµ¹Õ´ùMµäð½ÍÁ¸ø(ñÍÁ¸±ÍÍ9µôÀÔµÍÑÐµ±°ù½±±½ÜµUÀMÁð½ÍÁ¸ø(ð½¥Øø(ñ¥Ø±ÍÍ9µôÀÔµÍÑÐø(ñÍÁ¸±ÍÍ9µôÀÔµÍÑÐµ¹Õ´øÐMÑÌð½ÍÁ¸ø(ñÍÁ¸±ÍÍ9µôÀÔµÍÑÐµ±°ùÕ±°µ
å±MåÍÑ´ð½ÍÁ¸ø(ð½¥Øø(ñ¥Ø±ÍÍ9µôÀÔµÍÑÐø(ñÍÁ¸±ÍÍ9µôÀÔµÍÑÐµ¹Õ´øÈÔeÉÌð½ÍÁ¸ø(ñÍÁ¸±ÍÍ9µôÀÔµÍÑÐµ±°ùM<1äð½ÍÁ¸ø(ð½¥Øø(ð½¥Øø(ð½ÍÑ¥½¸ø((ì¼¨ôôôôôQ!IA%11ILôôôôô¨½ô(ñÍÑ¥½¸±ÍÍ9µôÀÔµÝÉÀ¥ôÁ¥±±ÉÌø(ñÀ±ÍÍ9µôÀÔµÍÑ¥½¸µ±°ÀÔµµÕÀùQ¡MåÍÑ´ð½Àø(ñ È±ÍÍ9µôÀÔµÍÑ¥½¸µÑ¥Ñ±ÀÔµµÕÀùQ¡½µÁ±ÑÍåÍÑ´Ñ¡ÐÑÑÉÑÌ°¥¹Ì°¥¹Ñ¥¥Ì°¹½¹ÙÉÑÌå½ÕÈ¹áÐÕÍÑ½µÉÌ¸ð½ Èø(ñÀ±ÍÍ9µôÀÔµµÕÀÍÑå±õíìÑáÑ±¥¸è¹ÑÈ°½±½ÈèÙÈ ´µÀÔµÑáÐµ¥´¤°µá]¥Ñ èØÐÁÁà°µÉ¥¸èÀÕÑ¼È¸ÕÉ´õôùQ¡M<±ÉÑ½ÈÁÕ±±ÌÅÕ±¥¥ÑÉ¥É½´½É¹¥Í½ÕÉÌ¸Q¡%¹ÍÀíMÕ¥Ñ½¹ÙÉÑÌÑ¡ÐÑÉ¥¥¹Ñ¼ÕÍÑ½µÉÌ¸ð½Àø(ñ¥Ø±ÍÍ9µôÀÔµÁÉ¥´µÉ¥ø(ñ¥Ø±ÍÍ9µôÀÔµÀµÉÀÔµµÕÀø(ñÍÁ¸±ÍÍ9µôÀÔµ¹Õ´øÀÄð½ÍÁ¸ø(ñ Ìù%¹Ñ¹Ñ%ÑÉìè¥¹Q¡´ð½ Ìø(ñÀù]ÑÉ¬Ý¡Ðµ¥±±¥½¹Ì½µÉ¥¹ÌÉÍÉ¡¥¹½ÈÉ½ÍÌÑ¡Ý¹Í½¥°µ¥ÙÉää¸]ÕÍÑ¡ÐÑÑ¼Õ¥±ÕÍÑ½´Õ¥¹½Á½Á±Ñ¥Ù±ä±½½­¥¹½ÈáÑ±äÝ¡Ðå½ÔÍ±°°É¥¡Ð¹½Ü¸Q¡¸ÝÁ±½äÑ¡ÐÕ¥¹¥¹Ñ¼å½ÕÈÁ±Ñ½ÉµÌè5Ñ°½½±°`°Q¥­Q½¬°1¥¹­%¸¸e½ÕÈÌÉ ÉäµÑ¼µÕäÁ½Á±¥¹ÍÑ½¹½¹åµ½ÕÌÙ¥Í¥Ñ½ÉÌ¸	ÑÑÈ±Ì¸1½ÝÈ½ÍÑÌ¸1ÍÌÝÍÑ¸ð½Àø(ð½¥Øø(ñ¥Ø±ÍÍ9µôÀÔµÀµÉÀÔµµÕÀÀÔµ±ä´Äø(ñÍÁ¸±ÍÍ9µôÀÔµ¹Õ´øÀÈð½ÍÁ¸ø(ñ ÌùY¥Í¥Ñ½É%ÑÉìè%¹Ñ¥äQ¡´ð½ Ìø(ñÀù=ÕÈÁ¥á°¥¹Ñ¥¥ÌÕÀÑ¼ØÀ½Ñ¡Á½Á±Ý¡¼Ù¥Í¥Ðå½ÕÈÍ¥Ñ¹¥ÙÌå½ÔÑ¡¥È¹µ°µ¥°°Á¡½¹¹ÕµÈ°¡½µÉÍÌ°¹¡½ÕÍ¡½±¥¹½µ¸%ÐÝ½É­Ì½¸±°å½ÕÈÑÉ¥èå½ÕÈM<°å½ÕÈÌ°½ÕÈÕ¥¹Ì°ÉÉÉ±Ì°ÙÉåÑ¡¥¹¸5¥¹ÕÑÌ°¹½ÐåÌ¸T¹L¸½¹±ä¸ð½Àø(ð½¥Øø(ñ¥Ø±ÍÍ9µôÀÔµÀµÉÀÔµµÕÀÀÔµ±ä´Èø(ñÍÁ¸±ÍÍ9µôÀÔµ¹Õ´øÀÌð½ÍÁ¸ø(ñ Ìù%¹½á%ÑÉìè
½¹ÙÉÐQ¡´ð½ Ìø(ñÀù%¹Ñ¥¥Ñ¥½¸Ý¥Ñ¡½ÕÐ½±±½ÜµÕÀ¥ÌÝÍÑ±¸=ÕÈÁ½ÍÐµÙ¥Í¥ÐÍåÍÑ´ÑÉ¥ÉÌÍµµä½ÕÑÉ èÉÑÉÑ¥¹ÌÑ¼ÍÑäÙ¥Í¥±¹µ¥°ÍÅÕ¹ÌÑ¥±½ÉÑ¼Ý¡ÐÑ¡äÙ¥Ý¸Q¡¥ÈÑ±½ÝÌ¥¹Ñ¼å½ÕÈ
I4Í¼å½ÕÈÑ´­¹½ÝÌáÑ±äÝ¡¼Ñ¼±°¹Ý¡ä¸ð½Àø(ð½¥Øø(ð½¥Øø(ð½ÍÑ¥½¸ø((ì¼¨ôôôôô=UHµMQ
e
1ôôôôô¨½ô(ñÍÑ¥½¸±ÍÍ9µôÀÔµÝÉÀ¥ôå±ø(ñÀ±ÍÍ9µôÀÔµÍÑ¥½¸µ±°ÀÔµµÕÀù!½Ü%Ð]½É­Ìð½Àø(ñ È±ÍÍ9µôÀÔµÍÑ¥½¸µÑ¥Ñ±ÀÔµµÕÀù½ÕÈÍÑÌ¸=¹å±¸Á¥Á±¥¹Ñ¡ÐÑÌÍµÉÑÈÑ¡±½¹È¥ÐÉÕ¹Ì¸ð½ Èø(ñ¥Ø±ÍÍ9µôÀÔµ¡¥ÜµÑ¥°ø(ñ¥Ø±ÍÍ9µôÀÔµ¡¥Üµ±½¬ÀÔµµÕÀø(ñÍÁ¸±ÍÍ9µôÀÔµ¡¥Üµ¹Õ´øÄð½ÍÁ¸ø(ñ¥Øø(ñ Ìù	Õ¥±e½ÕÈÕ¥¹ð½ Ìø(ñÀù%¹Ñ¹Ñ%ÑÉì¥¹ÌÁ½Á±Ñ¥Ù±äÉÍÉ¡¥¹å½ÕÈÍÉÙ¥ÌÉ½ÍÌÑ¡Ý¸]Õ¥±ÕÍÑ½´Õ¥¹¹±½¥Ð¥¹Ñ¼å½ÕÈÁ±Ñ½ÉµÌ¸e½ÕÈÕÐ½ÌÑ¼ÉäµÑ¼µÕäÁÉ½ÍÁÑÌ¥¹ÍÑ½¹Ü°Õ¹ÑÉÑÑÉ¥¸ð½Àø(ð½¥Øø(ð½¥Øø(ñ¥Ø±ÍÍ9µôÀÔµ¡¥Üµ±½¬ÀÔµµÕÀÀÔµ±ä´Äø(ñÍÁ¸±ÍÍ9µôÀÔµ¡¥Üµ¹Õ´øÈð½ÍÁ¸ø(ñ¥Øø(ñ ÌùÉ¥ÙEÕ±¥¥QÉ¥ð½ Ìø(ñÀùe½ÕÈ%¹Ñ¹Ñ%Õ¥¹¥Ìµ½¹Ñ¥éÑ¡É½Õ ÑÝ¼ÁÉ±±°¡¹¹±Ìè½É¹¥½¹Ñ¹Ð¹Á¥ÙÉÑ¥Í¥¹¸ð½Àø
]Ý[O^ÞÈX\Ú[Ü	ÌK\[IËY[ÓY	ÌK\[IËÜ\Y	ÌÜÛÛY\K\
KXXØÙ[
IÈ_OÝ[O^ÞÈÛ[Z[N	ÔÜXÙH[ÛË[ÛÜÜXÙIËÛÚ^N	Ë
\[IËÛÙZYÚ
Ì^[ÙÜN	Ý\\Ø\ÙIË]\ÜXÚ[Î	Ë
Y[IËÛÛÜ	Ý\K\
K]^
IËX\Ú[ÝÛN	Ë\[IÈ_OÑSÈXØÙ[\]ÜÜØ[XÈYXÈÝ[][ÛÜÝ[O^ÞÈÛÛÜ	Ý\K\
K]^Y[JIË[RZYÚKËX\Ú[ÝÛN	Ì\[IÈ_O]XÝHYÚ^Y\ÈÝYÚÙX\Ú[Ú[\È[RIÎNÜÝÙ\YÛÛËHÑSÈXØÙ[\]Ü][ÜÈÑSÉÎNÙØÝ\ÙYÛÛ[YÙ\ËÜ[Z^\ÈÜÙ[\]]H[Ú[HÜ[Z^][ÛÜÊÑSÊK[Z[ÈÛØÚX[Û[Ý[Û[[ÙØ\ÝÛÛ[ÛH[Ý\ÛÜHY\ÜØYÚ[Ë\ÈÜØ[XÈÝ[][ÛYXÙ\È[Ý\ZYXÜ]Z\Ú][ÛÛÜÝ[ÛÛ\Ý[ÈÝ\[YKÜÝ[O^ÞÈÛ[Z[N	ÔÜXÙH[ÛË[ÛÜÜXÙIËÛÚ^N	Ë
\[IËÛÙZYÚ
Ì^[ÙÜN	Ý\\Ø\ÙIË]\ÜXÚ[Î	Ë
Y[IËÛÛÜ	Ý\K\
K]^
IËX\Ú[ÝÛN	Ë\[IÈ_OZYY\\Ú[Î[[YYX]HXXÚÜÝ[O^ÞÈÛÛÜ	Ý\K\
K]^Y[JIË[RZYÚKËX\Ú[ÝÛN	Ì\[IÈ_O[[Ý\[[Q]YY[ÙH\XÝH[ÈYÚ	ÎNØÛÛ\[ÈZYØ[\ZYÛÈÛÛÛÙÛKY]K[ÙY[[ZÕÚËØ[YIÎNÙ^HXÙ[Y[Ý[ÜÔÒKÈÜØ[XÈØZ][YKÜÝ[O^ÞÈÛ[Z[N	ÔÜXÙH[ÛË[ÛÜÜXÙIËÛÚ^N	Ë
\[IËÛÙZYÚ
Ì^[ÙÜN	Ý\\Ø\ÙIË]\ÜXÚ[Î	Ë
Y[IËÛÛÜ	Ý\K\
K]^
IËX\Ú[ÝÛN	Ë\[IÈ_OÙÙ]\HÛÛ\]HYXÈÝ]YÞOÜÝ[O^ÞÈÛÛÜ	Ý\K\
K]^Y[JIË[RZYÚKÈ_OHÑSÈXØÙ[\]Ü[\ÈHÛÉÎNÝ\HÜØ[XÈXÜ]Z\Ú][ÛØ[YKZY	ÜØYÈ[HHÚÜ	ÎNÝ\HÚ[Ë[Ý\[[Q]YY[ÙHÝÙ\ÈÝ	Y\ÚÛÛH[YYY]HYYÛÈYXÈÚ[[Ë^Û[X[XXÚÜÙ]Ù]Ù]]Û\ÜÓ[YOH
KZ]ËXØÚÈ
KYYK]\
KY[^KLÜ[Û\ÜÓ[YOH
KZ]Ë[[HÏÜÜ[]ÏY[YH[Ý\\Ú]ÜÏÚÏÝ\^[\ÛÛ\È\È
	HÙ[Ý\ÙXÚ]H\Ú]ÜÈ[È[ÛÛXÝÙ[\Ë[YBÂVÖÂÂöæRÂFG&W72Â÷W6VöÆBæ6öÖRâFVÆfW&VBâÖçWFW2Âæ÷BF2âv÷&·2öâÆÂ÷W"G&ff2&Vv&FÆW72öbFR6÷W&6RãÂ÷à¢ÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖrÖ&Æö6²RÖfFR×WRÖFVÆÓ2#à¢Ç7â6Æ74æÖSÒ'RÖrÖçVÒ#ãCÂ÷7ãà¢ÆFcà¢Æ3ä6öçfW'BvFföÆÆ÷rÕWÂö3à¢Çå6ÖRÖF&WF&vWFærG2æBVÖÂ6WVVæ6W2¶VW÷W"'W6æW72âg&öçBöbFVçFfVBf6F÷'2âFV"æf÷&ÖFöâfVVG2÷W"5$Òâ÷W"FVÒ6Æ÷6W2v&ÒÆVG2ç7FVBöb66ær&÷7V7G2vò&RF6VævvVBãÂ÷à¢ÂöFcà¢ÂöFcà¢ÂöFcà¢Ç6Æ74æÖSÒ'RÖfFR×W"7GÆS×·²FWDÆvã¢v6VçFW"rÂ6öÆ÷#¢wf"Ò×RÖ66VçBrÂÖ&våF÷¢s'&VÒrÂföçEvVvC¢S×Óå7FvRBfVVG27FvRâWfW'6öçfW'6öâÖ¶W2÷W"VFVæ6W26Ö'FW"âFR77FVÒvWG2&WGFW"FRÆöævW"B'Vç2ãÂ÷à¢Â÷6V7Föãà ¢²ò¢ÓÓÓÓÒDTÄdU$$ÄU2ÓÓÓÓÒ¢÷Ð¢Ç6V7Föâ6Æ74æÖSÒ'R×w&#à¢Ç6Æ74æÖSÒ'R×6V7FöâÖÆ&VÂRÖfFR×W#äFVÆfW&&ÆW3Â÷à¢Æ"6Æ74æÖSÒ'R×6V7Föâ×FFÆRRÖfFR×W#åvB÷RvWCÂö#à¢ÆFb6Æ74æÖSÒ'RÖFVÂÖw&B#à¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6&BRÖfFR×W#à¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6öâ#âb3#s³ÂöFcà¢Æ3äçFVçDBgG&FS²VFVæ6R'VÆFæsÂö3à¢Çä7W7FöÒVFVæ6W2öbV÷ÆR7FfVÇ6V&6ærf÷"vB÷R6VÆÂÂ'VÇBg&öÒ&VÂ×FÖRFFæBFWÆ÷VBçFòÖWFÂvöövÆRÂÂFµFö²ÂÆæ¶VDâÂæBÖ÷&Râ&WGFW"ÆVG2BÆ÷vW"6÷7BãÂ÷à¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6&BRÖfFR×WRÖFVÆÓ#à¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6öâ#âb3##c³ÂöFcà¢Æ3å4Tò66VÆW&F÷#¢6öçFVçBf×²4TóÂö3à¢Çå4Tòb3#¶fö7W6VBÆæFærvW2æBÆÆ"6öçFVçBâtTò÷FÖ¦Föâf÷"6V&6ÆFf÷&×2â6ö6ÂÖVF6ÆVæF'2Â&öÖ÷FöæÂ6öçFVçBÂæBöF67B67&G2â#Rfæ'7·V'2öb4TòWW'F6RÂ&VÖvæVBf÷"FöFg'7Vó·26V&6ÆæG66RãÂ÷à¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6&BRÖfFR×WRÖFVÆÓ"#à¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6öâ#âb3#³ÂöFcà¢Æ3åf6F÷$BgG&FS²f6F÷"FVçFf6FöãÂö3à¢Çä¶æ÷rvòf6G2÷W"vV'6FRâæÖRÂVÖÂÂöæRÂöÖRFG&W72Â÷W6VöÆBæ6öÖRÂæBÖ÷&Râv÷&·2öâÆÂ÷W"G&ff2&Vv&FÆW72öbFR6÷W&6RâFVÆfW&VBâÖçWFW2Âæ÷BF2ãÂ÷à¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6&BRÖfFR×WRÖFVÆÓ"#à¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6öâ#âb3#cC³ÂöFcà¢Æ3äæ&÷BgG&FS²6öçfW'6öâVævæSÂö3à¢ÇäFVçFfVBf6F÷'2&V6VfR6ÖRÖFföÆÆ÷r×WFÆ÷&VBFòvBFWfWvVBöâ÷W"6FRâ&WF&vWFærG2¶VW÷W"'&æBf6&ÆRâVÖÂ6WVVæ6W2'VÆBG'W7BâWfW'F÷V6öçB2G&6¶VBãÂ÷à¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6&BRÖfFR×WRÖFVÆÓ2#à¢ÆFb6Æ74æÖSÒ'RÖFVÂÖ6öâ#âb3###³ÂöFcà¢Æ3ä5$ÒçFVw&Föâ²&W÷'FæsÂö3à¢ÇäFVçFfVBf6F÷"FFfVVG2F&V7FÇçFòFR5$Òöb÷W"6ö6Râ6VRvòf6FVBÂvBFWÆöö¶VBBÂ÷rFWVævvVBÂæBvW&RFW&RâFRföÆÆ÷r×W76ÆRãÂ÷à¢ÂöFcà¢ÂöFcà¢Â÷6V7Föãà ¢²ò¢ÓÓÓÓÒÔ$´UE2ÓÓÓÓÒ¢÷Ð¢Ç6V7Föâ6Æ74æÖSÒ'R×w&#à¢Ç6Æ74æÖSÒ'R×6V7FöâÖÆ&VÂRÖfFR×W#äÖ&¶WG26W'fVCÂ÷à¢Æ"6Æ74æÖSÒ'R×6V7Föâ×FFÆRRÖfFR×W#äöæR77FVÒâfW'F6Â×7V6f2ÖW76værãÂö#à¢Ç6Æ74æÖSÒ'RÖfFR×W"7GÆS×·²FWDÆvã¢v6VçFW"rÂ6öÆ÷#¢wf"Ò×R×FWBÖFÒrÂÖvGF¢scCrÂÖ&vã¢sWFò"ãW&VÒr×ÓåFR6ÖRVævæR÷vW'2WfW'fW'F6ÂâvRFÆ÷"FR6VvÖVçG2ÂföÆÆ÷r×W6WVVæ6W2ÂæBÆæFærvW2Fò÷W"'WW"¦÷W&æWãÂ÷à¢ÆFb6Æ74æÖSÒ'RÖÖ&¶WBÖw&B#à¢Æ&VcÒ"÷Æ7F2×7W&vVöç2ò"6Æ74æÖSÒ'RÖÖ&¶WBÖ6&BRÖfFR×W#à¢Æ3åÆ7F27W&vVöç3Âö3à¢ÇäfæBV÷ÆR&W6V&6ær6÷6ÖWF2&ö6VGW&W2æV"÷RâFVçFgFRöæW2vòf6B÷W"6FRâföÆÆ÷rWFR6ÖRF6ò÷W"FVÒ6â&öö²FR6öç7VÇBãÂ÷à¢Ç7â6Æ74æÖSÒ'RÖ'&÷r#âg&'#³Â÷7ãà¢Âöà¢Æ&VcÒ"÷vVFFær×fVçVW2ò"6Æ74æÖSÒ'RÖÖ&¶WBÖ6&BRÖfFR×WRÖFVÆÓ#à¢Æ3åvVFFærfVçVW3Âö3à¢ÇäfæB6÷WÆW27FfVÇ6V&6ærf÷"fVçVW2â÷W"&VâFVçFgFRöæW2vòf6B÷W"6FRâföÆÆ÷rWFR6ÖRF6ò÷W"FVÒ6â&öö²FRF÷W"ãÂ÷à¢Ç7â6Æ74æÖSÒ'RÖ'&÷r#âg&'#³Â÷7ãà¢Âöà¢Æ&VcÒ"öv×G'W7BÖv×fÇVRò"6Æ74æÖSÒ'RÖÖ&¶WBÖ6&BRÖfFR×WRÖFVÆÓ"#à¢Æ3ä÷FW"vÕG'W7B'W6æW76W3Âö3à¢Çäb&öö¶VB6ÆÂ2v÷'FF÷W6æG2ÂF277FVÒfG2âÆVvÂÂÇWW'6W'f6W2Â7V6ÇGÖVF6ÂâFR76ÆR2FR6ÖRâFRÖW76vær2÷W'2ãÂ÷à¢Ç7â6Æ74æÖSÒ'RÖ'&÷r#âg&'#³Â÷7ãà¢Âöà¢ÂöFcà¢Â÷6V7Föãà ¢²ò¢ÓÓÓÓÒDddU$TåDDõ"ÓÓÓÓÒ¢÷Ð¢Ç6V7Föâ6Æ74æÖSÒ'R×w&#à¢Ç6Æ74æÖSÒ'R×6V7FöâÖÆ&VÂRÖfFR×W#åvSÂ÷à¢Æ"6Æ74æÖSÒ'R×6V7Föâ×FFÆRRÖfFR×W#ä÷FW"vVæ6W2vfR÷RV6W2âvRvfR÷RFRgVÆÂ76ÆRãÂö#à¢Ç6Æ74æÖSÒ'RÖfFR×W"7GÆS×·²FWDÆvã¢v6VçFW"rÂ6öÆ÷#¢wf"Ò×R×FWBÖFÒrÂÖvGF¢scrÂÖ&vã¢sWFò"ãW&VÒr×ÓäÖ÷7BvVæ6W2vÆÂ'Vâ÷W"G2÷"ÖævR÷W"4TòÂ'WBFW6ææ÷BFVÆÂ÷Rvò7GVÆÇf6FVB÷W"vV'6FRâæBæö&öGföÆÆ÷w2WFR6ÖRFvFFRV÷ÆRvòFBâvR'VÇBöæR77FVÒFBFöW2ÆÂöbBãÂ÷à¢ÆFb6Æ74æÖSÒ'RÖFfbÖ&÷RÖfFR×W#à¢ÆFb6Æ74æÖSÒ'RÖFfbÖw&B#à¢ÆFb6Æ74æÖSÒ'RÖFfbÖ6&B#à¢ÆFb6Æ74æÖSÒ'RÖFfbÖ6öâ#âb3c³ÂöFcà¢ÆCåG6ÂvVæ7ÂöCà¢ÇåF&vWB'&öB÷"VçF&vWFVBVFVæ6W3Â÷à¢Çä÷Rf6F÷'26öçfW'Böâf'7Bf6CÂ÷à¢ÇäÆ÷6RRR²öbG&ff2f÷&WfW#Â÷à¢Çå&W÷'Böâ6Æ6·2æB×&W76öç3Â÷à¢Çäæòf6&ÆGçFòvò7GVÆÇf6FVCÂ÷à¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖFfbÖ6&B"7GÆS×·²&÷&FW$6öÆ÷#¢wf"Ò×RÖ66VçBr×Óà¢ÆFb6Æ74æÖSÒ'RÖFfbÖ6öâ#âb3³ÂöFcà¢ÆCåRÖ&¶WFæsÂöCà¢ÇäGG&7B÷&væ2G&ff2F&÷Vv4TòÂtTòÂæB6öçFVçBvFFR4Tò66VÆW&F÷#Â÷à¢Çä'VÆBVFVæ6W2öb&VG×FòÖ'W&÷7V7G2vFçFVçDBgG&FS³Â÷à¢ÇäFVçFgcRöbvV'6FRf6F÷'2'æÖRvFf6F÷$BgG&FS³Â÷à¢ÇäföÆÆ÷rW6ÖRFfVÖÂæB&WF&vWFærvFæ&÷BgG&FS³Â÷à¢ÇäÆÂ6ææVÇ2÷vW&VB'VæfVBçFVçDBVFVæ6RFFÂ÷à¢ÂöFcà¢ÂöFcà¢ÂöFcà¢Â÷6V7Föãà ¢²ò¢ÓÓÓÓÒDU5DÔôäÅ2ÓÓÓÓÒ¢÷Ð¢Ç6V7Föâ6Æ74æÖSÒ'R×w&#à¢Ç6Æ74æÖSÒ'R×6V7FöâÖÆ&VÂRÖfFR×W#å&ööcÂ÷à¢Æ"6Æ74æÖSÒ'R×6V7Föâ×FFÆRRÖfFR×W#åvB÷W"6ÆVçG26Âö#à¢ÆFb6Æ74æÖSÒ'R×FW7BÖw&B#à¢ÆFb6Æ74æÖSÒ'R×FW7BÖ6&BRÖfFR×W#à¢ÆFb6Æ74æÖSÒ'R×7F'2#âb3s33²b3s33²b3s33²b3s33²b3s33³ÂöFcà¢ÇâfÆGVóµvRv÷&¶VBvFFW6RföÆ·2f÷"B²V'2æB&VÆVBöâFVÒFòVÇW2wVFR÷W"4Tò7G&FVwæB×ÆVÖVçFFöââg&GVó³Â÷à¢ÆFb7GÆS×·²F7Æ¢vfÆWrÂÆväFV×3¢v6VçFW"rÂv¢rãsW&VÒrÂÖ&våF÷¢s&VÒr×Óà¢ÆFb6Æ74æÖSÒ'RÖfF"#åD#ÂöFcà¢ÆFcà¢Ç7G&öær7GÆS×·²6öÆ÷#¢wf"Ò×R×FWBr×ÓåBä"ãÂ÷7G&öæsãÆ'"óà¢Ç7â7GÆS×·²6öÆ÷#¢wf"Ò×R×FWBÖFÒrÂföçE6¦S¢rãW&VÒr×ÓäÖ&¶WFærÖævVÖVçCÂ÷7ãà¢ÂöFcà¢ÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'R×FW7BÖ6&BRÖfFR×WRÖFVÆÓ#à¢ÆFb6Æ74æÖSÒ'R×7F'2#âb3s33²b3s33²b3s33²b3s33²b3s33³ÂöFcà¢ÇâfÆGVó´b÷Rg'7Vó·&RÆöö¶ærf÷"FÆVçFVBÂ¶æ÷vÆVFvV&ÆRV÷ÆRFòv÷&²vFÂvÇ&V6öÖÖVæBFW6RwW2âFWVÇVBW2w&÷r÷W"7W&v6Â&7F6Rg&öÒCÒFòC2ãTÒâ6ævÆRV"âg&GVó³Â÷à¢ÆFb7GÆS×·²F7Æ¢vfÆWrÂÆväFV×3¢v6VçFW"rÂv¢rãsW&VÒrÂÖ&våF÷¢s&VÒr×Óà¢ÆFb6Æ74æÖSÒ'RÖfF"#äÓÂöFcà¢ÆFcà¢Ç7G&öær7GÆS×·²6öÆ÷#¢wf"Ò×R×FWBr×ÓäG"âäÒãÂ÷7G&öæsãÆ'"óà¢Ç7â7GÆS×·²6öÆ÷#¢wf"Ò×R×FWBÖFÒrÂföçE6¦S¢rãW&VÒr×ÓåÆ7F27W&vVöãÂ÷7ãà¢ÂöFcà¢ÂöFcà¢ÂöFcà¢ÂöFcà¢Â÷6V7Föãà ¢²ò¢ÓÓÓÓÒdÓÓÓÓÒ¢÷Ð¢Ç6V7Föâ6Æ74æÖSÒ'R×w&"CÒ&f#à¢Ç6Æ74æÖSÒ'R×6V7FöâÖÆ&VÂRÖfFR×W#ädÂ÷à¢Æ"6Æ74æÖSÒ'R×6V7Föâ×FFÆRRÖfFR×W#äg&WVVçFÇ6¶VBVW7Föç3Âö#à¢ÆFb6Æ74æÖSÒ'RÖfÖÆ7B#à¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#åvB2çFVçDBgG&FS²æB÷rFöW2Bv÷&³óÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇåvRG&6²vBÖÆÆöç2öbÖW&6ç2&R6V&6ærf÷"7&÷72FRvV"æB6ö6ÂÖVFWfW'FâvVâ6öÖVöæR7F'G2&W6V&6ærFR¶æBöb6W'f6W2÷RöffW"ÂvR6VRFB7FfGâvRW6RBFò'VÆB7W7FöÒVFVæ6RöbV÷ÆRvò&R7FfVÇÆöö¶ærf÷"vB÷R6VÆÂ&vBæ÷râFBVFVæ6RvWG2ÆöFVBçFò÷W"BÆFf÷&×2ÂÆ¶RÖWFÂvöövÆRÂÂFµFö²Â÷"Ææ¶VDâÂ6ò÷W"G2öæÇ6÷rFòV÷ÆRvò&RÇ&VGÆöö¶ærâFæ²öbB2Æ7Böb&VG×FòÖ'W&÷7V7G2FBWFFW26öçFçV÷W6ÇãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#åvB2f6F÷$BgG&FS²æBvBæf÷&ÖFöâFòvWCóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇåf6F÷$BgG&FS²2VÂFB6G2öâ÷W"vV'6FRæBFVçFfW2WFòcRöb÷W"f6F÷'2âf÷"V6FVçFfVBf6F÷"Â÷R6â&V6VfRFV"æÖRÂVÖÂFG&W72ÂöæRçVÖ&W"ÂöÖRFG&W72ÂæB÷W6VöÆBæ6öÖRÂÆöærvFFWFÇ2&÷WBvBvW2FWf6FVBæB÷rFW&VfVBöâ÷W"6FRãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#åvB2æ&÷BgG&FS²æBvBVç2gFW"f6F÷"2FVçFfVCóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇäæ&÷B2÷W"6öçfW'6öâVævæRâvVâf6F÷"2FVçFfVBöâ÷W"6FRÂFWVçFW"6÷'BföÆÆ÷r×W6WVVæ6RFÆ÷&VBFòFRvW2FWfWvVBâF26âæ6ÇVFR&WF&vWFærG2Fò¶VW÷W"'&æBf6&ÆRÂæBF&vWFVBVÖÂ÷WG&V6&6VBöâFV"'&÷w6ær&Vf÷"âFRvöÂ2Fò&RÖVævvRFVÒvÆR÷W"'W6æW7227FÆÂF÷öbÖæBâ6öçF7G2vòVævvR&RÖ÷fVBçFòâöævöærçW'GW&R&öw&Ò6ò÷W"'&æB7F2âg&öçBöbFVÒVçFÂFW&R&VGFò7BãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#äFöW2f6F÷$BgG&FS²öæÇv÷&²öâG&ff2÷RvVæW&FSóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇäæòâf6F÷$BgG&FS²FVçFfW2f6F÷'2&Vv&FÆW72öb÷rFWv÷BFò÷W"6FRâ÷W"4TòG&ff2Â÷W"vöövÆRG2Â÷W"ÖWF6×vç2Â&VfW'&ÂG&ff2ÂF&V7Bf6G2ÂÆÂöbBâb6öÖVöæRÆæG2öâ÷W"vV'6FRÂvR6âFVçFgFVÒãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#äFòæVVBÆÂf÷W"6W'f6W3óÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇåFRBfæ'7µ7VFR2'VÇB277FVÒâçFVçDBfæG2÷W"VFVæ6RâFR4Tò66VÆW&F÷"GG&7G2FVÒF&÷Vv÷&væ26öçFVçBâBG266VÆW&FRFB&V6âf6F÷$BG&6·2vòg'7Vó·2çFW&W7FVBâæ&÷B6öçfW'G2FVÒâ÷R6÷VÆB7F'BvFöæRFööÂÂ'WB÷Rg'7Vó¶ÆÂ6VRFR&VÂ$ôvVâFWv÷&²FövWFW"âÖ÷7Böb÷W"6ÆVçG2W6RÆÂf÷W"vFâfæ'7¶F2ãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#åvBFöW2fÆGVó·WFòcRg&GVó²ÖVâW7FÇóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇäB&VfW'2FòVæVRvV'6FRf6F÷'2vR6â&W6öÇfRçFòFVçFf&ÆR&öfÆW2âvR6WV7FFöç26òvR6â÷fW"ÖFVÆfW"âW&f÷&Öæ6Rf&W2&6VBöâG&ff2ÖÂvVöw&ÂæBföÇVÖRãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#ä÷rf7BFöW2f6F÷"FVçFf6FöâVãóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇåG6ÆÇâÖçWFW2Âv6ÖVç2÷W"FVÒ6âföÆÆ÷rWFR6ÖRF&÷7V7Bf6G2÷W"6FRãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#ä2F2Rå2âöæÇóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇåW2â÷W"FVçFf6FöâæBVFVæ6RFF&RFW6væVBf÷"Rå2âf6F÷'2æB6öç7VÖW'2ãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#åvB¶æG2öb'W6æW76W2FöW2F2v÷&²&W7Bf÷#óÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇäv×G'W7BÂv×F6¶WB'W6æW76W2vW&R&öö¶VB6ÆÂÂF÷W"Â÷"6öç7VÇB2fÇV&ÆRâvVFFærfVçVW2æBÆ7F27W&vVöç2&R÷W"&Ö'fW'F6Ç2Â'WBFR77FVÒv÷&·2f÷"ÆVvÂÂÇWW'6W'f6W2ÂæB7V6ÇGÖVF6Â&7F6W2ãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#ä2F26ö×ÆçCóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇåvR7W÷'B÷BÖ÷WBæB7W&W76öâæFÆæræB×ÆVÖVçB&W7öç6&ÆR6VvÖVçFFöâ6ò÷WG&V62F&vWFVBæBÖV7W&&ÆRâvRvÆÂÆvâ×ÆVÖVçFFöâFò÷W"æVVG2æBÆ6&ÆRRå2â&WV&VÖVçG2GW&ær6WGWãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#åvBFòvRæVVBFòvWB7F'FVCóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇåvV'6FR66W72f÷"VÂç7FÆÆFöâÂÇW2B66÷VçB66W72æB÷W"5$ÒFWFÇ2âöæ6RG&6¶ær2ç7FÆÆVBÂÖ÷7B6ÆVçG26âvòÆfRV6¶ÇãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#åvB2FR4Tò66VÆW&F÷#óÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇåFR4Tò66VÆW&F÷"2÷W"÷&væ2G&ff2VævæRâB6÷fW'2F&VR&V3¢fæ'7µ4TòfÖF6¶'VÆFær6öçFVçBFB&æ·2âvöövÆRÂ"fæ'7´tTòfÖF6¶÷FÖ¦ærf÷"6V&6ÆFf÷&×2Æ¶R6DuBæBW'ÆWGÂæB2fæ'7´6öçFVçB&WW'÷6ærfÖF6·GW&æær÷W"6÷&RÖW76værçFò6ö6Â÷7G2Â&öÖ÷FöæÂ6öçFVçBÂæBöF67BW6öFW2âBg'7Vó·2÷vW&VB'#Rfæ'7·V'2öbR4TòWW'F6RãÂ÷ãÂöFcà¢ÂöFcà¢ÆFb6Æ74æÖSÒ'RÖfÖFVÒRÖfFR×W#à¢Æ'WGFöâ6Æ74æÖSÒ'RÖf×#åvB2tTóóÂö'WGFöãà¢ÆFb6Æ74æÖSÒ'RÖfÖ#ãÇävVæW&FfRVævæR÷FÖ¦Föâfæ'7²tTò2FR&7F6Röb÷FÖ¦ær÷W"6öçFVçBf÷"6V&6&W7VÇG2â2Ö÷&RV÷ÆR6V&6W6ær6DuBÂ6ÆVFRÂW'ÆWGÂæB÷FW"vVæW&FfRfæ'7´Â÷W"f6&ÆGâF÷6RÆFf÷&×2ÖGFW'2âtTòW6W2FR6ÖRf÷VæFFöâ24Tò'WB÷FÖ¦W2f÷"÷rvVæW&FfRæFWW2æB&V6öÖÖVæG26öçFVçBâFR4Tò66VÆW&F÷"æFÆW2&÷F4TòæBtTò6ò÷R&æ²WfW'vW&R÷W"'WW'2&R6V&6ærãÂ÷ãÂöFcà¢ÂöFcà¢ÂöFcà¢Â÷6V7Föãà ¢²ò¢ÓÓÓÓÒdäÂ5DÓÓÓÓÒ¢÷Ð¢Ç6V7Föâ6Æ74æÖSÒ'RÖfæÂÖ7FRÖfFR×W#à¢ÆFb6Æ74æÖSÒ'R×w&#à¢ÆFb6Æ74æÖSÒ'RÖ7FÖ6&B#à¢Æ#å6VR÷rFRgVÆÂ76ÆRv÷&·2f÷"÷W"'W6æW72ãÂö#à¢Çä&öö²3ÖÖçWFRFVÖòæBvRg'7Vó¶ÆÂ6÷r÷R÷rFR4Tò66VÆW&F÷"ÂçFVçDBgG&FS²Âf6F÷$BgG&FS²ÂæBæ&÷BgG&FS²v÷&²FövWFW"f÷"÷W"7V6f2Ö&¶WBãÂ÷à¢Æ&VcÒ"ö6öçF7B×W2ò"6Æ74æÖSÒ'RÖ'FâRÖ'Fâ×&Ö'#ä&öö²FVÖóÂöà¢ÂöFcà¢ÂöFcà¢Â÷6V7Föãà¢Âóà¢°§Ð'use client';

import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    // FAQ Accordion
    function handleFaqClick(e) {
      var q = e.target.closest('.p5-faq-q');
      if (!q) return;
      var item = q.closest('.p5-faq-item');
      if (!item) return;
      var isOpen = item.classList.contains('p5-open');
      document.querySelectorAll('.p5-faq-item.p5-open').forEach(function (el) {
        el.classList.remove('p5-open');
      });
      if (!isOpen) item.classList.add('p5-open');
    }
    document.addEventListener('click', handleFaqClick);

    // Scroll Animations
    var targets = document.querySelectorAll('.p5-fade-up');
    var observer;
    if (targets.length && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('p5-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      targets.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      targets.forEach(function (el) {
        el.classList.add('p5-visible');
      });
    }

    // Smooth scroll
    function handleSmoothScroll(e) {
      var link = e.target.closest('a[href*="#"]');
      if (!link) return;
      var href = link.getAttribute('href');
      var hash = href.split('#')[1];
      if (!hash) return;
      var target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleFaqClick);
      document.removeEventListener('click', handleSmoothScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is IntentID and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "We track what millions of Americans are searching for across the web and social media every day. When someone starts researching the kind of services you offer, we see that activity. We use it to build a custom audience of people who are actively looking for what you sell right now. That audience gets loaded into your ad platforms, like Meta, Google, X, TikTok, or LinkedIn, so your ads only show to people who are already looking." } },
                { "@type": "Question", "name": "What is VisitorID and what information do I get?", "acceptedAnswer": { "@type": "Answer", "text": "VisitorID is a pixel that sits on your website and identifies up to 60% of your visitors. For each identified visitor, you can receive their name, email address, phone number, home address, and household income, along with details about what pages they visited and how they behaved on your site." } },
                { "@type": "Question", "name": "What is InboxID and what happens after a visitor is identified?", "acceptedAnswer": { "@type": "Answer", "text": "InboxID is our conversion engine. Within minutes of identification, visitors enter our follow-up system. Depending on your setup, that can include retargeting ads to keep your brand visible, and automated email sequences tailored to the pages they viewed. Their contact information also feeds directly into your CRM so your team can follow up personally." } },
                { "@type": "Question", "name": "Does VisitorID only work on traffic you generate?", "acceptedAnswer": { "@type": "Answer", "text": "No. VisitorID identifies visitors regardless of how they got to your site. Your SEO traffic, your Google Ads, your Meta campaigns, referral traffic, direct visits, all of it. If someone lands on your website, we can identify them." } },
                { "@type": "Question", "name": "Do I need all four services?", "acceptedAnswer": { "@type": "Answer", "text": "The ID Suite is built as a system. IntentID finds your audience. SearchID attracts them through organic content. Paid ads accelerate that reach. VisitorID tracks who is interested. InboxID converts them. You could start with one tool, but you will see the real ROI when they work together. Most of our clients use all four within 90 days." } },
                { "@type": "Question", "name": "What does up to 60% mean exactly?", "acceptedAnswer": { "@type": "Answer", "text": "It refers to unique website visitors we can resolve into identifiable profiles. We cap expectations so we can over-deliver. Performance varies based on traffic mix, geography, and volume." } },
                { "@type": "Question", "name": "How fast does visitor identification happen?", "acceptedAnswer": { "@type": "Answer", "text": "Typically in minutes, which means your team can follow up the same day a prospect visits your site." } },
                { "@type": "Question", "name": "Is this U.S. only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our identification and audience data are designed for U.S. visitors and consumers." } },
                { "@type": "Question", "name": "What kinds of businesses does this work best for?", "acceptedAnswer": { "@type": "Answer", "text": "High-trust, high-ticket businesses where a booked call, tour, or consult is valuable. Wedding venues and plastic surgeons are our primary verticals, but the system works for legal, luxury services, and specialty medical practices." } },
                { "@type": "Question", "name": "Is this compliant?", "acceptedAnswer": { "@type": "Answer", "text": "We support opt-out and suppression handling and implement responsible segmentation so outreach is targeted and measurable. We will align implementation to your needs and applicable U.S. requirements during setup." } },
                { "@type": "Question", "name": "What do we need to get started?", "acceptedAnswer": { "@type": "Answer", "text": "Website access for pixel installation, plus ad account access and your CRM details. Once tracking is installed, most clients can go live quickly." } },
                { "@type": "Question", "name": "What is SearchID?", "acceptedAnswer": { "@type": "Answer", "text": "SearchID is your organic traffic engine covering SEO, GEO, and content repurposing powered by 25 years of P5 SEO expertise." } },
                { "@type": "Question", "name": "What is GEO?", "acceptedAnswer": { "@type": "Answer", "text": "Generative Engine Optimization (GEO) optimizes your content for AI search platforms like ChatGPT, Claude, and Perplexity." } }
              ]
            })
        }}
      />

      {/* ===== HERO ===== */}
      <section className="p5-hero">
        <div className="p5-wrap">
          <div className="p5-hero-grid">
            <div className="p5-hero-copy p5-fade-up">
              <p className="p5-kicker">Colleyville, TX &middot; U.S. Only &middot; High-Trust, High-Value Businesses</p>
              <h1>Turn Marketing Into a Pipeline You Can See, Track, and Close</h1>
              <p className="p5-sub">We find people actively searching for what you sell. We drive them to your site. We identify them by name. And we follow up until they convert. One system. Full visibility. Built for high-trust, high-value businesses.</p>
              <div className="p5-cta-row">
                <a href="/contact-us/" className="p5-btn p5-btn-primary">Book a Demo</a>
                <a href="#cycle" className="p5-btn p5-btn-ghost">See the Full Cycle</a>
              </div>
            </div>
            <div className="p5-hero-illus p5-fade-up p5-delay-1">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '580px', margin: '0 auto', display: 'block' }}>
                <circle cx="200" cy="200" r="160" stroke="#00e5c7" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
                <circle cx="200" cy="48" r="40" fill="#0d1420" stroke="#00e5c7" strokeWidth="2" />
                <text x="200" y="44" textAnchor="middle" fill="#00e5c7" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">FIND</text>
                <text x="200" y="59" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">IntentID</text>
                <circle cx="352" cy="200" r="40" fill="#0d1420" stroke="#7b61ff" strokeWidth="2" />
                <text x="352" y="196" textAnchor="middle" fill="#7b61ff" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">DRIVE</text>
                <text x="352" y="211" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">SearchID + Ads</text>
                <circle cx="200" cy="352" r="40" fill="#0d1420" stroke="#00e5c7" strokeWidth="2" />
                <text x="200" y="348" textAnchor="middle" fill="#00e5c7" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">IDENTIFY</text>
                <text x="200" y="363" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">VisitorID</text>
                <circle cx="48" cy="200" r="40" fill="#0d1420" stroke="#7b61ff" strokeWidth="2" />
                <text x="48" y="196" textAnchor="middle" fill="#7b61ff" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">CONVERT</text>
                <text x="48" y="211" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">InboxID</text>
                <path d="M230 55 L315 170" stroke="#00e5c7" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arr)" />
                <path d="M345 235 L230 340" stroke="#7b61ff" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arr2)" />
                <path d="M170 345 L85 230" stroke="#00e5c7" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arr)" />
                <path d="M55 165 L170 60" stroke="#7b61ff" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arr2)" />
                <defs>
                  <marker id="arr" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8" fill="none" stroke="#00e5c7" strokeWidth="1.5" />
                  </marker>
                  <marker id="arr2" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8" fill="none" stroke="#7b61ff" strokeWidth="1.5" />
                  </marker>
                </defs>
                <text x="200" y="181" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="400">Other agencies</text>
                <text x="200" y="196" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="400">give you pieces.</text>
                <text x="200" y="215" textAnchor="middle" fill="#00e5c7" fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="700">We give you</text>
                <text x="200" y="230" textAnchor="middle" fill="#00e5c7" fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="700">the full cycle.</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAT BAR ===== */}
      <section className="p5-stat-bar p5-fade-up">
        <div className="p5-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', textAlign: 'center' }}>
          <div className="p5-stat">
            <span className="p5-stat-num">60%</span>
            <span className="p5-stat-lbl">Website Visitors Identified</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">Same Day</span>
            <span className="p5-stat-lbl">Follow-Up Speed</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">4 Stages</span>
            <span className="p5-stat-lbl">Full-Cycle System</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">25 Yrs</span>
            <span className="p5-stat-lbl">SEO Legacy</span>
          </div>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="p5-wrap" id="pillars">
        <p className="p5-section-label p5-fade-up">The System</p>
        <h2 className="p5-section-title p5-fade-up">The complete system that attracts, finds, identifies, and converts your next customers.</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '640px', margin: '0 auto 2.5rem' }}>SearchID&trade; pulls qualified traffic from organic sources. The ID&nbsp;Suite converts that traffic into customers.</p>
        <div className="p5-paradigm-grid">
          <div className="p5-p-card p5-fade-up">
            <span className="p5-num">01</span>
            <h3>IntentID&trade;: Find Them</h3>
            <p>We track what millions of Americans are searching for across the web and social media every day. We use that data to build a custom audience of people actively looking for exactly what you sell, right now. Then we deploy that audience into your ad platforms: Meta, Google, X, TikTok, LinkedIn. Your ads reach ready-to-buy people instead of anonymous visitors. Better leads. Lower costs. Less waste.</p>
          </div>
          <div className="p5-p-card p5-fade-up p5-delay-1">
            <span className="p5-num">02</span>
            <h3>VisitorID&trade;: Identify Them</h3>
            <p>Our pixel identifies up to 60% of the people who visit your site and gives you their name, email, phone number, home address, and household income. It works on all your traffic: your SEO, your ads, our audiences, referrals, everything. Minutes, not days. U.S. only.</p>
          </div>
          <div className="p5-p-card p5-fade-up p5-delay-2">
            <span className="p5-num">03</span>
            <h3>InboxID&trade;: Convert Them</h3>
            <p>Identification without follow-up is a wasted lead. Our post-visit system triggers same-day outreach: retargeting ads to stay visible and email sequences tailored to what they viewed. Their data flows into your CRM so your team knows exactly who to call and why.</p>
          </div>
        </div>
      </section>

      {/* ===== FOUR-STAGE CYCLE ===== */}
      <section className="p5-wrap" id="cycle">
        <p className="p5-section-label p5-fade-up">How It Works</p>
        <h2 className="p5-section-title p5-fade-up">Four stages. One cycle. A pipeline that gets smarter the longer it runs.</h2>
        <div className="p5-hiw-detail">
          <div className="p5-hiw-block p5-fade-up">
            <span className="p5-hiw-num">1</span>
            <div>
              <h3>Build Your Audience</h3>
              <p>IntentID&trade; finds people actively researching your services across the web. We build a custom audience and load it into your ad platforms. Your budget goes to ready-to-buy prospects instead of new, untargeted traffic.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-1">
            <span className="p5-hiw-num">2</span>
            <div>
              <h3>Drive Qualified Traffic</h3>
              <p>Your IntentID audience is monetized through two parallel channels: organic content and paid advertising.</p>
              <div style={{ marginTop: '1.25rem', paddingLeft: '1.25rem', borderLeft: '3px solid var(--p5-accent)' }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>SearchID: Organic Traffic Foundation</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7, marginBottom: '1rem' }}>Attract the right buyers through search engines and AI&#8209;powered tools. SearchID&trade; develops SEO&#8209;focused content pages, optimizes for Generative Engine Optimization&nbsp;(GEO), and builds social, promotional, and podcast content from your core messaging. This organic foundation reduces your paid acquisition cost and compounds over time.</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>Paid Advertising: Immediate Reach</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7, marginBottom: '1rem' }}>Run your IntentID audience directly into high&#8209;converting paid campaigns on Google, Meta, LinkedIn, and TikTok. Same&#8209;day placement, proven&nbsp;ROI, no organic wait time.</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>Together: The Complete Traffic Strategy</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7 }}>SearchID handles the long&#8209;term organic acquisition game. Paid&nbsp;ads handle the short&#8209;term wins. Your IntentID audience powers both&mdash;one unified data feed, two traffic channels, exponential reach.</p>
              </div>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-2">
            <span className="p5-hiw-num">3</span>
            <div>
              <h3>Identify Your Visitors</h3>
              <p>Our pixel resolves up to 60% of your website visitors into full contact profiles. Name, email, phone, address, household income. Delivered in minutes, not days. Works on all your traffic regardless of the source.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-3">
            <span className="p5-hiw-num">4</span>
            <div>
              <h3>Convert with Follow-Up</h3>
              <p>Same-day retargeting ads and email sequences keep your business in front of identified visitors. Their information feeds your CRM. Your team closes warm leads instead of chasing prospects who are disengaged.</p>
            </div>
          </div>
        </div>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-accent)', marginTop: '2rem', fontWeight: 500 }}>Stage 4 feeds Stage 1. Every conversion makes your audiences smarter. The system gets better the longer it runs.</p>
      </section>

      {/* ===== DELIVERABLES ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Deliverables</p>
        <h2 className="p5-section-title p5-fade-up">What you get</h2>
        <div className="p5-del-grid">
          <div className="p5-del-card p5-fade-up">
            <div className="p5-del-icon">&#127919;</div>
            <h3>IntentID&trade; Audience Building</h3>
            <p>Custom audiences of people actively searching for what you sell, built from real-time data and deployed into Meta, Google, X, TikTok, LinkedIn, and more. Better leads at lower cost.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-1">
            <div className="p5-del-icon">&#128269;</div>
            <h3>SearchID&trade; Content &amp; SEO</h3>
            <p>SEO&#8209;focused landing pages and pillar content. GEO optimization for AI search platforms. Social media calendars, promotional content, and podcast scripts. 25&nbsp;years of SEO expertise, reimagined for today&rsquo;s search landscape.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-2">
            <div className="p5-del-icon">&#128100;</div>
            <h3>VisitorID&trade; Visitor Identification</h3>
            <p>Know who visits your website. Name, email, phone, home address, household income, and more. Works on all your traffic regardless of the source. Delivered in minutes, not days.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-2">
            <div className="p5-del-icon">&#128640;</div>
            <h3>InboxID&trade; Conversion Engine</h3>
            <p>Identified visitors receive same-day follow-up tailored to what they viewed on your site. Retargeting ads keep your brand visible. Email sequences build trust. Every touchpoint is tracked.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-3">
            <div className="p5-del-icon">&#128202;</div>
            <h3>CRM Integration + Reporting</h3>
            <p>Identified visitor data feeds directly into the CRM of your choice. See who visited, what they looked at, how they engaged, and where they are in the follow-up cycle.</p>
          </div>
        </div>
      </section>

      {/* ===== MARKETS ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Markets Served</p>
        <h2 className="p5-section-title p5-fade-up">One system. Vertical-specific messaging.</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '640px', margin: '0 auto 2.5rem' }}>The same engine powers every vertical. We tailor the segments, follow-up sequences, and landing pages to your buyer journey.</p>
        <div className="p5-market-grid">
          <a href="/wedding-venues/" className="p5-market-card p5-fade-up">
            <h3>Wedding Venues</h3>
            <p>Find couples actively searching for venues in your area. Identify the ones who visit your site. Follow up the same day so your team can book the tour.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/plastic-surgeons/" className="p5-market-card p5-fade-up p5-delay-1">
            <h3>Plastic Surgeons</h3>
            <p>Find people researching cosmetic procedures near you. Identify the ones who visit your site. Follow up the same day so your team can book the consult.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/high-trust-high-value/" className="p5-market-card p5-fade-up p5-delay-2">
            <h3>Other High-Trust Businesses</h3>
            <p>If a booked call is worth thousands, this system fits. Legal, luxury services, specialty medical. The cycle is the same. The messaging is yours.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ===== DIFFERENTIATOR ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Why P5</p>
        <h2 className="p5-section-title p5-fade-up">Other agencies give you pieces. We give you the full cycle.</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '680px', margin: '0 auto 2.5rem' }}>Most agencies will run your ads or manage your SEO, but they cannot tell you who actually visited your website. And nobody follows up the same day with the people who did. We built one system that does all of it.</p>
        <div className="p5-diff-box p5-fade-up">
          <div className="p5-diff-grid">
            <div className="p5-diff-card">
              <div className="p5-diff-icon">&#10060;</div>
              <h4>Typical Agency</h4>
              <p>Target broad or untargeted audiences</p>
              <p>Hope visitors convert on first visit</p>
              <p>Lose 95%+ of traffic forever</p>
              <p>Report on clicks and impressions</p>
              <p>No visibility into who actually visited</p>
            </div>
            <div className="p5-diff-card" style={{ borderColor: 'var(--p5-accent)' }}>
              <div className="p5-diff-icon">&#9989;</div>
              <h4>P5 Marketing</h4>
              <p>Attract organic traffic through SEO, GEO, and content with SearchID&trade;</p>
              <p>Build audiences of ready-to-buy prospects with IntentID&trade;</p>
              <p>Identify 60% of website visitors by name with VisitorID&trade;</p>
              <p>Follow up same day via email and retargeting with InboxID&trade;</p>
              <p>All channels powered by unified IntentID audience data</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Proof</p>
        <h2 className="p5-section-title p5-fade-up">What our clients say</h2>
        <div className="p5-test-grid">
          <div className="p5-test-card p5-fade-up">
            <div className="p5-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>&ldquo;We worked with these folks for 4+ years and relied on them to help us guide our SEO strategy and implementation.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginTop: '1rem' }}>
              <div className="p5-avatar">TB</div>
              <div>
                <strong style={{ color: 'var(--p5-text)' }}>T.B.</strong><br />
                <span style={{ color: 'var(--p5-text-dim)', fontSize: '.85rem' }}>Marketing Management</span>
              </div>
            </div>
          </div>
          <div className="p5-test-card p5-fade-up p5-delay-1">
            <div className="p5-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>&ldquo;If you&rsquo;re looking for talented, knowledgeable people to work with, I highly recommend these guys. They helped us grow our surgical practice from $1M to $3.5M in a single year.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginTop: '1rem' }}>
              <div className="p5-avatar">AM</div>
              <div>
                <strong style={{ color: 'var(--p5-text)' }}>Dr. A.M.</strong><br />
                <span style={{ color: 'var(--p5-text-dim)', fontSize: '.85rem' }}>Plastic Surgeon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="p5-wrap" id="faq">
        <p className="p5-section-label p5-fade-up">FAQ</p>
        <h2 className="p5-section-title p5-fade-up">Frequently Asked Questions</h2>
        <div className="p5-faq-list">
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is IntentID&trade; and how does it work?</button>
            <div className="p5-faq-a"><p>We track what millions of Americans are searching for across the web and social media every day. When someone starts researching the kind of services you offer, we see that activity. We use it to build a custom audience of people who are actively looking for what you sell right now. That audience gets loaded into your ad platforms, like Meta, Google, X, TikTok, or LinkedIn, so your ads only show to people who are already looking. Think of it as a list of ready-to-buy prospects that updates continuously.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is VisitorID&trade; and what information do I get?</button>
            <div className="p5-faq-a"><p>VisitorID&trade; is a pixel that sits on your website and identifies up to 60% of your visitors. For each identified visitor, you can receive their name, email address, phone number, home address, and household income, along with details about what pages they visited and how they behaved on your site.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is InboxID&trade; and what happens after a visitor is identified?</button>
            <div className="p5-faq-a"><p>InboxID is our conversion engine. When a visitor is identified on your site, they enter a short follow-up sequence tailored to the pages they viewed. This can include retargeting ads to keep your brand visible, and targeted email outreach based on their browsing behavior. The goal is to re-engage them while your business is still top of mind. Contacts who engage are moved into an ongoing nurture program so your brand stays in front of them until they are ready to act.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Does VisitorID&trade; only work on traffic you generate?</button>
            <div className="p5-faq-a"><p>No. VisitorID&trade; identifies visitors regardless of how they got to your site. Your SEO traffic, your Google Ads, your Meta campaigns, referral traffic, direct visits, all of it. If someone lands on your website, we can identify them.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Do I need all four services?</button>
            <div className="p5-faq-a"><p>The ID&nbsp;Suite is built as a system. IntentID finds your audience. SearchID attracts them through organic content. Paid ads accelerate that reach. VisitorID tracks who&rsquo;s interested. InboxID converts them. You could start with one tool, but you&rsquo;ll see the real ROI when they work together. Most of our clients use all four within 90&nbsp;days.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What does &ldquo;up to 60%&rdquo; mean exactly?</button>
            <div className="p5-faq-a"><p>It refers to unique website visitors we can resolve into identifiable profiles. We cap expectations so we can over-deliver. Performance varies based on traffic mix, geography, and volume.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">How fast does visitor identification happen?</button>
            <div className="p5-faq-a"><p>Typically in minutes, which means your team can follow up the same day a prospect visits your site.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Is this U.S. only?</button>
            <div className="p5-faq-a"><p>Yes. Our identification and audience data are designed for U.S. visitors and consumers.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What kinds of businesses does this work best for?</button>
            <div className="p5-faq-a"><p>High-trust, high-ticket businesses where a booked call, tour, or consult is valuable. Wedding venues and plastic surgeons are our primary verticals, but the system works for legal, luxury services, and specialty medical practices.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Is this compliant?</button>
            <div className="p5-faq-a"><p>We support opt-out and suppression handling and implement responsible segmentation so outreach is targeted and measurable. We will align implementation to your needs and applicable U.S. requirements during setup.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What do we need to get started?</button>
            <div className="p5-faq-a"><p>Website access for pixel installation, plus ad account access and your CRM details. Once tracking is installed, most clients can go live quickly.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is SearchID&trade;?</button>
            <div className="p5-faq-a"><p>SearchID is your organic traffic engine. It covers three areas: (1)&nbsp;SEO&mdash;building content that ranks in Google, (2)&nbsp;GEO&mdash;optimizing for AI search platforms like ChatGPT and Perplexity, and (3)&nbsp;Content repurposing&mdash;turning your core messaging into social posts, promotional content, and podcast episodes. It&rsquo;s powered by 25&nbsp;years of P5 SEO expertise.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is GEO?</button>
            <div className="p5-faq-a"><p>Generative Engine Optimization&nbsp;(GEO) is the practice of optimizing your content for AI search results. As more people search using ChatGPT, Claude, Perplexity, and other generative&nbsp;AI, your visibility in those platforms matters. GEO uses the same foundation as SEO but optimizes for how generative AI indexes and recommends content. SearchID handles both SEO and GEO so you rank everywhere your buyers are searching.</p></div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="p5-final-cta p5-fade-up">
        <div className="p5-wrap">
          <div className="p5-cta-card">
            <h2>See how the full cycle works for your business.</h2>
            <p>Book a 30-minute demo and we&rsquo;ll show you how SearchID&trade;, IntentID&trade;, VisitorID&trade;, and InboxID&trade; work together for your specific market.</p>
            <a href="/contact-us/" className="p5-btn p5-btn-primary">Book a Demo</a>
          </div>
        </div>
      </section>
    </>
  );
}

/* Rise Discipleship — Home Page (full body as one Custom Element)
   Wix Custom Element. Tag name: rise-home
   File name in your repo: rise-home.js
   Photos must live in the SAME repo (hero-kyle.jpg, lifegroup.jpg, clarice.jpg). */

(function () {
  const BASE = "https://giving-creator.github.io/risehome-components-for-families/";
  const COVER = BASE + "hero-kyle.jpg";
  const GUIDE = BASE + "lifegroup.jpg";
  const TRANS = BASE + "clarice.jpg";

  function ensureFonts() {
    if (document.getElementById("rise-fonts")) return;
    const l = document.createElement("link");
    l.id = "rise-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(l);
  }

  class RiseHome extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      ensureFonts();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
        <style>
          :host{display:block;width:100%;--ink:#111111;--blue:#29ABE2;--muted:#5b5b5b;--line:#e7e7e7;--soft:#F1F3F6;
                font-family:'Inter',system-ui,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased;box-sizing:border-box;background:#111111;}
          *{box-sizing:border-box;margin:0;padding:0;}
          h1,h2,h3{font-family:'Fraunces',Georgia,serif;letter-spacing:-.01em;line-height:1.1;}
          .wrap{max-width:1120px;margin:0 auto;padding:0 24px;}
          .center{max-width:760px;margin:0 auto;text-align:center;padding:0 24px;}
          .pad{padding:78px 0;background:#ffffff;}
          .soft{background:var(--soft);}
          .accent{width:54px;height:3px;background:var(--blue);border-radius:2px;margin:0 auto 22px;}
          .accent.left{margin:0 0 22px;}
          h2{font-size:2.3rem;margin-bottom:.35em;}
          h2.left{text-align:left;}
          .lead{font-size:1.16rem;color:#333;line-height:1.6;}
          .lead.dim{color:#c3ccd3;}
          .btn{display:inline-block;background:var(--blue);color:#fff;font-weight:700;font-size:1.05rem;
               padding:16px 30px;border-radius:12px;text-decoration:none;border:0;cursor:pointer;}
          .photo{width:100%;min-height:340px;height:100%;object-fit:cover;border-radius:12px;}
          /* hero */
          .hero{background:var(--ink);color:#fff;}
          .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;align-items:stretch;}
          .hero-text{padding:92px 7% 92px 8%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;}
          .hero .eyebrow{color:var(--blue);font-weight:700;letter-spacing:.16em;text-transform:uppercase;font-size:.76rem;margin-bottom:18px;}
          .hero h1{font-size:3.1rem;font-weight:700;margin-bottom:.3em;}
          .hero .sub{font-size:1.15rem;color:#e9eef2;margin-bottom:28px;max-width:34ch;line-height:1.55;}
          .hero .phone{margin-top:16px;font-size:.9rem;color:#c3ccd3;}
          .hero .phone a{color:#fff;text-decoration:none;font-weight:600;}
          .hero .sec{display:block;margin-top:20px;color:var(--blue);font-weight:600;text-decoration:none;font-size:.95rem;}
          .hero-photo{position:relative;min-height:560px;background:#000;}
          .hero-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 20%;}
          /* two-column content */
          .grid2{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center;}
          /* plan */
          .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:40px;}
          .step{background:#fff;border:1px solid var(--line);border-radius:16px;padding:30px 22px;text-align:center;box-shadow:0 10px 30px rgba(17,17,17,.05);}
          .num{width:48px;height:48px;border-radius:50%;background:var(--blue);color:#fff;font-weight:700;font-size:1.25rem;
               display:flex;align-items:center;justify-content:center;margin:0 auto 16px;}
          .step h3{font-size:1.18rem;margin-bottom:8px;}
          .step p{color:var(--muted);font-size:1rem;line-height:1.55;}
          /* rise process (Rescue/Rebuild/Restore/Release) */
          .eyebrow2{color:var(--blue);font-weight:700;letter-spacing:.16em;text-transform:uppercase;font-size:.76rem;margin-bottom:14px;}
          .process{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:40px;}
          .rstage{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 20px;box-shadow:0 10px 30px rgba(17,17,17,.05);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;}
          .rstage:hover{border-color:var(--blue);box-shadow:0 16px 36px rgba(41,171,226,.30);transform:translateY(-4px);}
          .rstage .rn{display:block;color:var(--blue);font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:.72rem;margin-bottom:6px;}
          .rstage h3{font-size:1.7rem;margin-bottom:10px;}
          .rstage p{color:var(--muted);font-size:.97rem;line-height:1.55;}
          /* transformation quote */
          .quote{border-left:4px solid var(--blue);padding-left:18px;margin-top:22px;font-size:1.05rem;color:#333;}
          .quote .qi{font-style:italic;}
          .quote b{display:block;font-style:normal;color:var(--blue);margin-top:8px;font-size:.9rem;}
          /* proof */
          .proof{background:var(--ink);color:#fff;text-align:center;}
          .proof .pull{font-family:'Fraunces',serif;font-size:1.7rem;line-height:1.4;font-weight:600;max-width:820px;margin:14px auto 6px;}
          .proof cite{color:var(--blue);font-style:normal;font-weight:600;}
          .video{border:0;width:100%;max-width:760px;aspect-ratio:16/9;border-radius:14px;margin:26px auto 0;display:block;}
          /* final cta */
          .finalcta{background:var(--ink);color:#fff;text-align:center;}
          .finalcta h2{font-size:2.4rem;}
          .finalcta .mt{margin-top:24px;}
          .num2{font-weight:700;font-size:1.9rem;margin-top:18px;color:#fff;}
          .num2 a{color:#fff;text-decoration:none;}
          .num2 a span{color:var(--blue);}
          .finalcta .sec2{display:block;margin-top:18px;color:var(--blue);font-weight:600;text-decoration:none;}
          /* donor */
          .donor{background:#0b0d10;color:#aeb6bd;text-align:center;padding:26px 24px;font-size:.98rem;}
          .donor a{color:var(--blue);font-weight:700;text-decoration:none;}
          @media(max-width:860px){
            .pad{padding:52px 0;}
            h2,.finalcta h2{font-size:1.8rem;}
            .hero-grid{grid-template-columns:1fr;}
            .hero-text{padding:52px 24px 40px;}
            .hero h1{font-size:2.2rem;}
            .hero-photo{min-height:340px;}
            .steps{grid-template-columns:1fr;}
            .process{grid-template-columns:1fr 1fr;}
            .grid2{grid-template-columns:1fr;gap:24px;}
            .proof .pull{font-size:1.35rem;}
          }
        </style>

        <section class="hero">
          <div class="hero-grid">
            <div class="hero-text">
              <p class="eyebrow">Free · One year · Abilene &amp; Austin, Texas</p>
              <h1>You can walk out of this free.</h1>
              <p class="sub">Rise Discipleship is a free, one-year, faith-based home in Abilene and Austin, Texas, for men and women ready to break free from addiction.</p>
              <a class="btn" href="/get-help">Get Help Now</a>
              <div class="phone">Free. A real person answers, day or night. <a href="tel:3252325449">(325) 232-5449</a></div>
              <a class="sec" href="/families-guide">Loving someone caught in it? Start here →</a>
            </div>
            <div class="hero-photo"><img src="${COVER}" alt="Kyle, a Rise Discipleship graduate"></div>
          </div>
        </section>

        <section class="pad">
          <div class="center">
            <div class="accent"></div>
            <h2>You cannot fix this alone. You were never meant to.</h2>
            <p class="lead">Addiction does not stop on its own. It waits for the next rescue, the next lost year. You have carried it long enough.</p>
          </div>
        </section>

        <section class="pad soft">
          <div class="wrap grid2">
            <div>
              <div class="accent left"></div>
              <h2 class="left">We have walked people all the way out.</h2>
              <p class="lead">Rise takes in men and women the world gave up on and sends them home changed. We are not a waitlist or a hotline that hands you off. A real person answers day or night, and we walk with you the whole year. Free, always.</p>
            </div>
            <img class="photo" src="${GUIDE}" alt="Rise Discipleship men praying and being discipled together">
          </div>
        </section>

        <section class="pad soft">
          <div class="wrap">
            <div class="center">
              <div class="accent"></div>
              <p class="eyebrow2">The Rise Process</p>
              <h2>One path. From lost to free.</h2>
              <p class="lead" style="max-width:640px;margin:0 auto;">Everyone who walks through our door walks the same proven path, from the day they arrive to the day they walk out ready for a new life.</p>
            </div>
            <div class="process">
              <div class="rstage"><span class="rn">Step 01</span><h3>Rescue</h3><p>You're welcomed in with love and structure. Safe, and no longer alone.</p></div>
              <div class="rstage"><span class="rn">Step 02</span><h3>Rebuild</h3><p>Discipleship rebuilds your faith, your identity, your discipline, and the healing underneath.</p></div>
              <div class="rstage"><span class="rn">Step 03</span><h3>Restore</h3><p>You take back responsibility, trust, purpose, and the ability to lead again.</p></div>
              <div class="rstage"><span class="rn">Step 04</span><h3>Release</h3><p>You graduate ready, with a clear plan for what comes next.</p></div>
            </div>
          </div>
        </section>

        <section class="pad">
          <div class="wrap">
            <div class="center"><div class="accent"></div><h2>Here is how it works.</h2></div>
            <div class="steps">
              <div class="step"><div class="num">1</div><h3>Call us.</h3><p>Reach our 24/7 helpline and tell us your story. We listen and answer your questions. (325) 232-5449</p></div>
              <div class="step"><div class="num">2</div><h3>Finish your intake.</h3><p>Answer a few questions so we can explain exactly what comes next.</p></div>
              <div class="step"><div class="num">3</div><h3>Come home and be transformed.</h3><p>Move in for one year and start your journey toward healing, freedom, and a future worth living.</p></div>
            </div>
          </div>
        </section>

        <section class="pad soft">
          <div class="wrap grid2">
            <img class="photo" src="${TRANS}" alt="Clarice, a Rise Discipleship Women's Home graduate, with her daughters">
            <div>
              <div class="accent left"></div>
              <h2 class="left">Picture a year from now.</h2>
              <p class="lead">Sober. Back with the people you love. Leading instead of leaning. It has already happened for people further gone than you feel right now.</p>
              <div class="quote"><span class="qi">"It's not just me you saved. My daughter has her mother back."</span><b>— Clarice, Rise Discipleship Women's Home graduate</b></div>
            </div>
          </div>
        </section>

        <section class="pad proof">
          <div class="wrap">
            <div class="accent"></div>
            <h2>One life, changed.</h2>
            <p class="pull">"I came in broken, disgusted, ready to give up. They welcomed me with nothing but love. I wake up happy now."</p>
            <cite>— Keng, graduate</cite>
            <iframe class="video" src="https://www.youtube.com/embed/-SKD4T58g7g" title="A Journey to Redemption: The Rise of Keng" allowfullscreen loading="lazy"></iframe>
          </div>
        </section>

        <section class="pad finalcta">
          <div class="center">
            <div class="accent"></div>
            <h2>Freedom is just one phone call away.</h2>
            <p class="lead dim">It is free, and it is the first thing you can do right now that actually changes something.</p>
            <div class="mt"><a class="btn" href="/get-help">Get Help Now</a></div>
            <div class="num2">24/7 Helpline <a href="tel:3252325449"><span>(325) 232-5449</span></a></div>
            <a class="sec2" href="/families-guide">Are you a family member? Get the free guide →</a>
          </div>
        </section>

        <div class="donor">
          Want to help someone walk out free? <a href="/donors">Become a Chain Breaker →</a>
        </div>`;
    }
  }

  if (!customElements.get("rise-home")) {
    customElements.define("rise-home", RiseHome);
  }
})();

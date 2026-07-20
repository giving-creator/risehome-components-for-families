/* Rise Discipleship — Section 3: Plan + Quote
   Wix Custom Element. Tag name: rise-plan-quote
   File name in your repo: rise-plan-quote.js */

(function () {
  function ensureFonts() {
    if (document.getElementById("rise-fonts")) return;
    const l = document.createElement("link");
    l.id = "rise-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(l);
  }

  class RisePlanQuote extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      ensureFonts();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
        <style>
          :host{display:block;width:100%;--ink:#111111;--blue:#29ABE2;--muted:#5b5b5b;--line:#e7e7e7;
                font-family:'Inter',system-ui,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased;box-sizing:border-box;}
          *{box-sizing:border-box;margin:0;padding:0;}
          .plan{background:#ffffff;padding:64px 24px;}
          .wrap{max-width:1120px;margin:0 auto;}
          .accent{width:54px;height:3px;background:var(--blue);border-radius:2px;margin:0 auto 22px;}
          h2{font-family:'Fraunces',Georgia,serif;font-size:2.2rem;line-height:1.15;letter-spacing:-.01em;text-align:center;margin:0 0 .2em;}
          .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:38px;}
          .step{background:#fff;border:1px solid var(--line);border-radius:16px;padding:28px 22px;text-align:center;box-shadow:0 10px 30px rgba(17,17,17,.05);}
          .num{width:46px;height:46px;border-radius:50%;background:var(--blue);color:#fff;font-weight:700;font-size:1.2rem;
               display:flex;align-items:center;justify-content:center;margin:0 auto 16px;}
          .step h3{font-size:1.15rem;margin:0 0 8px;}
          .step p{color:var(--muted);font-size:1rem;line-height:1.55;margin:0;}
          .quote{background:var(--ink);color:#fff;text-align:center;padding:80px 24px;}
          .mark{color:var(--blue);font-family:'Fraunces',serif;font-size:3.4rem;line-height:0;display:block;height:26px;}
          blockquote{font-family:'Fraunces',serif;font-size:1.8rem;line-height:1.4;font-weight:600;max-width:840px;margin:30px auto 24px;}
          cite{color:var(--blue);font-style:normal;font-weight:600;letter-spacing:.04em;}
          @media(max-width:820px){
            .plan{padding:48px 20px;}
            h2{font-size:1.7rem;}
            .steps{grid-template-columns:1fr;gap:16px;margin-top:28px;}
            .quote{padding:56px 20px;}
            blockquote{font-size:1.4rem;}
          }
        </style>
        <section class="plan">
          <div class="wrap">
            <div class="accent"></div>
            <h2>How this works</h2>
            <div class="steps">
              <div class="step"><div class="num">1</div><h3>Get the guide</h3><p>Read it when you are ready. There is nothing you have to solve tonight.</p></div>
              <div class="step"><div class="num">2</div><h3>Put the number in their hand</h3><p>Stop carrying it for them, and give your loved one the one thing only they can use: the helpline number.</p></div>
              <div class="step"><div class="num">3</div><h3>They make the call</h3><p>When they call, a real person answers, day or night. That is where their story starts to turn.</p></div>
            </div>
          </div>
        </section>
        <section class="quote">
          <div class="wrap">
            <span class="mark">&ldquo;</span>
            <blockquote>He gave me back what the locusts had stolen. My wife is back in my life. We are married again, and we have a five year old daughter. The kids who said they would never speak to me again are back too.</blockquote>
            <cite>George, Rise graduate</cite>
          </div>
        </section>`;
    }
  }

  if (!customElements.get("rise-plan-quote")) {
    customElements.define("rise-plan-quote", RisePlanQuote);
  }
})();

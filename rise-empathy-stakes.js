/* Rise Discipleship — Section 2: Empathy + Stakes
   Wix Custom Element. Tag name: rise-empathy-stakes
   File name in your repo: rise-empathy-stakes.js */

(function () {
  function ensureFonts() {
    if (document.getElementById("rise-fonts")) return;
    const l = document.createElement("link");
    l.id = "rise-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(l);
  }

  class RiseEmpathyStakes extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      ensureFonts();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
        <style>
          :host{display:block;width:100%;--ink:#111111;--blue:#29ABE2;--soft:#F1F3F6;
                font-family:'Inter',system-ui,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased;box-sizing:border-box;}
          *{box-sizing:border-box;margin:0;padding:0;}
          section{padding:64px 24px;}
          .soft{background:var(--soft);}
          .wrap{max-width:760px;margin:0 auto;text-align:center;}
          .accent{width:54px;height:3px;background:var(--blue);border-radius:2px;margin:0 auto 22px;}
          h2{font-family:'Fraunces',Georgia,serif;font-size:2.2rem;line-height:1.15;letter-spacing:-.01em;margin:0 0 .5em;}
          p{font-size:1.13rem;line-height:1.65;color:#333;margin:.7em 0;}
          @media(max-width:820px){
            section{padding:48px 20px;}
            h2{font-size:1.7rem;}
            p{font-size:1.05rem;}
          }
        </style>
        <section>
          <div class="wrap">
            <div class="accent"></div>
            <h2>You are not crazy. You are exhausted.</h2>
            <p>You have called around. You have laid awake. You have tried being gentle and tried being firm, and you still feel like nothing you do reaches them. That does not mean you have failed. It means you have been carrying something that was never yours to carry alone.</p>
            <p>This guide will not shame you and it will not sell you anything. It will tell you the truth, with care, about what actually helps and what only looks like helping.</p>
          </div>
        </section>
        <section class="soft">
          <div class="wrap">
            <div class="accent"></div>
            <h2>Nothing changes on its own</h2>
            <p>Addiction does not run out of steam. Left alone, it waits for the next rescue, the next covered bill, the next second chance, and quietly, another year goes by. You have already lived one of those years. The guide is about how that cycle actually breaks.</p>
          </div>
        </section>`;
    }
  }

  if (!customElements.get("rise-empathy-stakes")) {
    customElements.define("rise-empathy-stakes", RiseEmpathyStakes);
  }
})();

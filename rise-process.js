/* Rise Discipleship — "The Rise Process" section (Rescue/Rebuild/Restore/Release)
   Wix Custom Element. Tag name: rise-process
   File name in your repo: rise-process.js
   Add this as its own section on the Home page, wherever you want it
   (recommended: right after the "We have walked people all the way out" section). */

(function () {
  function ensureFonts() {
    if (document.getElementById("rise-proc-fonts")) return;
    var l = document.createElement("link");
    l.id = "rise-proc-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(l);
  }

  class RiseProcess extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      ensureFonts();
      var root = this.attachShadow({ mode: "open" });
      // Wix locks custom elements to a fixed height, which can leave a blank gap.
      // Force this element to hug its content.
      var self = this;
      function hug() {
        self.style.setProperty("min-height", "0", "important");
        self.style.setProperty("height", "auto", "important");
      }
      hug();
      window.addEventListener("load", hug);
      setTimeout(hug, 500);
      setTimeout(hug, 1500);

      root.innerHTML = `
        <style>
          :host{display:block;width:100%;--ink:#111111;--blue:#29ABE2;--muted:#5b5b5b;--line:#e7e7e7;--soft:#F1F3F6;
                font-family:'Inter',system-ui,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased;box-sizing:border-box;background:#F1F3F6;}
          *{box-sizing:border-box;margin:0;padding:0;}
          h2,h3{font-family:'Fraunces',Georgia,serif;letter-spacing:-.01em;line-height:1.1;}
          .sec{padding:78px 0;}
          .wrap{max-width:1120px;margin:0 auto;padding:0 24px;}
          .center{max-width:760px;margin:0 auto;text-align:center;}
          .accent{width:54px;height:3px;background:var(--blue);border-radius:2px;margin:0 auto 22px;}
          .eyebrow2{color:var(--blue);font-weight:700;letter-spacing:.16em;text-transform:uppercase;font-size:.76rem;margin-bottom:14px;}
          h2{font-size:2.3rem;margin-bottom:.35em;}
          .lead{font-size:1.16rem;color:#333;line-height:1.6;max-width:640px;margin:0 auto;}
          .process{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:40px;}
          .rstage{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 20px;
                  box-shadow:0 10px 30px rgba(17,17,17,.05);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;}
          .rstage:hover{border-color:var(--blue);box-shadow:0 16px 36px rgba(41,171,226,.30);transform:translateY(-4px);}
          .rstage .rn{display:block;color:var(--blue);font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:.72rem;margin-bottom:6px;}
          .rstage h3{font-size:1.7rem;margin-bottom:10px;}
          .rstage p{color:var(--muted);font-size:.97rem;line-height:1.55;}
          @media(max-width:860px){
            .sec{padding:52px 0;}
            h2{font-size:1.8rem;}
            .process{grid-template-columns:1fr 1fr;}
          }
        </style>

        <section class="sec">
          <div class="wrap">
            <div class="center">
              <div class="accent"></div>
              <p class="eyebrow2">The Rise Process</p>
              <h2>One path. From lost to free.</h2>
              <p class="lead">Everyone who walks through our door walks the same proven path, from the day they arrive to the day they walk out ready for a new life.</p>
            </div>
            <div class="process">
              <div class="rstage"><span class="rn">Step 01</span><h3>Rescue</h3><p>You're welcomed in with love and structure. Safe, and no longer alone.</p></div>
              <div class="rstage"><span class="rn">Step 02</span><h3>Rebuild</h3><p>Discipleship rebuilds your faith, your identity, your discipline, and the healing underneath.</p></div>
              <div class="rstage"><span class="rn">Step 03</span><h3>Restore</h3><p>You take back responsibility, trust, purpose, and the ability to lead again.</p></div>
              <div class="rstage"><span class="rn">Step 04</span><h3>Release</h3><p>You graduate ready, with a clear plan for what comes next.</p></div>
            </div>
          </div>
        </section>`;
    }
  }

  if (!customElements.get("rise-process")) {
    customElements.define("rise-process", RiseProcess);
  }
})();

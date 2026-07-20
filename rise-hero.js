/* Rise Discipleship — Section 1: Hero + Signup Form
   Wix Custom Element. Tag name to use in Wix: rise-hero
   File name in your repo: rise-hero.js
   Swap COVER_URL for a hi-res hosted cover if you want it sharper. */

(function () {
  const COVER_URL = "https://static.wixstatic.com/media/13d569_b235de05015f40c386094fd958606752~mv2.jpg";

  // Mailchimp (Rise Discipleship Home audience)
  const MC_ACTION = "https://risehome.us16.list-manage.com/subscribe/post-json?u=31a8eee1d5888838f9056ecfc&id=6805fe8c4c&f_id=006578e0f0";
  const MC_HONEYPOT = "b_31a8eee1d5888838f9056ecfc_6805fe8c4c";

  function ensureFonts() {
    if (document.getElementById("rise-fonts")) return;
    const l = document.createElement("link");
    l.id = "rise-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(l);
  }

  class RiseHero extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      ensureFonts();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
        <style>
          :host{display:block;width:100%;--ink:#111111;--blue:#29ABE2;--muted:#5b5b5b;--line:#e7e7e7;
                font-family:'Inter',system-ui,sans-serif;color:#fff;-webkit-font-smoothing:antialiased;box-sizing:border-box;}
          *{box-sizing:border-box;margin:0;padding:0;}
          .hero{background:var(--ink);padding:64px 24px 76px;}
          .wrap{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
          .cover{max-width:360px;width:100%;border-radius:8px;box-shadow:0 40px 90px rgba(0,0,0,.55);display:block;margin:0 auto;}
          .eyebrow{color:var(--blue);font-weight:600;letter-spacing:.16em;text-transform:uppercase;font-size:.78rem;margin:0 0 16px;}
          h1{font-family:'Fraunces',Georgia,serif;font-size:3rem;line-height:1.05;font-weight:700;letter-spacing:-.01em;margin:0 0 .35em;}
          .sub{font-size:1.18rem;color:#e9eef2;margin:0 0 26px;line-height:1.6;}
          .sub strong{color:#fff;}
          .card{background:#fff;color:var(--ink);border-radius:18px;padding:26px 24px;box-shadow:0 24px 60px rgba(0,0,0,.35);}
          .card h3{font-size:1.15rem;margin:0 0 4px;}
          .free{color:var(--muted);font-size:.95rem;margin:0 0 16px;}
          label{display:block;font-size:.8rem;font-weight:600;color:#333;margin:0 0 6px;}
          .field{margin-bottom:12px;}
          input{width:100%;padding:14px;border:1.5px solid var(--line);border-radius:10px;font-size:1rem;font-family:inherit;}
          .btn{width:100%;background:var(--blue);color:#fff;border:0;font-weight:600;font-size:1.05rem;padding:16px 26px;border-radius:12px;cursor:pointer;}
          .micro{font-size:.82rem;color:var(--muted);margin:12px 2px 0;text-align:center;}
          .hp{position:absolute;left:-5000px;}
          .err{color:#c0392b;}
          @media(max-width:820px){
            .wrap{grid-template-columns:1fr;gap:32px;}
            .cover{order:-1;}
            h1{font-size:2.1rem;}
            .hero{padding:48px 20px 56px;}
          }
        </style>
        <section class="hero">
          <div class="wrap">
            <div><img class="cover" src="${COVER_URL}" alt="When Loving Them Isn't Working"></div>
            <div>
              <p class="eyebrow">For families facing a loved one's addiction</p>
              <h1>When loving them isn't working</h1>
              <p class="sub">A <strong>free</strong>, honest guide for the ones who can't fix it alone. Written for the mom, dad, husband, or wife who has tried everything and is worn all the way down.</p>
              <div class="card" id="card">
                <h3>Get the free guide</h3>
                <p class="free">It comes to your inbox right away.</p>
                <form id="f" novalidate>
                  <div class="field"><label>First name</label><input name="FNAME" placeholder="Your first name"></div>
                  <div class="field"><label>Email</label><input type="email" name="EMAIL" required placeholder="you@email.com"></div>
                  <div class="hp"><input type="text" name="${MC_HONEYPOT}" tabindex="-1"></div>
                  <button class="btn" type="submit">Send Me the Free Guide</button>
                  <p class="micro">It's free, and we will never ask you for money.</p>
                </form>
              </div>
            </div>
          </div>
        </section>`;

      const form = root.getElementById("f");
      const card = root.getElementById("card");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const params = [];
        form.querySelectorAll("input[name]").forEach(function (i) {
          params.push(encodeURIComponent(i.name) + "=" + encodeURIComponent(i.value));
        });
        const cb = "rise_cb_" + Date.now();
        params.push("c=" + cb);
        window[cb] = function (d) {
          try { delete window[cb]; } catch (e) {}
          if (d && d.result === "success") {
            card.innerHTML = '<h3>Check your email</h3><p class="free">Your guide is on the way. If it is not there shortly, check your spam folder.</p>';
          } else {
            const old = form.querySelector(".mc-err");
            if (old) old.remove();
            const p = document.createElement("p");
            p.className = "micro err mc-err";
            p.textContent = d && d.msg ? d.msg : "Something went wrong, please try again.";
            form.appendChild(p);
          }
        };
        const s = document.createElement("script");
        s.src = MC_ACTION + "&" + params.join("&");
        document.body.appendChild(s);
      });
    }
  }

  if (!customElements.get("rise-hero")) {
    customElements.define("rise-hero", RiseHero);
  }
})();

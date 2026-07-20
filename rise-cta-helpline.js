/* Rise Discipleship — Section 4: Second Signup + Helpline
   Wix Custom Element. Tag name: rise-cta-helpline
   File name in your repo: rise-cta-helpline.js */

(function () {
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

  class RiseCtaHelpline extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      ensureFonts();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
        <style>
          :host{display:block;width:100%;--ink:#111111;--blue:#29ABE2;--muted:#5b5b5b;--line:#e7e7e7;--soft:#F1F3F6;
                font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;}
          *{box-sizing:border-box;margin:0;padding:0;}
          .cta{background:var(--soft);padding:64px 24px;color:var(--ink);}
          .inner{max-width:560px;margin:0 auto;text-align:center;}
          .accent{width:54px;height:3px;background:var(--blue);border-radius:2px;margin:0 auto 22px;}
          h2{font-family:'Fraunces',Georgia,serif;font-size:2.2rem;line-height:1.15;letter-spacing:-.01em;margin:0 0 .4em;}
          .lead{font-size:1.13rem;color:#333;line-height:1.6;margin:0 0 8px;}
          .card{background:#fff;border-radius:18px;padding:26px 24px;box-shadow:0 24px 60px rgba(0,0,0,.12);text-align:left;margin-top:26px;}
          label{display:block;font-size:.8rem;font-weight:600;color:#333;margin:0 0 6px;}
          .field{margin-bottom:12px;}
          input{width:100%;padding:14px;border:1.5px solid var(--line);border-radius:10px;font-size:1rem;font-family:inherit;}
          .btn{width:100%;background:var(--blue);color:#fff;border:0;font-weight:600;font-size:1.05rem;padding:16px 26px;border-radius:12px;cursor:pointer;}
          .micro{font-size:.82rem;color:var(--muted);margin:12px 2px 0;text-align:center;}
          .hp{position:absolute;left:-5000px;}
          .err{color:#c0392b;}
          .help{background:var(--ink);color:#fff;text-align:center;padding:64px 24px;}
          .help h2{margin:0 0 .4em;font-size:1.7rem;}
          .help p{color:#c3ccd3;max-width:640px;margin:.6em auto;font-size:1.05rem;line-height:1.65;}
          .num{font-weight:700;font-size:1.9rem;margin-top:18px;}
          .num a{color:#fff;text-decoration:none;}
          .num a span{color:var(--blue);}
          @media(max-width:820px){
            .cta,.help{padding:48px 20px;}
            h2{font-size:1.7rem;}
            .help h2{font-size:1.45rem;}
            .num{font-size:1.6rem;}
          }
        </style>
        <section class="cta">
          <div class="inner">
            <div class="accent"></div>
            <h2>Start with the guide</h2>
            <p class="lead">It is free, and reading it is the first thing you can do tonight that actually helps.</p>
            <div class="card" id="card">
              <form id="f" novalidate>
                <div class="field"><label>First name</label><input name="FNAME" placeholder="Your first name"></div>
                <div class="field"><label>Email</label><input type="email" name="EMAIL" required placeholder="you@email.com"></div>
                <div class="hp"><input type="text" name="${MC_HONEYPOT}" tabindex="-1"></div>
                <button class="btn" type="submit">Send Me the Free Guide</button>
                <p class="micro">We will never share your email, and we will never ask you for a donation.</p>
              </form>
            </div>
          </div>
        </section>
        <section class="help">
          <div>
            <h2>If your loved one is ready right now</h2>
            <p>They can call any time, day or night, and a real person answers. It is free, there is no waitlist, and honesty is always safe. They have to be the one to make the call. It is the first thing that is truly theirs.</p>
            <div class="num"><a href="tel:3252325449">24/7 Helpline <span>(325) 232-5449</span></a></div>
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
        const cb = "rise_cb2_" + Date.now();
        params.push("c=" + cb);
        window[cb] = function (d) {
          try { delete window[cb]; } catch (e) {}
          if (d && d.result === "success") {
            card.innerHTML = '<h3 style="font-size:1.4rem;margin:0 0 6px;">Check your email</h3><p style="color:#5b5b5b;">Your guide is on the way. If it is not there shortly, check your spam folder.</p>';
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

  if (!customElements.get("rise-cta-helpline")) {
    customElements.define("rise-cta-helpline", RiseCtaHelpline);
  }
})();

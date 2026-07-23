/* Rise Discipleship — Donate Page (full body as one Custom Element)
   Wix Custom Element. Tag name: rise-donate
   File name in your repo: rise-donate.js
   Self-contained: Byron's photo is embedded, so no extra image uploads needed. */

(function () {
  function ensureFonts() {
    if (document.getElementById("rise-donate-fonts")) return;
    const l = document.createElement("link");
    l.id = "rise-donate-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Source+Sans+3:wght@400;600;700&display=swap";
    document.head.appendChild(l);
  }

  class RiseDonate extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      ensureFonts();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
<style>
:host{
  display:block;
  --black:#0D0D0D;--black2:#1A1A1A;--cyan:#29ABE2;--cyan-dk:#1A8CBF;--cyan-lt:#E6F6FC;
  --red:#E03030;--white:#FFFFFF;--off:#F5F5F5;--txt:#1A1A1A;--mut:#5A5A5A;--bd:#DEDEDE;
  font-family:'Source Sans 3',sans-serif;background:var(--off);color:var(--txt);
  font-size:17px;line-height:1.7;-webkit-font-smoothing:antialiased;box-sizing:border-box;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
.tg{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:1.25rem;margin-bottom:2.75rem}
.tc{background:var(--white);border:1.5px solid var(--bd);border-radius:12px;padding:1.6rem;position:relative;transition:border-color .2s,transform .15s;display:flex;flex-direction:column}
.tc:hover{border-color:var(--cyan);transform:translateY(-2px)}
.tc.feat{border-color:var(--cyan);border-width:2px}
.bdg{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--cyan);color:#fff;font-size:.67rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 14px;border-radius:20px;white-space:nowrap}
.tl{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cyan-dk);margin-bottom:.35rem}
.ta{font-family:'Playfair Display',serif;font-size:1.95rem;font-weight:700;color:var(--black);line-height:1.1}
.ta span{font-size:.88rem;color:var(--mut);font-family:'Source Sans 3',sans-serif;font-weight:400}
.thr{border:none;border-top:1px solid var(--bd);margin:.75rem 0}
.td{font-size:.9rem;color:var(--mut);line-height:1.55;flex:1}
.hero{background:var(--black);color:#fff;padding:4.5rem 1.5rem 4rem;text-align:center}
.hero-bar{width:50px;height:3px;background:var(--cyan);margin:0 auto 1.5rem;border-radius:2px}
.hero h1{font-family:'Playfair Display',serif;font-size:clamp(1.75rem,6vw,3rem);line-height:1.18;font-weight:900;max-width:760px;margin:0 auto 1.2rem}
.hero h1 em{font-style:italic;color:var(--cyan)}
.hero-sub{font-size:clamp(.95rem,2.5vw,1.05rem);color:rgba(255,255,255,.68);max-width:520px;margin:0 auto 2.25rem;line-height:1.75}
.btn-hero{display:inline-block;background:var(--cyan);color:#fff;font-size:1rem;font-weight:700;padding:.85rem 2.2rem;border-radius:4px;text-transform:uppercase;letter-spacing:.04em;cursor:pointer}
.hero-sec{display:block;margin-top:.85rem;font-size:.87rem;color:rgba(255,255,255,.35);text-decoration:underline}
.story-wrap{max-width:820px;margin:0 auto;padding:4.5rem 1.5rem}
.eyebrow{font-size:.7rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--cyan);margin-bottom:1.1rem;display:block}
.story-wrap h2{font-family:'Playfair Display',serif;font-size:clamp(1.45rem,4vw,2.1rem);font-weight:700;line-height:1.28;color:var(--black);margin-bottom:1.4rem}
.story-wrap p{color:var(--mut);margin-bottom:1.15rem;font-size:clamp(.97rem,2.5vw,1.02rem)}
.story-wrap strong{color:var(--txt);font-weight:700}
.pull{border-left:4px solid var(--cyan);padding:.9rem 1.4rem;margin:1.75rem 0;background:var(--cyan-lt);border-radius:0 8px 8px 0}
.pull p{font-family:'Playfair Display',serif;font-size:clamp(1.05rem,3vw,1.18rem);font-style:italic;color:var(--black2);margin:0;line-height:1.55}
.vbtn{display:inline-flex;align-items:center;gap:.5rem;color:var(--cyan-dk);font-weight:700;font-size:.95rem;border-bottom:2px solid var(--cyan-dk);padding-bottom:2px;margin-top:.5rem}
.pi{width:22px;height:22px;background:var(--cyan);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}
.pi::after{content:'';border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:8px solid #fff;margin-left:2px}
.div-sec{background:var(--black2);color:#fff;padding:4rem 1.5rem;text-align:center}
.div-sec h2{font-family:'Playfair Display',serif;font-size:clamp(1.35rem,4vw,1.9rem);font-weight:700;max-width:680px;margin:0 auto 1rem;line-height:1.3}
.div-sec h2 em{font-style:italic;color:var(--cyan)}
.div-sec p{color:rgba(255,255,255,.65);max-width:580px;margin:0 auto;font-size:clamp(.95rem,2.5vw,1rem)}
.trust-row{display:flex;justify-content:center;flex-wrap:wrap;gap:.85rem 2rem;margin-top:2.25rem;padding-top:2.25rem;border-top:1px solid rgba(255,255,255,.12)}
.ti{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:rgba(255,255,255,.75)}
.ck{width:18px;height:18px;background:rgba(41,171,226,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--cyan);flex-shrink:0;font-weight:700}
.gw{max-width:980px;margin:0 auto;padding:4.5rem 1.5rem}
.gh{text-align:center;margin-bottom:2.75rem}
.gh h2{font-family:'Playfair Display',serif;font-size:clamp(1.45rem,4vw,2.1rem);font-weight:700;color:var(--black);margin-bottom:.6rem}
.gh p{color:var(--mut);max-width:520px;margin:0 auto;font-size:clamp(.95rem,2.5vw,1rem)}
.give-btn{display:block;margin-top:auto;background:var(--cyan);color:#fff;text-align:center;padding:.75rem;border-radius:4px;font-weight:700;font-size:.9rem;letter-spacing:.04em;text-transform:uppercase}
@media(max-width:768px){
  .tg{grid-template-columns:1fr}
  .tc{padding:1.4rem}
  .hero{padding:3.5rem 1.25rem 3rem}
  .story-wrap{padding:3.5rem 1.25rem}
  .div-sec{padding:3rem 1.25rem}
  .gw{padding:3.5rem 1.25rem}
  .trust-row{gap:.7rem 1.25rem}
  .ti{font-size:.83rem}
}
@media(max-width:400px){
  .hero h1{font-size:1.7rem}
  .btn-hero{width:100%;text-align:center;padding:.85rem 1rem}
}
</style>

<section class="hero">
  <div class="hero-bar"></div>
  <h1>He was homeless. Withdrawing.<br><em>Dying in a car with broken windows.</em><br>Today, Byron is free.</h1>
  <p class="hero-sub">Rise Discipleship is a free, one-year Christian discipleship program in Abilene and Austin, TX. Broken lives become new ones. No cost. Ever.</p>
  <a href="#give" class="btn-hero" id="cbHero">Become a Chain Breaker</a>
  <a href="https://givebutter.com/rise-discipleship-home-rqtdtm" target="_blank" class="hero-sec">Make a one-time gift instead</a>
</section>

<section class="story-wrap">
  <span class="eyebrow">Byron's Story</span>
  <img src="https://img.youtube.com/vi/nWqIK4EHBpw/maxresdefault.jpg" alt="Byron Andrade Sosa — Before and After Rise Discipleship" style="width:100%;max-width:720px;border-radius:10px;margin:0 auto 2rem;display:block;box-shadow:0 4px 24px rgba(0,0,0,.12)">
  <h2>"I looked up and saw Psalms 46:10 — Be still, and know that I am God."</h2>
  <p>Byron Andrade Sosa was doing <strong>70 fentanyl pills a day.</strong> He'd burned every bridge. Family. Friends. The people closest to him. He was homeless, on the run from the law, and withdrawing in the back seat of a car with broken windows on a cold December night. He had warrants. He was robbing his own people to survive.</p>
  <p>That night, wrapped in a blanket and shaking, Byron cried out to Jesus. And Jesus told him to <strong>turn himself in.</strong></p>
  <div class="pull">
    <p>"I'm a junkie. I'm gonna die like this. I don't want to do this no more. What do I do?" Then Jesus spoke. 'Turn yourself in.' So I called the police on myself."</p>
  </div>
  <p>The judge gave Byron a choice: prison, or a one-year program in Abilene called Rise Discipleship. He arrived court-ordered and angry. He tried to leave multiple times. One night at 4:30 in the morning, he was scrubbing a wall with a toothbrush. Furious. Crying. Asking God what He wanted from him.</p>
  <p>That night, he surrendered. Something broke open. Byron graduated. Then, with <strong>no court order and no obligation</strong>, he chose to stay a second year. Because Jesus is real. And he wanted his brothers to find what he found.</p>
  <a href="https://www.youtube.com/watch?v=nWqIK4EHBpw&t=4s" target="_blank" class="vbtn">
    <span class="pi"></span>&nbsp;Watch Byron's full story on YouTube
  </a>
</section>

<section class="div-sec">
  <h2>When you give, you're not funding a program.<br><em>You're paying for the moment a man has somewhere to go.</em></h2>
  <p>No student at Rise Discipleship ever pays a dime. No government funding. Every meal, every bed, every bus ticket for a man arriving from across the country. It all comes from people like you.</p>
  <div class="trust-row">
    <div class="ti"><div class="ck">✓</div>Registered 501(c)3 nonprofit</div>
    <div class="ti"><div class="ck">✓</div>100% free to students &amp; families</div>
    <div class="ti"><div class="ck">✓</div>Zero government funding</div>
    <div class="ti"><div class="ck">✓</div>Tax-deductible gifts</div>
    <div class="ti"><div class="ck">✓</div>Now serving Abilene &amp; Austin, TX</div>
  </div>
</section>

<section class="gw" id="give">
  <div class="gh">
    <span class="eyebrow">Break a Chain Today</span>
    <h2>Join the Chain Breakers</h2>
    <p>A monthly gift is the most powerful gift you can give. It means a man knows that tomorrow, someone is still fighting for his freedom.</p>
  </div>
  <div class="tg">
    <div class="tc">
      <div class="tl">The First Link</div>
      <div class="ta">$25 <span>/ month</span></div>
      <hr class="thr">
      <div class="td">Every man who walks through our doors gets a hygiene kit and his program materials on day one. Your $25 covers that for a full month. Soap, shampoo, a toothbrush, and the Biblical curriculum that starts changing everything.</div>
      <a href="https://givebutter.com/rise-discipleship-home-rqtdtm" target="_blank" class="give-btn">Give</a>
    </div>
    <div class="tc feat">
      <div class="bdg">Most Popular</div>
      <div class="tl">The Chain Breaker</div>
      <div class="ta">$50 <span>/ month</span></div>
      <hr class="thr">
      <div class="td">A full week of meals for one man fighting to stay clean, stay in the program, and stay alive. Three meals a day. Seven days of showing up.</div>
      <a href="https://givebutter.com/rise-discipleship-home-rqtdtm" target="_blank" class="give-btn">Give</a>
    </div>
    <div class="tc">
      <div class="tl">The Bondage Breaker</div>
      <div class="ta">$200 <span>/ month</span></div>
      <hr class="thr">
      <div class="td">A full month of meals for one man. Breakfast, lunch, and dinner every single day. Thirty days of fuel for transformation.</div>
      <a href="https://givebutter.com/rise-discipleship-home-rqtdtm" target="_blank" class="give-btn">Give</a>
    </div>
  </div>
  <p style="text-align:center;margin-top:2rem;font-weight:600;font-size:1.05rem;color:var(--cyan-dk)">Ready to break a chain? Pick your amount below and get started.</p>
  <p style="text-align:center;margin-top:1.5rem;font-size:.95rem;color:var(--mut)">Prefer a one-time gift? <a href="https://givebutter.com/rise-discipleship-home-rqtdtm" target="_blank" style="color:var(--cyan-dk);font-weight:700;border-bottom:1px solid var(--cyan-dk);padding-bottom:1px;">Make a one-time donation →</a></p>
</section>`;

      // Smooth-scroll the hero button to the giving section (shadow-DOM safe)
      const btn = root.getElementById("cbHero");
      const give = root.getElementById("give");
      if (btn && give) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          give.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }

  if (!customElements.get("rise-donate")) {
    customElements.define("rise-donate", RiseDonate);
  }
})();

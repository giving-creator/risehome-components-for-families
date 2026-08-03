/* Rise Discipleship — Men's Page (full body as one Custom Element)
   Wix Custom Element. Tag name: rise-men
   File name in your repo: rise-men.js
   Photos must be in the SAME repo: men-hero.jpg, men-pray.jpg, men-group.jpg, men-grad.jpg */

(function () {
  var BASE = "https://giving-creator.github.io/risehome-components-for-families/";
  var HERO = BASE + "men-hero.jpg";
  var PRAY = BASE + "men-pray.jpg";
  var GROUP = BASE + "men-group.jpg";
  var GRAD = BASE + "men-grad.jpg";

  function ensureFonts() {
    if (document.getElementById("rise-men-fonts")) return;
    var l = document.createElement("link");
    l.id = "rise-men-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(l);
  }

  class RiseMen extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      ensureFonts();
      var root = this.attachShadow({ mode: "open" });
      // Wix locks custom elements to a fixed (often oversized) height, leaving a
      // huge blank gap below the content. Force the element to hug its content.
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
:host{display:block;width:100%;background:#0d0d10;
  --ink:#111;--dark:#0d0d10;--blue:#29ABE2;--muted:#5b5b5b;--line:#e7e7e7;--soft:#F1F3F6;--red:#e03030;
  font-family:'Inter',system-ui,sans-serif;color:#111;-webkit-font-smoothing:antialiased;box-sizing:border-box;}
*{box-sizing:border-box;margin:0;padding:0;}
h1,h2,h3{font-family:'Fraunces',Georgia,serif;letter-spacing:-.01em;line-height:1.05;}
.wrap{max-width:1120px;margin:0 auto;padding:0 24px;}
.btn{display:inline-block;background:var(--blue);color:#fff;font-weight:700;font-size:1.05rem;padding:16px 32px;border-radius:12px;text-decoration:none;cursor:pointer;}
.eyebrow{color:var(--blue);font-weight:700;letter-spacing:.16em;text-transform:uppercase;font-size:.76rem;}
.mhero{position:relative;min-height:74vh;display:flex;align-items:center;color:#fff;overflow:hidden;}
.mhero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 42%;}
.mhero::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,10,12,.94),rgba(10,10,12,.78) 42%,rgba(10,10,12,.2));}
.mhero .inner{position:relative;z-index:2;max-width:1120px;margin:0 auto;padding:70px 24px;width:100%;}
.mhero h1{font-size:3.4rem;font-weight:900;max-width:15ch;margin:14px 0 .35em;}
.mhero .sub{font-size:1.18rem;color:#e9eef2;max-width:40ch;margin-bottom:28px;}
.mhero .phone{margin-top:16px;font-size:.92rem;color:#c3ccd3;}
.mhero .sec{display:inline-block;margin-top:20px;color:var(--blue);font-weight:600;text-decoration:none;font-size:.95rem;}
.super{background:var(--dark);color:#fff;padding:84px 0;}
.super .grid{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;}
.super h2{font-size:2.9rem;font-weight:900;margin-bottom:.3em;}
.super h2 em{font-style:italic;color:var(--blue);}
.super p{color:#c9d0d6;font-size:1.08rem;margin-bottom:1rem;}
.super .q{font-family:'Fraunces',serif;font-style:italic;font-size:1.25rem;color:#fff;border-left:4px solid var(--blue);padding-left:16px;margin-top:20px;}
.super .q b{display:block;font-style:normal;color:var(--blue);font-size:.9rem;margin-top:8px;}
.super img{width:100%;height:100%;min-height:360px;object-fit:cover;border-radius:14px;}
.lies{background:#fff;padding:84px 0;text-align:center;}
.lies h2{font-size:2.3rem;margin-bottom:.3em;}
.lies .lead{font-size:1.12rem;color:#111;max-width:640px;margin:0 auto 34px;}
.lielist{max-width:640px;margin:0 auto;text-align:left;display:grid;gap:14px;}
.lie{display:flex;gap:14px;align-items:center;background:var(--soft);border-radius:12px;padding:16px 20px;font-size:1.08rem;color:#1a1a1a;font-weight:500;text-decoration:line-through;text-decoration-color:var(--red);text-decoration-thickness:2px;}
.lie .x{flex:0 0 auto;width:26px;height:26px;border-radius:50%;background:var(--red);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;text-decoration:none;}
.lies .after{margin-top:30px;font-size:1.12rem;color:#111;max-width:680px;margin-left:auto;margin-right:auto;}
.broth{background:var(--soft);padding:84px 0;}
.broth .grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.broth h2{font-size:2.3rem;margin-bottom:.35em;}
.broth p{font-size:1.1rem;color:#333;margin-bottom:1rem;}
.broth .q{border-left:4px solid var(--blue);padding-left:16px;font-style:italic;color:#333;margin-top:18px;}
.broth .q b{display:block;font-style:normal;color:var(--blue);font-size:.9rem;margin-top:8px;}
.broth img{width:100%;min-height:360px;height:100%;object-fit:cover;border-radius:14px;}
.rhythm{background:#fff;padding:84px 0;}
.rhythm .head{text-align:center;max-width:680px;margin:0 auto 40px;}
.rhythm h2{font-size:2.3rem;margin-bottom:.3em;}
.rhythm .head p{color:#555;font-size:1.1rem;}
.rlist{max-width:760px;margin:0 auto;display:grid;gap:2px;}
.ritem{display:grid;grid-template-columns:64px 1fr;gap:20px;padding:22px 0;border-bottom:1px solid var(--line);align-items:start;}
.rnum{font-family:'Fraunces',serif;font-weight:700;font-size:1.6rem;color:var(--blue);}
.ritem h3{font-size:1.2rem;margin-bottom:4px;}
.ritem p{color:var(--muted);font-size:1rem;}
.plan{background:var(--dark);color:#fff;padding:70px 0;text-align:center;}
.plan h2{font-size:2rem;margin-bottom:30px;}
.planrow{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;max-width:900px;margin:0 auto;}
.pstep .n{width:44px;height:44px;border-radius:50%;background:var(--blue);color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;}
.pstep h3{font-size:1.1rem;margin-bottom:6px;}
.pstep p{color:#c3ccd3;font-size:.98rem;}
.proof{background:#fff;padding:84px 0;text-align:center;}
.proof h2{font-size:2.3rem;margin-bottom:34px;}
.videos{display:grid;grid-template-columns:1fr 1fr;gap:28px;max-width:1000px;margin:0 auto;}
.vcard iframe{width:100%;aspect-ratio:16/9;border:0;border-radius:14px;}
.vcard p{margin-top:12px;color:#333;font-size:1rem;text-align:left;}
.vcard b{color:var(--blue);}
.trans{background:var(--soft);padding:84px 0;}
.trans .grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.trans img{width:100%;min-height:360px;height:100%;object-fit:cover;border-radius:14px;}
.trans h2{font-size:2.3rem;margin-bottom:.35em;}
.trans p{font-size:1.12rem;color:#333;}
.cta{background:var(--dark);color:#fff;text-align:center;padding:90px 0;}
.cta h2{font-size:2.6rem;margin-bottom:.35em;}
.cta p{color:#c3ccd3;font-size:1.12rem;max-width:640px;margin:0 auto 26px;}
.cta .num{font-weight:700;font-size:1.9rem;margin-top:20px;}
.cta .num span{color:var(--blue);}
.info{background:#08090b;color:#aeb6bd;text-align:center;padding:30px 0;font-size:.98rem;line-height:1.9;}
.info b{color:#fff;}
@media(max-width:860px){
  .mhero h1{font-size:2.2rem;} .super .grid,.broth .grid,.trans .grid,.videos,.planrow{grid-template-columns:1fr;} .super h2{font-size:2rem;}
}
</style>

<section class="mhero">
  <img src="${HERO}" alt="Rise Discipleship men worshiping together outside the home">
  <div class="inner">
    <span class="eyebrow">Free · One year · Abilene, Texas · Men</span>
    <h1>Come as you are. Leave a new man.</h1>
    <p class="sub">A free, one-year Christian home in Abilene for men ready to break free from addiction and finally become who God made them to be. No cost to you or your family, ever.</p>
    <a class="btn" href="/get-help">Get Help Now</a>
    <div class="phone">Free. A real person answers, day or night. (325) 232-5449</div><br>
    <a class="sec" href="/families-guide">Is it your son, husband, or brother? Start here →</a>
  </div>
</section>

<section class="super">
  <div class="wrap grid">
    <div>
      <span class="eyebrow">What this actually is</span>
      <h2>More than getting clean. <em>Getting made new.</em></h2>
      <p>Rise is not a drug program. It is not a halfway house where a man dries out for a few days and goes back to the same life. It is a discipleship home where men overcome what has been beating them and learn to become the men God made them to be.</p>
      <p>That means it is for two men. The one whose addiction is running his life. And the one who looks fine on the outside but knows something inside is off, who has lost his purpose or his way. Both walk out changed.</p>
      <div class="q">"It's not a drug rehab. It's not a halfway house. We call it Superhero School."<b>— Horace, graduate, now a pastor at Rise</b></div>
    </div>
    <img src="${PRAY}" alt="Rise Discipleship men praying together at the home">
  </div>
</section>

<section class="lies">
  <div class="wrap">
    <span class="eyebrow">The problem</span>
    <h2 style="margin-top:10px">You might be believing a lie.</h2>
    <p class="lead">Most men who walk through our door are carrying one of these, whether they'd say it out loud or not.</p>
    <div class="lielist">
      <div class="lie"><span class="x">✕</span> I'm not good enough. I don't have what it takes.</div>
      <div class="lie"><span class="x">✕</span> I already missed my window. It's too late for me.</div>
      <div class="lie"><span class="x">✕</span> I can stop on my own. I just haven't yet.</div>
      <div class="lie"><span class="x">✕</span> It's my way or nothing.</div>
    </div>
    <p class="after">Horace was 50, certain he'd forfeited every blessing God had for him. Otis was sure he couldn't change. Both were wrong. The lie was never the truth about them, and it doesn't have to be the truth about you.</p>
  </div>
</section>

<section class="broth">
  <div class="wrap grid">
    <img src="${GROUP}" alt="Rise Discipleship graduates and brothers together">
    <div>
      <span class="eyebrow">You won't do it alone</span>
      <h2>You'll do this with brothers.</h2>
      <p>The first time most men arrive, they're guarded. They've been burned before. Then the brothers start serving them, feeding them, asking their story, and they keep doing it, day after day, until it sinks in that this love is real.</p>
      <p>Dozens of men from all over the country and every walk of life. Guys who've been to prison. Guys the world gave up on.</p>
      <div class="q">"The most important person in the home is the new brother. We just want to pour the love of Christ out on him."<b>— Horace, graduate</b></div>
    </div>
  </div>
</section>

<section class="rhythm">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">A day in the home</span>
      <h2 style="margin-top:10px">Here's what a year here actually builds.</h2>
      <p>This is not a place to hide for a while. It's a year of new habits that rebuild a man from the inside out.</p>
    </div>
    <div class="rlist">
      <div class="ritem"><div class="rnum">01</div><div><h3>Early mornings with God</h3><p>You wake up early, read Proverbs, and worship before the day starts. Most men say this is where everything began to change.</p></div></div>
      <div class="ritem"><div class="rnum">02</div><div><h3>Real teaching</h3><p>Classes each morning to learn the Word and how to actually live it.</p></div></div>
      <div class="ritem"><div class="rnum">03</div><div><h3>You learn to serve</h3><p>The men who've been here longest serve the newest brothers. Serving is how pride dies and character grows.</p></div></div>
      <div class="ritem"><div class="rnum">04</div><div><h3>You learn to lead</h3><p>As you grow, you take on responsibility for others. Men who came in unable to lead themselves leave able to lead a home.</p></div></div>
      <div class="ritem"><div class="rnum">05</div><div><h3>You become a disciple</h3><p>Not religion, not a form of godliness. A real relationship with Jesus, and a new life that follows Him.</p></div></div>
    </div>
  </div>
</section>

<section class="plan">
  <div class="wrap">
    <h2>Here is how it works.</h2>
    <div class="planrow">
      <div class="pstep"><div class="n">1</div><h3>Call us.</h3><p>Call our 24/7 helpline and tell us your story. (325) 232-5449</p></div>
      <div class="pstep"><div class="n">2</div><h3>Finish your intake.</h3><p>A few questions so we can explain exactly what comes next.</p></div>
      <div class="pstep"><div class="n">3</div><h3>Come home.</h3><p>Move in for a year and start becoming the man God made you to be.</p></div>
    </div>
  </div>
</section>

<section class="proof">
  <div class="wrap">
    <span class="eyebrow">Real men, real change</span>
    <h2 style="margin-top:10px">Watch what a year here can do.</h2>
    <div class="videos">
      <div class="vcard">
        <iframe src="https://www.youtube.com/embed/r5cO4xVmL4s" title="Horace's story" allowfullscreen loading="lazy"></iframe>
        <p><b>Horace</b> came in at 50, certain he'd missed his window. He graduated, joined staff, and is now an ordained pastor planting Rise Church in Austin. "The best six months of my life. No question."</p>
      </div>
      <div class="vcard">
        <iframe src="https://www.youtube.com/embed/4FjywnMZ6I8" title="Otis's story" allowfullscreen loading="lazy"></iframe>
        <p><b>Otis</b> came searching, out of options, sure he couldn't change. His sister never gave up and found Rise. "I can do all things through Christ who strengthens me."</p>
      </div>
    </div>
  </div>
</section>

<section class="trans">
  <div class="wrap grid">
    <div>
      <span class="eyebrow">A year from now</span>
      <h2>Picture the man you'll be.</h2>
      <p>Free. Clear. Back with the people you love. Serving instead of hiding. Leading instead of leaning. Knowing who God made you to be, and finally walking in it. It has already happened for men further gone, and older, and more certain it was too late than you feel right now.</p>
    </div>
    <img src="${GRAD}" alt="A Rise Discipleship men's graduate">
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <h2>Take the first step today.</h2>
    <p>You don't have to be ready for the whole year. You just have to make one call. That's where every man's story here started.</p>
    <a class="btn" href="/get-help">Get Help Now</a>
    <div class="num">24/7 Helpline <span>(325) 232-5449</span></div>
  </div>
</section>
`;
    }
  }

  if (!customElements.get("rise-men")) {
    customElements.define("rise-men", RiseMen);
  }
})();

const HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AI Prompt Studio Pro</title>
<meta name="description" content="Create production-ready AI prompts, hooks, titles, captions and hashtags from one idea.">
<style>
:root{--bg:#09051d;--card:#130a35;--card2:#1a0d45;--line:#3b2380;--text:#fff;--muted:#b9addc;--accent:#7c3cff;--accent2:#a855f7;--good:#37e0a0}
*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:radial-gradient(circle at 50% -10%,#3c1685 0,#16083b 35%,#09051d 72%);color:var(--text);min-height:100vh}
.wrap{max-width:1050px;margin:auto;padding:34px 18px 70px}.brand{display:inline-flex;gap:9px;align-items:center;background:linear-gradient(90deg,#5d20e8,#7c3cff);padding:9px 17px;border-radius:999px;font-weight:800;box-shadow:0 8px 30px #4c1d9555}.brand b{font-size:16px}
h1{font-size:clamp(38px,7vw,72px);line-height:.98;text-align:center;margin:28px auto 16px;letter-spacing:-2px;max-width:760px}h1 span{color:#c6a8ff} .sub{text-align:center;color:var(--muted);font-size:18px;max-width:690px;margin:0 auto 28px;line-height:1.55}
.panel{background:linear-gradient(180deg,#160b3d,#0f0729);border:1px solid var(--line);border-radius:28px;padding:18px;box-shadow:0 20px 70px #0008}
.tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-bottom:18px}.tab{border:1px solid #4b2b99;background:#170b3c;color:#ddd0ff;border-radius:17px;padding:14px 8px;font-weight:800;font-size:15px;cursor:pointer}.tab.active{background:linear-gradient(135deg,#6d20ff,#8b36ff);color:white;border-color:#a56aff;box-shadow:0 8px 25px #702cff55}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:15px}.field{margin-top:2px}.field.full{grid-column:1/-1}label{display:block;font-weight:700;margin:4px 0 8px;color:#e9e0ff}select,textarea,input{width:100%;background:#10082b;border:1px solid #412486;color:#fff;border-radius:15px;padding:15px;font-size:15px;outline:none}select:focus,textarea:focus,input:focus{border-color:#9a68ff;box-shadow:0 0 0 3px #7c3cff22}textarea{min-height:150px;resize:vertical}.hint{font-size:12px;color:#8f80b7;margin-top:6px}
.actions{display:flex;gap:10px;margin-top:17px;flex-wrap:wrap}.btn{border:0;border-radius:15px;padding:14px 20px;font-weight:800;cursor:pointer}.primary{background:linear-gradient(135deg,#7627ff,#a855f7);color:#fff;box-shadow:0 10px 28px #7c3cff44}.secondary{background:#1b0e42;color:#e8ddff;border:1px solid #4b2b99}
.result{display:none;margin-top:18px;background:#0b0620;border:1px solid #3e2580;border-radius:22px;padding:18px}.result.show{display:block}.resultTop{display:flex;justify-content:space-between;gap:10px;align-items:center}.result h2{margin:0;font-size:20px}.copy{padding:9px 13px;border-radius:10px;background:#231253;border:1px solid #5231a0;color:white;cursor:pointer}.out{white-space:pre-wrap;color:#e9e0ff;line-height:1.65;margin-top:14px;font-size:14px}.chips{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px}.chip{background:#1b0e42;border:1px solid #4b2b99;color:#d7c8ff;border-radius:999px;padding:7px 10px;font-size:12px}
.footer{text-align:center;color:#776b9e;font-size:12px;margin-top:22px}
@media(max-width:700px){.wrap{padding:22px 12px 50px}.grid{grid-template-columns:1fr}.field.full{grid-column:auto}.tabs{grid-template-columns:repeat(2,1fr)}h1{font-size:42px}.panel{padding:12px;border-radius:22px}}
</style>
</head>
<body>
<div class="wrap">
  <div style="text-align:center"><div class="brand">⚡ <b>ALL-IN-ONE AI PROMPT STUDIO PRO</b></div></div>
  <h1>Make Prompts That <span>Stand Out</span></h1>
  <p class="sub">Generate production-ready AI prompts, viral hooks, titles, captions and hashtags from one idea.</p>

  <section class="panel">
    <div class="tabs">
      <button class="tab active" data-type="Video">🎬 Video</button>
      <button class="tab" data-type="Image">🖼️ Image</button>
      <button class="tab" data-type="Story">📖 Story</button>
      <button class="tab" data-type="Social">📱 Social</button>
    </div>

    <div class="grid">
      <div class="field">
        <label>Style</label>
        <select id="style">
          <option>Ultra Realistic</option><option>Cinematic</option><option>Anime</option><option>3D Animation</option><option>Documentary</option><option>Luxury</option><option>Minimal</option><option>Fantasy</option>
        </select>
      </div>
      <div class="field">
        <label>Tool / Platform</label>
        <select id="tool">
          <option>Veo</option><option>Sora</option><option>Runway</option><option>Kling</option><option>Midjourney</option><option>Flux</option><option>ChatGPT</option><option>Instagram</option><option>TikTok</option><option>YouTube</option>
        </select>
      </div>
      <div class="field">
        <label>Format</label>
        <select id="format"><option>10 seconds / 9:16</option><option>15 seconds / 9:16</option><option>30 seconds / 9:16</option><option>16:9 Landscape</option><option>1:1 Square</option><option>4:5 Portrait</option></select>
      </div>
      <div class="field">
        <label>Niche</label>
        <select id="niche"><option>General</option><option>Motivation</option><option>Business</option><option>Technology</option><option>Education</option><option>Fitness</option><option>Travel</option><option>Food</option><option>Fashion</option><option>Entertainment</option></select>
      </div>
      <div class="field full">
        <label>Your Idea</label>
        <textarea id="idea" placeholder="Example: A baby elephant helps a lost puppy cross a busy village road..."></textarea>
        <div class="hint">Be specific about the subject, action, location, mood or message.</div>
      </div>
    </div>

    <div class="actions">
      <button class="btn primary" id="generate">✨ Generate Prompt</button>
      <button class="btn secondary" id="clear">Clear</button>
    </div>

    <div class="result" id="result">
      <div class="resultTop"><h2 id="resultTitle">Your generated prompt</h2><button class="copy" id="copy">Copy</button></div>
      <div class="out" id="output"></div>
      <div class="chips" id="chips"></div>
    </div>
  </section>
  <div class="footer">AI Prompt Studio Pro • Built for fast creative workflows</div>
</div>

<script>
const $=id=>document.getElementById(id);
let type="Video";
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");type=b.dataset.type});

function generate(){
 const idea=$("idea").value.trim();
 if(!idea){$("idea").focus();$("idea").placeholder="Write your idea first…";return}
 const style=$("style").value,tool=$("tool").value,format=$("format").value,niche=$("niche").value;
 let prompt;
 if(type==="Video") prompt=`Create a ${style.toLowerCase()} ${format} video for ${tool}.\n\nSCENE: ${idea}\n\nDIRECTOR'S BRIEF:\n• Niche: ${niche}\n• Strong visual storytelling with a clear beginning, middle and payoff.\n• Natural realistic motion, believable physics and expressive subjects.\n• Cinematic composition, intentional camera movement, detailed environment and professional lighting.\n• Keep the main subject consistent from start to finish.\n• Add subtle atmospheric details and depth without distracting from the subject.\n• No text overlays, logos, watermarks or unwanted artifacts.\n\nCAMERA: Establishing shot → medium detail → dynamic close-up → satisfying final frame.\nAUDIO: Natural ambience and subtle cinematic sound design.\nOUTPUT: ${format}. High detail, polished, production-ready.`;
 else if(type==="Image") prompt=`Create a ${style.toLowerCase()} image using ${tool}.\n\nCONCEPT: ${idea}\n\nVISUAL DIRECTION:\n• Niche: ${niche}\n• Strong focal subject and clear visual hierarchy.\n• Detailed environment, realistic materials and natural lighting.\n• Professional composition, depth, texture and atmosphere.\n• Authentic expressions and believable proportions.\n• Clean background separation and visually memorable storytelling.\n• No text, watermark, logo, distorted anatomy or unwanted objects.\n\nFORMAT: ${format}. Premium editorial quality, highly detailed, polished and coherent.`;
 else if(type==="Story") prompt=`Write a compelling ${niche.toLowerCase()} story based on this idea:\n\n${idea}\n\nSTYLE: ${style}\nFORMAT: ${format}\n\nStructure it with a strong opening hook, escalating conflict, emotional or informative middle, and a satisfying ending. Use vivid but concise details, natural dialogue where useful, consistent characters and a memorable final line. Make it original and easy to adapt into short-form content.`;
 else prompt=`Create a high-retention ${niche.toLowerCase()} social post around:\n\n${idea}\n\nPLATFORM: ${tool}\nSTYLE: ${style}\nFORMAT: ${format}\n\nDeliver:\n1. 3 scroll-stopping hooks\n2. 3 strong titles\n3. 1 concise caption with a clear call-to-action\n4. 10 relevant hashtags\n5. One short thumbnail/cover text idea\n\nKeep the language natural, punchy, audience-focused and non-clickbait.`;
 $("resultTitle").textContent=`${type} prompt ready`;
 $("output").textContent=prompt;
 $("chips").innerHTML=[style,tool,format,niche].map(x=>`<span class="chip">${x}</span>`).join("");
 $("result").classList.add("show");
 $("result").scrollIntoView({behavior:"smooth",block:"nearest"});
}
$("generate").onclick=generate;
$("clear").onclick=()=>{$("idea").value="";$("result").classList.remove("show");$("idea").focus()};
$("copy").onclick=async()=>{try{await navigator.clipboard.writeText($("output").textContent);$("copy").textContent="Copied ✓";setTimeout(()=>$("copy").textContent="Copy",1400)}catch(e){alert("Copy failed — select the text manually.")}};
</script>
</body>
</html>`;

export default {
  async fetch(request) {
    return new Response(HTML, {
      headers: {"content-type":"text/html; charset=UTF-8"}
    });
  }
};

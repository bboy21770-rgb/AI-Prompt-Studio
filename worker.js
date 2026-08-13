const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Prompt Studio Pro</title>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #16004d, #3100b8, #16004d);
  color: #fff;
  min-height: 100vh;
}

.wrap {
  max-width: 760px;
  margin: auto;
  padding: 24px 16px 40px;
}

.badge {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 30px;
  background: #5b16ff;
  font-weight: 800;
  font-size: 14px;
}

h1 {
  font-size: 44px;
  line-height: 1.05;
  margin: 28px 0 12px;
}

h1 span {
  color: #d7b8ff;
}

.sub {
  font-size: 18px;
  line-height: 1.55;
  color: #ddd;
  margin-bottom: 24px;
}

.card {
  background: rgba(20, 0, 80, 0.75);
  border: 1px solid rgba(180, 140, 255, 0.35);
  border-radius: 24px;
  padding: 18px;
}

.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}

.tab {
  border: 1px solid #6228ff;
  background: transparent;
  color: #fff;
  border-radius: 18px;
  padding: 15px;
  font-size: 17px;
  font-weight: 800;
  cursor: pointer;
}

.tab.active {
  background: linear-gradient(135deg, #8d2cff, #4b16ff);
}

label {
  display: block;
  font-weight: 800;
  margin: 17px 0 8px;
}

select,
textarea {
  width: 100%;
  border: 1px solid #6730ff;
  background: #1b075c;
  color: #fff;
  border-radius: 14px;
  padding: 14px;
  font-size: 16px;
  outline: none;
}

textarea {
  min-height: 130px;
  resize: vertical;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 18px;
}

.action {
  border: 0;
  border-radius: 14px;
  padding: 15px;
  font-size: 17px;
  font-weight: 800;
  cursor: pointer;
}

#generate {
  background: linear-gradient(135deg, #a02cff, #5518ff);
  color: #fff;
}

#clear {
  background: #2a1768;
  color: #fff;
  border: 1px solid #7040ff;
}

.result {
  display: none;
  margin-top: 20px;
  background: #10033d;
  border: 1px solid #6630ff;
  border-radius: 18px;
  padding: 18px;
}

.result.show {
  display: block;
}

.result-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.result h2 {
  font-size: 20px;
  margin: 0;
}

.copy {
  background: #5d20ff;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 9px 13px;
  font-weight: 700;
  cursor: pointer;
}

.output {
  white-space: pre-wrap;
  line-height: 1.55;
  margin-top: 14px;
  color: #eee;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 15px;
}

.chip {
  padding: 7px 10px;
  border-radius: 20px;
  background: #28106f;
  color: #d9c8ff;
  font-size: 12px;
}

.footer {
  text-align: center;
  color: #bca9e8;
  margin-top: 22px;
  font-size: 13px;
}

@media (max-width: 520px) {
  h1 {
    font-size: 37px;
  }

  .wrap {
    padding: 18px 12px 30px;
  }
}
</style>
</head>

<body>

<div class="wrap">

  <div class="badge">
    ⚡ ALL-IN-ONE AI PROMPT STUDIO PRO
  </div>

  <h1>
    Make Prompts That <span>Stand Out</span>
  </h1>

  <div class="sub">
    Generate production-ready AI prompts, viral hooks, titles,
    captions and hashtags from one idea.
  </div>

  <div class="card">

    <div class="tabs">

      <button class="tab active" data-type="Video" type="button">
        🎬 Video
      </button>

      <button class="tab" data-type="Image" type="button">
        🖼️ Image
      </button>

      <button class="tab" data-type="Story" type="button">
        📖 Story
      </button>

      <button class="tab" data-type="Social" type="button">
        📱 Social
      </button>

    </div>

    <label for="style">Style</label>

    <select id="style">
      <option>Ultra Realistic</option>
      <option>Cinematic</option>
      <option>Anime</option>
      <option>3D Animation</option>
      <option>Documentary</option>
      <option>Luxury</option>
      <option>Dark</option>
      <option>Minimal</option>
    </select>

    <label for="tool">Tool / Platform</label>

    <select id="tool">
      <option>Veo</option>
      <option>Sora</option>
      <option>Runway</option>
      <option>Kling</option>
      <option>Midjourney</option>
      <option>ChatGPT</option>
      <option>Instagram</option>
      <option>TikTok</option>
      <option>YouTube</option>
    </select>

    <label for="format">Format</label>

    <select id="format">
      <option>10 seconds / 9:16</option>
      <option>15 seconds / 9:16</option>
      <option>30 seconds / 9:16</option>
      <option>16:9 landscape</option>
      <option>1:1 square</option>
      <option>Short-form</option>
      <option>Long-form</option>
    </select>

    <label for="niche">Niche</label>

    <select id="niche">
      <option>AI & Technology</option>
      <option>Motivation</option>
      <option>Business</option>
      <option>Education</option>
      <option>Fitness</option>
      <option>Travel</option>
      <option>Food</option>
      <option>Gaming</option>
      <option>Storytelling</option>
      <option>Animals</option>
      <option>Fashion</option>
      <option>Finance</option>
    </select>

    <label for="idea">Your Idea</label>

    <textarea
      id="idea"
      placeholder="Write your idea here..."
    ></textarea>

    <div class="actions">

      <button
        id="generate"
        class="action"
        type="button"
      >
        ✨ Generate Prompt
      </button>

      <button
        id="clear"
        class="action"
        type="button"
      >
        🗑️ Clear
      </button>

    </div>

    <div class="result" id="result">

      <div class="result-top">

        <h2 id="resultTitle">
          Prompt ready
        </h2>

        <button
          class="copy"
          id="copy"
          type="button"
        >
          Copy
        </button>

      </div>

      <div
        class="output"
        id="output"
      ></div>

      <div
        class="chips"
        id="chips"
      ></div>

    </div>

  </div>

  <div class="footer">
    AI Prompt Studio Pro • Built for fast creative workflows
  </div>

</div>

<script>
(function () {

  var type = "Video";

  function get(id) {
    return document.getElementById(id);
  }

  var tabs = document.querySelectorAll(".tab");

  tabs.forEach(function (button) {

    button.addEventListener("click", function () {

      tabs.forEach(function (item) {
        item.classList.remove("active");
      });

      button.classList.add("active");

      type = button.getAttribute("data-type");

    });

  });


  function generate() {

    var idea = get("idea").value.trim();

    if (!idea) {

      get("idea").focus();

      get("idea").placeholder =
        "Write your idea first...";

      return;
    }

    var style = get("style").value;
    var tool = get("tool").value;
    var format = get("format").value;
    var niche = get("niche").value;

    var prompt = "";


    if (type === "Video") {

      prompt =
        "Create a " +
        style.toLowerCase() +
        " " +
        format +
        " video for " +
        tool +
        ".\n\n" +

        "SCENE: " +
        idea +
        "\n\n" +

        "DIRECTOR'S BRIEF:\n" +

        "• Niche: " +
        niche +
        "\n" +

        "• Strong visual storytelling with a clear beginning, middle and payoff.\n" +

        "• Natural realistic motion, believable physics and expressive subjects.\n" +

        "• Cinematic composition, intentional camera movement, detailed environment and professional lighting.\n" +

        "• Keep the main subject consistent from start to finish.\n" +

        "• Add subtle atmospheric details and depth without distracting from the subject.\n" +

        "• No text overlays, logos, watermarks or unwanted artifacts.\n\n" +

        "CAMERA: Establishing shot -> medium detail -> dynamic close-up -> satisfying final frame.\n" +

        "AUDIO: Natural ambience and subtle cinematic sound design.\n" +

        "OUTPUT: " +
        format +
        ". High detail, polished, production-ready.";

    }


    else if (type === "Image") {

      prompt =
        "Create a " +
        style.toLowerCase() +
        " image using " +
        tool +
        ".\n\n" +

        "CONCEPT: " +
        idea +
        "\n\n" +

        "VISUAL DIRECTION:\n" +

        "• Niche: " +
        niche +
        "\n" +

        "• Strong focal subject and clear visual hierarchy.\n" +

        "• Detailed environment, realistic materials and natural lighting.\n" +

        "• Professional composition, depth, texture and atmosphere.\n" +

        "• Authentic expressions and believable proportions.\n" +

        "• Clean background separation and visually memorable storytelling.\n" +

        "• No text, watermark, logo, distorted anatomy or unwanted objects.\n\n" +

        "FORMAT: " +
        format +
        ". Premium editorial quality, highly detailed, polished and coherent.";

    }


    else if (type === "Story") {

      prompt =
        "Write a compelling " +
        niche.toLowerCase() +
        " story based on this idea:\n\n" +

        idea +
        "\n\n" +

        "STYLE: " +
        style +
        "\n" +

        "FORMAT: " +
        format +
        "\n\n" +

        "Structure it with a strong opening hook, escalating conflict, emotional or informative middle, and a satisfying ending. Use vivid but concise details, natural dialogue where useful, consistent characters and a memorable final line.";

    }


    else {

      prompt =
        "Create a high-retention " +
        niche.toLowerCase() +
        " social post around:\n\n" +

        idea +
        "\n\n" +

        "PLATFORM: " +
        tool +
        "\n" +

        "STYLE: " +
        style +
        "\n" +

        "FORMAT: " +
        format +
        "\n\n" +

        "Deliver:\n" +

        "1. 3 scroll-stopping hooks\n" +

        "2. 3 strong titles\n" +

        "3. 1 concise caption with a clear call-to-action\n" +

        "4. 10 relevant hashtags\n" +

        "5. One short thumbnail/cover text idea\n\n" +

        "Keep the language natural, punchy, audience-focused and non-clickbait.";

    }


    get("resultTitle").textContent =
      type + " prompt ready";

    get("output").textContent = prompt;

    get("chips").innerHTML = "";


    [style, tool, format, niche].forEach(
      function (value) {

        var chip =
          document.createElement("span");

        chip.className = "chip";

        chip.textContent = value;

        get("chips").appendChild(chip);

      }
    );


    get("result").classList.add("show");

  }


  function clearAll() {

    get("idea").value = "";

    get("idea").placeholder =
      "Write your idea here...";

    get("output").textContent = "";

    get("chips").innerHTML = "";

    get("result").classList.remove("show");

  }


  async function copyPrompt() {

    var text =
      get("output").textContent;

    if (!text) {
      return;
    }


    try {

      await navigator.clipboard.writeText(text);

      get("copy").textContent =
        "Copied!";

      setTimeout(function () {

        get("copy").textContent =
          "Copy";

      }, 1200);

    }

    catch (error) {

      var area =
        document.createElement("textarea");

      area.value = text;

      document.body.appendChild(area);

      area.select();

      document.execCommand("copy");

      document.body.removeChild(area);

      get("copy").textContent =
        "Copied!";

      setTimeout(function () {

        get("copy").textContent =
          "Copy";

      }, 1200);

    }

  }


  get("generate").addEventListener(
    "click",
    generate
  );

  get("clear").addEventListener(
    "click",
    clearAll
  );

  get("copy").addEventListener(
    "click",
    copyPrompt
  );

})();
</script>

</body>
</html>`;


export default {
  async fetch(request) {

    return new Response(HTML, {

      headers: {
        "content-type":
          "text/html; charset=UTF-8",

        "cache-control":
          "no-store"
      }

    });

  }
};

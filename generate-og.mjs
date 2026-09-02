import puppeteer from "puppeteer";
import path from "path";

async function generateOgImage() {
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      background: #faf7ef;
      font-family: 'Cormorant Garamond', Georgia, serif;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    
    .bg-glow-1 {
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      top: -120px;
      left: -120px;
      background: radial-gradient(circle, rgba(235, 155, 30, 0.16) 0%, transparent 70%);
    }
    .bg-glow-2 {
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      bottom: -120px;
      right: -120px;
      background: radial-gradient(circle, rgba(185, 40, 55, 0.13) 0%, transparent 70%);
    }

    .card-border {
      position: absolute;
      inset: 20px;
      border: 1px solid #d4af37;
      pointer-events: none;
    }
    .card-inner-border {
      position: absolute;
      inset: 26px;
      border: 0.5px solid rgba(212, 175, 55, 0.4);
      pointer-events: none;
    }

    .container {
      width: 100%;
      height: 100%;
      padding: 30px 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
    }

    .illustration-side {
      width: 460px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .couple-img {
      max-height: 520px;
      max-width: 460px;
      object-fit: contain;
      filter: drop-shadow(0 20px 30px rgba(90, 30, 20, 0.15));
    }

    .content-side {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px 20px;
    }

    .header-tag {
      font-family: 'Josefin Sans', sans-serif;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 0.4em;
      color: #9d3840;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .rule {
      width: 80px;
      height: 1px;
      background: linear-gradient(to right, #d4af37, #9d3840, #0d7870);
      margin-bottom: 22px;
    }

    .couple-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .couple-names {
      font-family: 'Alex Brush', cursive;
      font-size: 46px;
      line-height: 1.15;
      color: #58141c;
      white-space: nowrap;
    }

    .ampersand {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 28px;
      color: #b57a16;
      margin: 0 10px;
    }

    .parents-line {
      font-family: 'Josefin Sans', sans-serif;
      text-transform: uppercase;
      font-size: 9px;
      letter-spacing: 0.2em;
      color: #6a5749;
      margin-top: 4px;
    }

    .couples-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 8px 0;
    }

    .couples-divider .line {
      width: 40px;
      height: 1px;
      background: rgba(212, 175, 55, 0.5);
    }

    .couples-divider .word {
      font-family: 'Josefin Sans', sans-serif;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 0.3em;
      color: #b57a16;
    }

    .event-pill {
      margin-top: 14px;
      padding: 6px 20px;
      border-radius: 30px;
      background: rgba(212, 175, 55, 0.12);
      border: 1px solid rgba(212, 175, 55, 0.45);
      font-family: 'Josefin Sans', sans-serif;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.28em;
      color: #5c2025;
      font-weight: 600;
    }

    .date-venue {
      margin-top: 10px;
      font-size: 20px;
      letter-spacing: 0.06em;
      color: #2b1f1a;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .dot {
      color: #d4af37;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <div class="bg-glow-1"></div>
  <div class="bg-glow-2"></div>
  <div class="card-border"></div>
  <div class="card-inner-border"></div>

  <div class="container">
    <div class="illustration-side">
      <img class="couple-img" src="https://media.invitestory.in/marigold-bhavan/src/assets/couple.png" alt="Couples Illustration">
    </div>

    <div class="content-side">
      <div class="header-tag">Engagement Ceremony</div>
      <div class="rule"></div>

      <!-- Couple 1 -->
      <div class="couple-block">
        <div class="couple-names">
          Ganeshkumar <span class="ampersand">&amp;</span> Amirtha Varsini
        </div>
        <div class="parents-line">S/o Thiru Sivakumar &amp; Neelavathi &nbsp;•&nbsp; D/o Thiru Rameshbabu &amp; Shanthe</div>
      </div>

      <!-- Divider -->
      <div class="couples-divider">
        <div class="line"></div>
        <div class="word">and</div>
        <div class="line"></div>
      </div>

      <!-- Couple 2 -->
      <div class="couple-block">
        <div class="couple-names">
          Rishikesan <span class="ampersand">&amp;</span> Karthika Devi
        </div>
        <div class="parents-line">S/o Thiru Rameshbabu &amp; Shanthe &nbsp;•&nbsp; D/o Thiru Sivakumar &amp; Neelavathi</div>
      </div>

      <!-- Event details -->
      <div class="event-pill">Save the Date</div>
      <div class="date-venue">
        <span>Thursday, 17th Sept 2026</span>
        <span class="dot">•</span>
        <span>Madurai</span>
      </div>
    </div>
  </div>
</body>
</html>
`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });

  const publicDir = path.resolve("public");
  await page.screenshot({ path: path.join(publicDir, "og-image.png"), type: "png" });
  await page.screenshot({ path: path.join(publicDir, "og-image.jpg"), type: "jpeg", quality: 95 });

  console.log("Successfully regenerated og-image.png and og-image.jpg!");
  await browser.close();
}

generateOgImage().catch(console.error);

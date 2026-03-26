const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Find and remove the first block
const start1 = css.indexOf('/* ✅ MOBILE FIX ONLY (no design change) */');
if (start1 !== -1) {
    const end1 = css.indexOf('}', css.indexOf('}', css.indexOf(' driver-content p{') !== -1 ? css.indexOf(' driver-content p{') : start1));
    // It's safer to just split by lines or use a regex
}

// better approach: use index
const lines = css.split(/\r?\n/);
let inBlock = false;
let blockType = 0;
let newLines = [];
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('/* ✅ MOBILE FIX ONLY (no design change) */')) {
        inBlock = true;
        blockType = 1;
    }
    if (line.includes('/* Responsive */') && lines[i+1] && lines[i+1].includes('@media(max-width:768px)')) {
        inBlock = true;
        blockType = 2;
    }
    
    if (inBlock) {
        if (line.includes('{')) braceCount += (line.match(/{/g) || []).length;
        if (line.includes('}')) braceCount -= (line.match(/}/g) || []).length;
        
        if (braceCount === 0 && line.includes('}')) {
            inBlock = false;
            // skip adding this closing brace
            continue;
        }
    } else {
        newLines.push(line);
    }
}

let resultCss = newLines.join('\n');

const mobileCSS = `
/* ✅ MOBILE RESPONSIVE FIXES */
@media (max-width: 768px) {
    /* HERO SECTIONS */
    .hero, .hero1, .hero2, .hero3 {
        height: auto;
        padding: 60px 20px;
        background-attachment: scroll;
    }
    .hero h1, .hero1 h1, .hero2 h1, .hero3 h1 { font-size: 28px; }
    .hero p { font-size: 16px; padding: 0 15px; }

    /* NAVBAR */
    nav { padding: 15px 20px; }
    ul {
        display: flex; flex-direction: column; position: absolute;
        right: 0; top: 100%; width: 100%; background: #0D1B4C;
        padding: 0; max-height: 0; overflow: hidden; gap: 20px;
        z-index: -1; box-shadow: 0 10px 10px rgba(0,0,0,0.1);
        transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
    }
    ul.show { max-height: 400px; padding: 20px 0; z-index: 1000; }
    .menu-icon { display: block; font-size: 28px; cursor: pointer; }

    /* ABOUT */
    .about { padding: 40px 20px; }
    .about h2 { font-size: 28px; }
    .about p { font-size: 16px; }

    /* SERVICES */
    .services { padding: 40px 20px; }
    .card, .cards { flex-direction: column; align-items: center; gap: 30px; margin: 30px 0; }
    .service-box { width: 100%; padding: 30px 20px; }

    /* PRICING */
    .pricing { padding: 40px 20px; }
    .pricing-container { flex-direction: column; align-items: center; }
    .pricing-card { width: 100%; max-width: 320px; margin-bottom: 20px; }

    /* TRANSPORT / VEHICLES */
    .transport { height: auto; padding: 60px 20px; margin-bottom: 20px; }
    .overlay { position: relative; height: auto; width: 100%; background: rgba(247, 245, 245, 0.9); padding: 30px 15px; }
    .transport-grid { grid-template-columns: 1fr; gap: 30px; }
    .item { margin-left: 0; align-items: center; flex-direction: column; text-align: center; }
    .item i { font-size: 40px; }

    /* BOOKING / CITIES */
    .booking { padding: 40px 20px; }
    .Cities { height: auto; padding: 40px 20px; margin-bottom: 40px; max-width: 100%; }
    .cards1, .cards2 { flex-direction: column; align-items: center; height: auto; gap: 30px; margin: 20px 0; padding: 0; }
    .cities-box { width: 100%; max-width: 250px; height: auto; margin-bottom: 20px;}

    /* BOOKING FORM & REGULAR FORMS */
    .booking1, .booking2 { height: auto; padding: 40px 20px; }
    .booking-form { max-width: 100%; margin: 0 auto; padding: 20px; width: 100%; box-sizing: border-box; }
    .row { flex-direction: column; gap: 15px; }
    .row input { width: 100%; box-sizing: border-box;}
    .booking-form .row { flex-direction: column; }
    .booking-form input, .booking-form textarea { width: 100%; box-sizing: border-box; }
    
    .form2 { width: 100%; box-sizing: border-box;}
    .row1 { flex-direction: column; gap: 15px; }

    /* CONTACT INFO */
    .contact { padding: 40px 20px; }
    .info1 { flex-direction: column; gap: 30px; margin: 30px 0; }
    .description { width: 100%; }

    /* REVIEWS */
    .reviews { padding: 40px 20px; }
    .review-container { flex-direction: column; align-items: center; }
    .review-card { width: 100%; max-width: 320px; margin-bottom: 20px; }

    /* TABLE */
    section { padding: 40px 20px; }
    table { width: 100%; font-size: 14px; }
    th, td { padding: 10px; }

    /* FOOTER */
    .footer { padding: 40px 20px 20px; }
    .footer-container { grid-template-columns: 1fr; gap: 30px; text-align: center; }
    .footer-bottom { flex-direction: column; align-items: center; gap: 15px; text-align: center; }
    .footer-links { margin-top: 10px; display: flex; flex-direction: column; gap: 10px; }
    .footer-links a { margin-left: 0; }

    /* DRIVER SECTION */
    .driver-join-section { height: auto; padding: 60px 20px; }
    .driver-content { padding: 20px; }
    .driver-content h1 { font-size: 32px; }
    .driver-content p { font-size: 16px; margin-bottom: 20px;}
}
`;

resultCss = resultCss.trim() + '\n\n' + mobileCSS + '\n';
fs.writeFileSync(cssPath, resultCss, 'utf8');
console.log('Successfully updated style.css');

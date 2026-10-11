/* ==========================================================================
   DEFAULT SACRED TEXT DATA (Can be customized via the web UI)
   ========================================================================== */
const DEFAULT_AARTIS = {
    ganesh: {
        id: "ganesh",
        title: "जय गणेश जय गणेश देवा",
        deity: "प्रथम पूज्य श्री गणेश जी की आरती",
        content: `जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

एक दंत दयावंत, चार भुजा धारी।
माथे पर तिलक सोहे, मूसे की सवारी॥
पान चढ़े फल चढ़े, और चढ़े मेवा।
लड्डुअन का भोग लगे, संत करें सेवा॥
जय गणेश, जय गणेश, जय गणेश देवा...

अंधे को आंख देत, कोढ़िन को काया।
बांझन को पुत्र देत, निर्धन को माया॥
'सूर' श्याम शरण आए, सफल कीजे सेवा।
माता जाकी पार्वती, पिता महादेवा॥
जय गणेश, जय गणेश, जय गणेश देवा...`
    },
    hanuman: {
        id: "hanuman",
        title: "आरती कीजै हनुमान लला की",
        deity: "संकटमोचन श्री हनुमान जी की आरती",
        content: `आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥

जाके बल से गिरिवर कांपै।
रोग दोष जाके निकट न झांपै॥
अंजनि पुत्र महा बलदाई।
संतन के प्रभु सदा सहाई॥
आरती कीजै हनुमान लला की...

दे बीरा रघुनाथ पठाए।
लंका जारि सिया सुधि लाए॥
लंका सो कोट समुद्र सी खाई।
जात पवनसुत बार न लाई॥
आरती कीजै हनुमान लला की...

लंका जारि असुर संहारे।
सियारामजी के काज संवारे॥
लक्ष्मण मूर्छित पड़े सकारे।
आनि संजीवन प्रान उबारे॥
आरती कीजै हनुमान लला की...

पैठि पताल तोरि जम-कारे।
अहिरावण की भुजा उखारे॥
बाएं भुजा असुर दल मारे।
दाहिने भुजा संतजन तारे॥
आरती कीजै हनुमान लला की...

सुर नर मुनि जन आरती उतरैं।
जय जय जय हनुमान उचारैं॥
कंचन थार कपूर लौ छाई।
आरति करत अंजना माई॥

जो हनुमानजी की आरति गावै।
बसि बैकुंठ परम पद पावै॥
आरती कीजै हनुमान लला की...`
    },
    shiv: {
        id: "shiv",
        title: "जय शिव ओंकारा",
        deity: "देवाधिदेव महादेव शिव जी की आरती",
        content: `जय शिव ओंकारा, ॐ जय शिव ओंकारा।
ब्रह्मा, विष्णु, सदाशिव, अर्द्धांगी धारा॥
ॐ जय शिव ओंकारा...

एकानन चतुरानन पंचानन राजे।
हंसासन गरुड़ासन वृषवाहन साजे॥
ॐ जय शिव ओंकारा...

दो भुज चारु चतुर्भुज दशभुज अति सोहे।
त्रिगुण रूप निरखते त्रिभुवन जन मोहे॥
ॐ जय शिव ओंकारा...

अक्षमाला वनमाला मुण्डमालाधारी।
चंदन मृगमद सोहै, भाले शशिधारी॥
ॐ जय शिव ओंकारा...

श्वेताम्बर पीताम्बर बाघम्बर अंगे।
सनकादिक गरुड़ादिक भूतादिक संगे॥
ॐ जय शिव ओंकारा...

त्रिगुणस्वामी जी की आरति जो कोई नर गावे।
कहत शिवानंद स्वामी, मनवांछित फल पावे॥
ॐ जय शिव ओंकारा...`
    },
    lakshmi: {
        id: "lakshmi",
        title: "ॐ जय लक्ष्मी माता",
        deity: "महालक्ष्मी माता की आरती",
        content: `ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुमको निसदिन सेवत, हर विष्णु विधाता॥
ॐ जय लक्ष्मी माता...

उमा, रमा, ब्रह्माणी, तुम ही जग-माता।
सूर्य-चन्द्रमा ध्यावत, नारद ऋषि गाता॥
ॐ जय लक्ष्मी माता...

दुर्गा रूप निरंजनि, सुख सम्पति दाता।
जो कोई तुमको ध्यावत, ऋद्धि-सिद्धि धन पाता॥
ॐ जय लक्ष्मी माता...

जिस घर में तुम रहतीं, सब सद्गुण आता।
सब संभव हो जाता, मन नहीं घबराता॥
ॐ जय लक्ष्मी माता...

तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।
खान-पान का वैभव, सब तुमसे आता॥
ॐ जय लक्ष्मी माता...

शुभ-गुण मंदिर सुंदर, क्षीरोदधि-जाता।
रत्न चतुर्दश तुम बिन, कोई नहीं पाता॥
ॐ जय लक्ष्मी माता...

महालक्ष्मीजी की आरती, जो कोई नर गावे।
उर आनन्द समावे, पाप उतर जावे॥
ॐ जय लक्ष्मी माता...`
    }
};

/* ==========================================================================
   STATE VARIABLES
   ========================================================================== */
let activeId = "ganesh";
let currentFontSizeRem = 1.35;
let autoScrollInterval = null;
let rhythmInterval = null;
let audioCtx = null;

/* LocalStorage Manager */
function getSavedAartis() {
    const data = localStorage.getItem("mandir_custom_aartis");
    return data ? JSON.parse(data) : JSON.parse(JSON.stringify(DEFAULT_AARTIS));
}

function saveAartis(data) {
    localStorage.setItem("mandir_custom_aartis", JSON.stringify(data));
}

/* ==========================================================================
   WEB AUDIO API: SACRED BRASS TEMPLE BELL (घंटी)
   ========================================================================== */
function playTempleBell() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    // Fundamental & metallic brass overtone harmonic ratios
    const harmonics = [1200, 2410, 3620, 5140];
    const gains = [0.4, 0.25, 0.15, 0.08];

    harmonics.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        gainNode.gain.setValueAtTime(gains[idx], now);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 2.2);
    });
}

/* ==========================================================================
   DOM ELEMENTS & RENDER
   ========================================================================== */
const titleEl = document.getElementById("aartiTitle");
const deityEl = document.getElementById("aartiDeity");
const viewerEl = document.getElementById("aartiViewer");
const editorContainer = document.getElementById("aartiEditorContainer");
const editorInput = document.getElementById("aartiEditorInput");

function renderActiveAarti() {
    const aartis = getSavedAartis();
    const current = aartis[activeId] || DEFAULT_AARTIS[activeId];

    titleEl.textContent = current.title;
    deityEl.textContent = current.deity;
    viewerEl.textContent = current.content;
    editorInput.value = current.content;

    // Update Navigation Active State
    document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.id === activeId);
    });

    // Keep viewing mode visible
    viewerEl.classList.remove("hidden");
    editorContainer.classList.add("hidden");
}

/* ==========================================================================
   INTERACTIVE LOGIC & EVENT LISTENERS
   ========================================================================== */
// Switch Tabs
document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        activeId = tab.dataset.id;
        renderActiveAarti();
    });
});

// Sound Bell
document.getElementById("bellBtn").addEventListener("click", playTempleBell);

// Rhythm Bell (Loop)
const rhythmBtn = document.getElementById("rhythmBtn");
rhythmBtn.addEventListener("click", () => {
    if (rhythmInterval) {
        clearInterval(rhythmInterval);
        rhythmInterval = null;
        rhythmBtn.classList.remove("active");
    } else {
        playTempleBell();
        rhythmInterval = setInterval(playTempleBell, 2200);
        rhythmBtn.classList.add("active");
    }
});

// Font Scaling
document.getElementById("zoomInBtn").addEventListener("click", () => {
    if (currentFontSizeRem < 2.2) {
        currentFontSizeRem += 0.15;
        viewerEl.style.fontSize = `${currentFontSizeRem}rem`;
    }
});

document.getElementById("zoomOutBtn").addEventListener("click", () => {
    if (currentFontSizeRem > 0.95) {
        currentFontSizeRem -= 0.15;
        viewerEl.style.fontSize = `${currentFontSizeRem}rem`;
    }
});

// Hands-free Auto-Scroll
const scrollToggleBtn = document.getElementById("scrollToggleBtn");
const scrollSpeedSelect = document.getElementById("scrollSpeed");

scrollToggleBtn.addEventListener("click", () => {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
        scrollToggleBtn.classList.remove("active");
        scrollToggleBtn.textContent = "▶ स्वतः स्क्रॉल (Auto-Scroll)";
    } else {
        scrollToggleBtn.classList.add("active");
        scrollToggleBtn.textContent = "⏸ रोकें (Pause Scroll)";

        autoScrollInterval = setInterval(() => {
            const speed = parseInt(scrollSpeedSelect.value, 10);
            window.scrollBy({ top: speed, behavior: "smooth" });

            // Stop at bottom
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
                scrollToggleBtn.classList.remove("active");
                scrollToggleBtn.textContent = "▶ स्वतः स्क्रॉल (Auto-Scroll)";
            }
        }, 45);
    }
});

// Personalization / Editor Controls
const editToggleBtn = document.getElementById("editToggleBtn");
editToggleBtn.addEventListener("click", () => {
    viewerEl.classList.add("hidden");
    editorContainer.classList.remove("hidden");
});

document.getElementById("cancelEditBtn").addEventListener("click", () => {
    editorContainer.classList.add("hidden");
    viewerEl.classList.remove("hidden");
});

document.getElementById("saveEditBtn").addEventListener("click", () => {
    const aartis = getSavedAartis();
    aartis[activeId].content = editorInput.value.trim();
    saveAartis(aartis);
    renderActiveAarti();
});

document.getElementById("resetAartiBtn").addEventListener("click", () => {
    if (confirm("क्या आप इस आरती को मूल पाठ में वापस बदलना चाहते हैं?")) {
        const aartis = getSavedAartis();
        aartis[activeId] = JSON.parse(JSON.stringify(DEFAULT_AARTIS[activeId]));
        saveAartis(aartis);
        renderActiveAarti();
    }
});

// Initial boot
renderActiveAarti();

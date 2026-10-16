/* ==========================================================================
   DEFAULT SACRED TEXT DATA
   ========================================================================== */

/* ==========================================================================
   STATE VARIABLES
   ========================================================================== */
let activeId = "ganesh";
let currentFontSizeRem = 1.35;
let autoScrollInterval = null;
let rhythmInterval = null;
let audioCtx = null;

/* LocalStorage Manager: Safely merges defaults with saved changes */
function getSavedAartis() {
    const data = localStorage.getItem("mandir_custom_aartis");
    if (!data) return JSON.parse(JSON.stringify(DEFAULT_AARTIS));
    try {
        const parsed = JSON.parse(data);
        return Object.assign({}, DEFAULT_AARTIS, parsed);
    } catch (e) {
        return JSON.parse(JSON.stringify(DEFAULT_AARTIS));
    }
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

    if (!current) return;

    titleEl.textContent = current.title;
    deityEl.textContent = current.deity;
    viewerEl.textContent = current.content;
    editorInput.value = current.content;

    // Update Navigation Active State
    document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.id === activeId);
    });

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

// Font Scaling (Fixed space syntax bug)
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

// Auto-Scroll
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

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
                scrollToggleBtn.classList.remove("active");
                scrollToggleBtn.textContent = "▶ स्वतः स्क्रॉल (Auto-Scroll)";
            }
        }, 45);
    }
});

// Editor Controls
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

// Initial Render
renderActiveAarti();

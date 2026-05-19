// ─────────────────────────────────────────
// INICIALIZAÇÃO DO VLIBRAS
// ─────────────────────────────────────────

new window.VLibras.Widget("https://vlibras.gov.br/app");

// ── Estado ──
let recognition = null;
let isRecording = false;
let avatarPronto = false;

// ─────────────────────────────────────────
// UTILITÁRIOS DE UI
// ─────────────────────────────────────────

function setStatus(msg, type = "") {
  document.getElementById("status-text").textContent = msg;
  document.getElementById("status-dot").className =
    "status-dot" + (type ? " " + type : "");
}

function setAvatarStatus(label, dotColor = "var(--ink3)") {
  document.getElementById("avatar-status").innerHTML =
    `<span class="status-dot" style="width:6px;height:6px;background:${dotColor}"></span> ${label}`;
}

function updateCharCount() {
  const val = document.getElementById("input-text").value;
  document.getElementById("char-count").textContent = val.length;
  document.getElementById("btn-translate").disabled = val.trim().length === 0;
}

// ─────────────────────────────────────────
// POSICIONA O PLAYER DO VLIBRAS SOBRE O PAINEL DIREITO
//
// Em vez de mover o DOM (o que quebra o WebGL),
// calculamos a posição do #avatar-container e
// reposicionamos o player do VLibras exatamente sobre ele.
// ─────────────────────────────────────────

function posicionarPlayerNoPainel() {
  const container = document.getElementById("avatar-container");
  const playerWrapper = document.querySelector(".vw-plugin-top-wrapper");
  const loadingState = document.getElementById("loading-state");

  if (!container || !playerWrapper) return;

  // Pega as coordenadas exatas do painel na tela
  const rect = container.getBoundingClientRect();

  // Posiciona o player do VLibras exatamente sobre o painel
  playerWrapper.style.cssText = `
    position: fixed !important;
    top:    ${rect.top}px !important;
    left:   ${rect.left}px !important;
    width:  ${rect.width}px !important;
    height: ${rect.height}px !important;
    z-index: 50 !important;
    pointer-events: all !important;
  `;

  // Esconde o loading
  if (loadingState) loadingState.style.display = "none";

  console.log("[VLibras] Player posicionado no painel:", rect);
}

// Reposiciona o player se a janela for redimensionada
window.addEventListener("resize", () => {
  if (avatarPronto) posicionarPlayerNoPainel();
});

// ─────────────────────────────────────────
// ABRE O WIDGET E CARREGA O PLAYER NA INICIALIZAÇÃO
//
// Ao carregar a página, clicamos programaticamente no botão
// do VLibras para iniciar o carregamento do Player Unity.
// O botão está escondido via CSS mas ainda é funcional.
// ─────────────────────────────────────────

function inicializarAvatar() {
  setStatus("Carregando avatar...", "active");

  // Clica no botão oculto do VLibras para abrir o player
  const accessBtn = document.querySelector("[vw-access-button]");
  if (accessBtn) {
    accessBtn.click();
    console.log("[VLibras] Widget acionado na inicialização");
  }

  // Tenta mover o player para o painel a cada 500ms até conseguir
  // (o VLibras demora alguns segundos para injetar o player no DOM)
  const tentarMover = setInterval(() => {
    const playerWrapper = document.querySelector(".vw-plugin-top-wrapper");

    // Verifica se o player já tem conteúdo (canvas ou iframe do Unity)
    if (playerWrapper && playerWrapper.children.length > 0) {
      clearInterval(tentarMover);
      posicionarPlayerNoPainel();
      avatarPronto = true;
      setStatus("Pronto para traduzir", "");
      setAvatarStatus("Pronto", "var(--accent2)");
      console.log("[VLibras] Avatar pronto!");
    }
  }, 500);
}

// ─────────────────────────────────────────
// SELECIONA O TEXTO PARA O VLIBRAS CAPTURAR
// ─────────────────────────────────────────

function selecionarTexto(el) {
  try {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    console.log("[VLibras] Texto selecionado:", sel.toString());
    return true;
  } catch (e) {
    console.error("[VLibras] Erro ao selecionar texto:", e);
    return false;
  }
}

// ─────────────────────────────────────────
// DISPARA OS EVENTOS QUE O VLIBRAS ESCUTA
// ─────────────────────────────────────────

function dispararEventos(el) {
  ["mouseup", "pointerup"].forEach((tipo) => {
    [el, document.body, document].forEach((alvo) => {
      alvo.dispatchEvent(
        new MouseEvent(tipo, {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      );
    });
  });
  console.log("[VLibras] Eventos mouseup/pointerup disparados");
}

// ─────────────────────────────────────────
// TRADUÇÃO PRINCIPAL
// ─────────────────────────────────────────
function handleTranslate() {
  const text = document.getElementById("input-text").value.trim();
  if (!text) return;
  window.plugin.translate(text);
}
 

window.addEventListener("load", () => {
  inicializarAvatar();
});

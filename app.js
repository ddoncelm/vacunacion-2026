// ===================================================
// app.js · VacunaApp SAS
// ===================================================

// Para cambiar la contraseña edita PASSWORD y haz push a GitHub
const PASSWORD = "SAS2026";

let currentAgeMode = "meses";

// ===== LOGIN =====
const loginScreen   = document.getElementById("loginScreen");
const appScreen     = document.getElementById("appScreen");
const passwordInput = document.getElementById("passwordInput");
const loginBtn      = document.getElementById("loginBtn");
const loginError    = document.getElementById("loginError");
const togglePwd     = document.getElementById("togglePwd");

function doLogin() {
  if (passwordInput.value.trim() === PASSWORD) {
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
    loginError.classList.add("hidden");
    initApp();
  } else {
    loginError.classList.remove("hidden");
    passwordInput.classList.add("shake");
    setTimeout(() => passwordInput.classList.remove("shake"), 500);
    passwordInput.value = "";
    passwordInput.focus();
  }
}
loginBtn.addEventListener("click", doLogin);
passwordInput.addEventListener("keydown", e => { if (e.key === "Enter") doLogin(); });
togglePwd.addEventListener("click", () => {
  const t = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = t;
  togglePwd.textContent = t === "password" ? "👁" : "🙈";
});
document.getElementById("logoutBtn").addEventListener("click", () => {
  appScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  passwordInput.value = "";
});

// ===== INIT =====
function initApp() {
  initTabs();
  initAgeTab();
  initVaccineTab();
  initRiskTab();
  initUpdateTab();
}

// ===================================================
// TABS
// ===================================================
function initTabs() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });
}

// ===================================================
// TAB: POR EDAD
// ===================================================
function initAgeTab() {
  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentAgeMode = btn.dataset.type;
      document.getElementById("mesesControl").classList.toggle("hidden", currentAgeMode !== "meses");
      document.getElementById("aniosControl").classList.toggle("hidden", currentAgeMode !== "anios");
      renderEdadResults();
    });
  });

  document.getElementById("mesesSlider").addEventListener("input", function () {
    document.getElementById("mesesValue").textContent = this.value + " meses";
    renderEdadResults();
  });
  document.getElementById("aniosSlider").addEventListener("input", function () {
    document.getElementById("aniosValue").textContent = this.value + " años";
    renderEdadResults();
  });

  document.querySelectorAll(".qa-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".qa-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      if (btn.dataset.m !== undefined) {
        currentAgeMode = "meses";
        document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
        document.querySelector("[data-type='meses']").classList.add("active");
        document.getElementById("mesesControl").classList.remove("hidden");
        document.getElementById("aniosControl").classList.add("hidden");
        const m = parseInt(btn.dataset.m);
        document.getElementById("mesesSlider").value = m;
        document.getElementById("mesesValue").textContent = m === 0 ? "0 meses (RN)" : m + " meses";
      } else {
        currentAgeMode = "anios";
        document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
        document.querySelector("[data-type='anios']").classList.add("active");
        document.getElementById("mesesControl").classList.add("hidden");
        document.getElementById("aniosControl").classList.remove("hidden");
        const y = parseInt(btn.dataset.y);
        document.getElementById("aniosSlider").value = y;
        document.getElementById("aniosValue").textContent = y + " años";
      }
      renderEdadResults();
    });
  });
}

function renderEdadResults() {
  const container = document.getElementById("edadResults");
  const meses = currentAgeMode === "meses" ? parseInt(document.getElementById("mesesSlider").value) : null;
  const anios = currentAgeMode === "anios" ? parseInt(document.getElementById("aniosSlider").value) : null;

  const matches = CALENDARIO_POR_EDAD.filter(entry => {
    if (meses !== null) {
      if (entry.edadMin_m !== undefined && entry.edadMax_m !== undefined && meses >= entry.edadMin_m && meses <= entry.edadMax_m) return true;
      if (entry.edadMin_m !== undefined && entry.edadMax_m === undefined && meses >= entry.edadMin_m) return true;
      const mAsY = meses / 12;
      if (entry.edadMin_y !== undefined && entry.edadMax_y !== undefined && mAsY >= entry.edadMin_y && mAsY <= entry.edadMax_y) return true;
    }
    if (anios !== null) {
      if (entry.edadMin_y !== undefined && entry.edadMax_y !== undefined && anios >= entry.edadMin_y && anios <= entry.edadMax_y) return true;
      if (entry.edadMin_y !== undefined && entry.edadMax_y === undefined && anios >= entry.edadMin_y) return true;
      const yAsM = anios * 12;
      if (entry.edadMin_m !== undefined && entry.edadMax_m !== undefined && yAsM >= entry.edadMin_m && yAsM <= entry.edadMax_m) return true;
    }
    return false;
  });

  if (!matches.length) {
    const lbl = meses !== null ? (meses === 0 ? "recién nacido" : `${meses} meses`) : `${anios} años`;
    container.innerHTML = `
      <div class="results-empty">
        <div class="empty-icon">✅</div>
        <p>No hay vacunas sistemáticas programadas para <strong>${lbl}</strong>.</p>
        <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--gris-muted)">Revisa el historial y vacunas de rescate en cada contacto asistencial.</p>
      </div>`;
    return;
  }

  const ageLabel = meses !== null ? (meses === 0 ? "Recién nacido (0 meses)" : `${meses} meses`) : `${anios} años`;
  let html = `<h3 style="font-family:var(--font-display);color:var(--verde-dark);margin-bottom:1rem;font-size:1.1rem;">
    📋 Vacunas indicadas para: <span style="color:var(--verde)">${ageLabel}</span>
  </h3><div class="vaccine-cards-grid">`;

  matches.forEach(entry => {
    (entry.vacunas || []).forEach(v => {
      const vac = VACUNAS[v.sigla];
      if (!vac) return;
      const isRescate    = v.tipo === "rescate";
      const isEstacional = v.tipo === "estacional";
      html += `
        <div class="vaccine-card ${isRescate ? "rescate" : ""}" onclick="openVaccineModal('${v.sigla}')">
          <div class="vc-header">
            <div class="vc-name">${vac.nombre}</div>
            <div class="vc-badge ${isRescate ? "rescate" : ""}">
              ${isRescate ? "🔄 Rescate" : isEstacional ? "📅 Estacional" : "✅ Sistemática"}
            </div>
          </div>
          <div class="vc-meta"><strong>Comercial:</strong> ${vac.comercial}</div>
          <div class="vc-meta"><strong>Contexto:</strong> ${v.nota}</div>
          <div class="vc-tags">
            <span class="vc-tag via-${vac.via}">💉 ${vac.viaLabel}</span>
            <span class="vc-tag">📍 ${vac.zona}</span>
          </div>
          <div class="vc-expand">Ver ficha completa →</div>
        </div>`;
    });
  });
  container.innerHTML = html + "</div>";
}

// ===================================================
// TAB: POR VACUNA
// ===================================================
function initVaccineTab() {
  const grid = document.getElementById("vaccineGrid");
  grid.innerHTML = "";
  Object.entries(VACUNAS).forEach(([key, vac]) => {
    const div = document.createElement("div");
    div.className = "vg-item";
    div.innerHTML = `<div class="vg-sigla">${vac.sigla}</div><div class="vg-name">${vac.nombre}</div>`;
    div.addEventListener("click", () => {
      document.querySelectorAll(".vg-item").forEach(el => el.classList.remove("selected"));
      div.classList.add("selected");
      renderVaccineDetail(key);
    });
    grid.appendChild(div);
  });
  document.getElementById("vaccineDetail").classList.add("hidden");
}

function renderVaccineDetail(key) {
  const vac    = VACUNAS[key];
  const detail = document.getElementById("vaccineDetail");
  detail.innerHTML = `
    <div class="vd-header">
      <div>
        <div class="vd-title">${vac.nombre}</div>
        <div class="vd-subtitle">${vac.nombreCompleto}</div>
      </div>
    </div>
    <div class="vd-grid">
      <div class="vd-item"><div class="vd-item-label">🏷️ Comercial (SSPA)</div><div class="vd-item-value">${vac.comercial}</div></div>
      <div class="vd-item"><div class="vd-item-label">💉 Vía de administración</div><div class="vd-item-value">${vac.viaLabel}</div></div>
      <div class="vd-item"><div class="vd-item-label">📍 Zona de administración</div><div class="vd-item-value">${vac.zona}</div></div>
      <div class="vd-item"><div class="vd-item-label">📅 Momentos clave</div><div class="vd-item-value">${vac.momentos}</div></div>
    </div>
    <div class="vd-schedule">
      <h4>📋 Calendario y posología</h4>
      <ul>${vac.calendario.map(c => `<li><strong>${c.edad}:</strong> ${c.nota}</li>`).join("")}</ul>
      <br>
      <strong style="font-size:0.8rem;color:var(--verde-dark);">Posología:</strong>
      <ul style="margin-top:0.3rem">${vac.posologia.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>
    ${vac.notas.length ? `<div class="vd-notes"><h4>⚠️ Puntos clave y advertencias</h4><ul>${vac.notas.map(n => `<li>${n}</li>`).join("")}</ul></div>` : ""}`;
  detail.classList.remove("hidden");
  detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ===================================================
// MODAL
// ===================================================
function openVaccineModal(key) {
  const vac = VACUNAS[key];
  if (!vac) return;
  document.getElementById("modalContent").innerHTML = `
    <div style="margin-bottom:1.25rem;padding-bottom:1rem;border-bottom:1px solid var(--gris-border)">
      <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--verde-dark)">${vac.nombre}</div>
      <div style="color:var(--gris-muted);font-size:0.85rem;margin-top:0.2rem">${vac.nombreCompleto}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1rem">
      <div style="background:var(--gris-bg);border-radius:10px;padding:0.75rem">
        <div style="font-size:0.7rem;font-weight:700;color:var(--gris-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.3rem">🏷️ Comercial</div>
        <div style="font-size:0.875rem;font-weight:500">${vac.comercial}</div>
      </div>
      <div style="background:var(--gris-bg);border-radius:10px;padding:0.75rem">
        <div style="font-size:0.7rem;font-weight:700;color:var(--gris-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.3rem">💉 Vía</div>
        <div style="font-size:0.875rem;font-weight:500">${vac.viaLabel}</div>
      </div>
      <div style="background:var(--gris-bg);border-radius:10px;padding:0.75rem">
        <div style="font-size:0.7rem;font-weight:700;color:var(--gris-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.3rem">📍 Zona</div>
        <div style="font-size:0.875rem;font-weight:500">${vac.zona}</div>
      </div>
      <div style="background:var(--gris-bg);border-radius:10px;padding:0.75rem">
        <div style="font-size:0.7rem;font-weight:700;color:var(--gris-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.3rem">📅 Cuándo</div>
        <div style="font-size:0.875rem;font-weight:500">${vac.momentos}</div>
      </div>
    </div>
    <div style="background:var(--verde-light);border-radius:10px;padding:1rem;margin-bottom:0.75rem;border-left:4px solid var(--verde)">
      <div style="font-size:0.8rem;font-weight:700;color:var(--verde-dark);margin-bottom:0.5rem">📋 Calendario y posología</div>
      <ul style="padding-left:1.2rem;font-size:0.875rem;line-height:1.6">${vac.calendario.map(c=>`<li><strong>${c.edad}:</strong> ${c.nota}</li>`).join("")}</ul>
      <div style="font-size:0.8rem;font-weight:700;color:var(--verde-dark);margin:0.75rem 0 0.4rem">Posología:</div>
      <ul style="padding-left:1.2rem;font-size:0.875rem;line-height:1.6">${vac.posologia.map(p=>`<li>${p}</li>`).join("")}</ul>
    </div>
    ${vac.notas.length ? `<div style="background:#FFF9E6;border-radius:10px;padding:1rem;border-left:4px solid var(--warning)"><div style="font-size:0.8rem;font-weight:700;color:#935A00;margin-bottom:0.5rem">⚠️ Puntos clave</div><ul style="padding-left:1.2rem;font-size:0.875rem;line-height:1.6">${vac.notas.map(n=>`<li>${n}</li>`).join("")}</ul></div>` : ""}`;
  document.getElementById("vaccineModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("vaccineModal").addEventListener("click", e => {
  if (e.target === document.getElementById("vaccineModal")) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function closeModal() {
  document.getElementById("vaccineModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// ===================================================
// TAB: GRUPOS DE RIESGO
// ===================================================
function initRiskTab() {
  renderRiskGroups("all");
  document.querySelectorAll(".risk-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".risk-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderRiskGroups(btn.dataset.risk);
    });
  });
}

function renderRiskGroups(filter) {
  const container = document.getElementById("riskResults");
  const groups = filter === "all" ? GRUPOS_RIESGO : GRUPOS_RIESGO.filter(g => g.categoria === filter);
  if (!groups.length) {
    container.innerHTML = `<div class="results-empty"><div class="empty-icon">🔍</div><p>No hay datos para este filtro</p></div>`;
    return;
  }
  container.innerHTML = groups.map(g => `
    <div class="risk-card" id="risk-${g.id}">
      <div class="risk-card-header" onclick="toggleRiskCard('${g.id}')">
        <h3>${g.titulo}</h3><span class="risk-card-toggle">▼</span>
      </div>
      <div class="risk-card-body">
        ${g.riesgoAlto?.length ? `<div class="risk-section"><h4><span class="risk-tag alto">Alto riesgo</span> Indicaciones:</h4><ul>${g.riesgoAlto.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        ${g.riesgoModerado?.length ? `<div class="risk-section"><h4><span class="risk-tag moderado">Riesgo moderado</span> Indicaciones:</h4><ul>${g.riesgoModerado.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        ${g.indicaciones?.length ? `<div class="risk-section"><h4>Indicaciones:</h4><ul>${g.indicaciones.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        ${g.indicacionesMenB?.length ? `<div class="risk-section"><h4><span class="risk-tag especial">Meningococo B</span></h4><ul>${g.indicacionesMenB.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        ${g.indicacionesMenACWY?.length ? `<div class="risk-section"><h4><span class="risk-tag especial">Meningococo ACWY</span></h4><ul>${g.indicacionesMenACWY.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        ${g.indicacionesHepA?.length ? `<div class="risk-section"><h4><span class="risk-tag especial">Hepatitis A</span></h4><ul>${g.indicacionesHepA.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        ${g.indicacionesHepB?.length ? `<div class="risk-section"><h4><span class="risk-tag especial">Hepatitis B</span></h4><ul>${g.indicacionesHepB.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        ${g.indicacionesPreexp?.length ? `<div class="risk-section"><h4>Profilaxis preexposición:</h4><ul>${g.indicacionesPreexp.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        ${g.indicacionesPosexp?.length ? `<div class="risk-section"><h4>Profilaxis posexposición:</h4><ul>${g.indicacionesPosexp.map(i=>`<li>${i}</li>`).join("")}</ul></div>` : ""}
        <div class="risk-section" style="background:var(--verde-light);padding:0.75rem;border-radius:8px;margin-top:0.5rem;border-left:3px solid var(--verde)">
          <h4 style="color:var(--verde-dark)">Pauta recomendada:</h4><p style="margin-top:0.3rem">${g.pauta}</p>
        </div>
        ${g.notas?.length ? `<div class="risk-section" style="background:#FFF9E6;padding:0.75rem;border-radius:8px;margin-top:0.5rem;border-left:3px solid var(--warning)"><h4 style="color:#935A00">⚠️ Notas importantes:</h4><ul style="margin-top:0.3rem">${g.notas.map(n=>`<li>${n}</li>`).join("")}</ul></div>` : ""}
      </div>
    </div>`).join("");
}

function toggleRiskCard(id) {
  document.getElementById("risk-" + id).classList.toggle("open");
}

// ===================================================
// TAB: ACTUALIZAR CALENDARIO (Excel)
//
// Flujo:
//  1. Descarga Excel con los datos actuales del calendario
//     (una fila por vacuna dentro de cada grupo de edad)
//  2. El usuario edita el Excel en su ordenador
//  3. Reimporta el Excel → preview → confirma
//  4. CALENDARIO_POR_EDAD se actualiza en memoria
//  5. Descarga un snippet JS listo para pegar en data.js
//
// Librería: SheetJS 0.18.5 desde cdnjs (gratuita, sin API)
// ===================================================

function initUpdateTab() {
  loadSheetJS(() => {
    document.getElementById("downloadTemplateBtn").addEventListener("click", exportCalendarioExcel);
    setupDropZone();
  });
}

function loadSheetJS(cb) {
  if (window.XLSX) { cb(); return; }
  const s = document.createElement("script");
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
  s.onload = cb;
  s.onerror = () => {
    const btn = document.getElementById("downloadTemplateBtn");
    btn.textContent = "⚠️ Sin conexión — no se puede cargar la librería Excel";
    btn.disabled = true;
  };
  document.head.appendChild(s);
}

// ---- EXPORTAR ----
function exportCalendarioExcel() {
  // Hoja principal: Calendario
  const rows = [[
    "Edad (label)",
    "edadMin_m", "edadMax_m", "edadMin_y", "edadMax_y",
    "estacional", "especial",
    "Sigla vacuna", "Tipo", "Nota"
  ]];

  CALENDARIO_POR_EDAD.forEach(entry => {
    (entry.vacunas || []).forEach((v, i) => {
      rows.push([
        i === 0 ? entry.label            : "",
        i === 0 ? (entry.edadMin_m ?? "") : "",
        i === 0 ? (entry.edadMax_m ?? "") : "",
        i === 0 ? (entry.edadMin_y ?? "") : "",
        i === 0 ? (entry.edadMax_y ?? "") : "",
        i === 0 ? (entry.estacional ? "SI" : "") : "",
        i === 0 ? (entry.especial  || "")  : "",
        v.sigla,
        v.tipo,
        v.nota
      ]);
    });
    rows.push(["","","","","","","","","",""]);  // separador visual
  });

  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws["!cols"] = [28,9,9,9,9,10,12,14,14,55].map(w => ({ wch: w }));
  ws["!freeze"] = { xSplit: 0, ySplit: 1 };
  headerStyle(ws, 10);

  // Hoja de referencia: siglas disponibles
  const refRows = [["Sigla","Nombre","Vía","Comercial (SSPA)"]];
  Object.values(VACUNAS).forEach(v => refRows.push([v.sigla, v.nombre, v.viaLabel, v.comercial]));
  const wsRef = XLSX.utils.aoa_to_sheet(refRows);
  wsRef["!cols"] = [12,35,18,28].map(w => ({ wch: w }));
  headerStyle(wsRef, 4);

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws,    "Calendario");
  XLSX.utils.book_append_sheet(wb, wsRef, "Vacunas (referencia)");

  XLSX.writeFile(wb, `calendario-vacunal-${new Date().getFullYear()}.xlsx`);
}

function headerStyle(ws, cols) {
  for (let c = 0; c < cols; c++) {
    const addr = XLSX.utils.encode_cell({ r: 0, c });
    if (ws[addr]) ws[addr].s = {
      font: { bold: true, color: { rgb: "FFFFFF" } },
      fill: { fgColor: { rgb: "006633" } },
      alignment: { horizontal: "center", wrapText: true }
    };
  }
}

// ---- IMPORTAR ----
let importedCalendario = null;

function setupDropZone() {
  const dropZone  = document.getElementById("dropZoneXlsx");
  const xlsxInput = document.getElementById("xlsxInput");

  dropZone.addEventListener("click",    () => xlsxInput.click());
  dropZone.addEventListener("dragover", e => { e.preventDefault(); dropZone.classList.add("drag-over"); });
  dropZone.addEventListener("dragleave",() => dropZone.classList.remove("drag-over"));
  dropZone.addEventListener("drop", e => {
    e.preventDefault(); dropZone.classList.remove("drag-over");
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });
  xlsxInput.addEventListener("change", () => { if (xlsxInput.files[0]) handleFile(xlsxInput.files[0]); });

  document.getElementById("xlsxRemoveFile").addEventListener("click", resetUpload);
  document.getElementById("xlsxConfirmBtn").addEventListener("click", applyImport);
  document.getElementById("xlsxCancelBtn").addEventListener("click", () => {
    document.getElementById("xlsxPreviewStep").classList.add("hidden");
  });
  document.getElementById("xlsxDownloadDataBtn").addEventListener("click", downloadDataJs);
}

function resetUpload() {
  document.getElementById("xlsxInput").value = "";
  document.getElementById("xlsxFileInfo").classList.add("hidden");
  document.getElementById("dropZoneXlsx").classList.remove("hidden");
  document.getElementById("xlsxPreviewStep").classList.add("hidden");
  document.getElementById("xlsxSuccess").classList.add("hidden");
  importedCalendario = null;
}

function handleFile(file) {
  if (!["xlsx","xls"].includes(file.name.split(".").pop().toLowerCase())) {
    alert("Solo se aceptan archivos .xlsx o .xls"); return;
  }
  document.getElementById("xlsxFileName").textContent = file.name;
  document.getElementById("xlsxFileSize").textContent = fmtBytes(file.size);
  document.getElementById("xlsxFileInfo").classList.remove("hidden");
  document.getElementById("dropZoneXlsx").classList.add("hidden");
  document.getElementById("xlsxSuccess").classList.add("hidden");

  const reader = new FileReader();
  reader.onload = e => parseExcel(e.target.result);
  reader.readAsBinaryString(file);
}

function parseExcel(binary) {
  try {
    const wb = XLSX.read(binary, { type: "binary" });
    const ws = wb.Sheets["Calendario"];
    if (!ws) { alert("No se encontró la hoja 'Calendario'. Asegúrate de usar la plantilla descargada."); return; }

    const rows   = XLSX.utils.sheet_to_json(ws, { defval: "" });
    const errors = [];
    const result = [];
    let current  = null;

    rows.forEach((row, i) => {
      const label = row["Edad (label)"]?.toString().trim();
      const sigla = row["Sigla vacuna"]?.toString().trim();

      // Nueva entrada de edad
      if (label) {
        current = {
          label,
          edadMin_m: row["edadMin_m"] !== "" ? Number(row["edadMin_m"]) : undefined,
          edadMax_m: row["edadMax_m"] !== "" ? Number(row["edadMax_m"]) : undefined,
          edadMin_y: row["edadMin_y"] !== "" ? Number(row["edadMin_y"]) : undefined,
          edadMax_y: row["edadMax_y"] !== "" ? Number(row["edadMax_y"]) : undefined,
          estacional: row["estacional"]?.toString().trim().toUpperCase() === "SI",
          especial:   row["especial"]?.toString().trim() || undefined,
          vacunas: []
        };
        result.push(current);
      }

      // Vacuna dentro de la entrada actual
      if (sigla) {
        if (!current) { errors.push(`Fila ${i+2}: sigla "${sigla}" sin grupo de edad — ignorada`); return; }
        if (!VACUNAS[sigla]) errors.push(`Fila ${i+2}: sigla "${sigla}" no reconocida en el catálogo`);
        current.vacunas.push({
          sigla,
          tipo: row["Tipo"]?.toString().trim() || "sistematica",
          nota: row["Nota"]?.toString().trim()  || ""
        });
      }
    });

    const clean = result.filter(e => e.vacunas.length > 0);
    if (!clean.length) { alert("No se encontraron entradas válidas en la hoja Calendario."); return; }

    importedCalendario = clean;
    showPreview(clean, errors);

  } catch (err) {
    alert("Error al leer el archivo: " + err.message);
    console.error(err);
  }
}

function showPreview(data, errors) {
  const totalV = data.reduce((a, e) => a + e.vacunas.length, 0);

  document.getElementById("xlsxPreviewContent").innerHTML = `
    <div class="preview-stats">
      <div class="preview-stat"><span class="preview-stat-num">${data.length}</span><span class="preview-stat-label">Grupos de edad</span></div>
      <div class="preview-stat"><span class="preview-stat-num">${totalV}</span><span class="preview-stat-label">Vacunas asignadas</span></div>
    </div>
    <div class="preview-section">
      <h4>📅 Entradas leídas del Excel</h4>
      ${data.map(e => `
        <div class="preview-row">
          <span class="preview-row-key">${e.label}</span>
          <span class="preview-row-val">${e.vacunas.map(v => v.sigla).join(", ")}</span>
        </div>`).join("")}
    </div>`;

  const errBox = document.getElementById("xlsxImportErrors");
  if (errors.length) {
    errBox.innerHTML = `<strong>⚠️ ${errors.length} advertencia(s):</strong><ul>${errors.map(e=>`<li>${e}</li>`).join("")}</ul>`;
    errBox.classList.remove("hidden");
  } else {
    errBox.classList.add("hidden");
  }

  document.getElementById("xlsxPreviewStep").classList.remove("hidden");
  document.getElementById("xlsxPreviewStep").scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyImport() {
  if (!importedCalendario) return;
  CALENDARIO_POR_EDAD.length = 0;
  importedCalendario.forEach(e => CALENDARIO_POR_EDAD.push(e));

  document.getElementById("xlsxPreviewStep").classList.add("hidden");
  const totalV = importedCalendario.reduce((a,e) => a+e.vacunas.length, 0);
  document.getElementById("xlsxSuccessDetails").textContent =
    `${importedCalendario.length} grupos de edad con ${totalV} vacunas aplicados correctamente.`;
  document.getElementById("xlsxSuccess").classList.remove("hidden");
  document.getElementById("xlsxSuccess").scrollIntoView({ behavior: "smooth" });

  // Limpiar resultado de edad para que el usuario reconsulte
  document.getElementById("edadResults").innerHTML = `
    <div class="results-empty"><div class="empty-icon">🔄</div>
    <p>Calendario actualizado. Selecciona una edad para ver los resultados.</p></div>`;
}

function downloadDataJs() {
  if (!importedCalendario) return;
  const content =
`// CALENDARIO_POR_EDAD actualizado el ${new Date().toLocaleDateString("es-ES")}
// Pega este bloque en data.js (reemplaza el array CALENDARIO_POR_EDAD completo)
// y sube el archivo a GitHub para hacerlo permanente.

const CALENDARIO_POR_EDAD = ${JSON.stringify(importedCalendario, null, 2)};
`;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type: "text/javascript" }));
  a.download = `calendario-${new Date().toISOString().slice(0,10)}.js`;
  a.click();
}

// ---- Helper ----
function fmtBytes(b) {
  if (b < 1024) return b + " B";
  if (b < 1048576) return (b / 1024).toFixed(1) + " KB";
  return (b / 1048576).toFixed(1) + " MB";
}

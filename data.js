// ===================================================
// data.js · Datos del Calendario Vacunal Andalucía 2026
// Instrucción DGSPyOF-1/2026
// ===================================================

const VACUNAS = {
  VRS: {
    sigla: "VRS",
    nombre: "Anticuerpo monoclonal anti-VRS",
    nombreCompleto: "Nirsevimab frente a Virus Respiratorio Sincitial",
    comercial: "Beyfortus®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Muslo derecho o izquierdo (indistintamente)",
    posologia: [
      "< 5 kg: 50 mg (1 jeringa)",
      "≥ 5 kg (1ª temporada): 100 mg (1 jeringa)",
      "2ª temporada: < 10 kg → 100 mg; ≥ 10 kg → 200 mg (2 jeringas)"
    ],
    calendario: [
      { edad: "Recién nacido (oct–mar)", nota: "Durante la estancia en maternidad o lo antes posible" },
      { edad: "A partir de sep (nacidos abr–sep)", nota: "Desde última semana de septiembre en AP" }
    ],
    momentos: "Campaña VRS (octubre–marzo)",
    notas: [
      "Indicado a TODOS los lactantes nacidos del 1 abril al 31 marzo siguiente",
      "También indicado en prematuros < 35 semanas (hasta 364 días) y lactantes < 24 meses con condiciones de alto riesgo",
      "Se administra aunque la madre haya recibido la vacuna VRS durante el embarazo",
      "Campaña 2025-26 finaliza el 31/03/2026",
      "Compatible con administración simultánea de otras vacunas del calendario"
    ],
    tipo: "sistematica",
    cohorte: "RN-6m"
  },
  Tdpa: {
    sigla: "Tdpa",
    nombre: "Tétanos-Difteria-Tosferina (baja carga / adulto)",
    nombreCompleto: "Vacuna frente a tétanos, difteria y tosferina acelular de baja carga antigénica",
    comercial: "Boostrix®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Deltoides",
    posologia: ["1 dosis"],
    calendario: [
      { edad: "Embarazadas", nota: "Semana 27 preferentemente (o 27-28), en cada embarazo" },
      { edad: "14 años (cohorte 2012)", nota: "Si no han recibido Tdpa desde los 10 años" },
      { edad: "15–18 años", nota: "Rescate: si no han recibido Td ni Tdpa desde los 10 años" },
      { edad: "Puerperio (primeros 6 meses)", nota: "Si no fue posible en el embarazo" }
    ],
    momentos: "Embarazo (s.27-28), 14 años, rescate 15-18 años",
    notas: [
      "Administrar en CADA embarazo independientemente de vacunación previa",
      "En embarazadas con alto riesgo de parto prematuro, puede valorarse desde semana 20",
      "Puede coadministrarse con vacuna de gripe, COVID-19 y otras",
      "Si se administra junto a MenACWY: mismo día o intervalo ≥ 1 mes"
    ],
    tipo: "sistematica",
    cohorte: "embarazo,14a,15-18a"
  },
  DTPa_VPI: {
    sigla: "DTPa-VPI",
    nombre: "Tétanos-Difteria-Tosferina-Polio (alta carga / infantil)",
    nombreCompleto: "Vacuna frente a tétanos, difteria, tosferina de alta carga con poliomielitis inactivada",
    comercial: "Tetraxim®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Brazo no dominante",
    posologia: ["1 dosis a los 6 años"],
    calendario: [
      { edad: "6 años (cohorte 2020)", nota: "Pauta de refuerzo" },
      { edad: "Nacidos desde 01/01/2017", nota: "Rescate: recibieron esquema 2+1" }
    ],
    momentos: "6 años",
    notas: [
      "Sustituye a Tdpa de los 6 años desde 2023",
      "Los nacidos ANTES de 2017 (esquema 3+1) que no hayan recibido Tdpa a los 6 años → recibirán Boostrix® (sin polio)",
      "Nacidos desde 01/01/2017 recibieron esquema 2+1 de hexavalente y necesitan la 4ª dosis de VPI"
    ],
    tipo: "sistematica",
    cohorte: "6a"
  },
  Td: {
    sigla: "Td",
    nombre: "Tétanos-Difteria (adulto)",
    nombreCompleto: "Vacuna frente a tétanos y difteria tipo adulto",
    comercial: "Diftavax®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Deltoides / brazo no dominante",
    posologia: ["1 dosis (o completar hasta 5 dosis en primovacunación)"],
    calendario: [
      { edad: "65 años", nota: "Si recibieron 5 dosis en infancia/adolescencia" },
      { edad: "Adultos no vacunados", nota: "Verificar estado; completar hasta 5 dosis" }
    ],
    momentos: "65 años, primovacunación adultos",
    notas: [
      "Verificar siempre el estado de vacunación previo antes de iniciar pauta",
      "Aprovechar cualquier contacto sanitario para revisar estado vacunal",
      "Si se administra junto a MenACWY: mismo día o intervalo ≥ 1 mes"
    ],
    tipo: "sistematica",
    cohorte: "65a"
  },
  HEX: {
    sigla: "HEX",
    nombre: "Vacuna hexavalente",
    nombreCompleto: "Difteria, tétanos, tosferina, poliomielitis, Haemophilus influenzae tipo b, hepatitis B",
    comercial: "Hexyon®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Muslo (2m y 4m: ant. lateral; 11m: muslo o deltoides)",
    posologia: ["3 dosis: a los 2, 4 y 11 meses"],
    calendario: [
      { edad: "2 meses", nota: "Con neumococo, MenB, rotavirus (oral)" },
      { edad: "4 meses", nota: "Con neumococo, MenB, MenACWY, rotavirus (oral)" },
      { edad: "11 meses", nota: "Con neumococo conjugada" }
    ],
    momentos: "2, 4 y 11 meses",
    notas: [
      "RN de madre HBsAg+: vacuna HB monocomponente en primeras 12-24h + gammaglobulina anti-HB en lugar anatómico diferente",
      "RN de madre HBsAg desconocido: si no hay resultado en 24h, dar vacuna HB al neonato",
      "Puede emplearse en < 7 años para pautas correctoras"
    ],
    tipo: "sistematica",
    cohorte: "2m,4m,11m"
  },
  HB: {
    sigla: "HB",
    nombre: "Hepatitis B",
    nombreCompleto: "Vacuna frente a hepatitis B (monovalente)",
    comercial: "Engerix-B® / HBVAXPRO®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Deltoides (adultos), muslo antero-lateral (lactantes)",
    posologia: ["RN de madre HBsAg+: 1ª dosis en primeras 12h", "Hasta 18 años no vacunados: pauta 3 dosis (0, 1 y 6 meses)"],
    calendario: [
      { edad: "Recién nacido (madre HBsAg+)", nota: "Primeras 12h + gammaglobulina. Continuar con hexavalente" },
      { edad: "Hasta 18 años (no vacunados)", nota: "Pauta 3 dosis: 0, 1 y 6 meses" }
    ],
    momentos: "RN (caso especial), hasta 18 años no vacunados",
    notas: [
      "Control serológico 1-2 meses tras última dosis en RN de madre HBsAg+",
      "Ver sección Grupos de Riesgo para indicaciones especiales (diálisis, VIH, etc.)"
    ],
    tipo: "sistematica",
    cohorte: "RN,18a"
  },
  Hib: {
    sigla: "Hib",
    nombre: "Haemophilus influenzae tipo b",
    nombreCompleto: "Vacuna frente a Haemophilus influenzae tipo b (incluida en hexavalente)",
    comercial: "Incluida en Hexyon®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Con hexavalente",
    posologia: ["3 dosis: 2, 4 y 11 meses (incluida en hexavalente)"],
    calendario: [
      { edad: "2, 4 y 11 meses", nota: "Incluida en la vacuna hexavalente" }
    ],
    momentos: "2, 4 y 11 meses",
    notas: ["Administrada siempre junto con la vacuna hexavalente"],
    tipo: "sistematica",
    cohorte: "2m,4m,11m"
  },
  RV: {
    sigla: "RV",
    nombre: "Rotavirus",
    nombreCompleto: "Vacuna frente a rotavirus",
    comercial: "Rotarix®",
    via: "oral",
    viaLabel: "VÍA ORAL",
    zona: "Oral (no inyectable)",
    posologia: ["2 dosis vía oral: 2 y 4 meses"],
    calendario: [
      { edad: "2 meses", nota: "1ª dosis. Antes de 20 semanas de vida. Preferiblemente antes de 16 semanas" },
      { edad: "4 meses", nota: "2ª dosis. Antes de 24 semanas de vida" }
    ],
    momentos: "2 y 4 meses (VÍA ORAL)",
    notas: [
      "⚠️ VÍA ORAL exclusivamente",
      "1ª dosis: preferentemente antes de 16 semanas (máx. 20 sem)",
      "2ª dosis: preferentemente antes de 16 semanas (máx. 24 sem). Intervalo mín. 4 semanas entre dosis",
      "Rescate: lactantes nacidos desde 01/10/2025 que no hayan iniciado pauta, si aún < 20 semanas",
      "En prematuros < 27 semanas: con consentimiento informado",
      "Disponible desde febrero 2026",
      "Intercambiabilidad aceptada con Rotateq® para rescate"
    ],
    tipo: "sistematica",
    cohorte: "2m,4m"
  },
  VNC20: {
    sigla: "VNC20",
    nombre: "Neumococo conjugada 20-valente",
    nombreCompleto: "Vacuna frente a neumococo conjugada 20-valente",
    comercial: "Prevenar 20®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Muslo (lactantes), deltoides/brazo no dominante (adultos)",
    posologia: ["Lactantes: 4 dosis (2, 4, 6 y 11 meses)", "Adultos 60-80 años: 1 dosis única"],
    calendario: [
      { edad: "2, 4, 6 y 11 meses", nota: "Pauta 3+1 sistemática" },
      { edad: "60 a 80 años (nacidos 1946-1966)", nota: "1 dosis si no vacunados previamente con VNC13/15/20" }
    ],
    momentos: "2, 4, 6 y 11 meses; 60-80 años",
    notas: [
      "Intervalo mínimo tras VNC13 (Prevenar 13®): ≥ 6 meses",
      "Intervalo mínimo tras VNP23 (Pneumovax 23®): ≥ 12 meses",
      "La VNP23 polisacarídica está RETIRADA del programa en Andalucía desde 2024",
      "Niños < 59 meses que completaron pauta completa de VNC13: se consideran correctamente vacunados",
      "Ver grupos de riesgo para indicaciones específicas"
    ],
    tipo: "sistematica",
    cohorte: "2m,4m,6m,11m,60a-80a"
  },
  MenB: {
    sigla: "MenB",
    nombre: "Meningococo B",
    nombreCompleto: "Vacuna conjugada frente a meningococo del serogrupo B",
    comercial: "Bexsero®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Muslo izquierdo (lactantes), deltoides (mayores)",
    posologia: ["3 dosis: 2, 4 y 15 meses"],
    calendario: [
      { edad: "2 meses", nota: "Con hexavalente, neumococo, rotavirus (oral)" },
      { edad: "4 meses", nota: "Con hexavalente, neumococo, MenACWY, rotavirus" },
      { edad: "15 meses", nota: "Con varicela" }
    ],
    momentos: "2, 4 y 15 meses",
    notas: [
      "⚠️ Especialmente importante cumplir las dosis de 2 y 4 meses: máxima protección precoz",
      "Puede producir fiebre; valorar antipirético según indicación",
      "Grupos de riesgo: ver sección específica"
    ],
    tipo: "sistematica",
    cohorte: "2m,4m,15m"
  },
  MenACWY: {
    sigla: "MenACWY",
    nombre: "Meningococo ACWY",
    nombreCompleto: "Vacuna conjugada frente a meningococo de los serogrupos A, C, W e Y",
    comercial: "Nimenrix® (≤11m) / Menquadfi® (≥12m)",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Muslo izquierdo (lactantes), deltoides (≥12m)",
    posologia: [
      "4 meses: 1 dosis (Nimenrix®)",
      "12 meses: 1 dosis (Menquadfi®)",
      "12 años: 1 dosis (Menquadfi®)",
      "Rescate 13-18 años: 1 dosis"
    ],
    calendario: [
      { edad: "4 meses", nota: "Nimenrix® · Con hexavalente, MenB, neumococo, rotavirus" },
      { edad: "12 meses", nota: "Menquadfi® · Con triple vírica" },
      { edad: "12 años (cohorte 2014)", nota: "Menquadfi® · Con VPH, varicela/TV si susceptibles" },
      { edad: "13–18 años", nota: "Rescate: si no han recibido MenACWY desde los 10 años" }
    ],
    momentos: "4 meses, 12 meses, 12 años (rescate 13-18a)",
    notas: [
      "Nimenrix®: autorizada desde 6 semanas. En SSPA solo para dosis de 4 meses",
      "Menquadfi®: autorizada desde 12 meses. Para 12 meses, 12 años y rescates",
      "Ambas pueden coadministrarse con otras vacunas",
      "Con vacunas que contienen toxoide tetánico: mismo día o intervalo ≥ 1 mes"
    ],
    tipo: "sistematica",
    cohorte: "4m,12m,12a,13-18a"
  },
  TV: {
    sigla: "TV",
    nombre: "Triple vírica",
    nombreCompleto: "Vacuna triple vírica frente a sarampión, rubeola y parotiditis",
    comercial: "M-M-RvaxPro®",
    via: "sc",
    viaLabel: "Subcutánea",
    zona: "Brazo izquierdo (2-3 años), muslo derecho (12 meses)",
    posologia: ["2 dosis: 12 meses y 2-3 años"],
    calendario: [
      { edad: "12 meses", nota: "1ª dosis · Con MenACWY (Menquadfi®)" },
      { edad: "2 y 3 años (cohortes 2024 y 2023)", nota: "2ª dosis (NOVEDAD 2026: adelantada de 3 a 2 años) · Con varicela" },
      { edad: "Rescate < 65 años", nota: "Preferentemente nacidos desde 1978 sin historia de vacunación ni sarampión. Pauta 2 dosis (intervalo mín. 4 semanas)" }
    ],
    momentos: "12 meses, 2 años (rescate < 65a)",
    notas: [
      "NOVEDAD 2026: 2ª dosis adelantada a los 2 años (antes se daba a los 3 años). Durante 2026: vacunar cohortes 2024 y 2023",
      "⚠️ CONTRAINDICADA en embarazadas e inmunodeprimidos",
      "Mujeres en edad fértil: evitar embarazo 4 semanas tras vacunación",
      "No se recomienda serología previa para decidir vacunación en menores de 65 años",
      "Captación a los 12 años (junto VPH y MenACWY) para no vacunados con 2 dosis",
      "Captación también a los 14 años"
    ],
    tipo: "sistematica",
    cohorte: "12m,2a,3a,<65a"
  },
  VVZ: {
    sigla: "VVZ",
    nombre: "Varicela",
    nombreCompleto: "Vacuna frente a virus varicela-zóster",
    comercial: "Varivax®",
    via: "sc",
    viaLabel: "Subcutánea",
    zona: "Brazo derecho (2-3 años), muslo izquierdo (15 meses)",
    posologia: ["2 dosis: 15 meses y 2-3 años"],
    calendario: [
      { edad: "15 meses", nota: "1ª dosis · Con MenB (Bexsero®)" },
      { edad: "2 y 3 años (cohortes 2024 y 2023)", nota: "2ª dosis (NOVEDAD 2026: adelantada de 3 a 2 años) · Con triple vírica" },
      { edad: "12 años", nota: "Captación activa de susceptibles (sin 2 dosis ni antecedente)" },
      { edad: "Rescate < 65 años", nota: "Sin historia de vacunación ni varicela. 2 dosis (intervalo 4-8 semanas). En adultos: serología IgG previa" }
    ],
    momentos: "15 meses, 2 años (rescate < 65a)",
    notas: [
      "NOVEDAD 2026: 2ª dosis adelantada a los 2 años (antes a los 3 años). Durante 2026: cohortes 2024 y 2023",
      "⚠️ CONTRAINDICADA en embarazadas e inmunodeprimidos",
      "No confundir con Shingrix® (herpes zóster): son vacunas distintas",
      "En adultos sin antecedentes: realizar serología IgG antes de vacunar",
      "Mujeres en edad fértil: evitar embarazo 4 semanas tras vacunación",
      "Captación a los 12 y 14 años"
    ],
    tipo: "sistematica",
    cohorte: "15m,2a,3a,<65a"
  },
  VPH: {
    sigla: "VPH",
    nombre: "Papilomavirus humano",
    nombreCompleto: "Vacuna frente a virus del papiloma humano",
    comercial: "Gardasil 9®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Brazo no dominante (12 años) / deltoides",
    posologia: [
      "12 años y rescate 13-21 años sin dosis previa: 1 dosis",
      "Personas con inmunodepresión 12-21 años: 3 dosis (0, 2 y 6 meses)"
    ],
    calendario: [
      { edad: "12 años (cohorte 2014)", nota: "1 dosis · Con MenACWY, varicela/TV si susceptibles" },
      { edad: "13–21 años (nacidos 2005-2013)", nota: "1 dosis rescate si no han recibido ninguna dosis de VPH" }
    ],
    momentos: "12 años, rescate 13-21 años",
    notas: [
      "NOVEDAD 2026: Rescate ampliado hasta los 21 años (antes hasta 18 años)",
      "Dosis previas de Cervarix® o Gardasil® son válidas; se completa pauta con Gardasil 9®",
      "⚠️ No recomendada durante el embarazo (retrasar inicio de serie)",
      "Se puede administrar durante la lactancia materna",
      "Ver grupos de riesgo para indicaciones hasta 45 años (VIH, trasplante, HSH, trabajadores sexuales, etc.)"
    ],
    tipo: "sistematica",
    cohorte: "12a,13-21a"
  },
  HZ: {
    sigla: "HZ",
    nombre: "Herpes zóster",
    nombreCompleto: "Vacuna frente a herpes zóster",
    comercial: "Shingrix®",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Deltoides / brazo no dominante",
    posologia: ["2 dosis con intervalo mínimo 2 meses (óptimo 2-6 meses)"],
    calendario: [
      { edad: "65 años (cohorte 1961)", nota: "Pauta de 2 dosis" },
      { edad: "66–67 años (cohortes 1959-1960)", nota: "Rescate si no han iniciado ni completado la pauta" }
    ],
    momentos: "65 años (rescate 66-67 años)",
    notas: [
      "⚠️ Requiere RECONSTITUCIÓN: contiene 2 viales distintos",
      "Es vacuna inactivada: puede administrarse en inmunodeprimidos",
      "No confundir con Varivax® (varicela): son vacunas distintas",
      "Se puede coadministrar con gripe, COVID-19, neumococo, Td, Tdpa, VRS, VPH, mpox",
      "Se desaconseja en gestantes",
      "Compatible con lactancia materna",
      "Preferentemente en Atención Primaria; aprovechar cualquier contacto asistencial durante todo el año",
      "Grupos de riesgo desde los 18 años: ver sección específica"
    ],
    tipo: "sistematica",
    cohorte: "65a,66a,67a"
  },
  GRIPE: {
    sigla: "Gripe",
    nombre: "Gripe estacional",
    nombreCompleto: "Vacuna antigripal estacional",
    comercial: "Influvac® / Flucelvax® (6-23m y >60a) · Fluenz® (intranasal, 2-4a) · Efluelda® (alta dosis, institucionalizados y ≥80a)",
    via: "im",
    viaLabel: "Intramuscular / Intranasal (2-4 años)",
    zona: "Deltoides (IM) / fosas nasales (intranasal)",
    posologia: [
      "6m-59m sin patología: 1 dosis",
      "6m-8a con patología: 2 dosis (sep. ≥4 sem) si no vacunados en campañas previas; si ya vacunados: 1 dosis",
      "≥ 9a con patología: 1 dosis",
      "≥ 60 años: 1 dosis anual",
      "Embarazadas/puerperio (1eros 6 meses): 1 dosis en cualquier trimestre",
      "Convivientes de embarazadas/puérperas: financiada durante la campaña"
    ],
    calendario: [
      { edad: "Embarazadas / puerperio (primeros 6 meses)", nota: "Cualquier trimestre. Solo durante campaña otoño-invierno" },
      { edad: "6 a 59 meses", nota: "Campaña anual. Intranasal para 3-4 años (Fluenz®)" },
      { edad: "≥ 60 años", nota: "Campaña anual. Efluelda® para institucionalizados y ≥80 años" }
    ],
    momentos: "Campaña anual (otoño-invierno): embarazo, 6m-59m, ≥60 años",
    notas: [
      "⚠️ CONTRAINDICADA en < 6 meses",
      "Vaccunar cada campaña aunque se haya vacunado en campañas previas",
      "Vacunar aunque haya pasado gripe en la campaña actual o anteriores",
      "Convivientes de embarazadas/puérperas (incluidos niños ≥6 meses): también indicada y financiada"
    ],
    tipo: "sistematica",
    cohorte: "embarazo,6m-59m,60a+"
  },
  COVID: {
    sigla: "COVID",
    nombre: "COVID-19",
    nombreCompleto: "Vacuna frente a COVID-19",
    comercial: "Comirnaty LP.8.1® (ARNm, Pfizer) / Bivermax LP.8.1® (Hipra)",
    via: "im",
    viaLabel: "Intramuscular",
    zona: "Deltoides",
    posologia: [
      "Embarazadas/puerperio: 1 dosis en cualquier trimestre",
      "≥ 70 años: 1 dosis anual"
    ],
    calendario: [
      { edad: "Embarazadas / puerperio (primeros 6 meses)", nota: "Cualquier trimestre. Si ≥ 3 meses desde última vacuna o infección COVID" },
      { edad: "≥ 70 años", nota: "1 dosis anual. Esperar ≥ 3 meses tras infección reciente" }
    ],
    momentos: "Embarazo/puerperio y ≥70 años (campaña anual)",
    notas: [
      "Esperar ≥ 3 meses desde última infección COVID o vacuna previa (Comirnaty)",
      "Bivermax: esperar ≥ 6 meses desde última vacuna COVID",
      "Vacunar aunque haya pasado infecciones previas (protección contra cepas circulantes actuales)",
      "Vacunas COVID no disponibles en canal privado: administrar siempre en centros públicos",
      "En embarazo: Comirnaty® (ARNm). No hay datos suficientes de Bimervax® en gestantes"
    ],
    tipo: "sistematica",
    cohorte: "embarazo,70a+"
  }
};

// ===================================================
// CALENDARIO POR EDAD
// ===================================================

const CALENDARIO_POR_EDAD = [
  {
    label: "Recién nacido (0 meses)",
    edadMin_m: 0, edadMax_m: 0,
    vacunas: [
      { sigla: "VRS", tipo: "sistematica", nota: "Grupo 1B (oct-mar): en maternidad lo antes posible" },
      { sigla: "HB", tipo: "condicional", nota: "Solo si madre HBsAg+ o desconocido" }
    ]
  },
  {
    label: "2 meses",
    edadMin_m: 2, edadMax_m: 2,
    vacunas: [
      { sigla: "HEX", tipo: "sistematica", nota: "Muslo derecho: hexavalente (Hexyon®) + neumococo (Prevenar 20®)" },
      { sigla: "VNC20", tipo: "sistematica", nota: "Con hexavalente" },
      { sigla: "MenB", tipo: "sistematica", nota: "Muslo izquierdo (Bexsero®)" },
      { sigla: "RV", tipo: "sistematica", nota: "VÍA ORAL (Rotarix®) — disponible desde feb 2026" }
    ]
  },
  {
    label: "4 meses",
    edadMin_m: 4, edadMax_m: 4,
    vacunas: [
      { sigla: "HEX", tipo: "sistematica", nota: "Muslo derecho: hexavalente + neumococo" },
      { sigla: "VNC20", tipo: "sistematica", nota: "Con hexavalente" },
      { sigla: "MenACWY", tipo: "sistematica", nota: "Muslo izquierdo: Nimenrix® + Bexsero®" },
      { sigla: "MenB", tipo: "sistematica", nota: "Con MenACWY" },
      { sigla: "RV", tipo: "sistematica", nota: "VÍA ORAL (2ª dosis)" }
    ]
  },
  {
    label: "6 meses",
    edadMin_m: 6, edadMax_m: 6,
    vacunas: [
      { sigla: "VNC20", tipo: "sistematica", nota: "3ª dosis neumococo (Prevenar 20®)" }
    ]
  },
  {
    label: "11 meses",
    edadMin_m: 11, edadMax_m: 11,
    vacunas: [
      { sigla: "HEX", tipo: "sistematica", nota: "Muslo derecho: hexavalente (3ª dosis)" },
      { sigla: "VNC20", tipo: "sistematica", nota: "Muslo izquierdo: neumococo (4ª dosis, refuerzo)" }
    ]
  },
  {
    label: "12 meses",
    edadMin_m: 12, edadMax_m: 12,
    vacunas: [
      { sigla: "MenACWY", tipo: "sistematica", nota: "Muslo izquierdo: Menquadfi® · Con triple vírica" },
      { sigla: "TV", tipo: "sistematica", nota: "Muslo derecho: 1ª dosis triple vírica (M-M-RvaxPro®)" }
    ]
  },
  {
    label: "15 meses",
    edadMin_m: 15, edadMax_m: 15,
    vacunas: [
      { sigla: "VVZ", tipo: "sistematica", nota: "Muslo derecho: varicela (Varivax®)" },
      { sigla: "MenB", tipo: "sistematica", nota: "Muslo izquierdo: refuerzo MenB (Bexsero®)" }
    ]
  },
  {
    label: "6 a 23 meses (campaña gripal)",
    edadMin_m: 6, edadMax_m: 23,
    estacional: true,
    vacunas: [
      { sigla: "GRIPE", tipo: "estacional", nota: "Campaña otoño-invierno. IM: Influvac® o Flucelvax®" }
    ]
  },
  {
    label: "2-3 años",
    edadMin_y: 2, edadMax_y: 3,
    vacunas: [
      { sigla: "TV", tipo: "sistematica", nota: "NOVEDAD 2026: 2ª dosis adelantada. Brazo izquierdo. Con varicela" },
      { sigla: "VVZ", tipo: "sistematica", nota: "NOVEDAD 2026: 2ª dosis adelantada. Brazo derecho. Con triple vírica" }
    ]
  },
  {
    label: "2-4 años (campaña gripal)",
    edadMin_y: 2, edadMax_y: 4,
    estacional: true,
    vacunas: [
      { sigla: "GRIPE", tipo: "estacional", nota: "Fluenz® intranasal (campaña escolar)" }
    ]
  },
  {
    label: "6 años",
    edadMin_y: 6, edadMax_y: 6,
    vacunas: [
      { sigla: "DTPa_VPI", tipo: "sistematica", nota: "Brazo no dominante: Tetraxim® (refuerzo con polio)" }
    ]
  },
  {
    label: "12 años",
    edadMin_y: 12, edadMax_y: 12,
    vacunas: [
      { sigla: "MenACWY", tipo: "sistematica", nota: "Brazo dominante: Menquadfi® · Con VPH" },
      { sigla: "VPH", tipo: "sistematica", nota: "Brazo no dominante: Gardasil 9® · 1 dosis" },
      { sigla: "VVZ", tipo: "rescate", nota: "Brazo dominante: si no antecedente de varicela ni 2 dosis" },
      { sigla: "TV", tipo: "rescate", nota: "Si no 2 dosis de triple vírica" }
    ]
  },
  {
    label: "13-18 años",
    edadMin_y: 13, edadMax_y: 18,
    vacunas: [
      { sigla: "MenACWY", tipo: "rescate", nota: "Rescate: si no han recibido MenACWY desde los 10 años" },
      { sigla: "VPH", tipo: "rescate", nota: "NOVEDAD 2026: rescate ampliado hasta 21 años (sin dosis previa)" },
      { sigla: "Tdpa", tipo: "rescate", nota: "14 años (cohorte 2012): 1 dosis. Rescate 15-18a si no Td/Tdpa" }
    ]
  },
  {
    label: "19-21 años",
    edadMin_y: 19, edadMax_y: 21,
    vacunas: [
      { sigla: "VPH", tipo: "rescate", nota: "NOVEDAD 2026: rescate si no han recibido ninguna dosis de VPH" }
    ]
  },
  {
    label: "Embarazadas",
    especial: "embarazo",
    vacunas: [
      { sigla: "Tdpa", tipo: "sistematica", nota: "Semana 27 (preferentemente 27-28). En cada embarazo" },
      { sigla: "GRIPE", tipo: "sistematica", nota: "Cualquier trimestre. Solo campaña otoño-invierno" },
      { sigla: "COVID", tipo: "sistematica", nota: "Cualquier trimestre. Comirnaty® (ARNm)" }
    ]
  },
  {
    label: "Puerperio (primeros 6 meses)",
    especial: "puerperio",
    vacunas: [
      { sigla: "Tdpa", tipo: "sistematica", nota: "Si no se administró en el embarazo" },
      { sigla: "GRIPE", tipo: "sistematica", nota: "Si no se administró en el embarazo" },
      { sigla: "COVID", tipo: "sistematica", nota: "Si no se administró en el embarazo" }
    ]
  },
  {
    label: "≥ 60 años (campaña gripal)",
    edadMin_y: 60,
    estacional: true,
    vacunas: [
      { sigla: "GRIPE", tipo: "estacional", nota: "1 dosis anual. Efluelda® para institucionalizados y ≥80 años" }
    ]
  },
  {
    label: "60-80 años",
    edadMin_y: 60, edadMax_y: 80,
    vacunas: [
      { sigla: "VNC20", tipo: "sistematica", nota: "NOVEDAD 2026: ampliada de 76 a 80 años. 1 dosis si no vacunados con VNC13/15/20" }
    ]
  },
  {
    label: "65 años",
    edadMin_y: 65, edadMax_y: 65,
    vacunas: [
      { sigla: "HZ", tipo: "sistematica", nota: "Shingrix®: 2 dosis (intervalo mín. 2 meses)" },
      { sigla: "Td", tipo: "sistematica", nota: "1 dosis si recibieron 5 dosis en infancia/adolescencia" }
    ]
  },
  {
    label: "66-67 años",
    edadMin_y: 66, edadMax_y: 67,
    vacunas: [
      { sigla: "HZ", tipo: "rescate", nota: "Rescate cohortes 1959-1960: si no han iniciado o completado pauta" }
    ]
  },
  {
    label: "≥ 70 años",
    edadMin_y: 70,
    vacunas: [
      { sigla: "COVID", tipo: "sistematica", nota: "1 dosis anual" }
    ]
  }
];

// ===================================================
// GRUPOS DE RIESGO
// ===================================================

const GRUPOS_RIESGO = [
  {
    id: "neumococo",
    titulo: "Neumococo (ENI) en grupos de riesgo",
    categoria: "neumococo",
    riesgoAlto: [
      "Receptores de trasplante de progenitores hematopoyéticos (TPH) o de órgano sólido (TOS)",
      "Inmunodeficiencias primarias/congénitas o adquiridas (excl. déficit selectivo de IgA)",
      "Cualquier neoplasia maligna, hematológica o de órgano sólido",
      "Infección por VIH",
      "Insuficiencia renal crónica estadios 4-5 (filtrado < 30 ml/min/1.73 m²) o síndrome nefrótico",
      "Enfermedades crónicas con tratamiento inmunosupresor (EII, enf. reumatológicas, asma grave, etc.)",
      "Asplenia anatómica o funcional (incl. drepanocitosis y hemoglobinopatías graves)",
      "Tratamiento con inhibidores del complemento (eculizumab, ravulizumab, crovalimab…)",
      "Síndrome de Down",
      "Fístula de líquido cefalorraquídeo",
      "Portadores de implantes cocleares"
    ],
    riesgoModerado: [
      "Enfermedad cardiovascular crónica (excl. HTA)",
      "Enfermedades respiratorias crónicas (EPOC, fibrosis quística, asma sin inmunosupresores)",
      "Enfermedad neurológica crónica con dificultad en manejo de secreciones",
      "Enfermedad hepática crónica / cirrosis",
      "Enfermedad celiaca",
      "Diabetes mellitus",
      "Alcoholismo",
      "Tabaquismo (≥ 1 cigarrillo/día)",
      "Antecedente de ENI",
      "COVID-19 grave con hospitalización",
      "Personas institucionalizadas en residencias de mayores"
    ],
    pauta: "VNC20 (Prevenar 20®) únicamente. Pauta según edad y antecedentes vacunales. Ver tablas 3, 4 y 5 del documento.",
    notas: [
      "Grupo 1 (alto riesgo) ≥5 años: 1 dosis única VNC20",
      "Grupo 2 (moderado riesgo) ≥5 años: 1 dosis si no vacunados, o según condiciones específicas",
      "Intervalo mínimo tras VNC13: ≥ 6 meses; tras VNP23: ≥ 12 meses",
      "Receptores de TPH: pauta especial de 3 dosis primarias + refuerzo"
    ]
  },
  {
    id: "herpes",
    titulo: "Herpes zóster en grupos de riesgo",
    categoria: "herpes",
    indicaciones: [
      "TPH: si < 24 meses post-trasplante, o con tratamiento inmunosupresor activo, o con EICH",
      "Trasplante de órgano sólido (TOS) o en espera del mismo",
      "Hemopatías malignas (leucemias, linfomas) mientras no estén de alta médica",
      "Tumores sólidos en tratamiento activo con quimioterapia o en últimos 6 meses",
      "Tratamiento con fármacos anti-JAK (tofacitinib, baricitinib, upadacitinib, ruxolitinib…)",
      "Tratamiento con inmunomoduladores/inmunosupresores: anti-TNF, anti-IL, rituximab, ocrelizumab, fingolimod, metotrexato > 20mg/sem, azatioprina > 3mg/kg/día, etc.",
      "Corticoides sistémicos: ≥20mg/día prednisolona >10 días en mes previo; ≥10mg/día >4 semanas en 3 meses previos",
      "Infección por VIH (independientemente del grado de inmunodepresión)",
      "Antecedente de 2 o más episodios de herpes zóster"
    ],
    pauta: "Shingrix® (HZ/su): 2 dosis con intervalo óptimo de 2-6 meses (mínimo 4 semanas)",
    notas: [
      "⚠️ Indicado en personas ≥ 18 años",
      "Vacuna INACTIVADA: puede usarse en inmunodeprimidos",
      "Momento óptimo: idealmente completar pauta ≥2-4 semanas antes del inicio de inmunosupresión",
      "TPH alogénico: iniciar a partir de 6 meses post-trasplante",
      "TPH autólogo: iniciar a partir de 3 meses post-trasplante",
      "TOS: completar ≥2 semanas antes del trasplante, o a partir de 4 meses post-trasplante",
      "VIH con CD4 ≥200/µl: vacunar sin espera; CD4 <200/µl: valorar individualmente",
      "Grupos de menor complejidad (VIH estables, 2+ episodios HZ): Atención Primaria",
      "Grupos de mayor complejidad: valorar y planificar en Medicina Preventiva"
    ]
  },
  {
    id: "meningococo",
    titulo: "Meningococo B y ACWY en grupos de riesgo",
    categoria: "meningococo",
    indicacionesMenB: [
      "Asplenia anatómica o disfunción esplénica grave (incl. drepanocitosis)",
      "Deficiencia de properdina o factores terminales del complemento",
      "Tratamiento con inhibidores del complemento (eculizumab, ravulizumab…)",
      "Trasplante de progenitores hematopoyéticos",
      "Personal de laboratorio con exposición a N. meningitidis",
      "Antecedente de episodio de EMI",
      "Situación de brote declarado por la autoridad sanitaria"
    ],
    indicacionesMenACWY: [
      "Asplenia anatómica o disfunción esplénica grave",
      "Deficiencia de properdina o complemento terminal",
      "Tratamiento con inhibidores del complemento",
      "TPH",
      "Infección por VIH",
      "Viajeros a zonas endémicas (cinturón africano; obligatoria para peregrinación a La Meca)",
      "Personal de laboratorio",
      "Antecedente de EMI",
      "Contactos cercanos de caso confirmado por serogrupos A, C, W o Y",
      "Brote declarado"
    ],
    pauta: "MenB: Bexsero® (pauta según edad, tabla 7) + refuerzo al año + cada 5 años en algunos grupos. MenACWY: Nimenrix® (<12m) / Menquadfi® (≥12m) · 2 dosis (intervalo ≥8 sem) + refuerzo c/5 años.",
    notas: [
      "Profilaxis posexposición a EMI por serogrupos A/C/W/Y: dar MenACWY Y quimioprofilaxis (ésta primero)",
      "Profilaxis posexposición a EMI por serogrupo B: NO vacunación, solo quimioprofilaxis",
      "Contactos: riesgo aumentado en primeros 7-10 días; quimioprofilaxis en primeras 24h",
      "MenB y MenACWY pueden coadministrarse el mismo día (brazos/muslos distintos)",
      "Viajeros: acudir al Centro de Vacunación Internacional"
    ]
  },
  {
    id: "vph",
    titulo: "Papilomavirus (VPH) en grupos de riesgo",
    categoria: "vph",
    indicaciones: [
      "Mujeres con lesiones preneoplásicas de cérvix de alto grado (CIN2/CIN3) tratadas quirúrgicamente → SIN límite de edad superior",
      "Síndrome de WHIM (hombres y mujeres, desde los 9 años) → Sin límite de edad",
      "Infección por VIH hasta 45 años",
      "Trasplante de órgano sólido hasta 45 años",
      "Trasplante de progenitores hematopoyéticos hasta 45 años (desde 12 meses post-trasplante)",
      "Trabajadores sexuales hasta 45 años",
      "Hombres que tienen sexo con hombres (HSH) hasta 45 años"
    ],
    pauta: "Gardasil 9®. CIN2/3 + WHIM + VIH + trasplantes: 3 dosis (0, 2 y 6 meses). HSH y trabajadores sexuales < 26a: 1 dosis; 26-45a: 2 dosis (0, 6 meses).",
    notas: [
      "Mujeres con CIN2/3 tratadas: financiada sin límite de edad",
      "No recomendada durante el embarazo",
      "Compatible con lactancia materna",
      "Dosis previas de Cervarix® o Gardasil® son válidas; completar pauta con Gardasil 9®"
    ]
  },
  {
    id: "hepatitis",
    titulo: "Hepatitis A y B en grupos de riesgo",
    categoria: "hepatitis",
    indicacionesHepA: [
      "Contactos estrechos de caso de hepatitis A (profilaxis posexposición)",
      "Enfermedad hepática crónica / alcoholismo / cirrosis (incl. hepatitis B o C crónica)",
      "Personas con fármacos hepatotóxicos",
      "Trasplante (o pretrasplante) de órgano sólido o TPH",
      "Infección por VIH",
      "Síndrome de Down",
      "Hombres con sexo con hombres (HSH)",
      "Profesionales de la prostitución / uso de drogas",
      "Riesgo ocupacional (laboratorios, aguas residuales, sanitarios…)",
      "Viaje a zonas de alta/moderada endemicidad"
    ],
    indicacionesHepB: [
      "Contactos sexuales y convivientes con HBsAg+",
      "Profilaxis posexposición",
      "Enfermedad renal crónica (prediálisis/diálisis)",
      "Enfermedad hepática crónica / cirrosis",
      "Trasplante de órgano sólido o TPH",
      "Infección por VIH",
      "Síndrome de Down / ITS reciente / reclusos / conductas de riesgo",
      "Riesgo ocupacional sanitario"
    ],
    pauta: "Hep A: 2 dosis (intervalo ≥ 6 meses). Hep B: 3 dosis (0, 1 y 6 meses). Para diálisis/prediálisis: vacunas específicas de alta carga (Fendrix® o HBVAXPRO 40®).",
    notas: [
      "Profilaxis posexposición hep A: administrar en primeras 2 semanas",
      "Para protección conjunta A+B puede usarse Twinrix® (0, 1, 6 meses)",
      "En inmunodeprimidos: serología post-vacunal a los 2-3 meses; repetir serie si no respondedores",
      "Viajeros: centros de Vacunación Internacional; vacuna ≥2 semanas antes del viaje",
      "En personas con VIH y CD4 <350: pueden necesitar 3 dosis de hep A (0, 1, 6 meses)"
    ]
  },
  {
    id: "mpox",
    titulo: "Mpox (viruela del mono) en grupos de riesgo",
    categoria: "mpox",
    indicacionesPreexp: [
      "Personas con prácticas sexuales de riesgo (GBHSH y otros): múltiples parejas, sexo grupal, ITS bacteriana en último año",
      "Profesionales sanitarios de ITS/VIH que atienden pacientes de alto riesgo",
      "Trabajadores de laboratorio con muestras potencialmente contaminadas con mpox",
      "Personal de limpieza de locales de sexo de riesgo",
      "Viajeros a países afectados por clado I de mpox con contacto estrecho con población local o fauna salvaje"
    ],
    indicacionesPosexp: [
      "Contactos estrechos de caso de mpox que no hayan pasado la enfermedad",
      "Especialmente: inmunodeprimidos (VIH CD4 <200), embarazadas y población infantil",
      "Personal sanitario con contacto cercano (<1m) sin EPI o con incidencia en su uso"
    ],
    pauta: "Jynneos® / Imvanex® (equivalentes). Preexposición: 2 dosis SC 0,5 ml (intervalo ≥4 semanas). Posexposición: 1 dosis SC 0,5 ml en primeros 4 días (máx. 14 días).",
    notas: [
      "⚠️ Solo disponible en Medicina Preventiva de hospitales del SAS (no en farmacia privada)",
      "Vía subcutánea (0,5 ml). Vía intradérmica (0,1 ml) solo en situaciones especiales, NUNCA en < 18 años, embarazadas ni inmunodeprimidos",
      "No recomendada en personas que ya han pasado mpox (salvo inmunodeprimidos con CD4 <200 en VIH)",
      "Puede coadministrarse con otras vacunas inactivadas y atenuadas",
      "Para viajes: acudir ≥6-8 semanas antes para completar la pauta de 2 dosis",
      "Antecedente de vacuna de viruela: NO tiene en cuenta para dosis de mpox (administrar igualmente)"
    ]
  }
];

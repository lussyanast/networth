const categories = [
  {
    id: "cash",
    type: "asset",
    title: "Cash & Tabungan",
    description: "Uang tunai dan aset paling likuid yang bisa dipakai kapan saja.",
    accent: "#15a46f",
    accentSoft: "rgba(21, 164, 111, 0.12)",
    items: [
      { id: "cash_home", label: "Uang tunai di rumah", tags: ["liquid"] },
      { id: "bank_savings", label: "Tabungan bank", tags: ["liquid"] },
      { id: "checking_account", label: "Rekening giro", tags: ["liquid"] },
      { id: "digital_bank", label: "Bank digital", tags: ["liquid"] },
      { id: "cooperative_savings", label: "Simpanan koperasi" },
      { id: "deposit", label: "Deposito", tags: ["liquid"] },
      { id: "ewallet", label: "Saldo e-wallet", tags: ["liquid"] },
      { id: "foreign_currency", label: "Valuta asing", tags: ["liquid"] }
    ]
  },
  {
    id: "investment",
    type: "asset",
    title: "Investasi",
    description: "Portofolio jangka pendek maupun panjang yang sudah kamu miliki.",
    accent: "#0f7bff",
    accentSoft: "rgba(15, 123, 255, 0.12)",
    items: [
      { id: "stocks", label: "Saham", tags: ["productive"] },
      { id: "mutual_funds", label: "Reksa dana", tags: ["productive"] },
      { id: "money_market_fund", label: "RDPU / pasar uang", tags: ["liquid", "productive"] },
      { id: "bonds", label: "Obligasi / SBN", tags: ["productive"] },
      { id: "etf_index_fund", label: "ETF / index fund", tags: ["productive"] },
      { id: "us_stocks", label: "Saham / ETF luar negeri", tags: ["productive"] },
      { id: "p2p_lending", label: "P2P lending / pendanaan", tags: ["productive"] },
      { id: "employee_shares", label: "RSU / saham karyawan vested", tags: ["productive"] },
      { id: "private_equity", label: "Private equity / startup", tags: ["productive"] },
      { id: "crypto", label: "Crypto", tags: ["productive"] },
      { id: "gold", label: "Emas" }
    ]
  },
  {
    id: "property",
    type: "asset",
    title: "Properti",
    description: "Aset fisik bernilai besar yang biasanya jadi komponen utama kekayaan.",
    accent: "#c17a21",
    accentSoft: "rgba(193, 122, 33, 0.12)",
    items: [
      { id: "house", label: "Rumah" },
      { id: "apartment", label: "Apartemen" },
      { id: "land", label: "Tanah" },
      { id: "rental_property", label: "Properti sewa", tags: ["productive"] },
      { id: "shop_house", label: "Ruko / kios", tags: ["productive"] }
    ]
  },
  {
    id: "vehicle",
    type: "asset",
    title: "Kendaraan",
    description: "Kendaraan pribadi yang masih punya nilai jual saat ini.",
    accent: "#8359ff",
    accentSoft: "rgba(131, 89, 255, 0.12)",
    items: [
      { id: "car", label: "Mobil" },
      { id: "motorcycle", label: "Motor" },
      { id: "commercial_vehicle", label: "Kendaraan usaha", tags: ["productive"] }
    ]
  },
  {
    id: "other_assets",
    type: "asset",
    title: "Aset Lain",
    description: "Barang berharga atau perlengkapan mahal yang ingin kamu hitung.",
    accent: "#ff7a59",
    accentSoft: "rgba(255, 122, 89, 0.12)",
    items: [
      { id: "jewelry", label: "Perhiasan" },
      { id: "gadgets", label: "Laptop / gadget mahal" },
      { id: "luxury_goods", label: "Barang berharga lainnya" },
      { id: "collectibles", label: "Jam / koleksi / memorabilia" }
    ]
  },
  {
    id: "business_receivables",
    type: "asset",
    title: "Bisnis, Piutang & Klaim",
    description: "Nilai usaha, tagihan masuk, refund, dan klaim yang masih jadi hakmu.",
    accent: "#059669",
    accentSoft: "rgba(5, 150, 105, 0.12)",
    items: [
      { id: "business_equity", label: "Kepemilikan bisnis", tags: ["productive"] },
      { id: "personal_receivables", label: "Piutang pribadi" },
      { id: "invoice_receivables", label: "Piutang usaha / invoice", tags: ["productive"] },
      { id: "security_deposit", label: "Deposito / uang jaminan" },
      { id: "business_inventory", label: "Persediaan / stok usaha", tags: ["productive"] },
      { id: "business_equipment", label: "Alat / mesin usaha", tags: ["productive"] },
      { id: "bonus_claim", label: "Bonus / komisi tertagih" },
      { id: "refund_claim", label: "Refund pajak / reimburse" }
    ]
  },
  {
    id: "retirement_protection",
    type: "asset",
    title: "Pensiun & Proteksi",
    description: "Instrumen jangka panjang yang sering terlupa tapi tetap bagian dari net worth.",
    accent: "#7c3aed",
    accentSoft: "rgba(124, 58, 237, 0.12)",
    items: [
      { id: "pension_fund", label: "Dana pensiun", tags: ["productive"] },
      { id: "jht_bpjstk", label: "JHT / BPJS TK", tags: ["productive"] },
      { id: "private_retirement", label: "DPLK / pensiun swasta", tags: ["productive"] },
      { id: "insurance_cash_value", label: "Nilai tunai asuransi" },
      { id: "goal_based_fund", label: "Dana pendidikan / tujuan", tags: ["productive"] }
    ]
  },
  {
    id: "debt",
    type: "liability",
    title: "Utang",
    description: "Seluruh kewajiban finansial yang mengurangi total kekayaan bersihmu.",
    accent: "#d6524a",
    accentSoft: "rgba(214, 82, 74, 0.12)",
    items: [
      { id: "mortgage", label: "KPR rumah", tags: ["securedDebt"] },
      { id: "car_loan", label: "Kredit mobil", tags: ["consumerDebt"] },
      { id: "kta", label: "KTA", tags: ["consumerDebt"] },
      { id: "credit_card", label: "Kartu kredit", tags: ["consumerDebt"] },
      { id: "paylater", label: "PayLater", tags: ["consumerDebt"] },
      { id: "personal_debt", label: "Utang keluarga / teman", tags: ["consumerDebt"] },
      { id: "student_loan", label: "Pinjaman pendidikan", tags: ["consumerDebt"] },
      { id: "online_loan", label: "Pinjol / cicilan digital", tags: ["consumerDebt"] },
      { id: "business_loan", label: "Pinjaman usaha", tags: ["productiveDebt"] },
      { id: "vendor_debt", label: "Utang vendor / supplier", tags: ["productiveDebt"] },
      { id: "margin_loan", label: "Margin / pinjaman investasi", tags: ["productiveDebt"] },
      { id: "electronics_installment", label: "Cicilan elektronik / furniture", tags: ["consumerDebt"] },
      { id: "medical_bill", label: "Tagihan medis / rumah sakit", tags: ["consumerDebt"] },
      { id: "tax_due", label: "Pajak / tagihan terutang", tags: ["consumerDebt"] }
    ]
  }
];

const viewPresets = [
  {
    id: "all",
    label: "Semua",
    description: "Semua kategori input sedang ditampilkan.",
    categoryIds: categories.map((category) => category.id)
  },
  {
    id: "personal",
    label: "Pribadi",
    description: "Fokus ke cash, properti, kendaraan, aset lain, dan utang harian.",
    categoryIds: ["cash", "property", "vehicle", "other_assets", "debt"]
  },
  {
    id: "investment",
    label: "Investasi",
    description: "Fokus ke cash, investasi, pensiun, dan kategori yang biasa dipakai membangun aset.",
    categoryIds: ["cash", "investment", "property", "retirement_protection"]
  },
  {
    id: "business",
    label: "Bisnis",
    description: "Fokus ke kas, piutang usaha, alat bisnis, dan utang yang sering terkait operasional.",
    categoryIds: ["cash", "business_receivables", "vehicle", "property", "debt"]
  },
  {
    id: "retirement",
    label: "Pensiun",
    description: "Fokus ke investasi jangka panjang, dana pensiun, dan proteksi.",
    categoryIds: ["cash", "investment", "retirement_protection"]
  }
];

const profileTemplates = [
  {
    id: "general",
    label: "Umum",
    title: "Cek semua area utama dulu",
    description: "Mulai dari cash, investasi, utang, lalu lengkapi aset besar seperti properti atau kendaraan bila memang ada.",
    viewPreset: "all",
    focusPoints: [
      "Mulai dari cash dan tabungan",
      "Cek investasi inti yang sudah berjalan",
      "Jangan lupa utang aktif utama",
      "Lengkapi aset besar terakhir"
    ]
  },
  {
    id: "employee",
    label: "Karyawan",
    title: "Prioritaskan gaji, tabungan, cicilan, dan dana pensiun",
    description: "Biasanya yang paling penting dicek dulu adalah cash, utang pribadi aktif, investasi rutin, dan akun pensiun atau benefit kerja.",
    viewPreset: "personal",
    focusPoints: [
      "Cash & Tabungan",
      "Utang aktif seperti kartu kredit atau KPR",
      "Investasi rutin",
      "JHT / dana pensiun / proteksi"
    ]
  },
  {
    id: "freelancer",
    label: "Freelancer",
    title: "Perkuat buffer kas dan pantau tagihan masuk",
    description: "Pemasukan yang tidak selalu tetap biasanya butuh fokus lebih besar ke dana aman, piutang, dan arus kewajiban yang berjalan.",
    viewPreset: "business",
    focusPoints: [
      "Cash & Tabungan lebih tebal",
      "Piutang pribadi atau invoice",
      "Dana darurat lebih panjang",
      "Utang yang mengganggu cashflow"
    ]
  },
  {
    id: "business_owner",
    label: "Owner Bisnis",
    title: "Lihat pemisahan aset usaha dan kewajiban operasional",
    description: "Fokus awal biasanya ada di kas, piutang, stok, alat bisnis, kendaraan usaha, dan utang vendor atau pinjaman usaha.",
    viewPreset: "business",
    focusPoints: [
      "Kas usaha dan kas pribadi",
      "Piutang usaha / invoice",
      "Persediaan dan alat bisnis",
      "Utang vendor / pinjaman usaha"
    ]
  },
  {
    id: "investor",
    label: "Investor",
    title: "Fokus ke pertumbuhan aset dan horizon jangka panjang",
    description: "Pola ini cocok untuk user yang ingin cepat melihat komposisi portofolio, target net worth, dan arah pertumbuhan tahunan.",
    viewPreset: "investment",
    focusPoints: [
      "Investasi inti dan portofolio global",
      "Dana pensiun / proteksi",
      "Target net worth",
      "Proyeksi pertumbuhan"
    ]
  }
];

const storageKey = "networth-tracker-v1";
const storageModeKey = "networth-tracker-storage-mode";
const maskModeKey = "networth-tracker-mask-mode";
const defaultOpenCategoryIds = ["cash", "investment", "debt"];
const debtPriorityRules = {
  online_loan: { score: 100, badge: "Segera", tone: "critical", reason: "Biaya dan tekanannya biasanya paling agresif." },
  credit_card: { score: 98, badge: "Segera", tone: "critical", reason: "Bunga revolving umumnya tinggi dan cepat menumpuk." },
  margin_loan: { score: 95, badge: "Segera", tone: "critical", reason: "Nilainya sensitif terhadap pergerakan aset dan risiko margin call." },
  paylater: { score: 92, badge: "Tinggi", tone: "high", reason: "Sering terasa kecil, tapi mudah menumpuk dan mengganggu cashflow." },
  kta: { score: 90, badge: "Tinggi", tone: "high", reason: "Pinjaman tanpa agunan umumnya punya biaya yang tidak ringan." },
  electronics_installment: { score: 86, badge: "Tinggi", tone: "high", reason: "Cicilan konsumtif sebaiknya tidak dibiarkan panjang." },
  tax_due: { score: 84, badge: "Tinggi", tone: "high", reason: "Tagihan pajak layak cepat dibereskan supaya tidak menambah beban." },
  medical_bill: { score: 82, badge: "Tinggi", tone: "high", reason: "Tagihan medis sebaiknya segera dirapikan agar tidak mengganggu ruang gerak." },
  personal_debt: { score: 78, badge: "Perlu dijaga", tone: "medium", reason: "Selain nominal, hubungan personalnya juga perlu dijaga." },
  student_loan: { score: 72, badge: "Menengah", tone: "medium", reason: "Pantau ritme cicilan dan jangan sampai menghambat prioritas lain." },
  vendor_debt: { score: 70, badge: "Menengah", tone: "medium", reason: "Penting untuk menjaga arus kas usaha dan hubungan supplier." },
  business_loan: { score: 68, badge: "Menengah", tone: "medium", reason: "Tetap perlu kontrol, meski biasanya terkait aset atau arus usaha." },
  car_loan: { score: 58, badge: "Terjadwal", tone: "scheduled", reason: "Nominalnya bisa besar, tapi biasanya ritmenya lebih terstruktur." },
  mortgage: { score: 54, badge: "Terjadwal", tone: "scheduled", reason: "Biasanya tenor panjang dan lebih cocok dikelola disiplin per periode." }
};
let storageMode = getInitialStorageMode();
const state = loadState();

const categoryGrid = document.getElementById("categories-grid");
const breakdownList = document.getElementById("breakdown-list");
const compositionBar = document.getElementById("balance-composition-bar");
const compositionLegend = document.getElementById("balance-composition-legend");
const compositionNote = document.getElementById("balance-composition-note");
const debtPriorityList = document.getElementById("debt-priority-list");
const debtPriorityNote = document.getElementById("debt-priority-note");
const fillDemoButton = document.getElementById("fill-demo");
const resetButton = document.getElementById("reset-all");
const searchInput = document.getElementById("category-search");
const resultsCaption = document.getElementById("results-caption");
const categoryJumpList = document.getElementById("category-jump-list");
const expandVisibleButton = document.getElementById("expand-visible");
const collapseVisibleButton = document.getElementById("collapse-visible");
const toggleSensitiveButton = document.getElementById("toggle-sensitive");
const privateSessionInput = document.getElementById("private-session");
const snapshotDateInput = document.getElementById("snapshot-date");
const monthlyExpenseInput = document.getElementById("monthly-expense");
const emergencyMonthsInput = document.getElementById("emergency-months");
const targetNetWorthInput = document.getElementById("target-net-worth");
const projectionMonthlyAddInput = document.getElementById("projection-monthly-add");
const projectionAnnualGrowthInput = document.getElementById("projection-annual-growth");
const exportJsonButton = document.getElementById("export-json");
const exportExcelButton = document.getElementById("export-excel");
const importButton = document.getElementById("import-data");
const wipeButton = document.getElementById("wipe-data");
const importFileInput = document.getElementById("import-file");
const importPreviewBackdrop = document.getElementById("import-preview-backdrop");
const importPreviewCloseButton = document.getElementById("import-preview-close");
const importPreviewCancelButton = document.getElementById("import-preview-cancel");
const importPreviewConfirmButton = document.getElementById("import-preview-confirm");
const importPreviewFile = document.getElementById("import-preview-file");
const importPreviewDate = document.getElementById("import-preview-date");
const importPreviewStorage = document.getElementById("import-preview-storage");
const importPreviewWarning = document.getElementById("import-preview-warning");
const importPreviewAssets = document.getElementById("import-preview-assets");
const importPreviewLiabilities = document.getElementById("import-preview-liabilities");
const importPreviewNetWorth = document.getElementById("import-preview-net-worth");
const importPreviewCategories = document.getElementById("import-preview-categories");
const importPreviewRows = document.getElementById("import-preview-rows");
const importPreviewRatio = document.getElementById("import-preview-ratio");
const importPreviewList = document.getElementById("import-preview-list");
const importCompareGrid = document.getElementById("import-compare-grid");
const importCompareList = document.getElementById("import-compare-list");
const storageModeStatus = document.getElementById("storage-mode-status");
const storageModeCopy = document.getElementById("storage-mode-copy");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const presetButtons = Array.from(document.querySelectorAll("[data-preset]"));
const presetCaption = document.getElementById("preset-caption");
const profileTemplateButtons = Array.from(document.querySelectorAll("[data-profile-template]"));
const profileFocusLabel = document.getElementById("profile-focus-label");
const profileFocusTitle = document.getElementById("profile-focus-title");
const profileFocusPreset = document.getElementById("profile-focus-preset");
const profileFocusCopy = document.getElementById("profile-focus-copy");
const profileFocusPoints = document.getElementById("profile-focus-points");
const projectionEta = document.getElementById("projection-eta");
const projectionCaption = document.getElementById("projection-caption");
const projectionStatus = document.getElementById("projection-status");
const projectionGap = document.getElementById("projection-gap");
const projectionMonthlyAddValue = document.getElementById("projection-monthly-add-value");
const projectionGrowthValue = document.getElementById("projection-growth-value");
const projectionHorizonValue = document.getElementById("projection-horizon-value");
const projectionTimeline = document.getElementById("projection-timeline");
const saveHistoryButton = document.getElementById("save-history");
const clearHistoryButton = document.getElementById("clear-history");
const historyHighlightLabel = document.getElementById("history-highlight-label");
const historyHighlightValue = document.getElementById("history-highlight-value");
const historyHighlightCopy = document.getElementById("history-highlight-copy");
const historyList = document.getElementById("history-list");
const historyNote = document.getElementById("history-note");
const uiState = {
  filter: "all",
  preset: "all",
  search: ""
};
const openCategories = new Set(defaultOpenCategoryIds);
let pendingImport = null;

uiState.preset = getProfileTemplate(state.meta?.profileTemplate).viewPreset;

applyMaskMode(getInitialMaskMode());
privateSessionInput.checked = storageMode === "session";
updateStorageModeNotice();
renderPlanningInputs();
renderProfileTemplateState();
renderCategories();
attachGlobalEvents();
updateUI();
window.addEventListener?.("keydown", handleGlobalKeydown);

function getInitialStorageMode() {
  try {
    return sessionStorage.getItem(storageModeKey) === "session" ? "session" : "local";
  } catch (error) {
    return "local";
  }
}

function getActiveStorage() {
  try {
    return storageMode === "session" ? sessionStorage : localStorage;
  } catch (error) {
    return null;
  }
}

function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDefaultMeta() {
  return {
    profileTemplate: "general",
    snapshotDate: getTodayDateString(),
    monthlyExpense: "",
    emergencyMonths: "6",
    targetNetWorth: "",
    projectionMonthlyAdd: "",
    projectionAnnualGrowth: ""
  };
}

function getEmptyState() {
  return { values: {}, custom: {}, meta: getDefaultMeta(), history: [] };
}

function applyState(nextState) {
  const normalized = normalizeStatePayload(nextState);
  state.values = normalized.values;
  state.custom = normalized.custom;
  state.meta = normalized.meta;
  state.history = normalized.history;
}

function loadState() {
  try {
    const activeStorage = getActiveStorage();
    const saved = activeStorage ? activeStorage.getItem(storageKey) : null;
    if (!saved) {
      return getEmptyState();
    }

    const parsed = JSON.parse(saved);
    return normalizeStatePayload(parsed);
  } catch (error) {
    return getEmptyState();
  }
}

function saveState() {
  const normalizedState = normalizeStatePayload(state);
  applyState(normalizedState);
  const serialized = JSON.stringify(normalizedState);

  try {
    if (storageMode === "session") {
      sessionStorage.setItem(storageModeKey, "session");
      sessionStorage.setItem(storageKey, serialized);
      localStorage.removeItem(storageKey);
      return;
    }

    localStorage.setItem(storageKey, serialized);
    sessionStorage.removeItem(storageKey);
    sessionStorage.removeItem(storageModeKey);
  } catch (error) {
    return;
  }
}

function normalizeStatePayload(payload) {
  const normalized = getEmptyState();
  const candidateValues = normalizeEntryMap(payload?.values);
  const rawCustom = payload?.custom && typeof payload.custom === "object" ? payload.custom : {};
  normalized.meta = normalizeMetaPayload(payload?.meta);
  normalized.history = normalizeHistoryPayload(payload?.history);

  categories.forEach((category) => {
    const reservedKeys = new Set();

    category.items.forEach((item) => {
      const defaultKey = `${category.id}.${item.id}`;
      reservedKeys.add(defaultKey);

      if (candidateValues[defaultKey]) {
        normalized.values[defaultKey] = candidateValues[defaultKey];
      }
    });

    const rows = Array.isArray(rawCustom[category.id]) ? rawCustom[category.id] : [];
    const seenCustomKeys = new Set();
    const safeRows = [];

    rows.forEach((row, index) => {
      const rawId = sanitizeToken(row?.id, `custom_${index + 1}`);
      let safeId = rawId;
      let safeStorageId = sanitizeStorageKey(row?.storageId, `${category.id}.${safeId}`);

      if (!safeStorageId.startsWith(`${category.id}.`)) {
        safeStorageId = `${category.id}.${safeId}`;
      }

      while (reservedKeys.has(safeStorageId) || seenCustomKeys.has(safeStorageId)) {
        safeId = sanitizeToken(`${rawId}_${safeRows.length + 1}`, `custom_${index + 1}_${safeRows.length + 1}`);
        safeStorageId = `${category.id}.${safeId}`;
      }

      const safeLabel = sanitizeText(row?.label, 80);
      seenCustomKeys.add(safeStorageId);
      safeRows.push({
        id: safeId,
        storageId: safeStorageId,
        label: safeLabel,
        isCustom: true
      });

      normalized.values[safeStorageId] = candidateValues[safeStorageId] || {
        amount: "",
        note: "",
        label: safeLabel
      };

      if (!normalized.values[safeStorageId].label && safeLabel) {
        normalized.values[safeStorageId].label = safeLabel;
      }
    });

    if (safeRows.length) {
      normalized.custom[category.id] = safeRows;
    }
  });

  return normalized;
}

function normalizeHistoryPayload(rawHistory) {
  if (!Array.isArray(rawHistory)) {
    return [];
  }

  return rawHistory
    .map((entry, index) => normalizeHistoryEntry(entry, index))
    .filter(Boolean)
    .sort((a, b) => getHistoryTimestamp(b.savedAt) - getHistoryTimestamp(a.savedAt))
    .slice(0, 24);
}

function sanitizeProfileTemplateId(value) {
  const safeValue = sanitizeToken(value, "");
  return profileTemplates.some((profile) => profile.id === safeValue) ? safeValue : "";
}

function normalizeHistoryEntry(entry, index = 0) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const savedAt = sanitizeIsoDateTime(entry.savedAt) || new Date().toISOString();
  const snapshotDate = sanitizeDateValue(entry.snapshotDate) || getTodayDateString();
  const id = sanitizeToken(entry.id, `history_${index + 1}`);

  return {
    id,
    savedAt,
    snapshotDate,
    netWorth: Number.parseInt(sanitizeNumber(entry.netWorth), 10) || 0,
    totalAssets: Number.parseInt(sanitizeNumber(entry.totalAssets), 10) || 0,
    totalLiabilities: Number.parseInt(sanitizeNumber(entry.totalLiabilities), 10) || 0,
    liquidAssets: Number.parseInt(sanitizeNumber(entry.liquidAssets), 10) || 0,
    debtRatio: sanitizeHistoryRatio(entry.debtRatio)
  };
}

function sanitizeIsoDateTime(value) {
  const rawValue = String(value ?? "").trim();
  if (!rawValue) {
    return "";
  }

  const parsed = new Date(rawValue);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString();
}

function sanitizeHistoryRatio(value) {
  if (value === Infinity || value === Number.POSITIVE_INFINITY) {
    return Number.POSITIVE_INFINITY;
  }

  const parsed = Number.parseFloat(String(value ?? "").replace(",", "."));
  if (!Number.isFinite(parsed)) {
    return 0;
  }

  return Math.max(0, parsed);
}

function getHistoryTimestamp(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

function normalizeMetaPayload(rawMeta) {
  const defaults = getDefaultMeta();
  const meta = rawMeta && typeof rawMeta === "object" ? rawMeta : {};
  return {
    profileTemplate: sanitizeProfileTemplateId(meta.profileTemplate) || defaults.profileTemplate,
    snapshotDate: sanitizeDateValue(meta.snapshotDate) || defaults.snapshotDate,
    monthlyExpense: sanitizeNumber(meta.monthlyExpense),
    emergencyMonths: sanitizeMonthValue(meta.emergencyMonths, defaults.emergencyMonths),
    targetNetWorth: sanitizeNumber(meta.targetNetWorth),
    projectionMonthlyAdd: sanitizeNumber(meta.projectionMonthlyAdd),
    projectionAnnualGrowth: sanitizeRateValue(meta.projectionAnnualGrowth)
  };
}

function normalizeEntryMap(rawValues) {
  if (!rawValues || typeof rawValues !== "object" || Array.isArray(rawValues)) {
    return {};
  }

  return Object.entries(rawValues).reduce((entries, [key, value]) => {
    const safeKey = sanitizeStorageKey(key);
    if (!safeKey) {
      return entries;
    }

    const rawEntry = value && typeof value === "object" ? value : { amount: value };
    entries[safeKey] = {
      amount: sanitizeNumber(rawEntry.amount),
      note: sanitizeText(rawEntry.note, 220),
      label: sanitizeText(rawEntry.label, 80)
    };
    return entries;
  }, {});
}

function sanitizeStorageKey(value, fallback = "") {
  const safeKey = String(value ?? "")
    .trim()
    .replace(/[^a-zA-Z0-9_.-]/g, "_")
    .slice(0, 120);

  if (safeKey) {
    return safeKey;
  }

  return String(fallback || "")
    .trim()
    .replace(/[^a-zA-Z0-9_.-]/g, "_")
    .slice(0, 120);
}

function sanitizeToken(value, fallback = "custom") {
  const safeToken = String(value ?? "")
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .slice(0, 80);

  return safeToken || fallback;
}

function sanitizeText(value, maxLength = 180) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function hasStateContent(snapshot = state) {
  const valueEntries = snapshot?.values && typeof snapshot.values === "object"
    ? Object.values(snapshot.values)
    : [];
  const hasValues = valueEntries.some((entry) => {
    const amount = sanitizeNumber(entry?.amount);
    const note = sanitizeText(entry?.note, 220);
    const label = sanitizeText(entry?.label, 80);
    return Boolean(amount || note || label);
  });

  const customGroups = snapshot?.custom && typeof snapshot.custom === "object"
    ? Object.values(snapshot.custom)
    : [];
  const hasCustomRows = customGroups.some((rows) => Array.isArray(rows) && rows.length > 0);

  return hasValues || hasCustomRows;
}

function clearStoredState() {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    // Ignore storage access failures and continue clearing other storage.
  }

  try {
    sessionStorage.removeItem(storageKey);
  } catch (error) {
    // Ignore storage access failures and leave in-memory state cleared.
  }
}

function resetInterfaceState() {
  uiState.filter = "all";
  uiState.preset = getProfileTemplate(state.meta?.profileTemplate).viewPreset;
  uiState.search = "";

  if (searchInput) {
    searchInput.value = "";
  }

  openCategories.clear();
  defaultOpenCategoryIds.forEach((categoryId) => openCategories.add(categoryId));
}

function renderPlanningInputs() {
  if (snapshotDateInput) {
    snapshotDateInput.value = state.meta?.snapshotDate || "";
  }

  if (monthlyExpenseInput) {
    monthlyExpenseInput.value = formatForInput(state.meta?.monthlyExpense);
  }

  if (emergencyMonthsInput) {
    emergencyMonthsInput.value = state.meta?.emergencyMonths || "";
  }

  if (targetNetWorthInput) {
    targetNetWorthInput.value = formatForInput(state.meta?.targetNetWorth);
  }

  if (projectionMonthlyAddInput) {
    projectionMonthlyAddInput.value = formatForInput(state.meta?.projectionMonthlyAdd);
  }

  if (projectionAnnualGrowthInput) {
    projectionAnnualGrowthInput.value = formatRateForInput(state.meta?.projectionAnnualGrowth);
  }
}

function getProfileTemplate(profileId = state.meta?.profileTemplate) {
  return profileTemplates.find((profile) => profile.id === profileId) || profileTemplates[0];
}

function renderProfileTemplateState() {
  const profile = getProfileTemplate();

  profileTemplateButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.profileTemplate === profile.id);
  });

  if (!profileFocusLabel || !profileFocusPoints) {
    return;
  }

  const linkedPreset = viewPresets.find((preset) => preset.id === profile.viewPreset) || viewPresets[0];
  profileFocusLabel.textContent = `Profil aktif: ${profile.label}`;
  profileFocusTitle.textContent = profile.title;
  profileFocusPreset.textContent = `Mode ${linkedPreset.label}`;
  profileFocusCopy.textContent = profile.description;
  profileFocusPoints.innerHTML = profile.focusPoints
    .map((point) => `<span class="profile-focus-point">${point}</span>`)
    .join("");
}

function updateStorageModeNotice() {
  if (!storageModeStatus || !storageModeCopy) {
    return;
  }

  if (storageMode === "session") {
    storageModeStatus.textContent = "Mode privat aktif";
    storageModeCopy.textContent = "Data hanya tersimpan di tab ini dan akan hilang saat tab ditutup.";
    return;
  }

  storageModeStatus.textContent = "Tersimpan di browser ini";
  storageModeCopy.textContent = "Data akan tetap ada saat halaman dibuka lagi di perangkat yang sama.";
}

function buildSnapshotBundle(snapshot, exportedAt = new Date()) {
  const meta = normalizeMetaPayload(snapshot?.meta);
  const historyRows = normalizeHistoryPayload(snapshot?.history);
  const categoryTotals = categories.map((category) => ({
    id: category.id,
    title: category.title,
    type: category.type,
    amount: getCategoryAmountFromSnapshot(snapshot, category)
  }));
  const totalAssets = categoryTotals
    .filter((category) => category.type === "asset")
    .reduce((sum, category) => sum + category.amount, 0);
  const totalLiabilities = categoryTotals
    .filter((category) => category.type === "liability")
    .reduce((sum, category) => sum + category.amount, 0);
  const netWorth = totalAssets - totalLiabilities;
  const liquidAssets = sumTaggedItemsFromSnapshot(snapshot, "liquid");
  const productiveAssets = sumTaggedItemsFromSnapshot(snapshot, "productive");
  const consumerDebt = sumTaggedItemsFromSnapshot(snapshot, "consumerDebt");
  const debtRatio = calculateDebtRatio(totalAssets, totalLiabilities);
  const filledDetailRows = collectDetailRows(snapshot);
  const allDetailRows = collectDetailRows(snapshot, { includeEmpty: true });
  const goals = buildGoalMetrics(meta, {
    totalAssets,
    totalLiabilities,
    netWorth,
    liquidAssets
  });

  return {
    snapshot,
    meta,
    historyRows,
    exportedAt,
    categoryTotals,
    filledDetailRows,
    allDetailRows,
    goals,
    metrics: {
      totalAssets,
      totalLiabilities,
      netWorth,
      liquidAssets,
      productiveAssets,
      consumerDebt,
      debtRatio
    }
  };
}

function buildGoalMetrics(meta, metrics) {
  const targetNetWorth = Number.parseInt(meta.targetNetWorth || "0", 10) || 0;
  const monthlyExpense = Number.parseInt(meta.monthlyExpense || "0", 10) || 0;
  const emergencyMonths = Number.parseInt(meta.emergencyMonths || "0", 10) || 0;
  const projectionMonthlyAdd = Number.parseInt(meta.projectionMonthlyAdd || "0", 10) || 0;
  const projectionAnnualGrowth = Number.parseFloat(meta.projectionAnnualGrowth || "0") || 0;
  const emergencyTarget = monthlyExpense * emergencyMonths;
  const netWorthProgress = targetNetWorth > 0 && metrics.netWorth > 0
    ? Math.max(0, Math.min(100, Math.round((metrics.netWorth / targetNetWorth) * 100)))
    : 0;
  const emergencyProgress = emergencyTarget > 0 && metrics.liquidAssets > 0
    ? Math.max(0, Math.min(100, Math.round((metrics.liquidAssets / emergencyTarget) * 100)))
    : 0;
  const coveredMonths = monthlyExpense > 0
    ? metrics.liquidAssets / monthlyExpense
    : 0;

  return {
    snapshotDate: meta.snapshotDate,
    targetNetWorth,
    monthlyExpense,
    emergencyMonths,
    projectionMonthlyAdd,
    projectionAnnualGrowth,
    emergencyTarget,
    coveredMonths,
    projection: buildProjectionMetrics({
      snapshotDate: meta.snapshotDate,
      currentNetWorth: metrics.netWorth,
      targetNetWorth,
      monthlyAddition: projectionMonthlyAdd,
      annualGrowthRate: projectionAnnualGrowth
    }),
    netWorth: {
      current: metrics.netWorth,
      target: targetNetWorth,
      progress: netWorthProgress,
      remaining: targetNetWorth > 0 ? Math.max(targetNetWorth - metrics.netWorth, 0) : 0,
      ...getNetWorthGoalStatus(metrics.netWorth, targetNetWorth, netWorthProgress)
    },
    emergencyFund: {
      current: metrics.liquidAssets,
      target: emergencyTarget,
      progress: emergencyProgress,
      remaining: emergencyTarget > 0 ? Math.max(emergencyTarget - metrics.liquidAssets, 0) : 0,
      coveredMonths,
      ...getEmergencyGoalStatus(metrics.liquidAssets, monthlyExpense, emergencyMonths, emergencyTarget, emergencyProgress, coveredMonths)
    }
  };
}

function getNetWorthGoalStatus(currentValue, targetValue, progress) {
  if (targetValue <= 0) {
    return {
      status: "Belum diatur",
      copy: "Tambahkan target net worth supaya progresnya bisa dipantau."
    };
  }

  if (currentValue >= targetValue) {
    return {
      status: "Tercapai",
      copy: "Target net worth sudah tercapai. Kamu bisa naikkan target berikutnya kalau ingin."
    };
  }

  if (progress >= 75) {
    return {
      status: "Mendekati",
      copy: "Sudah dekat dengan target. Jaga pertumbuhan aset dan tekan utang supaya garis finis makin dekat."
    };
  }

  if (progress >= 35) {
    return {
      status: "Berjalan",
      copy: "Progress sudah berjalan. Fokuskan tambahan surplus ke aset yang memang kamu prioritaskan."
    };
  }

  return {
    status: "Baru mulai",
    copy: "Target masih jauh, tapi arah perhitungannya sudah jelas begitu angka dasar rutin dicatat."
  };
}

function getEmergencyGoalStatus(liquidAssets, monthlyExpense, emergencyMonths, emergencyTarget, progress, coveredMonths) {
  if (monthlyExpense <= 0 || emergencyMonths <= 0 || emergencyTarget <= 0) {
    return {
      status: "Belum diatur",
      copy: "Isi pengeluaran bulanan dan target bulan untuk melihat dana darurat ideal."
    };
  }

  if (liquidAssets >= emergencyTarget) {
    return {
      status: "Aman",
      copy: "Dana likuidmu sudah cukup untuk menutup target dana darurat yang ditetapkan."
    };
  }

  if (coveredMonths >= Math.max(3, emergencyMonths * 0.6) || progress >= 60) {
    return {
      status: "Menuju aman",
      copy: "Bantalan kas sudah terbentuk. Tinggal tambah likuiditas sampai penuh sesuai target bulan."
    };
  }

  if (coveredMonths >= 1) {
    return {
      status: "Mulai terbentuk",
      copy: "Sudah ada dasar dana darurat, tapi porsinya masih perlu diperbesar supaya lebih aman."
    };
  }

  return {
    status: "Perlu dibangun",
    copy: "Prioritas awal yang sehat biasanya menyiapkan kas likuid minimal beberapa bulan pengeluaran."
  };
}

function buildProjectionMetrics({ snapshotDate, currentNetWorth, targetNetWorth, monthlyAddition, annualGrowthRate }) {
  const safeSnapshotDate = sanitizeDateValue(snapshotDate) || getTodayDateString();
  const horizonYears = 10;
  const horizonMonths = horizonYears * 12;
  const milestoneYears = [1, 3, 5, 10];
  const monthlyRate = annualGrowthRate > 0 ? annualGrowthRate / 100 / 12 : 0;
  const milestoneRows = milestoneYears.map((year) => {
    const projectedValue = simulateProjectedNetWorth(currentNetWorth, monthlyAddition, monthlyRate, year * 12);
    const progress = targetNetWorth > 0
      ? Math.max(0, Math.min(100, Math.round((projectedValue / targetNetWorth) * 100)))
      : 0;

    return {
      year,
      date: addMonthsToDateString(safeSnapshotDate, year * 12),
      projectedValue,
      progress
    };
  });

  if (targetNetWorth <= 0) {
    return {
      isActive: false,
      status: "Simulasi mati",
      etaLabel: "Belum diatur",
      caption: "Isi target net worth, tambahan bersih bulanan, atau growth tahunan untuk melihat simulasi.",
      gapLabel: "Belum ada target yang dihitung.",
      horizonYears,
      milestoneRows
    };
  }

  if (currentNetWorth >= targetNetWorth) {
    return {
      isActive: true,
      status: "Target aman",
      etaLabel: "Sudah tercapai",
      caption: "Target net worth saat ini sudah tercapai berdasarkan angka yang kamu isi.",
      gapLabel: `Lebih ${formatCurrency(currentNetWorth - targetNetWorth)} dari target.`,
      horizonYears,
      milestoneRows
    };
  }

  if (monthlyAddition <= 0 && annualGrowthRate <= 0) {
    return {
      isActive: true,
      status: "Perlu asumsi",
      etaLabel: "Belum bergerak",
      caption: "Target belum akan bergerak dalam simulasi kalau tambahan bersih bulanan dan growth tahunan masih nol.",
      gapLabel: `Masih kurang ${formatCurrency(targetNetWorth - currentNetWorth)} ke target.`,
      horizonYears,
      milestoneRows
    };
  }

  let reachedMonth = null;
  for (let month = 1; month <= 360; month += 1) {
    const projectedValue = simulateProjectedNetWorth(currentNetWorth, monthlyAddition, monthlyRate, month);
    if (projectedValue >= targetNetWorth) {
      reachedMonth = month;
      break;
    }
  }

  if (!reachedMonth) {
    return {
      isActive: true,
      status: "Masih jauh",
      etaLabel: "> 30 tahun",
      caption: "Dengan asumsi sekarang, target belum tercapai dalam horizon simulasi 30 tahun.",
      gapLabel: `Masih kurang ${formatCurrency(targetNetWorth - currentNetWorth)} dari posisi saat ini.`,
      horizonYears,
      milestoneRows
    };
  }

  const etaDate = addMonthsToDateString(safeSnapshotDate, reachedMonth);
  const etaLabel = formatMonthYear(etaDate);
  const yearEstimate = reachedMonth < 12
    ? `${reachedMonth} bulan lagi`
    : `${Math.floor(reachedMonth / 12)} tahun ${reachedMonth % 12 ? `${reachedMonth % 12} bulan` : ""}`.trim();

  return {
    isActive: true,
    status: reachedMonth <= 24 ? "On track" : "Perlu konsisten",
    etaLabel,
    caption: `Jika asumsi berjalan konsisten, target diperkirakan tercapai sekitar ${yearEstimate}.`,
    gapLabel: `Sisa jarak ${formatCurrency(targetNetWorth - currentNetWorth)} dari kondisi saat ini.`,
    horizonYears,
    milestoneRows
  };
}

function simulateProjectedNetWorth(startValue, monthlyAddition, monthlyRate, months) {
  let currentValue = Number(startValue || 0);

  for (let month = 0; month < months; month += 1) {
    if (currentValue > 0 && monthlyRate > 0) {
      currentValue *= (1 + monthlyRate);
    }

    currentValue += monthlyAddition;
  }

  return Math.round(currentValue);
}

function addMonthsToDateString(dateString, monthsToAdd) {
  const [year, month, day] = dateString.split("-").map((value) => Number.parseInt(value, 10));
  const date = new Date(year, (month - 1) + monthsToAdd, day || 1);
  const nextYear = date.getFullYear();
  const nextMonth = String(date.getMonth() + 1).padStart(2, "0");
  const nextDay = String(date.getDate()).padStart(2, "0");
  return `${nextYear}-${nextMonth}-${nextDay}`;
}

function renderCategories() {
  const visibleCategories = categories.filter((category) => matchesCategory(category));

  categoryGrid.innerHTML = visibleCategories.length
    ? visibleCategories
    .map((category) => {
      const totalRows = category.items.length + getCustomRows(category.id).length;
      const cardClass = [
        "category-card",
        category.type === "liability" ? "debt-category" : "asset-category",
        openCategories.has(category.id) || uiState.search ? "is-open" : "is-collapsed"
      ].filter(Boolean).join(" ");
      const defaultRows = category.items
        .map((item) => renderRow(category.id, item, false))
        .join("");
      const customRows = getCustomRows(category.id)
        .map((item) => renderRow(category.id, item, true))
        .join("");
      const isOpen = uiState.search ? true : openCategories.has(category.id);

      return `
        <section
          class="${cardClass}"
          style="--accent-color:${category.accent}; --accent-soft:${category.accentSoft};"
          data-category-id="${category.id}"
        >
          <div class="category-head">
            <div class="category-title-wrap">
              <div class="category-meta">
                <span class="category-badge">${category.type === "liability" ? "Utang" : "Aset"}</span>
                <span class="category-count">${totalRows} baris</span>
              </div>
              <h3>${category.title}</h3>
              <p class="category-description">${category.description}</p>
            </div>
            <div class="category-head-side">
              <div class="category-total">
                <span>Total</span>
                <strong id="total-${category.id}">Rp0</strong>
              </div>
              <button
                class="category-toggle"
                type="button"
                data-action="toggle-category"
                data-category="${category.id}"
                aria-expanded="${isOpen ? "true" : "false"}"
                ${uiState.search ? "disabled" : ""}
              >
                <span>${uiState.search ? "Hasil cari" : isOpen ? "Sembunyikan" : "Buka detail"}</span>
                <strong>&#9662;</strong>
              </button>
            </div>
          </div>

          <div class="category-body">
            <div class="entries-panel">
              <div class="entry-head">
                <span>Item</span>
                <span>Nominal</span>
                <span>Catatan</span>
                <span class="entry-head-action">Aksi</span>
              </div>
              <div class="entries">
                ${defaultRows}
                ${customRows}
              </div>
            </div>

            <div class="category-actions">
              <p>${category.type === "liability" ? "Isi sisa kewajiban aktif. Format Rupiah akan rapi otomatis." : "Isi nilai saat ini. Cukup ketik angka tanpa perlu titik atau Rp."}</p>
              <button class="mini-button" type="button" data-action="add-row" data-category="${category.id}">
                + Tambah baris
              </button>
            </div>
          </div>
        </section>
      `;
    })
    .join("")
    : `
      <div class="empty-state">
        <strong>Tidak ada kategori yang cocok.</strong>
        <p>Coba ganti kata pencarian atau ubah filter supaya hasilnya muncul lagi.</p>
      </div>
    `;

  updateToolbar(visibleCategories.length);
  renderCategoryJumpList(visibleCategories);
  bindCategoryEvents();
}

function renderRow(categoryId, item, isCustom) {
  const key = item.storageId || `${categoryId}.${item.id}`;
  const entry = state.values[key] || { amount: "", note: "", label: item.label };

  if (!entry.label) {
    entry.label = item.label;
  }

  return `
    <div class="entry-row ${isCustom ? "is-custom" : ""}" data-row-key="${key}">
      ${
        isCustom
          ? `<input
              class="custom-label-input"
              type="text"
              value="${escapeHtml(entry.label || "")}"
              placeholder="Nama item custom"
              data-role="custom-label"
              data-key="${key}"
            >`
          : `<div class="entry-label">${escapeHtml(item.label)}</div>`
      }
      <input
        class="entry-input"
        type="text"
        inputmode="numeric"
        placeholder="0"
        value="${formatForInput(entry.amount)}"
        data-role="amount"
        data-key="${key}"
        aria-label="${escapeHtml(item.label)}"
      >
      <input
        class="entry-note"
        type="text"
        placeholder="Catatan opsional"
        value="${escapeHtml(entry.note || "")}"
        data-role="note"
        data-key="${key}"
      >
      ${
        isCustom
          ? `<button
              class="remove-button"
              type="button"
              title="Hapus baris"
              data-action="remove-row"
              data-category="${categoryId}"
              data-key="${key}"
            >&times;</button>`
          : `<div class="entry-action-spacer" aria-hidden="true"></div>`
      }
    </div>
  `;
}

function bindCategoryEvents() {
  categoryGrid.querySelectorAll("[data-role='amount']").forEach((input) => {
    input.addEventListener("input", handleAmountInput);
    input.addEventListener("blur", handleAmountBlur);
  });

  categoryGrid.querySelectorAll("[data-role='note']").forEach((input) => {
    input.addEventListener("input", handleNoteInput);
  });

  categoryGrid.querySelectorAll("[data-role='custom-label']").forEach((input) => {
    input.addEventListener("input", handleCustomLabelInput);
  });

  categoryGrid.querySelectorAll("[data-action='add-row']").forEach((button) => {
    button.addEventListener("click", () => addCustomRow(button.dataset.category));
  });

  categoryGrid.querySelectorAll("[data-action='remove-row']").forEach((button) => {
    button.addEventListener("click", () => removeCustomRow(button.dataset.category, button.dataset.key));
  });

  categoryGrid.querySelectorAll("[data-action='toggle-category']").forEach((button) => {
    button.addEventListener("click", () => toggleCategory(button.dataset.category));
  });
}

function attachGlobalEvents() {
  fillDemoButton.addEventListener("click", fillDemoData);
  resetButton.addEventListener("click", resetAllData);
  searchInput.addEventListener("input", handleSearchInput);
  expandVisibleButton?.addEventListener("click", expandVisibleCategories);
  collapseVisibleButton?.addEventListener("click", collapseVisibleCategories);
  toggleSensitiveButton.addEventListener("click", toggleSensitiveMode);
  privateSessionInput.addEventListener("change", handlePrivateSessionChange);
  snapshotDateInput?.addEventListener("change", handleSnapshotDateChange);
  monthlyExpenseInput?.addEventListener("input", handleMonthlyExpenseInput);
  monthlyExpenseInput?.addEventListener("blur", handleMonthlyExpenseBlur);
  emergencyMonthsInput?.addEventListener("input", handleEmergencyMonthsInput);
  emergencyMonthsInput?.addEventListener("blur", handleEmergencyMonthsBlur);
  targetNetWorthInput?.addEventListener("input", handleTargetNetWorthInput);
  targetNetWorthInput?.addEventListener("blur", handleTargetNetWorthBlur);
  projectionMonthlyAddInput?.addEventListener("input", handleProjectionMonthlyAddInput);
  projectionMonthlyAddInput?.addEventListener("blur", handleProjectionMonthlyAddBlur);
  projectionAnnualGrowthInput?.addEventListener("input", handleProjectionAnnualGrowthInput);
  projectionAnnualGrowthInput?.addEventListener("blur", handleProjectionAnnualGrowthBlur);
  saveHistoryButton?.addEventListener("click", saveCurrentSnapshotToHistory);
  clearHistoryButton?.addEventListener("click", clearSnapshotHistory);
  exportJsonButton?.addEventListener("click", exportData);
  exportExcelButton?.addEventListener("click", exportExcelData);
  importButton?.addEventListener("click", () => importFileInput?.click());
  wipeButton?.addEventListener("click", wipeStoredData);
  importFileInput?.addEventListener("change", handleImportFileChange);
  importPreviewCloseButton?.addEventListener("click", closeImportPreview);
  importPreviewCancelButton?.addEventListener("click", closeImportPreview);
  importPreviewConfirmButton?.addEventListener("click", confirmImportPreview);
  importPreviewBackdrop?.addEventListener("click", (event) => {
    if (event.target === importPreviewBackdrop) {
      closeImportPreview();
    }
  });
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      uiState.filter = button.dataset.filter;
      renderCategories();
      updateUI();
    });
  });
  presetButtons.forEach((button) => {
    button.addEventListener("click", () => applyViewPreset(button.dataset.preset));
  });
  profileTemplateButtons.forEach((button) => {
    button.addEventListener("click", () => applyProfileTemplate(button.dataset.profileTemplate));
  });
}

function handleSearchInput(event) {
  uiState.search = event.target.value.trim().toLowerCase();
  renderCategories();
  updateUI();
}

function renderCategoryJumpList(visibleCategories) {
  if (!categoryJumpList) {
    return;
  }

  if (!visibleCategories.length) {
    categoryJumpList.innerHTML = `
      <div class="category-jump-empty">
        Tidak ada kategori aktif untuk dilompati. Ubah pencarian atau filter dulu.
      </div>
    `;
    return;
  }

  categoryJumpList.innerHTML = visibleCategories
    .map((category) => {
      const totalRows = category.items.length + getCustomRows(category.id).length;
      return `
        <button
          class="category-jump-button"
          type="button"
          data-action="jump-category"
          data-category="${category.id}"
          style="--jump-color:${category.accent}; --jump-soft:${category.accentSoft};"
        >
          <span class="category-jump-dot" aria-hidden="true"></span>
          <span class="category-jump-copy">
            <strong>${category.title}</strong>
            <span>${category.type === "liability" ? "Utang" : "Aset"} | ${totalRows} baris</span>
          </span>
        </button>
      `;
    })
    .join("");

  categoryJumpList.querySelectorAll("[data-action='jump-category']").forEach((button) => {
    button.addEventListener("click", () => jumpToCategory(button.dataset.category));
  });
}

function getVisibleCategories() {
  return categories.filter((category) => matchesCategory(category));
}

function getViewPreset(presetId = uiState.preset) {
  return viewPresets.find((preset) => preset.id === presetId) || viewPresets[0];
}

function applyProfileTemplate(profileId) {
  const profile = getProfileTemplate(profileId);
  state.meta.profileTemplate = profile.id;
  uiState.filter = "all";
  uiState.search = "";

  if (searchInput) {
    searchInput.value = "";
  }

  saveState();
  renderProfileTemplateState();
  applyViewPreset(profile.viewPreset);
}

function applyViewPreset(presetId) {
  uiState.preset = getViewPreset(presetId).id;

  if (!uiState.search) {
    openCategories.clear();
    if (uiState.preset === "all") {
      defaultOpenCategoryIds.forEach((categoryId) => openCategories.add(categoryId));
    } else {
      getViewPreset(uiState.preset).categoryIds.forEach((categoryId) => openCategories.add(categoryId));
    }
  }

  renderCategories();
  updateUI();
}

function expandVisibleCategories() {
  getVisibleCategories().forEach((category) => openCategories.add(category.id));
  renderCategories();
  updateUI();
}

function collapseVisibleCategories() {
  if (uiState.search) {
    return;
  }

  getVisibleCategories().forEach((category) => openCategories.delete(category.id));
  renderCategories();
  updateUI();
}

function jumpToCategory(categoryId) {
  openCategories.add(categoryId);
  renderCategories();
  updateUI();

  window.setTimeout(() => {
    const target = document.querySelector
      ? document.querySelector(`[data-category-id='${categoryId}']`)
      : null;
    target?.scrollIntoView?.({
      behavior: "smooth",
      block: "start"
    });
  }, 10);
}

function toggleSensitiveMode() {
  const nextMasked = !document.body.classList.contains("privacy-on");
  applyMaskMode(nextMasked);
}

function applyMaskMode(isMasked) {
  document.body.classList.toggle("privacy-on", isMasked);
  toggleSensitiveButton?.setAttribute("aria-pressed", String(isMasked));
  toggleSensitiveButton.textContent = isMasked ? "Tampilkan angka" : "Sembunyikan angka";

  try {
    if (isMasked) {
      sessionStorage.setItem(maskModeKey, "1");
    } else {
      sessionStorage.removeItem(maskModeKey);
    }
  } catch (error) {
    return;
  }
}

function getInitialMaskMode() {
  try {
    return sessionStorage.getItem(maskModeKey) === "1";
  } catch (error) {
    return false;
  }
}

function handlePrivateSessionChange(event) {
  storageMode = event.target.checked ? "session" : "local";
  saveState();
  updateStorageModeNotice();
}

function handleSnapshotDateChange(event) {
  state.meta.snapshotDate = sanitizeDateValue(event.target.value) || getTodayDateString();
  saveState();
  updateUI();
}

function handleMonthlyExpenseInput(event) {
  const numericValue = sanitizeNumber(event.target.value);
  state.meta.monthlyExpense = numericValue;
  event.target.value = formatForInput(numericValue);
  saveState();
  updateUI();
}

function handleMonthlyExpenseBlur(event) {
  const numericValue = sanitizeNumber(event.target.value);
  state.meta.monthlyExpense = numericValue;
  event.target.value = formatForInput(numericValue);
  saveState();
  updateUI();
}

function handleEmergencyMonthsInput(event) {
  const safeValue = sanitizeMonthValue(event.target.value, "");
  state.meta.emergencyMonths = safeValue;
  event.target.value = safeValue;
  saveState();
  updateUI();
}

function handleEmergencyMonthsBlur(event) {
  const safeValue = sanitizeMonthValue(event.target.value, getDefaultMeta().emergencyMonths);
  state.meta.emergencyMonths = safeValue;
  event.target.value = safeValue;
  saveState();
  updateUI();
}

function handleTargetNetWorthInput(event) {
  const numericValue = sanitizeNumber(event.target.value);
  state.meta.targetNetWorth = numericValue;
  event.target.value = formatForInput(numericValue);
  saveState();
  updateUI();
}

function handleTargetNetWorthBlur(event) {
  const numericValue = sanitizeNumber(event.target.value);
  state.meta.targetNetWorth = numericValue;
  event.target.value = formatForInput(numericValue);
  saveState();
  updateUI();
}

function handleProjectionMonthlyAddInput(event) {
  const numericValue = sanitizeNumber(event.target.value);
  state.meta.projectionMonthlyAdd = numericValue;
  event.target.value = formatForInput(numericValue);
  saveState();
  updateUI();
}

function handleProjectionMonthlyAddBlur(event) {
  const numericValue = sanitizeNumber(event.target.value);
  state.meta.projectionMonthlyAdd = numericValue;
  event.target.value = formatForInput(numericValue);
  saveState();
  updateUI();
}

function handleProjectionAnnualGrowthInput(event) {
  const safeValue = sanitizeRateValue(event.target.value);
  state.meta.projectionAnnualGrowth = safeValue;
  saveState();
  updateUI();
}

function handleProjectionAnnualGrowthBlur(event) {
  const safeValue = sanitizeRateValue(event.target.value);
  state.meta.projectionAnnualGrowth = safeValue;
  event.target.value = formatRateForInput(safeValue);
  saveState();
  updateUI();
}

function saveCurrentSnapshotToHistory() {
  const snapshot = normalizeStatePayload(state);
  if (!hasStateContent(snapshot)) {
    window.alert("Belum ada data yang bisa disimpan ke riwayat.");
    return;
  }

  const bundle = buildSnapshotBundle(snapshot, new Date());
  const nextEntry = buildHistoryEntryFromBundle(bundle);
  const latestEntry = state.history?.[0];

  if (
    latestEntry &&
    latestEntry.snapshotDate === nextEntry.snapshotDate &&
    latestEntry.netWorth === nextEntry.netWorth &&
    latestEntry.totalAssets === nextEntry.totalAssets &&
    latestEntry.totalLiabilities === nextEntry.totalLiabilities
  ) {
    window.alert("Snapshot terbaru sudah sama dengan kondisi saat ini.");
    return;
  }

  state.history = normalizeHistoryPayload([nextEntry, ...(state.history || [])]);
  saveState();
  updateUI();
  window.alert("Snapshot berhasil disimpan ke riwayat lokal.");
}

function clearSnapshotHistory() {
  if (!Array.isArray(state.history) || !state.history.length) {
    window.alert("Riwayat snapshot masih kosong.");
    return;
  }

  const confirmed = window.confirm("Hapus seluruh riwayat snapshot yang tersimpan di browser ini?");
  if (!confirmed) {
    return;
  }

  state.history = [];
  saveState();
  updateUI();
}

function buildHistoryEntryFromBundle(bundle) {
  return {
    id: `history_${Date.now()}`,
    savedAt: bundle.exportedAt.toISOString(),
    snapshotDate: bundle.meta.snapshotDate,
    netWorth: bundle.metrics.netWorth,
    totalAssets: bundle.metrics.totalAssets,
    totalLiabilities: bundle.metrics.totalLiabilities,
    liquidAssets: bundle.metrics.liquidAssets,
    debtRatio: bundle.metrics.debtRatio
  };
}

function getExportBundle() {
  const snapshot = normalizeStatePayload(state);
  if (!hasStateContent(snapshot)) {
    window.alert("Belum ada data yang bisa di-export.");
    return null;
  }
  return buildSnapshotBundle(snapshot, new Date());
}

function getCategoryAmountFromSnapshot(snapshot, category) {
  return category.items.reduce((sum, item) => {
    return sum + getAmountFromSnapshot(snapshot, `${category.id}.${item.id}`);
  }, 0) + getCustomRowsFromSnapshot(snapshot, category.id).reduce((sum, item) => {
    return sum + getAmountFromSnapshot(snapshot, item.storageId);
  }, 0);
}

function getAmountFromSnapshot(snapshot, key) {
  return Number.parseInt(snapshot.values[key]?.amount || "0", 10) || 0;
}

function getCustomRowsFromSnapshot(snapshot, categoryId) {
  return Array.isArray(snapshot.custom[categoryId]) ? snapshot.custom[categoryId] : [];
}

function sumTaggedItemsFromSnapshot(snapshot, tag) {
  return categories.reduce((total, category) => {
    return total + category.items.reduce((sum, item) => {
      if (!item.tags || !item.tags.includes(tag)) {
        return sum;
      }

      return sum + getAmountFromSnapshot(snapshot, `${category.id}.${item.id}`);
    }, 0);
  }, 0);
}

function collectDetailRows(snapshot, options = {}) {
  const includeEmpty = Boolean(options.includeEmpty);

  return categories.flatMap((category) => {
    const defaultRows = category.items
      .map((item) => {
        const key = `${category.id}.${item.id}`;
        const entry = snapshot.values[key] || { amount: "", note: "", label: item.label };
        const amount = Number.parseInt(entry.amount || "0", 10) || 0;
        const note = sanitizeText(entry.note, 220);
        const status = amount || note ? "Terisi" : "Kosong";

        if (!includeEmpty && status !== "Terisi") {
          return null;
        }

        return {
          type: category.type === "liability" ? "Utang" : "Aset",
          category: category.title,
          item: item.label,
          amount,
          note,
          source: "Default",
          status
        };
      })
      .filter(Boolean);

    const customRows = getCustomRowsFromSnapshot(snapshot, category.id)
      .map((item) => {
        const entry = snapshot.values[item.storageId] || { amount: "", note: "", label: item.label };
        if (!shouldIncludeExportEntry(entry, true)) {
          return null;
        }

        const amount = Number.parseInt(entry.amount || "0", 10) || 0;
        const note = sanitizeText(entry.note, 220);
        const status = amount || note ? "Terisi" : "Kosong";

        if (!includeEmpty && status !== "Terisi") {
          return null;
        }

        return {
          type: category.type === "liability" ? "Utang" : "Aset",
          category: category.title,
          item: entry.label || item.label || "Item custom",
          amount,
          note,
          source: "Custom",
          status
        };
      })
      .filter(Boolean);

    return [...defaultRows, ...customRows];
  });
}

function shouldIncludeExportEntry(entry, isCustom) {
  const amount = sanitizeNumber(entry?.amount);
  const note = sanitizeText(entry?.note, 220);
  const label = sanitizeText(entry?.label, 80);
  return Boolean(amount || note || (isCustom && label));
}

function exportData() {
  const bundle = getExportBundle();
  if (!bundle) {
    return;
  }

  const payload = {
    app: "networth-tracker",
    version: 4,
    currency: "IDR",
    exportedAt: bundle.exportedAt.toISOString(),
    summary: {
      storageMode: getStorageModeLabel(),
      meta: bundle.meta,
      historyCount: bundle.historyRows.length,
      categoryTotals: bundle.categoryTotals,
      metrics: bundle.metrics,
      goals: bundle.goals
    },
    detailRows: bundle.allDetailRows,
    data: bundle.snapshot
  };
  downloadFile(
    JSON.stringify(payload, null, 2),
    "application/json",
    `networth-backup-${getExportDateStamp(bundle.exportedAt)}.json`
  );
}

function exportExcelData() {
  const bundle = getExportBundle();
  if (!bundle) {
    return;
  }

  downloadFile(
    buildExcelWorkbook(bundle),
    "application/vnd.ms-excel;charset=utf-8",
    `networth-backup-${getExportDateStamp(bundle.exportedAt)}.xls`
  );
}

function downloadFile(content, mimeType, fileName) {
  const blob = new Blob([content], { type: mimeType });
  const downloadUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = downloadUrl;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 0);
}

function getExportDateStamp(date) {
  return date.toISOString().slice(0, 10);
}

function getStorageModeLabel() {
  return storageMode === "session" ? "Mode privat (session)" : "Browser lokal (localStorage)";
}

function buildExcelWorkbook(bundle) {
  const overviewRows = [
    [
      { value: "Net Worth Tracker - Export Detail", styleId: "title", mergeAcross: 5 }
    ],
    [
      { value: "Diexport pada", styleId: "label" },
      { value: formatExportDate(bundle.exportedAt) }
    ],
    [
      { value: "Mode penyimpanan", styleId: "label" },
      { value: getStorageModeLabel() }
    ],
    [
      { value: "Tanggal snapshot", styleId: "label" },
      { value: formatSnapshotDate(bundle.meta.snapshotDate) }
    ],
    [
      { value: "Jumlah baris terisi", styleId: "label" },
      { value: bundle.filledDetailRows.length, type: "Number" }
    ],
    [
      { value: "Jumlah riwayat snapshot", styleId: "label" },
      { value: bundle.historyRows.length, type: "Number" }
    ],
    [],
    [
      { value: "Metrik utama", styleId: "sectionTitle", mergeAcross: 5 }
    ],
    [
      { value: "Kelompok", styleId: "header" },
      { value: "Label", styleId: "header" },
      { value: "Nilai", styleId: "header" },
      { value: "Keterangan", styleId: "header" }
    ],
    [
      { value: "Metrik" },
      { value: "Total aset", styleId: "label" },
      { value: bundle.metrics.totalAssets, type: "Number", styleId: "currencyStrong" },
      { value: "Akumulasi seluruh kategori aset" }
    ],
    [
      { value: "Metrik" },
      { value: "Total utang", styleId: "label" },
      { value: bundle.metrics.totalLiabilities, type: "Number", styleId: "currencyStrong" },
      { value: "Akumulasi seluruh kategori utang" }
    ],
    [
      { value: "Metrik" },
      { value: "Net worth", styleId: "label" },
      { value: bundle.metrics.netWorth, type: "Number", styleId: "currencyStrong" },
      { value: "Total aset dikurangi total utang" }
    ],
    [
      { value: "Metrik" },
      { value: "Aset likuid", styleId: "label" },
      { value: bundle.metrics.liquidAssets, type: "Number", styleId: "currency" },
      { value: "Cash, tabungan, e-wallet, dan instrumen tagged liquid" }
    ],
    [
      { value: "Metrik" },
      { value: "Aset produktif", styleId: "label" },
      { value: bundle.metrics.productiveAssets, type: "Number", styleId: "currency" },
      { value: "Instrumen tagged productive" }
    ],
    [
      { value: "Metrik" },
      { value: "Utang konsumtif", styleId: "label" },
      { value: bundle.metrics.consumerDebt, type: "Number", styleId: "currency" },
      { value: "Utang tagged consumerDebt" }
    ],
    [
      { value: "Metrik" },
      { value: "Rasio utang", styleId: "label" },
      { value: formatDebtRatio(bundle.metrics.debtRatio) },
      { value: "Perbandingan total utang terhadap total aset" }
    ],
    [
      { value: "Target" },
      { value: "Target net worth", styleId: "label" },
      { value: bundle.goals.targetNetWorth, type: "Number", styleId: bundle.goals.targetNetWorth ? "currency" : "currencyMuted" },
      { value: bundle.goals.netWorth.status }
    ],
    [
      { value: "Target" },
      { value: "Pengeluaran bulanan", styleId: "label" },
      { value: bundle.goals.monthlyExpense, type: "Number", styleId: bundle.goals.monthlyExpense ? "currency" : "currencyMuted" },
      { value: bundle.goals.monthlyExpense ? "Dipakai untuk target dana darurat" : "Belum diatur" }
    ],
    [
      { value: "Target" },
      { value: "Dana darurat ideal", styleId: "label" },
      { value: bundle.goals.emergencyTarget, type: "Number", styleId: bundle.goals.emergencyTarget ? "currency" : "currencyMuted" },
      { value: bundle.goals.emergencyTarget ? `${bundle.goals.emergencyMonths} bulan` : "Belum diatur" }
    ],
    [
      { value: "Proyeksi" },
      { value: "Tambah bersih per bulan", styleId: "label" },
      { value: bundle.goals.projectionMonthlyAdd, type: "Number", styleId: bundle.goals.projectionMonthlyAdd ? "currency" : "currencyMuted" },
      { value: "Asumsi tambahan aset bersih atau penurunan utang rutin" }
    ],
    [
      { value: "Proyeksi" },
      { value: "Growth tahunan", styleId: "label" },
      { value: formatPercent(bundle.goals.projectionAnnualGrowth) },
      { value: "Asumsi pertumbuhan net worth tahunan" }
    ],
    [
      { value: "Proyeksi" },
      { value: "Estimasi capai target", styleId: "label" },
      { value: bundle.goals.projection.etaLabel },
      { value: bundle.goals.projection.caption }
    ],
    [],
    [
      { value: "Total per kategori", styleId: "sectionTitle", mergeAcross: 5 }
    ],
    [
      { value: "Jenis", styleId: "header" },
      { value: "Kategori", styleId: "header" },
      { value: "Total", styleId: "header" },
      { value: "Status", styleId: "header" }
    ],
    ...bundle.categoryTotals.map((category) => ([
      { value: category.type === "liability" ? "Utang" : "Aset" },
      { value: category.title },
      { value: category.amount, type: "Number", styleId: "currency" },
      { value: category.amount > 0 ? "Terisi" : "Kosong" }
    ])),
    [],
    [
      { value: "Detail instrumen terisi", styleId: "sectionTitle", mergeAcross: 5 }
    ],
    [
      { value: "Jenis", styleId: "header" },
      { value: "Kategori", styleId: "header" },
      { value: "Instrumen", styleId: "header" },
      { value: "Nominal (IDR)", styleId: "header" },
      { value: "Catatan", styleId: "header" },
      { value: "Sumber", styleId: "header" }
    ]
  ];

  const overviewDetailRows = bundle.filledDetailRows.length
    ? buildExcelTypeRows(bundle.filledDetailRows, true)
    : [[{ value: "Belum ada baris terisi." }]];
  const allInstrumentRows = bundle.allDetailRows.length
    ? buildExcelTypeRows(bundle.allDetailRows, true)
    : [[{ value: "Belum ada instrumen yang tersedia." }]];
  const assetRows = bundle.allDetailRows.filter((row) => row.type === "Aset");
  const liabilityRows = bundle.allDetailRows.filter((row) => row.type === "Utang");

  overviewRows.push(...overviewDetailRows);

  return `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Font ss:FontName="Aptos" ss:Size="10" ss:Color="#10213E"/>
  </Style>
  <Style ss:ID="title">
   <Font ss:FontName="Aptos" ss:Size="13" ss:Bold="1" ss:Color="#10213E"/>
  </Style>
  <Style ss:ID="sectionTitle">
   <Font ss:FontName="Aptos" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#14213D" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="header">
   <Font ss:FontName="Aptos" ss:Size="10" ss:Bold="1" ss:Color="#10213E"/>
   <Interior ss:Color="#E8F0F7" ss:Pattern="Solid"/>
   <Borders>
     <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#C7D3E0"/>
   </Borders>
  </Style>
  <Style ss:ID="label">
   <Font ss:FontName="Aptos" ss:Size="10" ss:Bold="1" ss:Color="#10213E"/>
  </Style>
  <Style ss:ID="currency">
   <NumberFormat ss:Format="#,##0"/>
  </Style>
  <Style ss:ID="currencyStrong">
   <Font ss:FontName="Aptos" ss:Size="10" ss:Bold="1" ss:Color="#10213E"/>
   <NumberFormat ss:Format="#,##0"/>
  </Style>
  <Style ss:ID="currencyMuted">
   <Font ss:FontName="Aptos" ss:Size="10" ss:Color="#94A3B8"/>
   <NumberFormat ss:Format="#,##0"/>
  </Style>
 </Styles>
 ${buildExcelWorksheet("Ringkasan", [110, 190, 125, 175, 230, 90], overviewRows)}
 ${buildExcelWorksheet("Semua Instrumen", [100, 170, 220, 120, 220, 90, 80], [
   [
     { value: "Jenis", styleId: "header" },
     { value: "Kategori", styleId: "header" },
     { value: "Instrumen", styleId: "header" },
     { value: "Nominal (IDR)", styleId: "header" },
     { value: "Catatan", styleId: "header" },
     { value: "Sumber", styleId: "header" },
     { value: "Status", styleId: "header" }
   ],
   ...allInstrumentRows
 ])}
 ${buildExcelWorksheet("Aset", [170, 220, 120, 220, 90, 80], [
   [
     { value: "Kategori", styleId: "header" },
     { value: "Instrumen", styleId: "header" },
     { value: "Nominal (IDR)", styleId: "header" },
     { value: "Catatan", styleId: "header" },
     { value: "Sumber", styleId: "header" },
     { value: "Status", styleId: "header" }
   ],
   ...buildExcelTypeRows(assetRows, false)
 ])}
 ${buildExcelWorksheet("Utang", [170, 220, 120, 220, 90, 80], [
   [
     { value: "Kategori", styleId: "header" },
     { value: "Instrumen", styleId: "header" },
     { value: "Nominal (IDR)", styleId: "header" },
     { value: "Catatan", styleId: "header" },
     { value: "Sumber", styleId: "header" },
     { value: "Status", styleId: "header" }
   ],
   ...buildExcelTypeRows(liabilityRows, false)
 ])}
 ${buildExcelWorksheet("Riwayat Snapshot", [120, 110, 120, 120, 120, 120], [
   [
     { value: "Disimpan", styleId: "header" },
     { value: "Tanggal Snapshot", styleId: "header" },
     { value: "Net Worth", styleId: "header" },
     { value: "Total Aset", styleId: "header" },
     { value: "Total Utang", styleId: "header" },
     { value: "Aset Likuid", styleId: "header" }
   ],
   ...buildHistoryExcelRows(bundle.historyRows)
 ])}
</Workbook>`;
}

function buildHistoryExcelRows(rows) {
  if (!rows.length) {
    return [[{ value: "Belum ada riwayat snapshot." }]];
  }

  return rows.map((row) => ([
    { value: formatExportDate(new Date(row.savedAt)) },
    { value: formatSnapshotDate(row.snapshotDate) },
    { value: row.netWorth, type: "Number", styleId: "currencyStrong" },
    { value: row.totalAssets, type: "Number", styleId: "currency" },
    { value: row.totalLiabilities, type: "Number", styleId: "currency" },
    { value: row.liquidAssets, type: "Number", styleId: "currency" }
  ]));
}

function buildExcelWorksheet(name, widths, rows) {
  return `
 <Worksheet ss:Name="${escapeXml(name)}">
  <Table>
   ${createExcelColumns(widths)}
   ${rows.map((row) => createExcelRow(row)).join("")}
  </Table>
 </Worksheet>`;
}

function buildExcelTypeRows(rows, includeTypeColumn = true) {
  if (!rows.length) {
    return [[{ value: "Belum ada data." }]];
  }

  return rows.map((row) => ([
    ...(includeTypeColumn ? [{ value: row.type }] : []),
    { value: row.category },
    { value: row.item },
    { value: row.amount, type: "Number", styleId: row.status === "Terisi" ? "currency" : "currencyMuted" },
    { value: row.note },
    { value: row.source },
    { value: row.status }
  ]));
}

function createExcelColumns(widths = []) {
  return widths.map((width) => `<Column ss:AutoFitWidth="0" ss:Width="${width}"/>`).join("");
}

function createExcelRow(cells = []) {
  if (!cells.length) {
    return "<Row></Row>";
  }

  return `<Row>${cells.map((cell) => createExcelCell(cell)).join("")}</Row>`;
}

function createExcelCell(cell = {}) {
  const styleAttribute = cell.styleId ? ` ss:StyleID="${cell.styleId}"` : "";
  const mergeAcrossAttribute = Number.isInteger(cell.mergeAcross) && cell.mergeAcross > 0
    ? ` ss:MergeAcross="${cell.mergeAcross}"`
    : "";
  const type = cell.type === "Number" ? "Number" : "String";
  const value = type === "Number"
    ? String(Number(cell.value || 0))
    : escapeXml(String(cell.value ?? ""));

  return `<Cell${styleAttribute}${mergeAcrossAttribute}><Data ss:Type="${type}">${value}</Data></Cell>`;
}

function formatExportDate(date) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeStyle: "short"
  }).format(date);
}

async function handleImportFileChange(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  if (!isJsonBackupFile(file)) {
    window.alert("Import hanya menerima file JSON backup.");
    event.target.value = "";
    return;
  }

  try {
    const rawText = await file.text();
    const parsed = JSON.parse(rawText);
    const importedData = parsed && typeof parsed === "object" && parsed.data ? parsed.data : parsed;
    const nextState = normalizeStatePayload(importedData);

    if (!hasStateContent(nextState)) {
      throw new Error("empty-import");
    }

    const exportedAt = parseImportDate(parsed?.exportedAt);
    const currentBundle = buildSnapshotBundle(normalizeStatePayload(state), new Date());
    const bundle = buildSnapshotBundle(nextState, exportedAt || new Date());
    pendingImport = {
      nextState,
      currentBundle,
      bundle,
      fileName: file.name || "backup.json",
      storageModeLabel: sanitizeText(parsed?.summary?.storageMode, 80) || "Tidak tersedia"
    };
    openImportPreview();
  } catch (error) {
    window.alert("File backup tidak valid atau tidak bisa dibaca.");
  } finally {
    if (!pendingImport) {
      event.target.value = "";
    }
  }
}

function isJsonBackupFile(file) {
  const fileName = String(file.name || "").toLowerCase();
  const fileType = String(file.type || "").toLowerCase();
  return fileName.endsWith(".json") || fileType.includes("json");
}

function parseImportDate(value) {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function buildImportComparison(currentBundle, nextBundle) {
  const currentCategories = new Map(currentBundle.categoryTotals.map((category) => [category.id, category]));
  const nextCategories = new Map(nextBundle.categoryTotals.map((category) => [category.id, category]));

  const metricRows = [
    {
      label: "Total aset",
      currentValue: currentBundle.metrics.totalAssets,
      nextValue: nextBundle.metrics.totalAssets,
      formatter: formatCurrency,
      deltaFormatter: formatCurrencyDelta,
      direction: "higher-better"
    },
    {
      label: "Total utang",
      currentValue: currentBundle.metrics.totalLiabilities,
      nextValue: nextBundle.metrics.totalLiabilities,
      formatter: formatCurrency,
      deltaFormatter: formatCurrencyDelta,
      direction: "lower-better"
    },
    {
      label: "Net worth",
      currentValue: currentBundle.metrics.netWorth,
      nextValue: nextBundle.metrics.netWorth,
      formatter: formatCurrency,
      deltaFormatter: formatCurrencyDelta,
      direction: "higher-better"
    },
    {
      label: "Baris terisi",
      currentValue: currentBundle.filledDetailRows.length,
      nextValue: nextBundle.filledDetailRows.length,
      formatter: formatCountValue,
      deltaFormatter: formatCountDelta,
      direction: "neutral"
    }
  ].map((metric) => {
    const delta = metric.nextValue - metric.currentValue;
    return {
      ...metric,
      delta,
      deltaLabel: metric.deltaFormatter(delta),
      deltaClass: getDeltaClass(delta, metric.direction)
    };
  });

  const categoryChanges = categories
    .map((category) => {
      const currentAmount = currentCategories.get(category.id)?.amount || 0;
      const nextAmount = nextCategories.get(category.id)?.amount || 0;
      const delta = nextAmount - currentAmount;
      return {
        id: category.id,
        title: category.title,
        type: category.type,
        currentAmount,
        nextAmount,
        delta,
        label: getCategoryChangeLabel(currentAmount, nextAmount),
        deltaClass: getDeltaClass(delta, category.type === "liability" ? "lower-better" : "higher-better")
      };
    })
    .filter((category) => category.currentAmount !== category.nextAmount)
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));

  return {
    metricRows,
    categoryChanges
  };
}

function getDeltaClass(delta, direction = "higher-better") {
  if (direction === "neutral") {
    return delta === 0 ? "is-neutral" : delta > 0 ? "is-positive" : "is-negative";
  }

  if (delta > 0) {
    return direction === "lower-better" ? "is-negative" : "is-positive";
  }

  if (delta < 0) {
    return direction === "lower-better" ? "is-positive" : "is-negative";
  }

  return "is-neutral";
}

function getCategoryChangeLabel(currentAmount, nextAmount) {
  if (!currentAmount && nextAmount) {
    return "Mulai terisi";
  }

  if (currentAmount && !nextAmount) {
    return "Dikosongkan";
  }

  if (nextAmount > currentAmount) {
    return "Naik";
  }

  if (nextAmount < currentAmount) {
    return "Turun";
  }

  return "Tetap";
}

function formatCurrencyDelta(value) {
  if (!value) {
    return "Tidak berubah";
  }

  return `${value > 0 ? "+" : "-"}${formatCurrency(Math.abs(value))}`;
}

function formatCountValue(value) {
  return `${value} baris`;
}

function formatCountDelta(value) {
  if (!value) {
    return "Tidak berubah";
  }

  return `${value > 0 ? "+" : "-"}${Math.abs(value)} baris`;
}

function openImportPreview() {
  if (!pendingImport || !importPreviewBackdrop) {
    return;
  }

  const { bundle, currentBundle, fileName, storageModeLabel } = pendingImport;
  const comparison = buildImportComparison(currentBundle, bundle);
  const filledCategoryCount = new Set(bundle.filledDetailRows.map((row) => row.category)).size;
  const filledCategories = bundle.categoryTotals
    .filter((category) => category.amount > 0)
    .sort((a, b) => b.amount - a.amount);

  importPreviewFile.textContent = fileName;
  importPreviewDate.textContent = `Diexport ${formatImportPreviewDate(bundle.exportedAt)}.`;
  importPreviewStorage.textContent = storageModeLabel;
  importPreviewWarning.textContent = hasStateContent()
    ? "Data yang sedang tersimpan di browser ini akan diganti saat import dikonfirmasi."
    : "Browser ini belum punya data aktif, jadi backup akan langsung jadi data utama.";
  importPreviewAssets.textContent = formatCurrency(bundle.metrics.totalAssets);
  importPreviewLiabilities.textContent = formatCurrency(bundle.metrics.totalLiabilities);
  importPreviewNetWorth.textContent = formatCurrency(bundle.metrics.netWorth);
  importPreviewCategories.textContent = `${filledCategoryCount} kategori`;
  importPreviewRows.textContent = `${bundle.filledDetailRows.length} baris`;
  importPreviewRatio.textContent = formatDebtRatio(bundle.metrics.debtRatio);
  importPreviewList.innerHTML = filledCategories.length
    ? filledCategories
      .map((category) => `
        <article class="import-preview-list-item">
          <div>
            <strong>${category.title}</strong>
            <span>${category.type === "liability" ? "Utang" : "Aset"}</span>
          </div>
          <div class="import-preview-list-item-value">${formatCurrency(category.amount)}</div>
        </article>
      `)
      .join("")
    : `
      <div class="import-preview-empty">
        Backup ini tidak punya kategori dengan nominal lebih dari nol.
      </div>
    `;

  importCompareGrid.innerHTML = comparison.metricRows
    .map((metric) => `
      <article class="import-compare-card">
        <div class="import-compare-card-head">
          <span>${metric.label}</span>
          <span class="import-compare-delta ${metric.deltaClass}">${metric.deltaLabel}</span>
        </div>
        <div class="import-compare-values">
          <div class="import-compare-value">
            <span>Saat ini</span>
            <strong>${metric.formatter(metric.currentValue)}</strong>
          </div>
          <div class="import-compare-value">
            <span>Backup</span>
            <strong>${metric.formatter(metric.nextValue)}</strong>
          </div>
        </div>
      </article>
    `)
    .join("");

  importCompareList.innerHTML = comparison.categoryChanges.length
    ? comparison.categoryChanges
      .map((category) => `
        <article class="import-compare-item">
          <div>
            <strong>${category.title}</strong>
            <span>${category.type === "liability" ? "Utang" : "Aset"} | ${category.label}</span>
            <span>Saat ini ${formatCurrency(category.currentAmount)} -> Backup ${formatCurrency(category.nextAmount)}</span>
          </div>
          <div class="import-compare-item-side">
            <span class="import-compare-delta ${category.deltaClass}">${formatCurrencyDelta(category.delta)}</span>
            <div class="import-compare-item-value">${category.label}</div>
          </div>
        </article>
      `)
      .join("")
    : `
      <div class="import-preview-empty">
        Tidak ada perubahan nominal antara backup ini dan data yang sedang tersimpan.
      </div>
    `;

  importPreviewBackdrop.classList.remove("is-hidden");
  importPreviewBackdrop.setAttribute("aria-hidden", "false");
}

function closeImportPreview() {
  pendingImport = null;
  importPreviewBackdrop?.classList.add("is-hidden");
  importPreviewBackdrop?.setAttribute("aria-hidden", "true");
  if (importFileInput) {
    importFileInput.value = "";
  }
}

function confirmImportPreview() {
  if (!pendingImport) {
    return;
  }

  applyState(pendingImport.nextState);
  resetInterfaceState();
  saveState();
  renderPlanningInputs();
  renderProfileTemplateState();
  renderCategories();
  updateUI();
  closeImportPreview();
  window.alert("Backup berhasil diimpor ke browser ini.");
}

function handleGlobalKeydown(event) {
  if (event.key === "Escape" && pendingImport) {
    closeImportPreview();
  }
}

function formatImportPreviewDate(date) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeStyle: "short"
  }).format(date);
}

function wipeStoredData() {
  const confirmed = window.confirm("Hapus semua data net worth dari browser ini sekarang? Backup yang sudah diexport tidak ikut terhapus.");
  if (!confirmed) {
    return;
  }

  applyState(getEmptyState());
  resetInterfaceState();
  clearStoredState();
  renderPlanningInputs();
  renderProfileTemplateState();
  renderCategories();
  updateUI();
  window.alert("Semua data tersimpan sudah dihapus dari browser ini.");
}

function toggleCategory(categoryId) {
  if (openCategories.has(categoryId)) {
    openCategories.delete(categoryId);
  } else {
    openCategories.add(categoryId);
  }

  renderCategories();
  updateUI();
}

function handleAmountInput(event) {
  const { key } = event.target.dataset;
  const numericValue = sanitizeNumber(event.target.value);
  ensureEntry(key);
  state.values[key].amount = numericValue;
  event.target.value = formatForInput(numericValue);
  saveState();
  updateUI();
}

function handleAmountBlur(event) {
  const { key } = event.target.dataset;
  const numericValue = sanitizeNumber(event.target.value);
  event.target.value = formatForInput(numericValue);
  ensureEntry(key);
  state.values[key].amount = numericValue;
  saveState();
  updateUI();
}

function handleNoteInput(event) {
  const { key } = event.target.dataset;
  ensureEntry(key);
  state.values[key].note = event.target.value;
  saveState();
}

function handleCustomLabelInput(event) {
  const { key } = event.target.dataset;
  ensureEntry(key);
  state.values[key].label = event.target.value;
  saveState();
  updateUI();
}

function addCustomRow(categoryId) {
  const customRows = getCustomRows(categoryId);
  const timestamp = Date.now();
  const customId = `${categoryId}.custom_${timestamp}`;

  customRows.push({
    id: `custom_${timestamp}`,
    storageId: customId,
    label: "",
    isCustom: true
  });

  state.values[customId] = { amount: "", note: "", label: "" };
  state.custom[categoryId] = customRows;
  openCategories.add(categoryId);
  saveState();
  renderCategories();

  const labelInput = categoryGrid.querySelector(`[data-key='${customId}'][data-role='custom-label']`);
  if (labelInput) {
    labelInput.focus();
  }
}

function removeCustomRow(categoryId, key) {
  state.custom[categoryId] = getCustomRows(categoryId).filter((item) => item.storageId !== key);
  delete state.values[key];
  saveState();
  renderCategories();
  updateUI();
}

function getCustomRows(categoryId) {
  return Array.isArray(state.custom[categoryId]) ? [...state.custom[categoryId]] : [];
}

function matchesCategory(category) {
  const preset = getViewPreset();
  const matchesPreset = preset.id === "all" || preset.categoryIds.includes(category.id);
  if (!matchesPreset) {
    return false;
  }

  const matchesFilter = uiState.filter === "all" || category.type === uiState.filter;
  if (!matchesFilter) {
    return false;
  }

  if (!uiState.search) {
    return true;
  }

  const haystack = [
    category.title,
    category.description,
    ...category.items.map((item) => item.label)
  ].join(" ").toLowerCase();

  return haystack.includes(uiState.search);
}

function updateToolbar(visibleCount) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === uiState.filter);
  });
  presetButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.preset === uiState.preset);
  });

  const activePreset = getViewPreset();
  if (presetCaption) {
    presetCaption.textContent = activePreset.description;
  }

  if (!uiState.search && uiState.filter === "all" && uiState.preset === "all") {
    resultsCaption.textContent = `Menampilkan semua kategori (${visibleCount}).`;
    return;
  }

  if (!uiState.search && uiState.filter === "all") {
    resultsCaption.textContent = `Menampilkan ${visibleCount} kategori untuk mode ${activePreset.label.toLowerCase()}.`;
    return;
  }

  if (!uiState.search && uiState.preset === "all") {
    resultsCaption.textContent = `Menampilkan ${visibleCount} kategori untuk filter ${uiState.filter === "asset" ? "aset" : "utang"}.`;
    return;
  }

  if (!uiState.search) {
    resultsCaption.textContent = `Menampilkan ${visibleCount} kategori untuk mode ${activePreset.label.toLowerCase()} dan filter ${uiState.filter === "asset" ? "aset" : uiState.filter === "liability" ? "utang" : "semua"}.`;
    return;
  }

  resultsCaption.textContent = `Ditemukan ${visibleCount} kategori untuk kata kunci "${uiState.search}" dalam mode ${activePreset.label.toLowerCase()}.`;
}

function ensureEntry(key) {
  if (!state.values[key]) {
    state.values[key] = { amount: "", note: "", label: "" };
  }
}

function updateUI() {
  const totals = categories.map((category) => {
    const amount = category.items.reduce((sum, item) => {
      return sum + getAmount(`${category.id}.${item.id}`);
    }, 0) + getCustomRows(category.id).reduce((sum, item) => {
      return sum + getAmount(item.storageId);
    }, 0);

    const element = document.getElementById(`total-${category.id}`);
    if (element) {
      element.textContent = formatCurrency(amount);
    }

    return {
      id: category.id,
      type: category.type,
      title: category.title,
      color: category.accent,
      amount
    };
  });

  const totalAssets = totals
    .filter((item) => item.type === "asset")
    .reduce((sum, item) => sum + item.amount, 0);
  const totalLiabilities = totals
    .filter((item) => item.type === "liability")
    .reduce((sum, item) => sum + item.amount, 0);
  const netWorth = totalAssets - totalLiabilities;
  const debtRatio = calculateDebtRatio(totalAssets, totalLiabilities);
  const liquidAssets = sumTaggedItems("liquid");
  const productiveAssets = sumTaggedItems("productive");
  const consumerDebt = sumTaggedItems("consumerDebt");
  const goals = buildGoalMetrics(state.meta, {
    totalAssets,
    totalLiabilities,
    netWorth,
    liquidAssets
  });
  const topCategory = totals
    .filter((item) => item.amount > 0)
    .sort((a, b) => b.amount - a.amount)[0];

  document.getElementById("hero-assets").textContent = formatCurrency(totalAssets);
  document.getElementById("hero-liabilities").textContent = formatCurrency(totalLiabilities);
  document.getElementById("hero-net-worth").textContent = formatCurrency(netWorth);
  document.getElementById("summary-assets").textContent = formatCurrency(totalAssets);
  document.getElementById("summary-liabilities").textContent = formatCurrency(totalLiabilities);
  document.getElementById("summary-net-worth").textContent = formatCurrency(netWorth);
  document.getElementById("summary-liquid-assets").textContent = formatCurrency(liquidAssets);
  document.getElementById("summary-productive-assets").textContent = formatCurrency(productiveAssets);
  document.getElementById("summary-consumer-debt").textContent = formatCurrency(consumerDebt);
  document.getElementById("hero-debt-ratio").textContent = formatDebtRatio(debtRatio);
  document.getElementById("hero-top-category").textContent = topCategory ? topCategory.title : "Belum ada";

  const status = getStatus(totalAssets, totalLiabilities, netWorth, debtRatio);
  const summaryBadge = document.getElementById("summary-badge");
  const healthCard = document.getElementById("health-card");
  const healthFill = document.getElementById("health-fill");

  updateStorageModeNotice();
  document.getElementById("hero-status").textContent = status.hero;
  document.getElementById("summary-caption").textContent = status.summary;
  document.getElementById("health-score").textContent = `${status.score}/100`;
  document.getElementById("health-label").textContent = status.label;
  document.getElementById("health-copy").textContent = status.copy;
  healthFill.style.width = `${status.score}%`;
  healthFill.classList.toggle("is-empty", status.score === 0);

  if (healthCard) {
    healthCard.style.setProperty("--health-accent", status.accent);
    healthCard.style.setProperty("--health-accent-soft", status.accentSoft);
  }

  if (summaryBadge) {
    summaryBadge.textContent = status.badge;
  }

  updateGoalCards(goals);
  updateProjectionCard(goals);
  updateHistoryCard({
    snapshotDate: state.meta.snapshotDate,
    netWorth,
    totalAssets,
    totalLiabilities,
    liquidAssets,
    debtRatio
  });
  renderBreakdown(totals, totalAssets, totalLiabilities);
  renderBalanceComposition(totalAssets, totalLiabilities, liquidAssets);
  renderDebtPriority();
}

function updateGoalCards(goals) {
  const snapshotDateLabel = document.getElementById("snapshot-date-label");
  const snapshotDateCaption = document.getElementById("snapshot-date-caption");
  const goalNetWorthStatus = document.getElementById("goal-net-worth-status");
  const goalNetWorthProgress = document.getElementById("goal-net-worth-progress");
  const goalNetWorthFill = document.getElementById("goal-net-worth-fill");
  const goalNetWorthCurrent = document.getElementById("goal-net-worth-current");
  const goalNetWorthTarget = document.getElementById("goal-net-worth-target");
  const goalNetWorthCopy = document.getElementById("goal-net-worth-copy");
  const goalEmergencyStatus = document.getElementById("goal-emergency-status");
  const goalEmergencyProgress = document.getElementById("goal-emergency-progress");
  const goalEmergencyFill = document.getElementById("goal-emergency-fill");
  const goalEmergencyCurrent = document.getElementById("goal-emergency-current");
  const goalEmergencyTarget = document.getElementById("goal-emergency-target");
  const goalEmergencyCovered = document.getElementById("goal-emergency-covered");
  const goalEmergencyCopy = document.getElementById("goal-emergency-copy");

  if (!snapshotDateLabel) {
    return;
  }

  snapshotDateLabel.textContent = formatSnapshotDate(goals.snapshotDate);
  snapshotDateCaption.textContent = `Angka di halaman ini dibaca sebagai kondisi per ${formatSnapshotDate(goals.snapshotDate)}.`;

  goalNetWorthStatus.textContent = goals.netWorth.status;
  goalNetWorthProgress.textContent = `${goals.netWorth.progress}%`;
  goalNetWorthFill.style.width = `${goals.netWorth.progress}%`;
  goalNetWorthCurrent.textContent = formatCurrency(goals.netWorth.current);
  goalNetWorthTarget.textContent = goals.targetNetWorth > 0
    ? formatCurrency(goals.targetNetWorth)
    : "Belum diatur";
  goalNetWorthCopy.textContent = goals.targetNetWorth > 0
    ? `${goals.netWorth.copy} Sisa jarak ${formatCurrency(goals.netWorth.remaining)}.`
    : goals.netWorth.copy;

  goalEmergencyStatus.textContent = goals.emergencyFund.status;
  goalEmergencyProgress.textContent = `${goals.emergencyFund.progress}%`;
  goalEmergencyFill.style.width = `${goals.emergencyFund.progress}%`;
  goalEmergencyCurrent.textContent = formatCurrency(goals.emergencyFund.current);
  goalEmergencyTarget.textContent = goals.emergencyTarget > 0
    ? formatCurrency(goals.emergencyTarget)
    : "Belum diatur";
  goalEmergencyCovered.textContent = goals.monthlyExpense > 0
    ? `Aset likuid saat ini menutup sekitar ${formatDecimalMonths(goals.coveredMonths)} bulan kebutuhan.`
    : "Isi pengeluaran bulanan untuk melihat cakupan bulan dana darurat.";
  goalEmergencyCopy.textContent = goals.emergencyTarget > 0
    ? `${goals.emergencyFund.copy} Kekurangannya ${formatCurrency(goals.emergencyFund.remaining)}.`
    : goals.emergencyFund.copy;
}

function updateProjectionCard(goals) {
  if (!projectionEta || !projectionTimeline) {
    return;
  }

  const projection = goals.projection;
  projectionEta.textContent = projection.etaLabel;
  projectionCaption.textContent = projection.caption;
  projectionStatus.textContent = projection.status;
  projectionGap.textContent = projection.gapLabel;
  projectionMonthlyAddValue.textContent = formatCurrency(goals.projectionMonthlyAdd);
  projectionGrowthValue.textContent = formatPercent(goals.projectionAnnualGrowth);
  projectionHorizonValue.textContent = `${projection.horizonYears} tahun`;

  projectionTimeline.innerHTML = projection.milestoneRows.length
    ? projection.milestoneRows
      .map((row) => `
        <article class="projection-year">
          <div class="projection-year-head">
            <strong>Tahun ${row.year}</strong>
            <span>${formatMonthYear(row.date)}</span>
          </div>
          <div class="projection-year-bar">
            <div class="projection-year-fill" style="width:${row.progress}%;"></div>
          </div>
          <div class="projection-year-meta">
            <span>${formatCurrency(row.projectedValue)}</span>
            <span>${goals.targetNetWorth > 0 ? `${row.progress}% dari target` : "Belum ada target"}</span>
          </div>
        </article>
      `)
      .join("")
    : `
      <div class="projection-empty">
        Milestone proyeksi belum tersedia.
      </div>
    `;
}

function updateHistoryCard(currentMetrics) {
  if (!historyHighlightLabel || !historyList || !historyNote) {
    return;
  }

  const rows = normalizeHistoryPayload(state.history);
  const latest = rows[0];

  if (!rows.length) {
    historyHighlightLabel.textContent = "Belum ada riwayat";
    historyHighlightValue.textContent = formatCurrency(currentMetrics.netWorth);
    historyHighlightCopy.textContent = "Simpan snapshot pertama supaya kamu bisa membandingkan perubahan net worth dari waktu ke waktu.";
    historyList.innerHTML = `
      <div class="history-empty">
        Belum ada snapshot yang disimpan. Gunakan tombol simpan untuk membuat jejak perkembangan lokal.
      </div>
    `;
    historyNote.textContent = "Riwayat ini hanya tersimpan di browser dan ikut masuk ke file backup.";
    return;
  }

  const netWorthDelta = currentMetrics.netWorth - latest.netWorth;
  const assetDelta = currentMetrics.totalAssets - latest.totalAssets;
  const liabilityDelta = currentMetrics.totalLiabilities - latest.totalLiabilities;

  historyHighlightLabel.textContent = `Bandingkan dengan ${formatSnapshotDate(latest.snapshotDate)}`;
  historyHighlightValue.textContent = formatCurrency(currentMetrics.netWorth);
  historyHighlightCopy.textContent = `${getSignedCurrencyText(netWorthDelta, "net worth")} | ${getSignedCurrencyText(assetDelta, "aset")} | ${getSignedCurrencyText(liabilityDelta, "utang")}.`;

  historyList.innerHTML = rows
    .slice(0, 6)
    .map((row, index, array) => {
      const previousRow = array[index + 1] || null;
      const delta = previousRow ? row.netWorth - previousRow.netWorth : 0;
      return `
        <article class="history-item">
          <div class="history-item-head">
            <div>
              <strong>${formatSnapshotDate(row.snapshotDate)}</strong>
              <span>Disimpan ${formatSavedAt(row.savedAt)}</span>
            </div>
            <div class="history-item-side">
              <strong>${formatCurrency(row.netWorth)}</strong>
              <span class="history-delta ${getSignedToneClass(delta)}">${previousRow ? formatSignedCurrency(delta) : "Snapshot awal"}</span>
            </div>
          </div>
          <div class="history-item-meta">
            <span>Aset ${formatCurrency(row.totalAssets)}</span>
            <span>Utang ${formatCurrency(row.totalLiabilities)}</span>
            <span>Likuid ${formatCurrency(row.liquidAssets)}</span>
          </div>
        </article>
      `;
    })
    .join("");

  historyNote.textContent = rows.length > 1
    ? `Menampilkan ${Math.min(rows.length, 6)} snapshot terbaru dari total ${rows.length} riwayat lokal.`
    : "Baru ada 1 snapshot tersimpan. Simpan lagi saat angkanya berubah untuk melihat tren.";
}

function sumTaggedItems(tag) {
  return categories.reduce((total, category) => {
    return total + category.items.reduce((sum, item) => {
      if (!item.tags || !item.tags.includes(tag)) {
        return sum;
      }

      return sum + getAmount(`${category.id}.${item.id}`);
    }, 0);
  }, 0);
}

function calculateDebtRatio(totalAssets, totalLiabilities) {
  if (totalLiabilities <= 0) {
    return 0;
  }

  if (totalAssets <= 0) {
    return Number.POSITIVE_INFINITY;
  }

  return (totalLiabilities / totalAssets) * 100;
}

function formatDebtRatio(debtRatio) {
  if (!Number.isFinite(debtRatio)) {
    return "Inf";
  }

  return `${Math.round(debtRatio)}%`;
}

function calculateHealthScore(totalAssets, totalLiabilities, debtRatio) {
  if (!totalAssets && !totalLiabilities) {
    return 0;
  }

  if (!Number.isFinite(debtRatio)) {
    return 0;
  }

  return Math.max(0, Math.min(100, Math.round(100 - debtRatio)));
}

function renderBreakdown(totals, totalAssets, totalLiabilities) {
  const maxReference = Math.max(
    ...totals.map((item) => item.amount),
    totalAssets,
    totalLiabilities,
    1
  );

  breakdownList.innerHTML = totals
    .map((item) => {
      const shareBase = item.type === "asset" ? totalAssets || 1 : totalLiabilities || 1;
      const share = item.amount > 0 ? Math.round((item.amount / shareBase) * 100) : 0;
      const visualWidth = Math.max((item.amount / maxReference) * 100, item.amount > 0 ? 8 : 0);

      return `
        <article class="breakdown-item">
          <div class="breakdown-top">
            <span>${item.title}</span>
            <strong>${formatCurrency(item.amount)}</strong>
          </div>
          <div class="breakdown-bar">
            <div
              class="breakdown-bar-fill"
              style="width:${visualWidth}%; --accent-color:${item.color}; background:${item.color};"
            ></div>
          </div>
          <div class="breakdown-top">
            <span>${item.type === "asset" ? "Porsi aset" : "Porsi utang"}</span>
            <span>${share}%</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderBalanceComposition(totalAssets, totalLiabilities, liquidAssets) {
  if (!compositionBar || !compositionLegend || !compositionNote) {
    return;
  }

  const safeLiquidAssets = Math.min(liquidAssets, totalAssets);
  const nonLiquidAssets = Math.max(totalAssets - safeLiquidAssets, 0);
  const grossPosition = totalAssets + totalLiabilities;

  if (grossPosition <= 0) {
    compositionBar.innerHTML = `
      <div class="composition-empty">Belum ada data posisi yang bisa divisualkan.</div>
    `;
    compositionLegend.innerHTML = "";
    compositionNote.textContent = "Komposisi akan muncul setelah ada aset atau utang yang diisi.";
    return;
  }

  const segments = [
    {
      label: "Aset likuid",
      amount: safeLiquidAssets,
      share: Math.round((safeLiquidAssets / grossPosition) * 100),
      width: (safeLiquidAssets / grossPosition) * 100,
      color: "#15a46f",
      soft: "rgba(21, 164, 111, 0.14)"
    },
    {
      label: "Aset non-likuid",
      amount: nonLiquidAssets,
      share: Math.round((nonLiquidAssets / grossPosition) * 100),
      width: (nonLiquidAssets / grossPosition) * 100,
      color: "#0f7bff",
      soft: "rgba(15, 123, 255, 0.14)"
    },
    {
      label: "Utang",
      amount: totalLiabilities,
      share: Math.round((totalLiabilities / grossPosition) * 100),
      width: (totalLiabilities / grossPosition) * 100,
      color: "#d6524a",
      soft: "rgba(214, 82, 74, 0.14)"
    }
  ].filter((segment) => segment.amount > 0);

  compositionBar.innerHTML = segments
    .map((segment) => `
      <div
        class="composition-segment"
        style="width:${segment.width}%; --segment-color:${segment.color}; --segment-soft:${segment.soft};"
        title="${segment.label}: ${formatCurrency(segment.amount)}"
      >
        ${segment.share >= 12 ? `<span>${segment.share}%</span>` : ""}
      </div>
    `)
    .join("");

  compositionLegend.innerHTML = segments
    .map((segment) => `
      <article class="composition-legend-item">
        <div class="composition-legend-head">
          <span class="composition-legend-dot" style="--legend-color:${segment.color}; --legend-soft:${segment.soft};"></span>
          <strong>${segment.label}</strong>
        </div>
        <div class="composition-legend-meta">
          <span>${formatCurrency(segment.amount)}</span>
          <span>${segment.share}% dari posisi</span>
        </div>
      </article>
    `)
    .join("");

  compositionNote.textContent = `Komposisi dihitung dari total aset + total utang. Posisi kotor saat ini ${formatCurrency(grossPosition)}.`;
}

function renderDebtPriority() {
  if (!debtPriorityList || !debtPriorityNote) {
    return;
  }

  const debtCategory = categories.find((category) => category.id === "debt");
  if (!debtCategory) {
    return;
  }

  const defaultRows = debtCategory.items
    .map((item) => {
      const amount = getAmount(`debt.${item.id}`);
      if (amount <= 0) {
        return null;
      }

      return buildDebtPriorityEntry({
        id: item.id,
        label: item.label,
        amount,
        tags: item.tags || [],
        source: "Default"
      });
    })
    .filter(Boolean);

  const customRows = getCustomRows("debt")
    .map((item) => {
      const entry = state.values[item.storageId] || {};
      const amount = Number.parseInt(entry.amount || "0", 10) || 0;
      if (amount <= 0) {
        return null;
      }

      return buildDebtPriorityEntry({
        id: item.id,
        label: sanitizeText(entry.label || item.label || "Utang custom", 80),
        amount,
        tags: [],
        source: "Custom"
      });
    })
    .filter(Boolean);

  const rows = [...defaultRows, ...customRows]
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return b.amount - a.amount;
    });

  if (!rows.length) {
    debtPriorityList.innerHTML = `
      <div class="debt-priority-empty">Belum ada utang aktif yang perlu diurutkan.</div>
    `;
    debtPriorityNote.textContent = "Saat belum ada utang aktif, daftar prioritas belum perlu ditampilkan.";
    return;
  }

  const visibleRows = rows.slice(0, 4);
  debtPriorityList.innerHTML = visibleRows
    .map((row, index) => `
      <article class="debt-priority-item">
        <div class="debt-priority-rank">${index + 1}</div>
        <div class="debt-priority-body">
          <div class="debt-priority-head">
            <div>
              <strong>${row.label}</strong>
              <span>${row.groupLabel} | ${row.source}</span>
            </div>
            <div class="debt-priority-side">
              <span class="debt-priority-badge is-${row.tone}">${row.badge}</span>
              <strong>${formatCurrency(row.amount)}</strong>
            </div>
          </div>
          <p>${row.reason}</p>
        </div>
      </article>
    `)
    .join("");

  debtPriorityNote.textContent = rows.length > visibleRows.length
    ? `Masih ada ${rows.length - visibleRows.length} utang aktif lain yang belum ditampilkan.`
    : "Urutan ini hanya panduan awal. Tetap sesuaikan dengan bunga, jatuh tempo, dan kondisi cashflow kamu.";
}

function buildDebtPriorityEntry({ id, label, amount, tags = [], source }) {
  const explicitRule = debtPriorityRules[id];
  const fallbackRule = getFallbackDebtRule(tags, source);
  const rule = explicitRule || fallbackRule;

  return {
    id,
    label,
    amount,
    score: rule.score,
    badge: rule.badge,
    tone: rule.tone,
    reason: rule.reason,
    source,
    groupLabel: getDebtGroupLabel(tags, source)
  };
}

function getFallbackDebtRule(tags = [], source = "Default") {
  if (tags.includes("consumerDebt")) {
    return {
      score: 80,
      badge: "Tinggi",
      tone: "high",
      reason: "Utang konsumtif biasanya layak cepat dikendalikan supaya ruang cashflow tidak makin sempit."
    };
  }

  if (tags.includes("productiveDebt")) {
    return {
      score: 66,
      badge: "Menengah",
      tone: "medium",
      reason: "Pastikan beban utangnya tetap seimbang dengan manfaat bisnis atau investasi yang dihasilkan."
    };
  }

  if (tags.includes("securedDebt")) {
    return {
      score: 56,
      badge: "Terjadwal",
      tone: "scheduled",
      reason: "Utang dengan agunan biasanya lebih terstruktur, tapi tetap perlu disiplin dibayar."
    };
  }

  if (source === "Custom") {
    return {
      score: 60,
      badge: "Cek manual",
      tone: "medium",
      reason: "Utang custom perlu dicek manual berdasarkan bunga, jatuh tempo, dan urgensi pribadinya."
    };
  }

  return {
    score: 58,
    badge: "Terjadwal",
    tone: "scheduled",
    reason: "Pantau ritme pembayarannya supaya tidak membebani posisi keuangan secara diam-diam."
  };
}

function getDebtGroupLabel(tags = [], source = "Default") {
  if (source === "Custom") {
    return "Custom";
  }

  if (tags.includes("consumerDebt")) {
    return "Konsumtif";
  }

  if (tags.includes("productiveDebt")) {
    return "Produktif";
  }

  if (tags.includes("securedDebt")) {
    return "Beragunan";
  }

  return "Utang";
}

function getStatus(totalAssets, totalLiabilities, netWorth, debtRatio) {
  const score = calculateHealthScore(totalAssets, totalLiabilities, debtRatio);

  if (!totalAssets && !totalLiabilities) {
    return {
      hero: "Mulai isi aset dan utangmu untuk melihat hasilnya.",
      summary: "Belum ada data yang dihitung.",
      badge: "Mulai",
      label: "Mulai isi data",
      copy: "Setelah data masuk, kamu bisa lihat apakah posisi keuanganmu lebih kuat di aset atau masih berat di utang.",
      score,
      accent: "#94a3b8",
      accentSoft: "rgba(148, 163, 184, 0.18)"
    };
  }

  if (netWorth <= 0) {
    return {
      hero: "Total utangmu saat ini lebih besar atau sama dengan total aset.",
      summary: "Fokus utama: kurangi utang dan tambah aset likuid.",
      badge: "Waspada",
      label: "Perlu perhatian",
      copy: "Prioritas terbaik biasanya membangun kas aman lalu menurunkan beban kewajiban dengan bunga tinggi.",
      score,
      accent: "#d6524a",
      accentSoft: "rgba(214, 82, 74, 0.16)"
    };
  }

  if (debtRatio >= 60) {
    return {
      hero: "Asetmu sudah lebih besar dari utang, tapi rasio utangnya masih cukup berat.",
      summary: "Kondisi menengah: jaga cashflow dan tekan utang secara bertahap.",
      badge: "Padat",
      label: "Cukup padat",
      copy: "Net worth sudah positif, tetapi porsi utang masih tinggi dibanding total aset yang dimiliki.",
      score,
      accent: "#f59e0b",
      accentSoft: "rgba(245, 158, 11, 0.18)"
    };
  }

  if (debtRatio >= 30) {
    return {
      hero: "Posisi keuanganmu relatif sehat dengan utang yang masih terkontrol.",
      summary: "Aset tumbuh lebih dominan dari kewajiban.",
      badge: "Sehat",
      label: "Sehat",
      copy: "Kamu sudah punya bantalan kekayaan bersih yang positif. Tinggal jaga pertumbuhan aset dan kontrol liabilitas.",
      score,
      accent: "#0f7bff",
      accentSoft: "rgba(15, 123, 255, 0.14)"
    };
  }

  return {
    hero: "Asetmu jauh lebih dominan dibanding utang. Posisi ini sudah kuat.",
    summary: "Net worth positif dan rasio utang rendah.",
    badge: "Kuat",
    label: "Kuat",
    copy: "Rasio utang rendah memberi ruang lebih besar untuk menabung, investasi, dan menjaga fleksibilitas keuangan.",
    score,
    accent: "#15a46f",
    accentSoft: "rgba(21, 164, 111, 0.16)"
  };
}

function fillDemoData() {
  if (hasStateContent() && !window.confirm("Isi contoh akan mengganti data yang sedang tersimpan di browser ini. Lanjutkan?")) {
    return;
  }

  applyState(getEmptyState());
  resetInterfaceState();
  const demo = {
    "cash.cash_home": "1200000",
    "cash.bank_savings": "25000000",
    "cash.checking_account": "2800000",
    "cash.digital_bank": "3500000",
    "cash.cooperative_savings": "4200000",
    "cash.deposit": "8000000",
    "cash.ewallet": "450000",
    "cash.foreign_currency": "1250000",
    "investment.stocks": "14750000",
    "investment.mutual_funds": "9200000",
    "investment.money_market_fund": "6300000",
    "investment.bonds": "7800000",
    "investment.etf_index_fund": "4100000",
    "investment.us_stocks": "5800000",
    "investment.p2p_lending": "2400000",
    "investment.employee_shares": "11000000",
    "investment.private_equity": "3500000",
    "investment.crypto": "3200000",
    "investment.gold": "4850000",
    "property.house": "325000000",
    "property.apartment": "0",
    "property.land": "85000000",
    "property.rental_property": "0",
    "property.shop_house": "0",
    "vehicle.car": "118000000",
    "vehicle.motorcycle": "18000000",
    "vehicle.commercial_vehicle": "0",
    "other_assets.jewelry": "12000000",
    "other_assets.gadgets": "21000000",
    "other_assets.luxury_goods": "6500000",
    "other_assets.collectibles": "4000000",
    "business_receivables.business_equity": "18000000",
    "business_receivables.personal_receivables": "2500000",
    "business_receivables.invoice_receivables": "6750000",
    "business_receivables.security_deposit": "2000000",
    "business_receivables.business_inventory": "8700000",
    "business_receivables.business_equipment": "14500000",
    "business_receivables.bonus_claim": "3200000",
    "business_receivables.refund_claim": "1500000",
    "retirement_protection.pension_fund": "42000000",
    "retirement_protection.jht_bpjstk": "18500000",
    "retirement_protection.private_retirement": "12000000",
    "retirement_protection.insurance_cash_value": "7000000",
    "retirement_protection.goal_based_fund": "9000000",
    "debt.mortgage": "95000000",
    "debt.car_loan": "15000000",
    "debt.kta": "0",
    "debt.credit_card": "2800000",
    "debt.paylater": "650000",
    "debt.personal_debt": "5000000",
    "debt.student_loan": "0",
    "debt.online_loan": "0",
    "debt.business_loan": "12000000",
    "debt.vendor_debt": "4500000",
    "debt.margin_loan": "0",
    "debt.electronics_installment": "1800000",
    "debt.medical_bill": "0",
    "debt.tax_due": "1200000"
  };

  Object.entries(demo).forEach(([key, amount]) => {
    ensureEntry(key);
    state.values[key].amount = amount;
  });

  state.meta.snapshotDate = getTodayDateString();
  state.meta.profileTemplate = "general";
  state.meta.monthlyExpense = "12000000";
  state.meta.emergencyMonths = "6";
  state.meta.targetNetWorth = "1000000000";
  state.meta.projectionMonthlyAdd = "7500000";
  state.meta.projectionAnnualGrowth = "6";
  saveState();
  renderPlanningInputs();
  renderProfileTemplateState();
  renderCategories();
  updateUI();
}

function resetAllData() {
  const confirmed = window.confirm("Reset semua data net worth yang tersimpan di browser ini?");
  if (!confirmed) {
    return;
  }

  applyState(getEmptyState());
  resetInterfaceState();
  saveState();
  renderPlanningInputs();
  renderProfileTemplateState();
  renderCategories();
  updateUI();
}

function getAmount(key) {
  return Number.parseInt(state.values[key]?.amount || "0", 10) || 0;
}

function sanitizeDateValue(value) {
  const rawValue = String(value ?? "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(rawValue)) {
    return "";
  }

  const date = new Date(`${rawValue}T00:00:00`);
  return Number.isNaN(date.getTime()) ? "" : rawValue;
}

function sanitizeMonthValue(value, fallback = "6") {
  const raw = String(value ?? "").replace(/[^\d]/g, "");
  if (!raw) {
    return fallback;
  }

  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return String(Math.max(1, Math.min(24, parsed)));
}

function sanitizeRateValue(value, fallback = "") {
  const raw = String(value ?? "")
    .trim()
    .replace(",", ".")
    .replace(/[^0-9.]/g, "");

  if (!raw) {
    return fallback;
  }

  const firstDotIndex = raw.indexOf(".");
  const normalized = firstDotIndex === -1
    ? raw
    : `${raw.slice(0, firstDotIndex + 1)}${raw.slice(firstDotIndex + 1).replace(/\./g, "")}`;
  const parsed = Number.parseFloat(normalized);

  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  const clamped = Math.max(0, Math.min(50, parsed));
  return String(Number(clamped.toFixed(2)));
}

function sanitizeNumber(value) {
  return String(value || "").replace(/[^\d]/g, "");
}

function formatCurrency(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value || 0);
}

function formatForInput(value) {
  if (!value) {
    return "";
  }

  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0
  }).format(Number.parseInt(value, 10));
}

function formatRateForInput(value) {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return "";
  }

  return String(Number(parsed.toFixed(2)));
}

function formatPercent(value) {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return "0%";
  }

  return `${new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: parsed % 1 ? 1 : 0
  }).format(parsed)}%`;
}

function formatSignedCurrency(value) {
  if (!value) {
    return "Tetap";
  }

  return `${value > 0 ? "+" : "-"}${formatCurrency(Math.abs(value))}`;
}

function getSignedToneClass(value) {
  if (value > 0) {
    return "is-up";
  }

  if (value < 0) {
    return "is-down";
  }

  return "is-flat";
}

function getSignedCurrencyText(value, label) {
  if (!value) {
    return `${capitalizeFirst(label)} tetap`;
  }

  return `${capitalizeFirst(label)} ${value > 0 ? "naik" : "turun"} ${formatCurrency(Math.abs(value))}`;
}

function capitalizeFirst(value) {
  const text = String(value || "");
  if (!text) {
    return "";
  }

  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

function formatSnapshotDate(value) {
  const safeValue = sanitizeDateValue(value);
  if (!safeValue) {
    return "Belum diatur";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long"
  }).format(new Date(`${safeValue}T00:00:00`));
}

function formatDecimalMonths(value) {
  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: value >= 10 ? 0 : 1
  }).format(Math.max(value || 0, 0));
}

function formatMonthYear(value) {
  const safeValue = sanitizeDateValue(value);
  if (!safeValue) {
    return "Belum diatur";
  }

  return new Intl.DateTimeFormat("id-ID", {
    month: "long",
    year: "numeric"
  }).format(new Date(`${safeValue}T00:00:00`));
}

function formatSavedAt(value) {
  const safeValue = sanitizeIsoDateTime(value);
  if (!safeValue) {
    return "Waktu tidak tersedia";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(safeValue));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

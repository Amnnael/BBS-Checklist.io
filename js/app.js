// 📦 Chargement des états depuis localStorage
let state = JSON.parse(localStorage.getItem("bbs_unit_state")) || {};
let ownedFilter = "all";
let attributeFilter = "all";
let searchTerm = "";

// 🔁 Sauvegarde
function saveState() {
  localStorage.setItem("bbs_unit_state", JSON.stringify(state));
}

// 🎯 Gestion du mode actif
let currentMode = "default";
function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-button').forEach(btn => btn.classList.remove('active'));

  if (mode === 'default') document.querySelector('.mode-button:nth-of-type(1)').classList.add('active');
  else if (mode === 'ft') document.querySelector('.mode-button:nth-of-type(2)').classList.add('active');
  else if (mode === 'spe') document.querySelector('.mode-button:nth-of-type(3)').classList.add('active');
}

// ✅ Clic sur un personnage
function toggleUnit(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = !state[id].owned;
  saveState();
  renderUnits();
  updateProgress();
}

// 🎮 Toggle FT
function toggleFT(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = true;
  state[id].ft = !state[id].ft;
  saveState();
  renderUnits();
  updateProgress();
}

// 🎮 Incrémentation spé
function incrementSpec(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = true;
  state[id].spec = state[id].spec >= 5 ? 1 : state[id].spec + 1;
  saveState();
  renderUnits();
  updateProgress();
}

// 🧱 Affichage des cartes avec filtres
function renderUnits() {
  const container = document.getElementById("unit-list");
  container.innerHTML = "";

  let filteredUnits = [...units];

  // ➕ Filtre owned
  filteredUnits = filteredUnits.filter(unit => {
    const unitState = state[unit.id] || { owned: false, ft: false, spec: 1 };
    if (ownedFilter === "owned") return unitState.owned;
    if (ownedFilter === "notOwned") return !unitState.owned;
    return true;
  });

  // ➕ Filtre attribute
  if (attributeFilter !== "all") {
    filteredUnits = filteredUnits.filter(unit =>
      unit.attribute && unit.attribute.toLowerCase() === attributeFilter
    );
  }

  // ➕ Filtre recherche
  if (searchTerm.trim() !== "") {
    filteredUnits = filteredUnits.filter(unit =>
      unit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filteredUnits.forEach(unit => {
    const unitState = state[unit.id] || { owned: false, ft: false, spec: 1 };
    const card = document.createElement("div");

    card.className = `unit-card cursor-pointer ${unitState.owned ? "selected" : ""} ${unitState.ft ? "ft" : ""}`;

    card.onclick = () => {
      if (currentMode === "ft") toggleFT(unit.id);
      else if (currentMode === "spe") incrementSpec(unit.id);
      else toggleUnit(unit.id);
    };

    const badgeColorClass = unitState.ft ? "bg-purple-600 text-white" : "bg-yellow-400 text-black";

    const badge = unitState.owned
      ? `<span class="spe-badge ${badgeColorClass}">${unitState.spec}</span>`
      : "";

    card.innerHTML = `<img src="${unit.image}" alt="${unit.name}" class="mb-1" />${badge}`;

    container.appendChild(card);
  });
}

// 📊 Barre de progression
function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const progressLabel = document.getElementById("progressLabel");

  const total = units.length;
  const owned = Object.values(state).filter(u => u.owned).length;
  const percent = total > 0 ? Math.round((owned / total) * 100) : 0;

  progressBar.style.width = `${percent}%`;
  progressLabel.textContent = `${owned}/${total} (${percent}%)`;
}

// 🔄 Reset
function resetAll() {
  if (confirm("Souhaites-tu réinitialiser ta collection ?")) {
    state = {};
    saveState();
    renderUnits();
    updateProgress();
  }
}

// 📤 Export
function exportCollection() {
  const dataStr = JSON.stringify(state);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "bbs_collection.json";
  a.click();
  URL.revokeObjectURL(url);
}

// 📥 Import
function importCollection() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";

  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const data = JSON.parse(event.target.result);
        if (typeof data === "object") {
          state = data;
          saveState();
          renderUnits();
          updateProgress();
        } else alert("Fichier invalide.");
      } catch (e) {
        alert("Erreur lors de l'import.");
      }
    };
    reader.readAsText(file);
  });

  input.click();
}

// 🚀 Init + attacher les boutons
window.addEventListener("DOMContentLoaded", () => {
  renderUnits();
  updateProgress();

  // Gestion du menu déroulant filtres
  const dropdownBtn = document.getElementById("dropdownFilterBtn");
  const dropdownMenu = document.getElementById("dropdownFilterMenu");

  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
  });

  // Fermer le menu si clic en dehors
  window.addEventListener("click", () => {
    dropdownMenu.classList.add("hidden");
  });

  // Prevent closing when clicking inside the menu
  dropdownMenu.addEventListener("click", (e) => e.stopPropagation());

  // Boutons de filtre possédé dans le menu
  document.querySelectorAll(".filter-owned-button").forEach((button, index) => {
    button.addEventListener("click", () => {
      ownedFilter = index === 0 ? "all" : index === 1 ? "owned" : "notOwned";
      document.querySelectorAll(".filter-owned-button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      dropdownMenu.classList.add("hidden");
      renderUnits();
    });
  });

  // Boutons de filtre attribute avec couleur dynamique
  document.querySelectorAll(".filter-attribute-button").forEach((button) => {
    button.addEventListener("click", () => {
      attributeFilter = button.getAttribute("data-attribute").toLowerCase();

      document.querySelectorAll(".filter-attribute-button").forEach(btn => {
        btn.classList.remove(
          "bg-green-600", "bg-purple-900", "bg-red-600", "bg-blue-500", "bg-yellow-800", "bg-gray-500"
        );
        btn.classList.add("bg-gray-800");
      });

      let activeColor = "bg-gray-500"; // par défaut pour "all"
      if (attributeFilter === "technique") activeColor = "bg-green-600";
      else if (attributeFilter === "instinct") activeColor = "bg-purple-900";
      else if (attributeFilter === "force") activeColor = "bg-red-600";
      else if (attributeFilter === "vitesse") activeColor = "bg-blue-500";
      else if (attributeFilter === "connaissance") activeColor = "bg-yellow-800";

      button.classList.remove("bg-gray-800");
      button.classList.add(activeColor);

      renderUnits();
    });
  });

  // Barre de recherche
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value;
      renderUnits();
    });
  }
});

// Öffnet das Symbolauswahlmenü
function openSymbolMenu() {
const menu = document.getElementById('symbolMenu');
menu.style.display = 'block';
menu.style.top = '50px'; // Position je nach Bedarf anpassen
menu.style.left = '50px';
}

// Schließt das Symbolauswahlmenü
function closeSymbolMenu() {
const menu = document.getElementById('symbolMenu');
menu.style.display = 'none';
}

function addSymbol(type) {
if (!type) return;

const name = `${type}_${Object.keys(elements).length + 1}`;
const container = document.getElementById("simulationContainer");

// Erstelle ein neues Div für das Element
const elementDiv = document.createElement("div");
elementDiv.className = "element";
elementDiv.style.position = "absolute";
elementDiv.style.top = "50px";
elementDiv.style.left = "50px";
elementDiv.id = name;

// Füge das passende Bild hinzu
let imagePath;
if (type === "tank") {
  imagePath = "images/image_tank_1.webp";
} else if (type === "pump") {
  imagePath = "images/image_pump_run.webp";
} else if (type === "ventil") {
  imagePath = "images/image_ventil_open.webp";
} else if (type === "flowMeter") {
  imagePath = "images/icon_measurement.png";
} else {
  console.error(`Ungültiger Symboltyp: ${type}`);
  return;
}

const img = document.createElement("img");
img.src = imagePath;
img.alt = type;
img.style.width = "50px";
img.style.height = "50px";
img.style.cursor = "pointer";

// Event-Listener für das Bild
img.addEventListener("click", () => toggleOverlay(name));

// Overlay für die Symbole
const overlay = document.createElement("div");
overlay.className = "overlay";
overlay.style.position = "absolute";
overlay.style.top = "-30px"; // Position über dem Bild
overlay.style.left = "50%";
overlay.style.transform = "translateX(-50%)";
overlay.style.display = "none";
overlay.style.flexDirection = "row"; // Horizontal anordnen
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.background = "rgba(255, 255, 255, 0.8)";
overlay.style.padding = "5px";
overlay.style.borderRadius = "5px";
overlay.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";

// Symbole im Overlay
const gearIcon = document.createElement("img");
gearIcon.src = "images/icon_gear.png";
gearIcon.alt = "Edit";
gearIcon.style.width = "20px";
gearIcon.style.margin = "0 5px";
gearIcon.style.cursor = "pointer";
gearIcon.addEventListener("click", () => editElement(name));

const deleteIcon = document.createElement("img");
deleteIcon.src = "images/icon_trash.png";
deleteIcon.alt = "Delete";
deleteIcon.style.width = "20px";
deleteIcon.style.margin = "0 5px";
deleteIcon.style.cursor = "pointer";
deleteIcon.addEventListener("click", () => deleteElement(name));

const lockIcon = document.createElement("img");
lockIcon.src = "images/icon_schloss_unlock.png";
lockIcon.alt = "Lock";
lockIcon.style.width = "20px";
lockIcon.style.margin = "0 5px";
lockIcon.style.cursor = "pointer";
lockIcon.addEventListener("click", () => toggleLock(name));

// Füge Symbole ins Overlay ein
overlay.appendChild(gearIcon);
overlay.appendChild(deleteIcon);
overlay.appendChild(lockIcon);

// Füge Bild und Overlay ins Element-Div ein
elementDiv.appendChild(img);
elementDiv.appendChild(overlay);

// Speichere das Element im Speicher und füge es dem Container hinzu
elements[name] = { type, locked: false, overlay };
container.appendChild(elementDiv);

// Mache das Element verschiebbar
makeDraggable(elementDiv);
}

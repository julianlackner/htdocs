let simulationInterval;
let elements = {};
let editingElementId = null;

function toggleLock(id) {
    const element = elements[id];
    const lockButton = document.querySelector(`#${id} .icon-container img[data-action="toggleLock"]`);
    const elementDiv = document.getElementById(id);

    element.locked = !element.locked;
    lockButton.src = element.locked ? "images/icon_schloss_lock.png" : "images/icon_schloss_unlock.png";

    if (element.locked) {
        elementDiv.style.cursor = "default";
        elementDiv.onmousedown = null;
    } else {
        elementDiv.style.cursor = "move";
        makeDraggable(elementDiv);
    }
}

function addElementFromDropdown() {
    const elementType = document.getElementById("elementSelector").value;
    if (!elementType) return;

    const name = `${elementType}_${Object.keys(elements).length + 1}`;
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
    if (elementType === "tank") {
        imagePath = "images/image_tank_1.webp";
    } else if (elementType === "pump") {
        imagePath = "images/image_pump_run.webp";
    } else if (elementType === "ventil") {
        imagePath = "images/image_ventil.png";
    } else if (elementType === "flowMeter") {
        imagePath = "images/image_durchflussmessung.png";
    }

    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = elementType;
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
    elements[name] = { type: elementType, locked: false, overlay };
    container.appendChild(elementDiv);

    // Mache das Element verschiebbar
    makeDraggable(elementDiv);

    // Setze den Dropdown-Wert zurück
    document.getElementById("elementSelector").value = "";
}

function toggleOverlay(name) {
    const element = elements[name];
    const overlay = element.overlay;

    // Schalte die Anzeige des Overlays um
    overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
}

function makeDraggable(element) {
    let offsetX = 0, offsetY = 0, isDragging = false;

    element.onmousedown = function (e) {
        const id = element.id;
        if (elements[id]?.locked) return;

        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    };

    document.onmousemove = function (e) {
        if (isDragging) {
            element.style.top = `${e.clientY - offsetY}px`;
            element.style.left = `${e.clientX - offsetX}px`;
        }
    };

    document.onmouseup = function () {
        isDragging = false;
    };
}

function deleteElement(id) {
    const elementDiv = document.getElementById(id);
    elementDiv.remove();
    delete elements[id];
}

function toggleLock(id) {
    const element = elements[id];
    const lockIcon = document.querySelector(`#${id} .overlay img[alt="Lock"]`);

    element.locked = !element.locked;
    lockIcon.src = element.locked ? "images/icon_schloss_lock.png" : "images/icon_schloss_unlock.png";
}

function editElement(id) {
    const element = document.getElementById(id);
    const elementType = elements[id]?.type;

    // Finde das Hauptbild im Element
    const img = element.querySelector("img");
    if (!img) {
        alert("Kein Bild gefunden, das bearbeitet werden kann.");
        return;
    }

    // Seitenverhältnis berechnen (natürliche Größe des Bildes oder Standard 1:1)
    const naturalWidth = img.naturalWidth || 100; // Fallback-Werte
    const naturalHeight = img.naturalHeight || 100; // Fallback-Werte
    const aspectRatio = naturalHeight / naturalWidth;

    // Aktuelle Dimensionen des Bildes
    const currentWidth = img.style.width ? parseInt(img.style.width) : naturalWidth;
    const currentHeight = img.style.height ? parseInt(img.style.height) : naturalHeight;

    // Erstelle ein modales Fenster für die Bearbeitung
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.background = "#fff";
    modal.style.padding = "20px";
    modal.style.borderRadius = "10px";
    modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    modal.style.zIndex = "1000";

    // HTML-Inhalt des Modals
    modal.innerHTML = `
        <h3>${id} bearbeiten</h3>
        <label for="imageWidth">Breite (${currentWidth}px):</label>
        <input type="range" id="imageWidth" min="20" max="2500" value="${currentWidth}" />
        ${elementType === "tank" ? `
        <label for="imageHeight">Höhe (${currentHeight}px):</label>
        <input type="range" id="imageHeight" min="20" max="2500" value="${currentHeight}" />
        ` : ''}
        <div style="margin-top: 20px; text-align: center;">
            <button id="saveChanges" style="padding: 10px 20px; background: #007BFF; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Speichern</button>
            <button id="cancelChanges" style="padding: 10px 20px; background: #ccc; color: #000; border: none; border-radius: 5px; cursor: pointer;">Abbrechen</button>
        </div>
    `;

    // Fügt das Modal dem Dokument hinzu
    document.body.appendChild(modal);

    // Referenzen auf Eingaberegler
    const widthSlider = modal.querySelector("#imageWidth");
    const heightSlider = modal.querySelector("#imageHeight");

    // Vorschau live aktualisieren
    widthSlider.addEventListener("input", () => {
        const newWidth = parseInt(widthSlider.value, 10);
        img.style.width = `${newWidth}px`;

        // Für alle anderen Typen außer "tank" Höhe proportional anpassen
        if (elementType !== "tank") {
            img.style.height = `${Math.round(newWidth * aspectRatio)}px`;
        }

        modal.querySelector("label[for='imageWidth']").textContent = `Breite (${newWidth}px):`;
    });

    if (elementType === "tank") {
        // Für Tanks: Höhe unabhängig bearbeiten
        heightSlider.addEventListener("input", () => {
            const newHeight = parseInt(heightSlider.value, 10);
            img.style.height = `${newHeight}px`;

            modal.querySelector("label[for='imageHeight']").textContent = `Höhe (${newHeight}px):`;
        });
    }

    // Speichern der Änderungen
    modal.querySelector("#saveChanges").addEventListener("click", () => {
        const newWidth = parseInt(widthSlider.value, 10);
        img.style.width = `${newWidth}px`;

        // Für alle anderen Typen außer "tank" Höhe proportional anpassen
        if (elementType !== "tank") {
            img.style.height = `${Math.round(newWidth * aspectRatio)}px`;
        } else {
            // Speichere Höhe für Tank
            const newHeight = parseInt(heightSlider.value, 10);
            img.style.height = `${newHeight}px`;
        }

        document.body.removeChild(modal);
    });

    // Änderungen abbrechen
    modal.querySelector("#cancelChanges").addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}




document.onmousemove = function (e) {
    if (isDragging) {
        const container = document.getElementById("simulationContainer");
        const containerRect = container.getBoundingClientRect();

        // Berechne die neue Position des Elements
        const newX = Math.max(0, Math.min(e.clientX - containerRect.left - offsetX, containerRect.width - element.offsetWidth));
        const newY = Math.max(0, Math.min(e.clientY - containerRect.top - offsetY, containerRect.height - element.offsetHeight));

        // Aktualisiere die Position des Elements
        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    }
};

document.onmouseup = function () {
    if (isDragging) {
        // Beende das Drag-and-Drop
        isDragging = false;

        // Setze die Z-Ebene des Elements zurück
        element.style.zIndex = "";
    }
};

// Zusätzliche Sicherheit: Wenn der Mauszeiger den Container verlässt, stoppe das Ziehen
document.onmouseleave = function () {
    if (isDragging) {
        isDragging = false;
        element.style.zIndex = "";
    }
};
}

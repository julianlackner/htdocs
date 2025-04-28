
function showModal(editing = false, id = null) {
    const modal = document.getElementById("elementModal");
    document.getElementById("modalTitle").textContent = editing ? "Element bearbeiten" : "Element hinzufügen";
    document.getElementById("modalActionButton").textContent = editing ? "Speichern" : "Hinzufügen";
    editingElementId = editing ? id : null;

    if (editing) {
        const element = elements[id];
        document.getElementById("elementType").value = element.type;
        document.getElementById("elementName").value = id;

        if (element.type === "tank") {
            document.getElementById("tankCapacity").value = element.capacity;
            document.getElementById("tankLevel").value = element.level;
            document.getElementById("tankAlarmMax").value = element.alarmMax;
            document.getElementById("tankAlarmMin").value = element.alarmMin;
            document.getElementById("tankTemperature").value = element.temperature; // Hinzugefügt
        } else if (element.type === "pump") {
            document.getElementById("pumpFlow").value = element.flow;
            document.getElementById("pumpSource").value = element.source;
            document.getElementById("pumpTarget").value = element.target;
        } else if (element.type === "flowMeter") {
            document.getElementById("flowMeterPump").value = element.pump;
        } else if (element.type === "levelDisplay") {
            document.getElementById("levelDisplayTank").value = element.tank || "";
        }

        updateFormFields();
    } else {
        resetFormFields();
    }

    updateDropdowns();
    modal.style.display = "block";
}

    function resetFormFields() {
      const fields = [
  "elementName", "tankCapacity", "tankLevel", "tankAlarmMax", "tankAlarmMin",
  "pumpFlow", "pumpSource", "pumpTarget", "flowMeterPump", "levelDisplayTank", "tankTemperature" // Hinzugefügt
];
        fields.forEach(field => document.getElementById(field).value = "");
    }

    function closeModal() {
        document.getElementById("elementModal").style.display = "none";
    }

    function updateFormFields() {
        const type = document.getElementById("elementType").value;
        document.getElementById("tankFields").style.display = type === "tank" ? "block" : "none";
        document.getElementById("pumpFields").style.display = type === "pump" ? "block" : "none";
        document.getElementById("flowMeterFields").style.display = type === "flowMeter" ? "block" : "none";
        document.getElementById("levelDisplayFields").style.display = type === "levelDisplay" ? "block" : "none";
    }

    function updateDropdowns() {
        const pumpSourceDropdown = document.getElementById("pumpSource");
        const pumpTargetDropdown = document.getElementById("pumpTarget");
        const flowMeterPumpDropdown = document.getElementById("flowMeterPump");
        const levelDisplayTankDropdown = document.getElementById("levelDisplayTank");

        const dropdowns = [pumpSourceDropdown, pumpTargetDropdown, flowMeterPumpDropdown, levelDisplayTankDropdown];
        dropdowns.forEach(dropdown => dropdown.innerHTML = '<option value="">-</option>');

        for (const [name, element] of Object.entries(elements)) {
            if (element.type === "tank") {
                pumpSourceDropdown.innerHTML += `<option value="${name}">${name}</option>`;
                pumpTargetDropdown.innerHTML += `<option value="${name}">${name}</option>`;
                levelDisplayTankDropdown.innerHTML += `<option value="${name}">${name}</option>`;
            } else if (element.type === "pump") {
                flowMeterPumpDropdown.innerHTML += `<option value="${name}">${name}</option>`;
            }
        }
    }

    function addElement() {
        const type = document.getElementById("elementType").value;
        const name = document.getElementById("elementName").value || `Element_${Object.keys(elements).length + 1}`;

        if (editingElementId) {
            deleteElement(editingElementId);
        }

        const container = document.getElementById("simulationContainer");
        const elementDiv = document.createElement("div");
        elementDiv.className = "element";
        elementDiv.style.top = "50px";
        elementDiv.style.left = "50px";
        elementDiv.id = name;

        let content = `<div class="icon-container">
            <img src="images/icon_gear.png" alt="Edit" onclick="showModal(true, '${name}')">
            <img src="images/icon_trash.png" alt="Delete" onclick="deleteElement('${name}')">
            <img src="images/icon_schloss_lock.png" alt="Lock" data-action="toggleLock" onclick="toggleLock('${name}')">
        </div>`;
        content += `<h3>${name}</h3>`;

        if (type === "tank") {
    const capacity = parseFloat(document.getElementById("tankCapacity").value) || 1000;
    const level = parseFloat(document.getElementById("tankLevel").value) || 500;
    const temperature = parseFloat(document.getElementById("tankTemperature").value) || 20; // Standard: 20°C
    if (level > capacity) {
        alert("Der Startfüllstand darf das maximale Volumen des Tanks nicht überschreiten.");
        return;
    }
    const alarmMax = parseFloat(document.getElementById("tankAlarmMax").value) || 80;
    const alarmMin = parseFloat(document.getElementById("tankAlarmMin").value) || 20;

    content += `<p>Volumen Max: ${capacity} m³</p>`;
    content += `<p id="${name}Level">Füllstand: ${level} m³</p>`;
    content += `<p id="${name}Temperature">Temperatur: ${temperature.toFixed(2)} °C</p>`;
    content += `<p>Alarm Max: ${alarmMax}%</p><p>Alarm Min: ${alarmMin}%</p>`;

    elements[name] = { type, capacity, level, alarmMax, alarmMin, temperature, initialTemperature: temperature, initialLevel: level };


        } else if (type === "pump") {
            const flow = parseFloat(document.getElementById("pumpFlow").value) || 1000;
            const source = document.getElementById("pumpSource").value;
            const target = document.getElementById("pumpTarget").value;
            const efficiency = 50;

            content += `<p>Durchfluss Max: ${flow} m³/h</p>`;
            content += `<p>Quelle: ${source || "-"}</p><p>Ziel: ${target || "-"}</p>`;
            content += `<div class="pump-controls">
            <button onclick="startPump('${name}')">Start</button>
            <button onclick="stopPump('${name}')">Stop</button>
            <input
        type="range"
        min="0"
        max="100"
        value="${efficiency}"
        oninput="updateEfficiency('${name}', this.value)">
    <p class="pump-efficiency-label" id="${name}EfficiencyLabel">Effizienz: ${efficiency}%</p>
</div>`;

            elements[name] = { type, flow, source, target, efficiency, running: false, initialEfficiency: efficiency };
        } else if (type === "flowMeter") {
            const pump = document.getElementById("flowMeterPump").value;
            content += `<p>Pumpe: ${pump || "-"}</p>`;
            content += `<p id="${name}Flow">Durchfluss: 0 m³/h</p>`;
            elements[name] = { type, pump };
        } else if (type === "levelDisplay") {
            const tank = document.getElementById("levelDisplayTank").value;
            if (!tank || !elements[tank]) {
                alert("Bitte einen gültigen Tank auswählen.");
                return;
            }
            const linkedTank = elements[tank];
            const percentage = (linkedTank.level / linkedTank.capacity) * 100;

            content += `<p>Verknüpfter Tank: ${tank}</p>`;
            content += `<p id="${name}LevelDisplay">Füllstand: ${percentage.toFixed(2)}% (${linkedTank.level.toFixed(2)} m³)</p>`;
            elements[name] = { type, tank };
        }
        elementDiv.innerHTML = content;
        container.appendChild(elementDiv);
        makeDraggable(elementDiv);

        closeModal();
    }

    function deleteElement(id) {
        const elementDiv = document.getElementById(id);
        if (elementDiv) elementDiv.remove();
        delete elements[id];
    }
    function updateEfficiency(name, value) {
        const pump = elements[name];
        if (!pump || pump.type !== "pump") return;

        // Aktualisiere die Effizienz in den Element-Daten
        pump.efficiency = parseInt(value, 10);

        // Aktualisiere die Anzeige
        const efficiencyLabel = document.getElementById(`${name}EfficiencyLabel`);
        if (efficiencyLabel) {
            efficiencyLabel.textContent = `Effizienz: ${pump.efficiency}%`;
        }
    }
    function startPump(name) {
        const pump = elements[name];
        if (!pump || pump.type !== "pump" || pump.running) return;

        const sourceTank = elements[pump.source];
        const targetTank = elements[pump.target];

        if (sourceTank && sourceTank.level <= sourceTank.capacity * (sourceTank.alarmMin / 100)) {
            alert("Der Quelltank hat den Mindestwert unterschritten. Pumpe kann nicht gestartet werden.");
            return;
        }

        if (targetTank && targetTank.level >= targetTank.capacity * (targetTank.alarmMax / 100)) {
            alert("Der Zieltank hat die maximale Alarmgrenze erreicht. Pumpe kann nicht gestartet werden.");
            return;
        }

        pump.running = true;
        updateSimulation();
    }

    function stopPump(name) {
        const pump = elements[name];
        if (!pump || pump.type !== "pump" || !pump.running) return;

        pump.running = false;
    }

    function resetSimulation() {
        for (const [name, element] of Object.entries(elements)) {
            if (element.type === "tank") {
                element.level = element.initialLevel;
                element.temperature = element.initialTemperature; // Temperatur zurücksetzen
                document.getElementById(`${name}Level`).textContent = `Füllstand: ${element.level.toFixed(2)} m³`;
                document.getElementById(`${name}Temperature`).textContent = `Temperatur: ${element.temperature.toFixed(2)} °C`;
            } else if (element.type === "pump") {
                element.efficiency = element.initialEfficiency || 50;
                element.running = false;
                const efficiencySlider = document.querySelector(`#${name} input[type="range"]`);
                const efficiencyLabel = document.querySelector(`#${name} .pump-efficiency-label`);
                if (efficiencySlider) efficiencySlider.value = element.efficiency;
                if (efficiencyLabel) efficiencyLabel.textContent = `Effizienz: ${element.efficiency}%`;
            } else if (element.type === "levelDisplay") {
                const linkedTank = elements[element.tank];
                if (linkedTank) {
                    const percentage = (linkedTank.level / linkedTank.capacity) * 100;
                    const displayElement = document.getElementById(`${name}LevelDisplay`);
                    if (displayElement) {
                        displayElement.textContent = `Füllstand: ${percentage.toFixed(2)}% (${linkedTank.level.toFixed(2)} m³)`;
                    }
                }
            }
        }
    }

  function updateSimulation() {
      if (simulationInterval) return;

      simulationInterval = setInterval(() => {
              for (const [name, element] of Object.entries(elements)) {
                  if (element.type === "pump" && element.running && element.source && element.target) {
                      const pumpFlow = (element.flow * element.efficiency) / 100;

                      const sourceTank = elements[element.source];
                      const targetTank = elements[element.target];

                      if (
                          sourceTank &&
                          targetTank &&
                          sourceTank.level > sourceTank.capacity * (sourceTank.alarmMin / 100) &&
                          targetTank.level < targetTank.capacity * (targetTank.alarmMax / 100)
                      ) {
                          const transferAmount = Math.min(pumpFlow / 60, sourceTank.level);
                          sourceTank.level -= transferAmount;
                          targetTank.level = Math.min(targetTank.level + transferAmount, targetTank.capacity);

                          // Mischtemperatur berechnen
                          const m1 = sourceTank.level; // Masse des ersten Tanks
                          const m2 = targetTank.level; // Masse des zweiten Tanks
                          const t1 = sourceTank.temperature; // Temperatur des ersten Tanks
                          const t2 = targetTank.temperature; // Temperatur des zweiten Tanks

                          const newTemperature = (m1 + m2 > 0) ? ((m1 * t1) + (m2 * t2)) / (m1 + m2) : t2;

                          // Temperatur des Zieltanks aktualisieren
                          targetTank.temperature = newTemperature;

                          // Anzeigen aktualisieren
                          document.getElementById(`${element.source}Level`).textContent = `Füllstand: ${sourceTank.level.toFixed(2)} m³`;
                          document.getElementById(`${element.target}Level`).textContent = `Füllstand: ${targetTank.level.toFixed(2)} m³`;
                          document.getElementById(`${element.target}Temperature`).textContent = `Temperatur: ${targetTank.temperature.toFixed(2)} °C`;
                      }
                  }


              // **Neu: Aktualisiere Durchflussmesser**
              if (element.type === "flowMeter" && element.pump) {
                  const linkedPump = elements[element.pump];
                  const flowDisplayElement = document.getElementById(`${name}Flow`);
                  if (linkedPump && linkedPump.running) {
                      const flowRate = (linkedPump.flow * linkedPump.efficiency) / 100;
                      flowDisplayElement.textContent = `Durchfluss: ${flowRate.toFixed(2)} m³/h`;
                  } else {
                      flowDisplayElement.textContent = `Durchfluss: 0 m³/h`;
                  }
              }

              // Aktualisiere Füllstandsanzeigen
              for (const [ldName, ldElement] of Object.entries(elements)) {
                  if (ldElement.type === "levelDisplay" && ldElement.tank) {
                      const linkedTank = elements[ldElement.tank];
                      if (linkedTank) {
                          const percentage = (linkedTank.level / linkedTank.capacity) * 100;
                          const displayElement = document.getElementById(`${ldName}LevelDisplay`);
                          if (displayElement) {
                              displayElement.textContent = `Füllstand: ${percentage.toFixed(2)}% (${linkedTank.level.toFixed(2)} m³)`;
                          }
                      }
                  }
              }
          }
      }, 1000);
  }


  function startSimulation() {
      resetSimulation();
      updateSimulation();
  }

  function stopSimulation() {
      clearInterval(simulationInterval);
      simulationInterval = null;
  }






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



   function deleteElement(id) {
       const elementDiv = document.getElementById(id);
       elementDiv.remove();
       delete elements[id];
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



   function makeDraggable(element) {
   let offsetX = 0, offsetY = 0, isDragging = false;

   element.onmousedown = function (e) {
       const id = element.id;
       if (elements[id]?.locked) return;

       // Markiere das Element als "in Bewegung"
       isDragging = true;

       // Berechne den Offset relativ zur Mausposition
       const rect = element.getBoundingClientRect();
       offsetX = e.clientX - rect.left;
       offsetY = e.clientY - rect.top;

       // Setze das Element auf eine höhere Z-Ebene, um es während des Drag-and-Drop sichtbar zu halten
       element.style.zIndex = "1000";

       // Verhindere das Standardverhalten von `mousedown` (z. B. Textauswahl)
       e.preventDefault();
   };

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

let simulationContainer = document.getElementById("simulationContainer");
let eraseMode = false;

function addLine() {
    if (!simulationContainer) {
        console.error("simulationContainer not found.");
        return;
    }

    const line = document.createElement("div");
    line.classList.add("line");
    line.style.position = "absolute";
    line.style.width = "100px";
    line.style.height = "2px";
    line.style.backgroundColor = "black";
    line.style.left = "50px";
    line.style.top = "50px";
    line.style.transform = "rotate(0deg)";
    line.style.cursor = "move";

    const leftHandle = createHandle("left");
    const rightHandle = createHandle("right");
    line.appendChild(leftHandle);
    line.appendChild(rightHandle);

    simulationContainer.appendChild(line);

    enableLineEditing(line, leftHandle, rightHandle);
    console.log("Line added successfully.");
}

function createHandle(position) {
    const handle = document.createElement("div");
    handle.classList.add("resize-handle");
    handle.style.position = "absolute";
    handle.style.width = "8px";
    handle.style.height = "8px";
    handle.style.backgroundColor = "blue";
    handle.style.borderRadius = "50%";
    handle.style.cursor = position === "left" ? "w-resize" : "e-resize";
    handle.style[position] = "-4px"; // Position handle relative to line
    handle.style.top = "50%";
    handle.style.transform = "translateY(-50%)";
    return handle;
}

function enableLineEditing(line, leftHandle, rightHandle) {
    let isDragging = false;
    let isResizingLeft = false;
    let isResizingRight = false;

    let startX, startY, startLeft, startTop, startWidth;

    line.addEventListener("mousedown", (e) => {
        if (eraseMode) {
            simulationContainer.removeChild(line);
            return;
        }
        if (e.target === leftHandle || e.target === rightHandle) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = line.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
    });

    leftHandle.addEventListener("mousedown", (e) => {
        isResizingLeft = true;
        startX = e.clientX;
        const rect = line.getBoundingClientRect();
        startWidth = rect.width;
        startLeft = rect.left;
        e.stopPropagation();
    });

    rightHandle.addEventListener("mousedown", (e) => {
        isResizingRight = true;
        startX = e.clientX;
        const rect = line.getBoundingClientRect();
        startWidth = rect.width;
        e.stopPropagation();
    });

    window.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            line.style.left = `${startLeft + dx}px`;
            line.style.top = `${startTop + dy}px`;
        } else if (isResizingLeft) {
            const dx = e.clientX - startX;
            const newWidth = startWidth - dx;
            if (newWidth > 0) {
                line.style.width = `${newWidth}px`;
                line.style.left = `${startLeft + dx}px`;
            }
        } else if (isResizingRight) {
            const dx = e.clientX - startX;
            const newWidth = startWidth + dx;
            if (newWidth > 0) {
                line.style.width = `${newWidth}px`;
            }
        }
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
        isResizingLeft = false;
        isResizingRight = false;
    });
}


function eraseObject() {
    eraseMode = !eraseMode;
    simulationContainer.style.cursor = eraseMode ? "crosshair" : "default";
    console.log("Erase mode:", eraseMode);
}

function openSidebar() {
    document.getElementById("sidebar").classList.add("active");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
}


const facts = [
    "Papier wurde vor über 2000 Jahren in China erfunden.",
    "Pro Jahr werden weltweit über 400 Millionen Tonnen Papier produziert.",
    "Papier kann bis zu 7 Mal recycelt werden, bevor die Fasern zu kurz werden.",
    "Österreich gehört zu den führenden Papierproduzenten in Europa.",
    "47% der Fläche Österreichs ist bewaldet, was nachhaltige Papierproduktion unterstützt.",
    "Die Papierindustrie in Österreich beschäftigt über 8000 Menschen direkt.",
    "Papier ist vollständig biologisch abbaubar und eines der nachhaltigsten Materialien.",
    "Für die Herstellung von einem Kilogramm Papier werden im Schnitt 10 Liter Wasser benötigt.",
    "Recyclingpapier spart bis zu 60% Energie im Vergleich zur Herstellung von Frischfaserpapier.",
    "Es gibt über 3000 verschiedene Arten von Papier.",
    "Die österreichische Papierindustrie hat eine Recyclingquote von über 75%.",
    "Spezialpapier wird in Batterien, Filtern und medizinischen Anwendungen verwendet.",
    "Die Papiermacherschule Steyrermühl ist ein weltweit anerkanntes Ausbildungszentrum.",
    "Moderne österreichische Papierfabriken erzeugen ihre eigene Energie.",
    "Rund 85% der in Österreich produzierten Papierprodukte werden exportiert.",
    "Papier besteht hauptsächlich aus Zellstoff, der aus Holz gewonnen wird.",
    "Die Flächenmasse von Papier wird in Gramm pro Quadratmeter (g/m²) angegeben.",
    "Die österreichische Papierindustrie ist ein Vorreiter bei nachhaltiger Produktion.",
    "Die Dicke von Papier wird in Mikrometern (µm) gemessen.",
    "Es gibt Papierarten wie Zeitungspapier, Karton und hochspezialisiertes technisches Papier.",
    "Papier kann in einem geschlossenen Kreislauf recycelt werden.",
    "Recyclingpapier reduziert die CO₂-Emissionen erheblich.",
    "Zellstoff und Papierherstellung nutzen Nebenprodukte aus der Forstwirtschaft.",
    "Österreich produziert jährlich rund 5 Millionen Tonnen Papier.",
    "Innovative Papierprodukte aus Österreich sind biologisch abbaubare Verpackungen.",
    "Papier ist eines der am häufigsten recycelten Materialien weltweit.",
    "Der durchschnittliche Papierverbrauch in Europa liegt bei etwa 130 kg pro Person pro Jahr.",
    "Papier wurde erstmals 105 n. Chr. in China dokumentiert.",
    "Die österreichische Papierindustrie trägt erheblich zum Bruttoinlandsprodukt bei.",
    "Österreichische Papierfabriken nutzen Kraft-Wärme-Kopplung für Energieeffizienz."
];

let currentFactIndex = 0;

function displayNextFact() {
    const factDisplay = document.getElementById("fact-display");
    factDisplay.style.opacity = 0; // Start mit ausgeblendeter Anzeige
    setTimeout(() => {
        factDisplay.textContent = facts[currentFactIndex];
        factDisplay.style.opacity = 1; // Blende den neuen Text ein
        currentFactIndex = (currentFactIndex + 1) % facts.length; // Nächsten Index berechnen
    }, 500); // Wartezeit, um den Effekt zu synchronisieren
}

setInterval(displayNextFact, 10000); // Wechsel alle 10 Sekunden

// Starte den ersten Fakt
document.addEventListener("DOMContentLoaded", displayNextFact);

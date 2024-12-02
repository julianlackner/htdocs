document.addEventListener('DOMContentLoaded', () => {
    // Dynamisches Anzeigen/Verstecken von Untermenüs
    document.querySelectorAll('.toggle-menu').forEach(button => {
        button.addEventListener('click', () => {
            const target = document.getElementById(button.getAttribute('data-target'));
            if (target) {
                target.classList.toggle('hidden');
            }
        });
    });

    // Rohdichte-Berechnung
    document.getElementById('berechnen-button-rohdichte').addEventListener('click', () => {
        const fbm = parseFloat(document.getElementById('fbm').value);
        const dicke = parseFloat(document.getElementById('dicke').value);

        if (isNaN(fbm) || isNaN(dicke)) {
            document.getElementById('resultrohdichte').innerText = 'Bitte geben Sie gültige Zahlen ein.';
            return;
        }

        const rohdichte = fbm / dicke;
        document.getElementById('resultrohdichte').innerText = `Die Rohdichte ist: ${rohdichte.toFixed(2)} g/cm³`;
    });

    // Funktion zum Zurücksetzen der Eingabefelder
    document.getElementById('reset-button-rohdichte').addEventListener('click', () => {
        document.getElementById('fbm').value = '';  // Flächenbezogene Masse zurücksetzen
        document.getElementById('dicke').value = '';  // Papierdicke zurücksetzen
        document.getElementById('resultrohdichte').innerText = '';  // Ergebnis zurücksetzen
    });

    // Spezifisches Volumen-Berechnung
    document.getElementById('berechnen-button-spezvolumen').addEventListener('click', () => {
        const mass = parseFloat(document.getElementById('mass').value);
        const vol = parseFloat(document.getElementById('vol').value);

        if (isNaN(mass) || isNaN(vol)) {
            document.getElementById('resultspezvolumen').innerText = 'Bitte geben Sie gültige Zahlen ein.';
            return;
        }

        const spezvolumen = vol / mass;
        document.getElementById('resultspezvolumen').innerText = `Das spezifische Volumen ist: ${spezvolumen.toFixed(2)} cm³/g`;
    });

    // Funktion zum Zurücksetzen der Eingabefelder für spezifisches Volumen
    document.getElementById('reset-button-spezvolumen').addEventListener('click', () => {
        document.getElementById('mass').value = '';  // Masse zurücksetzen
        document.getElementById('vol').value = '';  // Volumen zurücksetzen
        document.getElementById('resultspezvolumen').innerText = '';  // Ergebnis zurücksetzen
    });
});


// Wasseraufnahme-Berechnung
document.addEventListener('DOMContentLoaded', () => {
    // Event-Listener für die Berechnung der Wasseraufnahme
    document.getElementById('berechnen-button-wasseraufnahme').addEventListener('click', () => {
        const m1 = parseFloat(document.getElementById('gewicht-vor').value); // Gewicht vor der Wasseraufnahme
        const m2 = parseFloat(document.getElementById('gewicht-nach').value); // Gewicht nach der Wasseraufnahme

        // Überprüfen, ob beide Werte gültige Zahlen sind
        if (isNaN(m1) || isNaN(m2)) {
            document.getElementById('resultwasseraufnahme').innerText = 'Bitte geben Sie gültige Zahlen ein.';
            return;
        }

        // Berechnung der Wasseraufnahme: (m2 - m1) / 0.01
        const wasseraufnahme = (m2 - m1) / 0.01;

        // Anzeige des Ergebnisses
        document.getElementById('resultwasseraufnahme').innerText = `Die Wasseraufnahme ist: ${wasseraufnahme.toFixed(2)} [g/m²]`;
    });

    // Event-Listener für das Zurücksetzen der Eingabefelder
    document.getElementById('reset-button-wasseraufnahme').addEventListener('click', () => {
        document.getElementById('gewicht-vor').value = '';  // Gewicht vor der Wasseraufnahme zurücksetzen
        document.getElementById('gewicht-nach').value = '';  // Gewicht nach der Wasseraufnahme zurücksetzen
        document.getElementById('resultwasseraufnahme').innerText = '';  // Ergebnis zurücksetzen
    });
});


// stoffdichte berechnung
document.addEventListener('DOMContentLoaded', () => {
    // Event-Listener für die Berechnung der stoffdichte
    document.getElementById('berechnen-button-stoffdichte').addEventListener('click', () => {
        const m1 = parseFloat(document.getElementById('masse-trocken').value); // trocken masse
        const m2 = parseFloat(document.getElementById('masse-feucht').value); // feuchte masse

        // Überprüfen, ob beide Werte gültige Zahlen sind
        if (isNaN(m1) || isNaN(m2)) {
            document.getElementById('resultstoffdichte').innerText = 'Bitte geben Sie gültige Zahlen ein.';
            return;
        }

        // Berechnung der Wasseraufnahme: (m2 - m1) / 0.01
        const wasseraufnahme = (m1 / m2)*100;

        // Anzeige des Ergebnisses
        document.getElementById('resultstoffdichte').innerText = `Die Stoffdichte beträgt: ${wasseraufnahme.toFixed(2)} [%]`;
    });

    // Event-Listener für das Zurücksetzen der Eingabefelder
    document.getElementById('reset-button-stoffdichte').addEventListener('click', () => {
        document.getElementById('masse-trocken').value = '';  // masse trocken zurücksetzen
        document.getElementById('masse-feucht').value = '';  // masse feucht zurücksetzen
        document.getElementById('resultstoffdichte').innerText = '';  // Ergebnis zurücksetzen
    });
});

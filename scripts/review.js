const questionsQuiz1 = [
    {
        question: "Was versteht man unter „Holz“?",
        answers: [
            { text: "Ein synthetisches Material, das in der Zellstoffindustrie verwendet wird.", correct: false },
            { text: "Das Gewebe der Stämme, Wurzeln und Äste von Holzpflanzen (Bäume).", correct: true },
            { text: "Ein Nebenprodukt der Papierherstellung.", correct: false },
            { text: "Ein chemisches Derivat von Zellulose.", correct: false }
        ]
    },

    {
        question: "Welche grundlegenden Aufschlussverfahren für Holz gibt es?",
        answers: [
            { text: "Mechanisches, chemisches, biologisches.", correct: false },
            { text: "Mechanisches, chemisch-mechanisches, chemisches.", correct: true },
            { text: "Biologisches, chemisch-mechanisches, physikalisches.", correct: false },
            { text: "Mechanisches, thermisches, chemisches.", correct: false }
        ]
    },
    {
        question: "Nennen Sie zu den Aufschlussverfahren je ein Beispiel.",
        answers: [
            { text: "Mechanisches: Holzschliff; Chemisch-mechanisches: CTMP; Chemisches: Zellstoff.", correct: true },
            { text: "Mechanisches: CTMP; Chemisch-mechanisches: Zellstoff; Chemisches: Holzschliff.", correct: false },
            { text: "Mechanisches: Zellstoff; Chemisch-mechanisches: CTMP; Chemisches: Holzschliff.", correct: false },
            { text: "Mechanisches: Zellstoff; Chemisch-mechanisches: Holzschliff; Chemisches: CTMP.", correct: false }
        ]
    },
    {
        question: "Beschreiben Sie eines dieser Verfahren genauer.",
        answers: [
            { text: "Zellstoff: Saures Aufschlussverfahren mit Magnesium-Bisulfat oder Kalzium-Bisulfat.", correct: true },
            { text: "Zellstoff: Mechanisches Verfahren zur Zerfaserung von Holz.", correct: false },
            { text: "Zellstoff: Biologisches Verfahren zur Umwandlung von Lignin.", correct: false },
            { text: "Zellstoff: Physikalisches Verfahren, das durch Erwärmung Zellulose freisetzt.", correct: false }
        ]
    },
    {
        question: "Nennen Sie die Haupteinteilung der Rohstoffe zur Halbstoffherstellung.",
        answers: [
            { text: "Laubholz, Nadelholz, Kunststoffe, Fasern.", correct: false },
            { text: "Laubholz, Nadelholz, Einjahrespflanzen, verschiedene Rohstoffe.", correct: true },
            { text: "Holz, Kunststoff, Zellulose, Fasern.", correct: false },
            { text: "Nadelholz, Gräser, Chemikalien, Holzreste.", correct: false }
        ]
    },
    {
        question: "Geben Sie zu dieser Haupteinteilung ein Beispiel.",
        answers: [
            { text: "Eiche, Plastik, Buche, Gräser.", correct: false },
            { text: "Gräser, Fichte, Buche, Altpapier.", correct: true },
            { text: "Altpapier, Sand, Zellstoff, Glas.", correct: false },
            { text: "Kunststoff, Gräser, Buche, Metall.", correct: false }
        ]
    },
    {
        question: "Nennen Sie die zwei Haupternährungsströme des Baumes.",
        answers: [
            { text: "Luftnahrung und Wassernahrung.", correct: false },
            { text: "Luftnahrung und Erdnahrung.", correct: true },
            { text: "Wassernahrung und Bodennahrung.", correct: false },
            { text: "Lichtnahrung und Erdnahrung.", correct: false }
        ]
    },
    {
        question: "Aus welchen Stoffen setzt sich die Luftnahrung zusammen?",
        answers: [
            { text: "Sauerstoff und Stickstoff.", correct: false },
            { text: "Kohlendioxid (CO₂).", correct: true },
            { text: "Wasserstoff und Methan.", correct: false },
            { text: "Sauerstoff und Methan.", correct: false }
        ]
    },
    {
        question: "Aus welchen Stoffen setzt sich die Erdnahrung zusammen?",
        answers: [
            { text: "Wasser und Nährsalze.", correct: true },
            { text: "Kohlendioxid und Stickstoff.", correct: false },
            { text: "Sauerstoff und Wasser.", correct: false },
            { text: "Nährsalze und Methan.", correct: false }
        ]
    },
    {
        question: "Was entsteht durch die Photosynthese?",
        answers: [
            { text: "Zellulose.", correct: false },
            { text: "Sauerstoff und Traubenzucker (Glucose).", correct: true },
            { text: "Wasser und Kohlendioxid.", correct: false },
            { text: "Lignin und Hemicellulose.", correct: false }
        ]
    },
    {
        question: "Welche Aufgabe erfüllt die Assimilation?",
        answers: [
            { text: "Umwandlung von anorganischen Stoffen in organische Stoffe.", correct: true },
            { text: "Aufnahme von Sauerstoff durch die Blätter.", correct: false },
            { text: "Spaltung von Glucose in kleinere Einheiten.", correct: false },
            { text: "Transport von Wasser durch das Splintholz.", correct: false }
        ]
    },
    {
        question: "In welcher Richtung und Bahn werden die Assimilate transportiert?",
        answers: [
            { text: "Vom Mark zu den Wurzeln.", correct: false },
            { text: "Vom Bast (innere Rinde) zu den Wurzeln.", correct: true },
            { text: "Von den Wurzeln zur Zellschicht.", correct: false },
            { text: "Vom Splintholz zum Kernholz.", correct: false }
        ]
    },
    {
        question: "Wie wird das Wasser im Baum transportiert?",
        answers: [
            { text: "Durch Diffusion in der Rinde.", correct: false },
            { text: "Durch Kapillarität im Splintholz.", correct: true },
            { text: "Durch Osmose in den Blättern.", correct: false },
            { text: "Durch Zentrifugalkraft in der Borke.", correct: false }
        ]
    },
    {
        question: "Welche Stoffe werden mit der Erdnahrung aufgenommen?",
        answers: [
            { text: "Wasser und Kohlendioxid.", correct: false },
            { text: "Wasser und Nährsalze wie Stickstoff, Kalium, Phosphor.", correct: true },
            { text: "Sauerstoff und Methan.", correct: false },
            { text: "Glucose und Calcium.", correct: false }
        ]
    },
    {
        question: "Aus welchen Schichten ist der Stamm eines Baumes aufgebaut?",
        answers: [
            { text: "Rinde, Splintholz, Zellschicht, Kernholz.", correct: false },
            { text: "Borke, Bast, Splintholz, Kernholz, Zellschicht.", correct: true },
            { text: "Bast, Kernholz, Zellschicht, Lignin.", correct: false },
            { text: "Rinde, Mark, Splintholz, Kernholz.", correct: false }
        ]
    },
    {
        question: "Welche Aufgabe hat die Borke?",
        answers: [
            { text: "Schutz vor Kälte, Hitze, Pilzen und Insekten.", correct: true },
            { text: "Wasserleitung im Baum.", correct: false },
            { text: "Nährstoffspeicherung für das Wachstum.", correct: false },
            { text: "Stabilisierung des Splintholzes.", correct: false }
        ]
    },

    {
            question: "Welche Aufgabe hat der Bast?",
            answers: [
                { text: "Leitung von Wasser aus den Wurzeln zur Krone.", correct: false },
                { text: "Leitung der Assimilate von der Krone bis in die Wurzeln.", correct: true },
                { text: "Schutz vor äußeren Umwelteinflüssen.", correct: false },
                { text: "Speicherung von Zellulose.", correct: false }
            ]
        },
        {
            question: "Welche Aufgabe hat das Splintholz?",
            answers: [
                { text: "Wasserleitung im Baum.", correct: true },
                { text: "Schutz des Kernholzes.", correct: false },
                { text: "Speicherung von Nährstoffen.", correct: false },
                { text: "Leitung von Assimilaten zu den Blättern.", correct: false }
            ]
        },
        {
            question: "Welche Aufgabe hat das Kernholz?",
            answers: [
                { text: "Es leitet Wasser und Nährstoffe.", correct: false },
                { text: "Es stabilisiert den Baum als stützende Säule.", correct: true },
                { text: "Es speichert Kohlendioxid und Sauerstoff.", correct: false },
                { text: "Es fördert das Wachstum des Baumes.", correct: false }
            ]
        },
        {
            question: "Wie ist eine Holzzelle aufgebaut?",
            answers: [
                { text: "Zellwand, Zellkern, Protoplasma.", correct: true },
                { text: "Zellulose, Kernholz, Splintholz.", correct: false },
                { text: "Zellschicht, Markstrahlen, Lignin.", correct: false },
                { text: "Rinde, Zellulose, Protoplasma.", correct: false }
            ]
        },
        {
            question: "Welche Eigenschaften haben lebende Zellen?",
            answers: [
                { text: "Sie stabilisieren den Baum und speichern Wasser.", correct: false },
                { text: "Sie können Nahrung aufnehmen, atmen, wachsen und sich teilen.", correct: true },
                { text: "Sie schützen vor äußeren Einflüssen und Pilzen.", correct: false },
                { text: "Sie leiten Wasser durch die Zellwand.", correct: false }
            ]
        },
        {
            question: "In welchem Teil des Baumes befinden sich lebende Zellen?",
            answers: [
                { text: "Im Kernholz.", correct: false },
                { text: "Im Kambium (Zellschicht) und in den Knospen.", correct: true },
                { text: "In der Borke.", correct: false },
                { text: "Im Splintholz.", correct: false }
            ]
        },
        {
            question: "Welche Zellschicht ist für das Dickenwachstum des Baumes verantwortlich?",
            answers: [
                { text: "Kambium.", correct: true },
                { text: "Splintholz.", correct: false },
                { text: "Bast.", correct: false },
                { text: "Kernholz.", correct: false }
            ]
        },
        {
            question: "Welche Zellschicht ist für das Längenwachstum des Baumes verantwortlich?",
            answers: [
                { text: "Zellwand.", correct: false },
                { text: "Kambium.", correct: false },
                { text: "Knospen.", correct: true },
                { text: "Borke.", correct: false }
            ]
        },
        {
            question: "Wie kann man das Alter eines Baumes bestimmen?",
            answers: [
                { text: "Durch die Breite der Splintholzschicht.", correct: false },
                { text: "Anhand der Anzahl der Jahresringe.", correct: true },
                { text: "Durch die Dicke der Zellschicht.", correct: false },
                { text: "Über die Höhe des Baumes.", correct: false }
            ]
        },
        {
            question: "Wie sind die Ringzonen aufgebaut?",
            answers: [
                { text: "Vertikal von den Wurzeln bis zur Krone.", correct: false },
                { text: "Konzentrisch um das Mark, zwischen Mark und Borke angeordnet.", correct: true },
                { text: "Spiralartig entlang der Rinde.", correct: false },
                { text: "Parallel zur Zellschicht im Kernholz.", correct: false }
            ]
        },
        {
            question: "Welche Zellsysteme (Holzkörper) gibt es und welche Aufgaben haben sie?",
            answers: [
                { text: "Speicher-, Wasserleit- und Festigkeitssystem.", correct: true },
                { text: "Borken-, Bast- und Zellschichtsystem.", correct: false },
                { text: "Zellulose-, Kern- und Splintholzsystem.", correct: false },
                { text: "Lignin-, Wasser- und Stabilitätssystem.", correct: false }
            ]
        },
        {
            question: "Welche Aufgabe hat das Mark?",
            answers: [
                { text: "Es dient zur Wasserleitung in den ersten Wachstumsjahren.", correct: true },
                { text: "Es speichert Nährstoffe für das Dickenwachstum.", correct: false },
                { text: "Es stabilisiert den Baum im Bereich der Wurzeln.", correct: false },
                { text: "Es schützt die Zellen vor äußeren Einflüssen.", correct: false }
            ]
        },
        {
        question: "Nennen Sie die Gewebesysteme bei Laubholz.",
        answers: [
            { text: "Splintholz, Kernholz, Bast.", correct: false },
            { text: "Wasserleit-, Speicher- und Festigkeitsgewebe.", correct: true },
            { text: "Borken-, Zell- und Markgewebe.", correct: false },
            { text: "Rinden-, Holz- und Zellgewebe.", correct: false }
        ]
    },
    {
        question: "Wie sind die Gewebesysteme im Laubholz angeordnet?",
        answers: [
            { text: "Vertikal und kreisförmig um das Mark.", correct: false },
            { text: "Gefäßzellen, englumig und dickwandig im Spätholz.", correct: true },
            { text: "Ligninzellen und Holzfasern gleichmäßig verteilt.", correct: false },
            { text: "Locker verteilt im Kernholz.", correct: false }
        ]
    },
    {
        question: "Welche Gewebesysteme gibt es bei Nadelholz?",
        answers: [
            { text: "Tracheiden, Markstrahlen und Ligninzellen.", correct: false },
            { text: "Wasserleitgewebe (Tracheiden), Speichergewebe.", correct: true },
            { text: "Holzfasern, Zellulose- und Rindenzellen.", correct: false },
            { text: "Splintholz, Kernholz und Zellgewebe.", correct: false }
        ]
    },
    {
        question: "Wie sind die Gewebesysteme im Nadelholz angeordnet?",
        answers: [
            { text: "Zufällig im Kernholz verteilt.", correct: false },
            { text: "Weitlumig und dünnwandig im Frühholz, englumig und dickwandig im Spätholz.", correct: true },
            { text: "Horizontal im Splintholz angeordnet.", correct: false },
            { text: "Konzentriert in der Zellschicht.", correct: false }
        ]
    },
    {
        question: "In welchem dieser Systeme befindet sich das Harz?",
        answers: [
            { text: "Markstrahlen – Parenchymzellen.", correct: true },
            { text: "Splintholz – Bastzellen.", correct: false },
            { text: "Kernholz – Zellwände.", correct: false },
            { text: "Borke – Speicherzellen.", correct: false }
        ]
    },
    {
        question: "Welche Gewebesysteme gibt es im Holz?",
        answers: [
            { text: "Wasserleit-, Speicher- und Festigkeitsgewebe.", correct: true },
            { text: "Zellwand-, Mark- und Borkengewebe.", correct: false },
            { text: "Lignin-, Zellulose- und Kernholzgewebe.", correct: false },
            { text: "Splintholz-, Bast- und Festigkeitsgewebe.", correct: false }
        ]
    },
    {
        question: "Wie ist eine Faserwand aufgebaut?",
        answers: [
            { text: "Primärwand, Sekundärwand, Innere Schicht der Sekundärwand (Tertiärwand).", correct: true },
            { text: "Splintholzschicht, Kernholzwand, Ligninschicht.", correct: false },
            { text: "Zellulosefasern, Hemicellulosewand, Zellschicht.", correct: false },
            { text: "Bastwand, Zellwand, Kernwand.", correct: false }
        ]
    },
    {
        question: "Welche Aufgabe und Funktion hat ein Hoftüpfel?",
        answers: [
            { text: "Wasser- und Stofftransport durch dünne, durchlässige Wandstellen.", correct: true },
            { text: "Speicherung von Lignin in der Zellwand.", correct: false },
            { text: "Schutz vor Wasserverlust im Kernholz.", correct: false },
            { text: "Verstärkung der Zellwand durch Zellulose.", correct: false }
        ]
    },
    {
        question: "Warum wird Holz in einer Papierfabrik gelagert?",
        answers: [
            { text: "Um Feuchtigkeit gleichmäßig zu verteilen und Vorräte zu sichern.", correct: true },
            { text: "Um Zellulose schneller abzubauen.", correct: false },
            { text: "Um den Harzgehalt zu erhöhen.", correct: false },
            { text: "Um das Holz für chemische Verfahren vorzubereiten.", correct: false }
        ]
    },
    {
        question: "Welche Arten von Holzübernahme gibt es?",
        answers: [
            { text: "Volumen- und Gewichtsbestimmung.", correct: true },
            { text: "Festigkeits- und Härteprüfung.", correct: false },
            { text: "Länge- und Breitenmessung.", correct: false },
            { text: "Wassergehalt- und Zellulosegehaltmessung.", correct: false }
        ]
    },
    {
        question: "Welche Holzlagerungsmethoden gibt es?",
        answers: [
            { text: "In Stapeln, auf der Pille, Wasserlagerung, Hackschnitzellagerung.", correct: true },
            { text: "In Rindenmulch, Zellschichtenlagerung, Splintholzhaufen.", correct: false },
            { text: "In Trockenkammern, chemischen Tanks, Zellstoffsilos.", correct: false },
            { text: "In Kreislagerung, Bastschichten, Holzfaserkammern.", correct: false }
        ]
    },
    {
        question: "In welche Gruppen werden Holzschäden eingeteilt?",
        answers: [
            { text: "Schädlingsbefall, Witterungseinflüsse, falsche Lagerung.", correct: false },
            { text: "Insektenfraß, Fäulnis, Umwelteinflüsse.", correct: true },
            { text: "Mechanische Schäden, Borkenverluste, chemische Einflüsse.", correct: false },
            { text: "Zellschichtzerstörung, Bastzersetzung, Ligninverlust.", correct: false }
        ]
    },
    {
        question: "Wie können sich Holzschäden auswirken?",
        answers: [
            { text: "Erhöhter Wassergehalt und Ligninverlust.", correct: false },
            { text: "Holzverluste und Qualitätsverluste des Papiers.", correct: true },
            { text: "Verbesserte Zellulosequalität.", correct: false },
            { text: "Beschleunigte Zellwandstabilität.", correct: false }
        ]
    },
    {
        question: "Welche Entrindungsmethoden gibt es?",
        answers: [
            { text: "Friktions-, hydraulische und schneidende Methoden.", correct: true },
            { text: "Chemische, thermische und biologische Methoden.", correct: false },
            { text: "Zellulosebasierte, mechanische und Splittermethoden.", correct: false },
            { text: "Wasserstrahl-, Borkenschneider- und Harzverfahren.", correct: false }
        ]
    },
    {
        question: "Wie funktioniert die Friktionsmethode?",
        answers: [
            { text: "Durch Reibung der Stämme aneinander wird die Rinde abgelöst.", correct: true },
            { text: "Durch Hochdruckwasser wird die Rinde abgesprengt.", correct: false },
            { text: "Durch chemische Zusätze wird die Rinde aufgeweicht.", correct: false },
            { text: "Durch Messerschnitt wird die Rinde entfernt.", correct: false }
        ]
    },
    {
        question: "Aus welchen Stoffen besteht Holz?",
        answers: [
            { text: "Zellulose, Hemicellulose, Lignin, Begleitstoffe.", correct: true },
            { text: "Lignin, Markstrahlen, Wasser, Borkenstoffe.", correct: false },
            { text: "Zellulose, Borkenstoffe, Kernholzstoffe, Splintholzstoffe.", correct: false },
            { text: "Hemicellulose, Wasser, Rindenschichten, Zellstoff.", correct: false }
        ]
    },
    {
        question: "Welche Aufgabe erfüllt Lignin im Holz?",
        answers: [
            { text: "Es gibt dem Holz Stabilität und Festigkeit.", correct: true },
            { text: "Es speichert Wasser für das Wachstum.", correct: false },
            { text: "Es sorgt für den Transport von Assimilaten.", correct: false },
            { text: "Es schützt das Holz vor Insekten.", correct: false }
        ]
    },
    {
        question: "Wie bestimmt man die Darrdichte eines Holzstücks?",
        answers: [
            { text: "Durch die Anzahl der Jahresringe.", correct: false },
            { text: "Durch das Verhältnis von Gewicht und Volumen im ofentrockenen Zustand.", correct: true },
            { text: "Durch die Dicke der Zellwand.", correct: false },
            { text: "Durch die Menge an Lignin im Holz.", correct: false }
        ]
    },
    {
        question: "Wann spricht man von einer hohen Darrdichte?",
        answers: [
            { text: "Bei schmalen Jahresringen und langsamem Wachstum.", correct: true },
            { text: "Bei weiten Jahresringen und schnellem Wachstum.", correct: false },
            { text: "Bei hohem Wassergehalt und breiten Jahresringen.", correct: false },
            { text: "Bei geringer Zellwanddicke und wenig Lignin.", correct: false }
        ]
    },
    {
        question: "Wann spricht man von Cellulose und Hemicellulose?",
        answers: [
            { text: "Cellulose: Ab einem DP von 1000; Hemicellulose: DP kleiner als 1000.", correct: true },
            { text: "Cellulose: DP unter 1000; Hemicellulose: DP über 1000.", correct: false },
            { text: "Cellulose: Bei geringer Wasseraufnahme; Hemicellulose: Bei hoher Wasseraufnahme.", correct: false },
            { text: "Cellulose: In chemischen Verfahren; Hemicellulose: In biologischen Verfahren.", correct: false }
        ]
    },
    {
        question: "Welche Eigenschaften hat Hemicellulose?",
        answers: [
            { text: "Hohe Wasseraufnahmefähigkeit und Quellfähigkeit.", correct: true },
            { text: "Hohe Stabilität und geringe Wasseraufnahme.", correct: false },
            { text: "Hoher Anteil an Lignin und Zellulose.", correct: false },
            { text: "Schutz vor Umwelteinflüssen und chemischer Zerfall.", correct: false }
        ]
    },
    {
        question: "Wofür wird Aluminium-Sulfat verwendet?",
        answers: [
            { text: "Zur pH-Wert-Einstellung, Flockung und Fixierung.", correct: true },
            { text: "Zur Stabilisierung der Zellulosefasern.", correct: false },
            { text: "Zur Verbesserung der Festigkeit von Papier.", correct: false },
            { text: "Zur Steigerung des Ligninanteils im Holz.", correct: false }
        ]
    },
    {
        question: "Wie wird Aluminium-Sulfat hergestellt?",
        answers: [
            { text: "Aus Bauxit und Schwefelsäure.", correct: true },
            { text: "Aus Zellulose und Schwefelsäure.", correct: false },
            { text: "Aus Wasserstoffperoxid und Aluminiumhydroxid.", correct: false },
            { text: "Aus Natriumchlorid und Aluminium.", correct: false }
        ]
    },
    {
        question: "Welche Anforderungen stellt man an Aluminium-Sulfat?",
        answers: [
            { text: "Es darf keine freie Schwefelsäure enthalten und muss gut löslich sein.", correct: true },
            { text: "Es muss wasserunlöslich und besonders eisenhaltig sein.", correct: false },
            { text: "Es muss stabil bei hohen Temperaturen bleiben.", correct: false },
            { text: "Es darf keinen Kontakt mit Zellulosefasern haben.", correct: false }
        ]
    },
    {
        question: "Was versteht man unter einer Suspension?",
        answers: [
            { text: "Eine Aufschlämmung feiner Teilchen, die sich absetzen.", correct: true },
            { text: "Eine Mischung zweier unlöslicher Flüssigkeiten.", correct: false },
            { text: "Eine Lösung von Wasser und Luft.", correct: false },
            { text: "Ein chemischer Prozess zur Zellstoffherstellung.", correct: false }
        ]
    },
    {
        question: "Was versteht man unter einer Emulsion?",
        answers: [
            { text: "Eine Mischung zweier unlöslicher Flüssigkeiten.", correct: true },
            { text: "Eine feinstverteilte Suspension in Wasser.", correct: false },
            { text: "Eine Lösung von Glucose und Wasser.", correct: false },
            { text: "Eine Verbindung von Lignin und Zellulose.", correct: false }
        ]
    },
    {
        question: "Was versteht man unter einer kolloidalen Lösung?",
        answers: [
            { text: "Eine feinstverteilte Mischung, bei der Teilchen schweben.", correct: true },
            { text: "Eine Suspension, die sich am Boden absetzt.", correct: false },
            { text: "Eine chemische Verbindung aus Lignin und Hemicellulose.", correct: false },
            { text: "Eine Auflösung von Aluminium-Sulfat im Wasser.", correct: false }
        ]
    },
    {
        question: "Nennen Sie ein Beispiel für Schutzkolloide.",
        answers: [
            { text: "Stärke, Eiweißstoffe, Wasserglas, Casein.", correct: true },
            { text: "Lignin, Zellulose, Harz.", correct: false },
            { text: "Aluminium-Sulfat, Natriumchlorid, Wasser.", correct: false },
            { text: "Glucose, Calcium, Kalium.", correct: false }
        ]
    }
];




// HTML-Elemente referenzieren
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const backToSelectionButton = document.getElementById('back-to-selection-btn');
const quizSelectionElement = document.getElementById('quiz-selection');
const quizContainerElement = document.getElementById('quiz-container');
const startButton = document.getElementById('start-btn');

let currentQuiz = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

// Funktion: Quiz auswählen und starten
function openQuiz(quizId) {
    quizSelectionElement.classList.add('hide'); // Auswahlbereich verstecken
    quizContainerElement.classList.remove('hide'); // Quizbereich anzeigen

    if (quizId === 'quiz1') currentQuiz = questionsQuiz1;
    else if (quizId === 'quiz2') currentQuiz = questionsQuiz2;
    else if (quizId === 'quiz3') currentQuiz = questionsQuiz3;
    else if (quizId === 'quiz4') currentQuiz = questionsQuiz4;

    startButton.classList.remove('hide'); // Start-Button anzeigen
    document.getElementById('question-container').classList.add('hide'); // Frage-Container verstecken
}

// Quiz starten
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    startButton.classList.add('hide'); // Start-Button ausblenden
    document.getElementById('question-container').classList.remove('hide'); // Frage-Container anzeigen
    showQuestion(currentQuiz[currentQuestionIndex]); // Erste Frage anzeigen
}

// Zeigt die aktuelle Frage an
function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = ''; // Alte Antworten entfernen

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button); // Antwort-Button hinzufügen
    });
}

// Antwort auswählen
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    if (correct) {
        correctAnswers++;
        selectedButton.style.backgroundColor = 'green';
    } else {
        selectedButton.style.backgroundColor = 'red';
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.style.backgroundColor = 'green'; // Richtige Antwort anzeigen
        }
    });

    nextButton.classList.remove('hide'); // Nächste Frage Button anzeigen
}

// Nächste Frage anzeigen oder Ergebnisse
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion(currentQuiz[currentQuestionIndex]);
        nextButton.classList.add('hide'); // Nächste Frage Button verstecken
    } else {
        showResults();
    }
}

// Ergebnisse anzeigen
function showResults() {
    questionElement.innerText = `Quiz beendet! Du hast ${correctAnswers} von ${currentQuiz.length} richtig beantwortet.`;
    answerButtonsElement.innerHTML = ''; // Antworten entfernen
    nextButton.classList.add('hide'); // Nächste Frage Button verstecken
    restartButton.classList.remove('hide'); // Quiz neu starten Button anzeigen
    backToSelectionButton.classList.remove('hide'); // Zurück zur Auswahl Button anzeigen
}

// Quiz neu starten
function restartQuiz() {
    restartButton.classList.add('hide');
    startQuiz();
}

// Zurück zur Auswahl
function backToSelection() {
    quizContainerElement.classList.add('hide'); // Quizbereich verstecken
    quizSelectionElement.classList.remove('hide'); // Auswahlbereich anzeigen
}

// Event Listener hinzufügen
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
backToSelectionButton.addEventListener('click', backToSelection);

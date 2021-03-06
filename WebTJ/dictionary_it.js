// Translation file for WebTigerJython
// https://webtigerjython.ethz.ch
//
// (c) 2018-2019, Nicole Trachsler, Gregorio Sven
//
// Language: Italian

let dictionary = {
    // Translations for WebTJ's GUI
    "start-button-hover": "Esegui | Ctrl+Enter",
    "start-modal-button-hover": "Esegui in schermo intero",
    "stop-button-hover": "Interrompi",

    "modal-close-button": "Chiudi",

    "options-current-language": "Italiano",
    "options-fullscreen": "Schermo intero",
    "options-close-fullscreen": "Chiudi schermo intero",
    "options-program-save": "Salva programma",
    "options-program-load": "Carica programma",
    "options-information": "Informazione",

    "choose-program-name": "Scegli un nome di programma:",
    "program-save-prefix": "programma_",

    "file-api-error": "Il tuo browser non può aprire programmi. Per favore prova con un altro browser.",

    "maketurtle-error": "Invoca makeTurtle() per creare una superficie di disegno!",
    "multiple-maketurtle-error": "Invoca makeTurtle() solo una volta! Rimuovi tutte le altre invocazioni di makeTurtle().",
    "line": "[riga: ",
    "correct-syntax": "La sintassi è corretta.",
    "file-not-found": "File non trovato: '",
    "abort-message": "Hai cancellato il programma.",

    "error-msg-ie": "WebTigerJython non funziona con Internet Explorer. Si prega di utilizzare Chrome, FireFox o Edge.",

    // Translations for info.html
    "info-title": "Informazioni su WebTigerJython",
    "info-intro-1": "WebTigerJython è un ambiente di programmazione per studenti, in cui puoi usare il linguaggio di programmazione Python." +
		" L'ambiente educativo è disegnato specificamente per lezioni scolastiche con il libro di testo \"",
    "info-intro-2": "\" da Juraj Hromkovič e Tobias Kohn pubblicato da Klett & Balmer.",
    "info-features": "Funzionalità",
    "info-release-1.0.0": "Versione base",
    "info-release-1.1.0": "Supporto lingue esteso (francese e russo)",
    "info-turtle-functions-title": "Funzioni della tartaruga supportate",
    "info-turtle-functions-intro": "I seguenti comandi della tartaruga sono supportati in WebTigerJython, in aggiunta alla sintassi standard di Python:",
    "info-function-title": "Funzione",
    "info-abbreviation-title": "Abbreviazione",
    "info-description-title": "Descrizione",

    // Translation of the Turtle functions in WebTJ
    "info-number-of-steps": "Numero di passi",
    "info-angle": "angolo",
    "info-color": "colore",
    "info-number": "numero",
    "info-function": "funzione",
    "info-text": "\"testo\"",
    "info-penwidth": "larghezza della penna",
    "info-arithmetic-expression": "espressioni aritmetiche",
    "info-time": "tempo",
    "info-number-of": "numero",
    "info-body": "    corpo",
    "info-question": "\"domanda\"",
    "info-key": "\"chiave\"",
    "info-example": "Esempio:",
    "info-license": "licensa",
    "info-description-import": "Carica i comandi della tartaruga. Solo così il computer capisce i comandi per la tartaruga.",
    "info-description-makeTurtle": "Crea la tartaruga sulla superficie di disegno.",
    "info-description-forward": "Vai in avanti per il numero di passi.",
    "info-description-backward": "Vai indietro per il numero di passi.",
    "info-description-left": "Gira a sinistra sul posto per l'angolo dato.",
    "info-description-right": "Gira a destra sul posto per l'angolo dato.",
    "info-description-setpencolor": "Imposta il colore della penna. La tartaruga riceve un bordo nel colore della penna selezionato.",
    "info-description-setpenwidth": "Imposta la larghezza della penna. La larghezza è data in pixel.",
    "info-description-print": "Scrivi il testo tra virgolette o il risultato dell'espressione aritmetica nella finestra di output.",
    "info-description-delay": "Aspetto un dato numero di millisecondi prima che il programma continua.",
    "info-description-ht": "Rendi la tartaruga invisibile così che le immagini sono disegnate più velocemente.",
    "info-description-st": "Rendi la tartaruga di nuovo visibile, così che puoi osservare come disegna.",
    "info-description-repeat": "Esegui il corpo un certo numero di volte. Il corpo con le istruzioni da ripetere deve essere indentato.",
    "info-description-pu": "Solleva la penna, così che non disegna.",
    "info-description-pd": "Appoggia la penna, così che disegna di nuovo.",
    "info-description-dot": "Disegna un cerchio colorato con il diametro d, alla posizione corrente della tartaruga.",
    "info-description-setheading": "Imposta l'angolo assoluto alla tartaruga e non relativo. Un angolo di 0 fa girare la tartaruga dritto verso sopra, un angolo di 90 verso destra, etc."
	,
    "info-description-heading": "Restituisci l'angolo assoluto della tartaruga sulla superficie da disegno.",
    "info-description-speed": "Cambia la velocità della tartaruga. Se la velocità viene messa a -1, la tartaruga va il più veloce che può. Con una velocità di 1 la tartaruga va il più lentamente possibile",
    "info-description-msgDlg": "Restituisci il testo nella sua piccola finestra. Si deve cliccare \"OK\" nella finestra, per riprendere l'esecuzione del programma.",
    "info-description-label": "Stampa il testo nella superficie di disegno, alla posizione corrente della tartaruga.",
    "info-description-input": "Il computer mostra la domanda in una finestra e salva il valore immesso dall'utente nella variabile x. Ci sono tre varianti addizionali di questa funzione, ognuna delle quali richiede un tipo di dato specifico: inputInt(\"domanda\"), inputFloat(\"domanda\") e inputString(\"domanda\").",
    "info-description-setfillcolor": "Imposta il colore delle superfici. Il corpo della tartaruga è mostrato nel colore selezionato.",
    "info-description-startpath": "Inizia a registrare i movimenti della tartaruga per colorare una superficie in seguito.",
    "info-description-fillpath": "Connette la posizione corrente della tartaruga con la posizione iniziale e colora la figura racchiusa con il colore di superficie selezionato.",
    "info-description-sqrt": "Calcola la radice di un numero.",
    "info-description-isinteger": "Restituisce un valore di verità (true o false) che indica se il numero è un intero oppure no.",
    "info-description-makecolor-intro": "Restituisce un colore in notazione esadecimale e lo salva nella variabile c. Il colore può essere definito come segue:",
    "info-description-makecolor-rgb": ": makeColor(R, G, B), makeColor(\"rgb(R,G,B)\") dove R, G e B sono tutti numeri interi con valori tra 0 e 255 o float con valori tra 0 e 1.",
    "info-description-makecolor-rgba": ": makeColor(R,G,B,A), makeColor(\"rgba(R,G,B,A\")) i valori per R, G, B sono gli stessi di sopra. A è un valore float tra 0 e 1 che indica la trasparenza.",
    "info-description-makecolor-rainbow": "arcobaleno",
    "info-description-makecolor-rainbow-descr": ": makeColor(\"rainbow\", 0.5) restituisce un colore nello spettro di un arcobaleno. Il parametro è un float tra 0 e 1.",
    "info-description-makecolor-hexadecimal": "esadecimale",
    "info-description-makecolor-hexadecimal-descr": ": makeColor(\"#7FFFD4\") il colore è una stringa esadecimale.",
    "info-description-makecolor-colorstring": ": makeColor(\"Aqua-Marine\") il colore è una stringa in inglese.",
    "info-description-getpixelcolorstr": "Restituisce il colore del pixel alla posizione corrente delle tartaruga.",
    "info-description-getpos": "Restituisce le cordinate (x, y) della posizione corrente della tartaruga. Puoi accedere alla cordinata x con getPos()[0] e alla cordinata y con getPos()[1].",
    "info-description-getx": "Restituisce la cordinata x della posizione corrente della tartaruga.",
    "info-description-gety": "Restituisce la cordinata y della posizione corrente della tartaruga.",
    "info-description-distance": "Restituisce la distanza della tartaruga al punto (x, y).",
    "info-description-towards": "Restituisce l'angolo della tartaruga (in gradi) rispetto alla posizione (x, y).",
    "info-description-moveto": "Sposta la tartaruga alla posizione indicata (x, y).",
    "info-description-setpos": "Sposta la tartaruga alla posizione indicata (x, y) senza disegnare.",
    "info-description-setx": "Sposta la tartaruga alla cordinata x indicata senza disegnare.",
    "info-description-sety": "Sposta la tartaruga alla cordinata y indicata senza disegnare.",
    "info-description-clean": "Cancella le tracce della tartaruga. La tartaruga rimane alla posizione corrente.",
    "info-description-cs": "Cancella le tracce della tartaruga e sposta la tartaruga alla posizione iniziale in mezzo alla superficie da disegno.",
    "info-description-clear": "Cancella le tracce della tartaruga. La tartaruga rimane alla posizione corrente e si nasconde.",
    "info-description-onkey": "Invoca la funzione specificata quando si schiaccia il testo specificato. Scrivi il nome della funzione senza parentesi. Per poter intercettare i tasti schiacciati sulla tastiera, devi cliccare nella superficie di disegno dopo che il programma inizia. Poi invoca la funzione Screen().listen() così che la superficie da disegno può sentire cosa schiacci.",
    "info-description-onclick": "Invoca la funzione specificata quando clicchi nella superficie da disegno. Scrivi il nome della funzione senza perentesi. Le cordinate x e y del clic sono automaticamente passate alla funzione. Poi invoca la funzione Screen().listen() così che la superficie da disegno può sentire il tuo input.",
    "info-description-listen": "Catture click e tasti schiacciati sulla tastiera nella superficie da disegno. Questa funzionalità è usata con Screen.onclick(...) e Screen().onkey(...). Devi chiamare questa funzione una sola volta per programma.",

    "info-contact": "Contatto",
    "info-contact-descr": "Per favore invia il tuo feedback e i tuoi suggerimenti sull'ambiente di programmazione direttamente a Nicole Trachsler per email: nicole.trachsler@inf.ethz.ch",
    "info-authors": "Autori:",
    "info-copyright-descr": "L'applicazione è sviluppata attivamente dall'ABZ dell'ETH Zurich. L'uso dell'applicazione è libero, ma non può essere usata a fini commerciali. Qualunque modifica o copia dell'applicazione deve essere autorizzata per iscritto.",

    // Translations for the skulpt Python interpreter
    "skulpt-compiler-error-function": "La funzione",
    "skulpt-compiler-error-argument": "argomento",
    "skulpt-compiler-error-arguments": "argomenti",
    "skulpt-compiler-error-exactly": "atteso esattamente",
    "skulpt-compiler-error-least": "si aspetta almeno",
    "skulpt-compiler-error-most": "massimo atteso",
    "skulpt-compiler-error-given": "dato"
};
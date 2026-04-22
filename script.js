function szamolas() {
    const ev = document.getElementById('szuletesiEv').value;
    const jelenlegiEv = new Date().getFullYear();
    const kor = jelenlegiEv - ev;

    if (ev > 1900 && ev <= jelenlegiEv) {
        document.getElementById('eredmeny').innerText = "Te idén " + kor + " éves vagy/leszel!";
    } else {
        document.getElementById('eredmeny').innerText = "Kérlek, valós évet adj meg!";
    }
}
// Automatikus üdvözlés napszaknak megfelelően
const ora = new Date().getHours();
let uzenet = ora < 12 ? "Jó reggelt!" : ora < 18 ? "Jó napot!" : "Jó estét!";
document.getElementById('udvozles').innerText = uzenet;

// Sötét mód kapcsoló
function darkMode() {
    document.body.classList.toggle("dark-mode");
}
function berSzamolas() {
    const brutto = document.getElementById('bruttoBer').value;
    if (brutto > 0) {
        const netto = brutto * 0.665; // 33.5% levonás után
        document.getElementById('berEredmeny').innerText = 
            "Nettó bér: " + Math.round(netto).toLocaleString() + " Ft";
    } else {
        alert("Kérlek adj meg egy összeget!");
    }
}
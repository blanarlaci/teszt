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
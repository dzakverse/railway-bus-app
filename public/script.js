let dataRute = [];

fetch("/api/jadwal")
  .then(res => res.json())
  .then(data => {
    dataRute = data.rute;
    isiDropdown();
  });

function isiDropdown() {
  const dari = document.getElementById("dari");
  const tujuan = document.getElementById("tujuan");

  const daftarDari = [...new Set(dataRute.map(r => r.dari))];
  const daftarTujuan = [...new Set(dataRute.map(r => r.tujuan))];

  daftarDari.forEach(d => dari.innerHTML += `<option>${d}</option>`);
  daftarTujuan.forEach(t => tujuan.innerHTML += `<option>${t}</option>`);
}

function updateJam() {
  const dari = document.getElementById("dari").value;
  const tujuan = document.getElementById("tujuan").value;
  const jam = document.getElementById("jam");

  jam.innerHTML = "";

  const rute = dataRute.find(r => r.dari === dari && r.tujuan === tujuan);
  if (!rute) return;

  rute.jam.forEach(j => jam.innerHTML += `<option>${j}</option>`);

  updateRingkasan();
}

document.getElementById("dari").addEventListener("change", () => {
  document.getElementById("tujuan").disabled = false;
  updateJam();
});

document.getElementById("tujuan").addEventListener("change", () => {
  document.getElementById("jam").disabled = false;
  updateJam();
});

document.getElementById("jam").addEventListener("change", updateRingkasan);

function updateRingkasan() {
  const dari = document.getElementById("dari").value;
  const tujuan = document.getElementById("tujuan").value;
  const jam = document.getElementById("jam").value;

  const rute = dataRute.find(r => r.dari === dari && r.tujuan === tujuan);

  document.getElementById("r-dari").textContent = dari;
  document.getElementById("r-tujuan").textContent = tujuan;
  document.getElementById("r-jam").textContent = jam;
  document.getElementById("r-nopol").textContent = rute?.nopol || "-";
  document.getElementById("r-harga").textContent = rute ? "Rp " + rute.harga.toLocaleString() : "-";

  document.getElementById("info-card").style.display = jam ? "block" : "none";
}

function updateJam() {
  const dari = document.getElementById("dari").value;
  const tujuan = document.getElementById("tujuan").value;
  const jam = document.getElementById("jam");

  jam.innerHTML = "";

  const rute = dataRute.find(r => r.dari === dari && r.tujuan === tujuan);
  if (!rute) return;

  document.getElementById("dari").addEventListener("change", () => {
  document.getElementById("tujuan").disabled = false;
  updateJam();
});

document.getElementById("tujuan").addEventListener("change", () => {
  document.getElementById("jam").disabled = false;
  updateJam();
});

document.getElementById("jam").addEventListener("change", updateRingkasan);


  rute.jam.forEach(j => jam.innerHTML += `<option>${j}</option>`);

  updateRingkasan();
}

function scrollToRute() {
  document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}

// import module local dan third party node js
const {
  hitungLuasPersegi,
  hitungKelilingPersegi,
  hitungLuasPersegiPanjang,
  hitungKelilingPersegiPanjang,
  displayResult,
} = require("./Calc.js");
const inquirer = require("inquirer");

// menampung object question
const listPertanyaan = [
  {
    type: "list",
    name: "bangunDatar",
    message: "Pilih bangun datar:",
    choices: ["Persegi", "Persegi Panjang"],
  },
];

// menampung array inputan bangun datar
const bangunDatarInput = {
  Persegi: [
    {
      type: "number",
      name: "sisi",
      message: "Masukkan panjang sisi:",
    },
  ],
  "Persegi Panjang": [
    {
      type: "number",
      name: "panjang",
      message: "Masukkan panjang:",
    },
    {
      type: "number",
      name: "lebar",
      message: "Masukkan lebar:",
    },
  ],
};

// untuk melakukan perhitungan terhadap bangun datar
async function main() {
  try {
    const answer = await inquirer.prompt(listPertanyaan);
    const pil = await inquirer.prompt(bangunDatarInput[answer.bangunDatar]);

    if (answer.bangunDatar === "Persegi") {
      const luas = hitungLuasPersegi(pil.sisi);
      const keliling = hitungKelilingPersegi(pil.sisi);

      displayResult("persegi", luas, keliling);
    } else {
      const luas = hitungLuasPersegiPanjang(pil.panjang, pil.lebar);
      const keliling = hitungKelilingPersegiPanjang(pil.panjang, pil.lebar);

      displayResult("persegi panjang", luas, keliling);
    }
  } catch (e) {
    console.log(e);
  }
}

main();

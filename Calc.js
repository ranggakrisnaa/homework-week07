const hitungLuasPersegi = (sisi) => {
  return sisi * sisi;
};

const hitungKelilingPersegi = (sisi) => {
  return 4 * sisi;
};

const hitungLuasPersegiPanjang = (panjang, lebar) => {
  return panjang * lebar;
};

const hitungKelilingPersegiPanjang = (panjang, lebar) => {
  return 2 * (panjang + lebar);
};

const displayResult = (nama, luas, keliling) => {
  console.log(
    `\nLuas ${nama} anda adalah ${luas}m² \nKeliling ${nama} anda adalah ${keliling}m`
  );
};

module.exports = {
  hitungLuasPersegi,
  hitungKelilingPersegi,
  hitungLuasPersegiPanjang,
  hitungKelilingPersegiPanjang,
  displayResult,
};

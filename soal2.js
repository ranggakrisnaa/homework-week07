// import module bawaan node dan third party node js
const fs = require("fs");
const inquirer = require("inquirer");

// cek dan membuat folder baru
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// menggunakan method readfile, writefile dan menggunakan method readline question
fs.readFile("./homework.log", "utf-8", (err, data) => {
  if (err) return console.log(err);

  console.log("data successfully read in data/homework.log");
  console.log(data);

  inquirer
    .prompt([
      {
        name: "pilihan",
        message: "apakah anda ingin memasukkan data diatas",
        type: "list",
        choices: ["YES", "NO"],
      },
    ])
    .then((answers) => {
      if (answers.pilihan.toLowerCase() === "yes") {
        fs.writeFile("data/homework.log.txt", data, (err, data) => {
          if (err) return console.log(err);

          console.log("data successfully written in data/homework.log.txt");
        });
      } else {
        console.log("data not successfully written in data/homework.log.txt");
      }
    });
});

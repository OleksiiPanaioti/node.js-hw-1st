console.log("hmother jezus");
const fs = require("node:fs/promises");

// fs.readFile("./text.txt", "UTF-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile("./text.txt", `Hello ${Date.now()}`, (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// fs.appendFile("./text.txt", `Hello world\n`, (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

fs.readFile("./db/contacts.json", "UTF-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

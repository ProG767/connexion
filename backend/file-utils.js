import fs from "node:fs";

export const readTodos = () => {
  try {
    const data = fs.readFileSync("./todo.json", "utf8");
    console.log("Read file");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

export const saveTodos = (todos) => {
  const todosString = JSON.stringify(todos);

  fs.writeFile("./todo.json", todosString, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info("file saved...");
    }
  });
};

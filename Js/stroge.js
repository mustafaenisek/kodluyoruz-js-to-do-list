if (localStorage["firstRun"] == null) {
  localStorage.setItem(
    "list",
    JSON.stringify([
      { id: 0, text: "To Do-1" },
      { id: 1, text: "To Do-2" },
      { id: 2, text: "To Do-3" },
      { id: 3, text: "To Do-4" },
      { id: 4, text: "To Do-5" },
      { id: 5, text: "To Do-6" },
      { id: 6, text: "To Do-7" },
      { id: 7, text: "To Do-8" },
      { id: 8, text: "To Do-9" },
      { id: 9, text: "To Do-10" },
    ])
  );
  localStorage["firstRun"] = true;
}

let getAllStorge = () => {
  if (localStorage.getItem("list") == "[]") return [];
  else return JSON.parse(localStorage.getItem("list"));
};

let getByIdIndexStorge = (id) => {
  let list = getAllStorge();
  return list.findIndex((item) => {
    return item.id == id;
  });
};

let identificationNum = () => {
  let list = getAllStorge();
  if (localStorage.getItem("list") == "[]") return 0;
  else return list[list.length - 1].id + 1;
};

let addStorge = (text) => {
  let list = getAllStorge();
  list.push({ id: identificationNum(), text: text });
  localStorage.setItem("list", JSON.stringify(list));
};

let removeStorge = (id) => {
  let list = getAllStorge();
  list.splice(getByIdIndexStorge(id), 1);
  localStorage.setItem("list", JSON.stringify(list));
};

let multipleRemoveStorge = (listId) => {
  let list = getAllStorge();
  listId = listId.sort((a, b) => {
    return b - a;
  });
  listId.forEach((id) => {
    list.splice(getByIdIndexStorge(id), 1);
  });
  localStorage.setItem("list", JSON.stringify(list));
};

const tables = require("../../database/tables");

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

const cat = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();

  res.json(categoriesFromDB);
};

const categorieID = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const categorie = categories.find((p) => p.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }

  res.send(`Hello Program ${req.params.id}!`);
};

/* Here you code */

// Export them to import them somewhere else

module.exports = {
  cat,
  categorieID,
};

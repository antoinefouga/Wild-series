// Some data to make the trick

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

const cat = (req, res) => {
  if (req.query.q != null) {
    const filteredCategory = categories.filter((cate) =>
      cate.name.includes(req.query.q)
    );

    res.json(filteredCategory);
  } else {
    res.json(categories);
  }
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

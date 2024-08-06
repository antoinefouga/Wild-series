const sayWelcome = (req, res) => {
  console.info(req.query);

  res.send(`WELCOME TO WILD SERIES ${req.query.name}`);
};

module.exports = { sayWelcome };

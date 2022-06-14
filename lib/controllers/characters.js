const { Router } = require('express');
const { Character } = require('../models/Character');

module.exports = Router().get('/', async (req, res) => {
  const Characters = await Character.getAll();
  const mappedCharacters = Characters.map((character) => {
    return {
      id: character.id,
      first_name: character.first_name,
      last_name: character.last_name,
      quotes: character.quotes,
    };
  });
  res.json(mappedCharacters);
});

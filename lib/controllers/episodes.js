const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router().get('/', async (req, res) => {
  const Episodes = await Episode.getAll();
  const mappedEpisodes = Episodes.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      season: episode.season,
      number: episode.number,
      quotes: episode.quotes,
    };
  });
  res.json(mappedEpisodes);
});

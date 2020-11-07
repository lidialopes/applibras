import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SignRepository from '../repositories/SignRepository';

import CreateSignService from '../services/CreateSignService';

const signRouter = Router();

signRouter.post('/', async (req, res) => {
  const { title, video_url, image_url, description, tags } = req.body;

  const sign = await new CreateSignService().execute({ title, video_url, image_url, description, tags });

  return res.status(200).json(sign);
});

signRouter.get('/', async (req, res) => {
  const repository = getCustomRepository(SignRepository);
  const signs = await repository.find({order: {title: "ASC"}});

  return res.status(200).json(signs);
});

signRouter.get('/:id', async (req, res) => {
  const repository = getCustomRepository(SignRepository);

  const { id } = req.params;
  const sign = await repository.findOne(id);

  return res.status(200).json(sign);
});

export default signRouter;

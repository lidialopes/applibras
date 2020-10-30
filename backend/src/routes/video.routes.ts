import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import VideoRepository from '../repositories/VideoRepository';

import CreateVideoService from '../services/CreateVideoService';

const videoRouter = Router();

videoRouter.post('/', async (req, res) => {
  const { title, video_url, image_url, description, tags } = req.body;

  const video = await new CreateVideoService().execute({ title, video_url, image_url, description, tags });

  return res.status(200).json(video);
});

videoRouter.get('/', async (req, res) => {
  const repository = getCustomRepository(VideoRepository);
  const videos = await repository.find({order: {title: "ASC"}});

  return res.status(200).json(videos);
});

videoRouter.get('/:id', async (req, res) => {
  const repository = getCustomRepository(VideoRepository);

  const { id } = req.params;
  const video = await repository.findOne(id);

  return res.status(200).json(video);
});

export default videoRouter;

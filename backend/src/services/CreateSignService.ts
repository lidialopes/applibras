import { getCustomRepository } from 'typeorm';
import SignRepository from '../repositories/SignRepository';
import Sign from '../models/Sign';

interface Request {
  title: string;
  video_url: string;
  image_url: string;
  description: string;
  tags: string[];
}

class CreateSignService {
  public async execute({ title, video_url, image_url, description, tags }: Request): Promise<Sign> {
    const repository = getCustomRepository(SignRepository);

    const newSign = repository.create({ title, video_url, image_url, description, tags });

    await repository.save(newSign);

    return newSign;
  }
}

export default CreateSignService;

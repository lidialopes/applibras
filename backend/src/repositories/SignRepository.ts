import { EntityRepository, Repository } from 'typeorm';

import Sign from '../models/Sign';

@EntityRepository(Sign)
class SignRepository extends Repository<Sign> {
  public async findByUrl(title: string): Promise<Sign | undefined> {
    const sign = await this.findOne({ where: { title } });

    return sign;
  }
}

export default SignRepository;
import { Repository } from 'typeorm';

import { AppDataSource } from '@database/data-source';
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from '@modules/cars/repositories/ISpecificationsRepository';

import { Specification } from '../entities/Specification';

class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({
      name,
    });

    return specification;
  }

  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }
}

export { SpecificationRepository };

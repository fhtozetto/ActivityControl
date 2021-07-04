import { getRepository, Repository } from 'typeorm';

import { ICreateSectorDTO } from '@modules/tasks/dtos/ICreateSectorDTO';
import { ISectorsRepository } from '@modules/tasks/repositories/ISectorsRepository';

import { Sector } from '../entities/Sectors';

class SectorsRepository implements ISectorsRepository {
  private repository: Repository<Sector>;

  constructor() {
    this.repository = getRepository(Sector);
  }

  async create({ id, description }: ICreateSectorDTO): Promise<Sector> {
    const sector = this.repository.create({
      id,
      description,
    });

    await this.repository.save(sector);

    return sector;
  }

  async findById(id: string): Promise<Sector> {
    const sector = this.repository.findOne(id);

    return sector;
  }

  async deleteById(id: string): Promise<void> {
    this.repository.delete(id);
  }
}

export { SectorsRepository };

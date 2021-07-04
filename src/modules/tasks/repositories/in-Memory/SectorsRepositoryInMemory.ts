import { ICreateSectorDTO } from '@modules/tasks/dtos/ICreateSectorDTO';
import { Sector } from '@modules/tasks/infra/typeorm/entities/Sectors';

import { ISectorsRepository } from '../ISectorsRepository';

class SectorsRepositoryInMemory implements ISectorsRepository {
  sectors: Sector[] = [];

  async create({ description }: ICreateSectorDTO): Promise<Sector> {
    const sector = new Sector();

    Object.assign(sector, {
      description,
    });

    this.sectors.push(sector);
    return sector;
  }
  async findById(id: string): Promise<Sector> {
    const sector = this.sectors.find(sector => sector.id === id);
    return sector;
  }
  async deleteById(id: string): Promise<void> {
    const sector = this.sectors.find(sct => sct.id === id);
    this.sectors.splice(this.sectors.indexOf(sector));
  }
}

export { SectorsRepositoryInMemory };

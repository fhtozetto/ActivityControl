import { inject, injectable } from 'tsyringe';

import { Sector } from '@modules/tasks/infra/typeorm/entities/Sectors';
import { ISectorsRepository } from '@modules/tasks/repositories/ISectorsRepository';

interface IRequest {
  description: string;
  id?: string;
}

@injectable()
class CreateSectorUseCase {
  constructor(
    @inject('SectorsRepository')
    private sectorRepository: ISectorsRepository,
  ) {}

  async execute({ id, description }: IRequest): Promise<Sector> {
    const sector = await this.sectorRepository.create({ id, description });
    return sector;
  }
}

export { CreateSectorUseCase };

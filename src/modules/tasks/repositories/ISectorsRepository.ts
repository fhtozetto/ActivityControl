import { ICreateSectorDTO } from '../dtos/ICreateSectorDTO';
import { Sector } from '../infra/typeorm/entities/Sectors';

interface ISectorsRepository {
  create(data: ICreateSectorDTO): Promise<Sector>;
  findById(id: string): Promise<Sector>;
  deleteById(id: string): Promise<void>;
}

export { ISectorsRepository };

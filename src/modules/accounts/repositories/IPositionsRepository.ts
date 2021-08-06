import { ICreatePositionDTO } from '../dtos/ICreatePositionDTO';
import { Position } from '../infra/typeorm/entities/Position';

interface IPositionsRepository {
  create({ id, description }: ICreatePositionDTO): Promise<Position>;
  deleteById(id: string): Promise<void>;
  findById(id: string): Promise<Position>;
  findByName(name: string): Promise<Position>;
}

export { IPositionsRepository };

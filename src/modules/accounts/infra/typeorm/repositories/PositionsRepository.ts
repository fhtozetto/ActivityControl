import { getRepository, Repository } from 'typeorm';

import { ICreatePositionDTO } from '@modules/accounts/dtos/ICreatePositionDTO';
import { IPositionsRepository } from '@modules/accounts/repositories/IPositionsRepository';

import { Position } from '../entities/Position';

class PositionsRepository implements IPositionsRepository {
  private repository: Repository<Position>;

  constructor() {
    this.repository = getRepository(Position);
  }

  async create({ id, description }: ICreatePositionDTO): Promise<Position> {
    const position = this.repository.create({
      id,
      description,
    });

    await this.repository.save(position);

    return position;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findById(id: string): Promise<Position> {
    const position = await this.repository.findOne(id);

    return position;
  }

  async findByName(description: string): Promise<Position> {
    const position = await this.repository.findOne({ description });

    return position;
  }
}

export { PositionsRepository };

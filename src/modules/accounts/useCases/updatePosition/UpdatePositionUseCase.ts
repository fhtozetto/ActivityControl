import { inject, injectable } from 'tsyringe';

import { Position } from '@modules/accounts/infra/typeorm/entities/Position';
import { PositionsRepository } from '@modules/accounts/infra/typeorm/repositories/PositionsRepository';

interface IRequest {
  id: string;
  description: string;
}

@injectable()
class UpdatePositionUseCase {
  constructor(
    @inject('PositionsRepository')
    private positionsRepository: PositionsRepository,
  ) {}

  async execute({ id, description }: IRequest): Promise<Position> {
    const position = await this.positionsRepository.create({ id, description });

    return position;
  }
}

export { UpdatePositionUseCase };

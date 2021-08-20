import { inject, injectable } from 'tsyringe';

import { Position } from '@modules/accounts/infra/typeorm/entities/Position';
import { PositionsRepository } from '@modules/accounts/infra/typeorm/repositories/PositionsRepository';
import { AppError } from '@shared/errors/AppError';

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
    const positionExists = await this.positionsRepository.findById(id);

    if (!positionExists) {
      throw new AppError('Position does not exists!');
    }

    const position = await this.positionsRepository.create({ id, description });

    return position;
  }
}

export { UpdatePositionUseCase };

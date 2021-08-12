import { inject, injectable } from 'tsyringe';

import { Position } from '@modules/accounts/infra/typeorm/entities/Position';
import { PositionsRepository } from '@modules/accounts/infra/typeorm/repositories/PositionsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  description: string;
}

@injectable()
class CreatePositionUseCase {
  constructor(
    @inject('PositionsRepository')
    private positionsRepository: PositionsRepository,
  ) {}

  async execute({ description }: IRequest): Promise<Position> {
    const positionAlreadyExists = await this.positionsRepository.findByName(
      description,
    );

    if (positionAlreadyExists) {
      throw new AppError('Position already exists!');
    }

    const position = await this.positionsRepository.create({ description });

    return position;
  }
}

export { CreatePositionUseCase };

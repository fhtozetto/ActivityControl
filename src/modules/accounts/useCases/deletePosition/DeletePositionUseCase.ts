import { inject, injectable } from 'tsyringe';

import { PositionsRepository } from '@modules/accounts/infra/typeorm/repositories/PositionsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeletePositionUseCase {
  constructor(
    @inject('PositionsRepository')
    private positionsRepository: PositionsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const position = await this.positionsRepository.findById(id);

    if (!position) {
      throw new AppError('Position does not exists!');
    }

    await this.positionsRepository.deleteById(id);
  }
}

export { DeletePositionUseCase };

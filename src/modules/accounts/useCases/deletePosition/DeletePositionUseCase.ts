import { inject, injectable } from 'tsyringe';

import { PositionsRepository } from '@modules/accounts/infra/typeorm/repositories/PositionsRepository';

@injectable()
class DeletePositionUseCase {
  constructor(
    @inject('PositionsRepository')
    private positionsRepository: PositionsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.positionsRepository.deleteById(id);
  }
}

export { DeletePositionUseCase };

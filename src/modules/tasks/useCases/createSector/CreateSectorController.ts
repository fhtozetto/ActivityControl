import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSectorUseCase } from './CreateSectorUseCase';

class CreateSectorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, description } = request.body;

    const createSectorUseCase = container.resolve(CreateSectorUseCase);

    const sector = await createSectorUseCase.execute({
      id,
      description,
    });

    return response.status(201).json(sector);
  }
}

export { CreateSectorController };

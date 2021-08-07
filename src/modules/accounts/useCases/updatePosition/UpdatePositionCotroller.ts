import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePositionUseCase } from './UpdatePositionUseCase';

class UpdatePositionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, description } = request.body;

    const updatePositionUseCase = container.resolve(UpdatePositionUseCase);

    await updatePositionUseCase.execute({ id, description });

    return response.status(204).send();
  }
}

export { UpdatePositionController };

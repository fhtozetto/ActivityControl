import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePositionUseCase } from './CreatePositionUseCase';

class CreatePositionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createPositionUseCase = container.resolve(CreatePositionUseCase);

    const position = await createPositionUseCase.execute({ description });

    return response.status(201).send(position);
  }
}

export { CreatePositionController };

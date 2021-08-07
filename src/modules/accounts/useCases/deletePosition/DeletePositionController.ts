import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeletePositionUseCase } from './DeletePositionUseCase';

class DeletePositionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.headers;

    const deletePositionUseCase = container.resolve(DeletePositionUseCase);

    await deletePositionUseCase.execute(id as string);

    return response.status(204).send();
  }
}

export { DeletePositionController };

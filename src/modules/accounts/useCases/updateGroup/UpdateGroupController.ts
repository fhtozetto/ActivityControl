import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateGroupUseCase } from './UpdateGroupUseCase';

class UpdateGroupController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.body;

    const updateGroupUseCase = container.resolve(UpdateGroupUseCase);

    await updateGroupUseCase.execute({ id, name });

    return response.status(204).send();
  }
}

export { UpdateGroupController };

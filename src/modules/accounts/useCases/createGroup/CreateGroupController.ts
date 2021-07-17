import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateGroupUseCase } from './CreateGroupUseCase';

class CreateGroupController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createGroupUseCase = container.resolve(CreateGroupUseCase);
    const group = await createGroupUseCase.execute({ name });

    return response.status(201).json(group);
  }
}

export { CreateGroupController };

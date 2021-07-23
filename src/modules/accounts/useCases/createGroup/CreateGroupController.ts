import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateGroupUseCase } from './CreateGroupUseCase';

class CreateGroupController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { account_id, name } = request.body;

    const createGroupUseCase = container.resolve(CreateGroupUseCase);
    const group = await createGroupUseCase.execute({ account_id, name });

    return response.status(201).json(group);
  }
}

export { CreateGroupController };

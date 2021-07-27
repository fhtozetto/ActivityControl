import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateDepartmentUseCase } from './UpdateDepartmentUseCase';

class UpdateDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, account_id, description } = request.body;

    const updateDepartmentUseCase = container.resolve(UpdateDepartmentUseCase);
    await updateDepartmentUseCase.execute({ id, account_id, description });

    return response.status(201).send();
  }
}

export { UpdateDepartmentController };

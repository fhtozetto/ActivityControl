import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateDepartmentUseCase } from './UpdateDepartmentUseCase';

class UpdateDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, description } = request.body;

    const updateDepartmentUseCase = container.resolve(UpdateDepartmentUseCase);
    await updateDepartmentUseCase.execute({ id, description });

    return response.status(204).send();
  }
}

export { UpdateDepartmentController };

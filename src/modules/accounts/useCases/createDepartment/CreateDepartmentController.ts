import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDepartmentUseCase } from './CreateDepartmentUseCase';

class CreateDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createDepartmentsUseCase = container.resolve(CreateDepartmentUseCase);

    const department = await createDepartmentsUseCase.execute({
      description,
    });

    return response.status(201).json(department);
  }
}

export { CreateDepartmentController };

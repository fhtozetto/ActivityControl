import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteDepartmentUseCase } from './DeleteDepartmentUseCase';

class DeleteDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.headers;

    const deleteDepartmentUseCase = container.resolve(DeleteDepartmentUseCase);

    await deleteDepartmentUseCase.execute(id as string);

    return response.status(204).send();
  }
}

export { DeleteDepartmentController };

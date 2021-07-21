import { Router } from 'express';

import { CreateDepartmentController } from '@modules/accounts/useCases/createDepartment/CreateDepartmentController';

const departmentRoutes = Router();

const createDepartmentController = new CreateDepartmentController();

departmentRoutes.post('/', createDepartmentController.handle);

export { departmentRoutes };

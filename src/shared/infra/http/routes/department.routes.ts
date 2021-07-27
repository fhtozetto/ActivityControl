import { Router } from 'express';

import { CreateDepartmentController } from '@modules/accounts/useCases/createDepartment/CreateDepartmentController';
import { UpdateDepartmentController } from '@modules/accounts/useCases/updateDepartment/UpdateDepartmentController';

const departmentRoutes = Router();

const createDepartmentController = new CreateDepartmentController();
const updateDepartmentController = new UpdateDepartmentController();

departmentRoutes.post('/', createDepartmentController.handle);
departmentRoutes.put('/', updateDepartmentController.handle);

export { departmentRoutes };

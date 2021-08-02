import { Router } from 'express';

import { CreateDepartmentController } from '@modules/accounts/useCases/createDepartment/CreateDepartmentController';
import { DeleteDepartmentController } from '@modules/accounts/useCases/deleteDepartment/DeleteDepartmentController';
import { UpdateDepartmentController } from '@modules/accounts/useCases/updateDepartment/UpdateDepartmentController';

const departmentRoutes = Router();

const createDepartmentController = new CreateDepartmentController();
const updateDepartmentController = new UpdateDepartmentController();
const deleteDepartmentController = new DeleteDepartmentController();

departmentRoutes.post('/', createDepartmentController.handle);
departmentRoutes.put('/', updateDepartmentController.handle);
departmentRoutes.delete('/', deleteDepartmentController.handle);

export { departmentRoutes };

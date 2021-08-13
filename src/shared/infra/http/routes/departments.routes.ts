import { Router } from 'express';

import { CreateDepartmentController } from '@modules/accounts/useCases/createDepartment/CreateDepartmentController';
import { DeleteDepartmentController } from '@modules/accounts/useCases/deleteDepartment/DeleteDepartmentController';
import { UpdateDepartmentController } from '@modules/accounts/useCases/updateDepartment/UpdateDepartmentController';

const departmentsRoutes = Router();

const createDepartmentController = new CreateDepartmentController();
const updateDepartmentController = new UpdateDepartmentController();
const deleteDepartmentController = new DeleteDepartmentController();

departmentsRoutes.post('/', createDepartmentController.handle);
departmentsRoutes.put('/', updateDepartmentController.handle);
departmentsRoutes.delete('/', deleteDepartmentController.handle);

export { departmentsRoutes };

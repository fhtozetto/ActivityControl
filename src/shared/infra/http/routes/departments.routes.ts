import { Router } from 'express';

import { CreateDepartmentController } from '@modules/accounts/useCases/createDepartment/CreateDepartmentController';
import { DeleteDepartmentController } from '@modules/accounts/useCases/deleteDepartment/DeleteDepartmentController';
import { UpdateDepartmentController } from '@modules/accounts/useCases/updateDepartment/UpdateDepartmentController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const departmentsRoutes = Router();

const createDepartmentController = new CreateDepartmentController();
const updateDepartmentController = new UpdateDepartmentController();
const deleteDepartmentController = new DeleteDepartmentController();

departmentsRoutes.post(
  '/',
  ensureAuthenticated,
  createDepartmentController.handle,
);
departmentsRoutes.put(
  '/',
  ensureAuthenticated,
  updateDepartmentController.handle,
);
departmentsRoutes.delete(
  '/',
  ensureAuthenticated,
  deleteDepartmentController.handle,
);

export { departmentsRoutes };

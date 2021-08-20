import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { DeleteUserController } from '@modules/accounts/useCases/deleteUser/DeleteUserController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post('/', ensureAuthenticated, createUserController.handle);
usersRoutes.put('/', ensureAuthenticated, updateUserController.handle);
usersRoutes.delete('/', ensureAuthenticated, deleteUserController.handle);

export { usersRoutes };

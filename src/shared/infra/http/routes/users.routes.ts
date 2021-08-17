import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { DeleteUserController } from '@modules/accounts/useCases/deleteUser/DeleteUserController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.put('/', updateUserController.handle);
usersRoutes.delete('/', deleteUserController.handle);

export { usersRoutes };

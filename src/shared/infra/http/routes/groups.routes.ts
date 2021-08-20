import { Router } from 'express';

import { CreateGroupController } from '@modules/accounts/useCases/createGroup/CreateGroupController';
import { DeleteGroupController } from '@modules/accounts/useCases/deleteGroup/DeleteGroupController';
import { UpdateGroupController } from '@modules/accounts/useCases/updateGroup/UpdateGroupController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const groupsRoutes = Router();

const createGroupController = new CreateGroupController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

groupsRoutes.post('/', ensureAuthenticated, createGroupController.handle);
groupsRoutes.put('/', ensureAuthenticated, updateGroupController.handle);
groupsRoutes.delete('/', ensureAuthenticated, deleteGroupController.handle);

export { groupsRoutes };

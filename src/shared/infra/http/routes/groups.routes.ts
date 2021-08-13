import { Router } from 'express';

import { CreateGroupController } from '@modules/accounts/useCases/createGroup/CreateGroupController';
import { DeleteGroupController } from '@modules/accounts/useCases/deleteGroup/DeleteGroupController';
import { UpdateGroupController } from '@modules/accounts/useCases/updateGroup/UpdateGroupController';

const groupsRoutes = Router();

const createGroupController = new CreateGroupController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

groupsRoutes.post('/', createGroupController.handle);
groupsRoutes.put('/', updateGroupController.handle);
groupsRoutes.delete('/', deleteGroupController.handle);

export { groupsRoutes };

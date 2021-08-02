import { Router } from 'express';

import { CreateGroupController } from '@modules/accounts/useCases/createGroup/CreateGroupController';
import { DeleteGroupController } from '@modules/accounts/useCases/deleteGroup/DeleteGroupController';
import { UpdateGroupController } from '@modules/accounts/useCases/updateGroup/UpdateGroupController';

const groupRoutes = Router();

const createGroupController = new CreateGroupController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

groupRoutes.post('/', createGroupController.handle);
groupRoutes.put('/', updateGroupController.handle);
groupRoutes.delete('/', deleteGroupController.handle);

export { groupRoutes };

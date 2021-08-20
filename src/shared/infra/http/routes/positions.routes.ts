import { Router } from 'express';

import { CreatePositionController } from '@modules/accounts/useCases/createPosition/CreatePositionController';
import { DeletePositionController } from '@modules/accounts/useCases/deletePosition/DeletePositionController';
import { UpdatePositionController } from '@modules/accounts/useCases/updatePosition/UpdatePositionCotroller';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const positionsRoutes = Router();

const createPositionController = new CreatePositionController();
const updatePositionController = new UpdatePositionController();
const deletePositionController = new DeletePositionController();

positionsRoutes.post('/', ensureAuthenticated, createPositionController.handle);
positionsRoutes.put('/', ensureAuthenticated, updatePositionController.handle);
positionsRoutes.delete(
  '/',
  ensureAuthenticated,
  deletePositionController.handle,
);

export { positionsRoutes };

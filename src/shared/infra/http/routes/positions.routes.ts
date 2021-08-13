import { Router } from 'express';

import { CreatePositionController } from '@modules/accounts/useCases/createPosition/CreatePositionController';
import { DeletePositionController } from '@modules/accounts/useCases/deletePosition/DeletePositionController';
import { UpdatePositionController } from '@modules/accounts/useCases/updatePosition/UpdatePositionCotroller';

const positionsRoutes = Router();

const createPositionController = new CreatePositionController();
const updatePositionController = new UpdatePositionController();
const deletePositionController = new DeletePositionController();

positionsRoutes.post('/', createPositionController.handle);
positionsRoutes.put('/', updatePositionController.handle);
positionsRoutes.delete('/', deletePositionController.handle);

export { positionsRoutes };

import { Router } from 'express';

import { sectorRoutes } from './sector.routes';

const router = Router();

router.use('/sector', sectorRoutes);

export { router };

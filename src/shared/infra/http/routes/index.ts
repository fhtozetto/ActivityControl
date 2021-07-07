import { Router } from 'express';

import { companyRoutes } from './company.routes';
import { sectorRoutes } from './sector.routes';

const router = Router();

router.use('/sector', sectorRoutes);
router.use('/company', companyRoutes);

export { router };

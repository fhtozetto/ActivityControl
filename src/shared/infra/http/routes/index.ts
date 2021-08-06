import { Router } from 'express';

import { companyRoutes } from './company.routes';
import { departmentRoutes } from './department.routes';
import { groupRoutes } from './group.routes';
import { positionRoutes } from './position.routes';

const router = Router();

router.use('/company', companyRoutes);
router.use('/group', groupRoutes);
router.use('/department', departmentRoutes);
router.use('/position', positionRoutes);

export { router };

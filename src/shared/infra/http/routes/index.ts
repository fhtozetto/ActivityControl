import { Router } from 'express';

import { accountRoutes } from './account.routes';
import { companyRoutes } from './company.routes';

const router = Router();

router.use('/company', companyRoutes);
router.use('/account', accountRoutes);

export { router };

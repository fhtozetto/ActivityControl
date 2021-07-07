import { container } from 'tsyringe';

import '@shared/container/providers';
import { CompaniesRepository } from '@modules/accounts/infra/typeorm/repositories/CompaniesRepository';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';
import { SectorsRepository } from '@modules/tasks/infra/typeorm/repositories/SectorsRepository';
import { ISectorsRepository } from '@modules/tasks/repositories/ISectorsRepository';

container.registerSingleton<ISectorsRepository>(
  'SectorsRepository',
  SectorsRepository,
);

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

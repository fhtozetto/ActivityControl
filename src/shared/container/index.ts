import { container } from 'tsyringe';

import '@shared/container/providers';
import { AccountsRepository } from '@modules/accounts/infra/typeorm/repositories/AccountsRepository';
import { CompaniesRepository } from '@modules/accounts/infra/typeorm/repositories/CompaniesRepository';
import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<IAccountsRepository>(
  'AccountsRepository',
  AccountsRepository,
);

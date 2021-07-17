import { container } from 'tsyringe';

import '@shared/container/providers';
import { AccountsRepository } from '@modules/accounts/infra/typeorm/repositories/AccountsRepository';
import { CompaniesRepository } from '@modules/accounts/infra/typeorm/repositories/CompaniesRepository';
import { GroupsRepository } from '@modules/accounts/infra/typeorm/repositories/GroupRepository';
import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';
import { IGroupsRepository } from '@modules/accounts/repositories/IGroupRepository';

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<IAccountsRepository>(
  'AccountsRepository',
  AccountsRepository,
);

container.registerSingleton<IGroupsRepository>(
  'GroupsRepository',
  GroupsRepository,
);

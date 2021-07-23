interface ICreateCompanyDTO {
  id?: string;
  account_id: string;
  group_id: string;
  name: string;
  code_name: string;
  cnpj: string;
}

export { ICreateCompanyDTO };

interface ICreateUserDTO {
  id?: string;
  company_id?: string;
  position_id?: string;
  department_id?: string;
  email: string;
  name: string;
  username: string;
  password: string;
  active: boolean;
  admin: boolean;
  avatar?: string;
}

export { ICreateUserDTO };

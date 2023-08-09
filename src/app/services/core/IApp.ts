export interface IUser {
  _id: string;
  fullname: string;
  password: string;
  email: string;
  picture: string;
  role: string;
  phone: string;
  phone_alt: string;
  organisation: IOrganisation;
  createdAt: string;
  updatedAt: string;
}

export interface IOrganisation {
  _id: string;
  name: string;
}

export interface Auth {
  email: string;
  password: string;
}

export interface IAppointment {
  _id: string;
  appointment_date: string;
  description: string;
  status: string;
  customer: ICustomer;
  user: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface ICustomer {
  _id: string;
  firstname: string;
  lastname: string;
  phone: string;
  phone_alt: string;
  picture: string;
  dob: string;
  organisation: IOrganisation;
  createdAt: string;
  updatedAt: string;
}

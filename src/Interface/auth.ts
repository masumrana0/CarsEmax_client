export interface ILoginData {
  email: string;
  password: string;
}

export type IRegisterData = {
  _id?: string;
  name: {
    firstName: string;
    lastName?: string;
  };
  phoneNumber: string;
  email: string;
  password: string;
  role?: "customer" | "admin" | "super_admin";
  profilePhoto?: string;
  passwordChangedAt?: Date;
  isVerified?: boolean;
};

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  newPassword: string;
  newConfirmPassword?: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword?: string;
}

export type IChangeEmail = {
  password: string;
  email: string;
};

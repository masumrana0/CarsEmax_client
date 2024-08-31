import {
  IChangeEmail,
  IChangePassword,
  IForgotPassword,
  ILoginData,
  IRegisterData,
} from "@/Interface/auth";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (data: IRegisterData) => ({
        url: "/auth/customer/register",
        method: "POST",
        data: data,
      }),
    }),
    signin: build.mutation({
      query: (signinData: ILoginData) => ({
        url: "/auth/login",
        method: "POST",
        body: signinData,
      }),
    }),
    forgotPassword: build.mutation({
      query: (email: IForgotPassword) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: build.mutation({
      query: ({ data, token }) => ({
        url: `/auth/reset-password/${token}`,
        method: "PATCH",
        body: { newPassword: data.newPassword },
      }),
    }),
    changePassword: build.mutation({
      query: (data: IChangePassword) => ({
        url: `/auth/change-password`,
        method: "PATCH",
        body: data,
      }),
    }),
    changeEmail: build.mutation({
      query: (data: IChangeEmail) => ({
        url: `/auth/change-email`,
        method: "PATCH",
        body: data,
      }),
    }),
    verifyEmail: build.mutation({
      query: (token: string) => ({
        url: `/auth/verify-email/${token}`,
        method: "PATCH",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSigninMutation,
  useSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation,
  useChangePasswordMutation,
  useChangeEmailMutation,
} = authApi;

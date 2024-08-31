import ForgotPassword from "@/components/auth/forgotPassword";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FreeFexiPlan || forgot-password ",
  description: "Forgot password password in freefexiplan",
};
const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;

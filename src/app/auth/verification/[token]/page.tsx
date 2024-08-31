import EmailVerification from "@/components/auth/verification";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FreeFexiPlan || verification ",
  description: "verification in freefexiplan",
};
const EmailVerificationPage = ({ params }: any) => {
  const { token } = params;

  return (
    <>
      <EmailVerification token={token} />
    </>
  );
};

export default EmailVerificationPage;

"use client";
import React, { useState } from "react";
import { Button, message } from "antd";
import Form from "@/components/shared/inputs/Form";
import FormInput from "@/components/shared/inputs/FormInput";
import { useForgotPasswordMutation } from "@/Redux/api/authApi";
import LoadingSpinner from "@/components/shared/spinners/loadingSpinner";

const ForgotPassword: React.FC = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (data: any) => {
    forgotPassword(data)
      .then((res: any) => {
        if (res?.data?.statusCode === 200) {
          setErrorMessage(null);
          message.success("Please Check your email inbox ");
        } else {
          message.error(res?.error?.message);
          setErrorMessage(res?.error?.message);
        }
      })
      .catch(() => {
        setErrorMessage("An unexpected error occurred");
      });
  };

  return (
    <div className="min-h-screen bg-gray-200 darkmode flex items-center justify-center bg-gradient-to-r">
      <div className="bg-white light-darkmode p-8 rounded-xl shadow-xl max-w-md w-full">
        {isLoading && <LoadingSpinner />}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            Forgot Password
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </p>
        </div>
        {errorMessage && (
          <div
            className={`p-4 mb-4 border-l-4 ${
              errorMessage
                ? "bg-red-100 border-red-500 text-red-700"
                : "bg-green-100 border-green-500 text-green-700"
            }`}
          >
            {errorMessage}
          </div>
        )}
        <Form submitHandler={handleSubmit}>
          <div className="mb-4">
            <FormInput
              type="email"
              id="email"
              name="email"
              label="Email Address"
              placeholder="Enter your account email"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              className="w-full"
              key="submit"
              type="primary"
              loading={isLoading}
              htmlType="submit"
            >
              Send Reset Link
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;

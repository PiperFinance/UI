import React from "react";
import Alert from "@ui/Alert/Alert";
import { ShieldExclamationIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import Flex from "@ui/Flex/Flex";

interface IToast {
  type?: "success" | "error" | "warning" | "primary" | "info" | "secondary";
  children: JSX.Element[];
}

interface IDefaultToast {
  title?: string;
  description?: string;
  dismiss: () => void;
}

const Toast = ({ type, children }: IToast) => {
  return <Alert intent={type}>{children}</Alert>;
};

const ToastSuccess = ({ title, description, dismiss }: IDefaultToast) => {
  return (
    <Alert intent="success">
      <Flex justifyContent="between" alignItems="center">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <CheckIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          {title}
          {description}
        </div>
        <XMarkIcon
          onClick={() => dismiss()}
          className="h-6 w-6 cursor-pointer text-gray-900 transition hover:text-gray-400"
        />
      </Flex>
    </Alert>
  );
};

const ToastError = ({ title, description, dismiss }: IDefaultToast) => {
  return (
    <Alert intent="error">
      <Flex justifyContent="between" alignItems="center">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <XMarkIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          {" "}
          {title}
          {description}
        </div>
        <XMarkIcon
          onClick={() => dismiss()}
          className="h-6 w-6 cursor-pointer text-gray-900 transition hover:text-gray-400"
        />
      </Flex>
    </Alert>
  );
};

const ToastWarning = ({ title, description, dismiss }: IDefaultToast) => {
  return (
    <Alert intent="warning">
      <Flex justifyContent="between" alignItems="center">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-orange-500 dark:bg-orange-600 dark:text-orange-200">
          <ShieldExclamationIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          {" "}
          <h1 className="font-medium">{title}</h1>
          <p>{description}</p>
        </div>
        <XMarkIcon
          onClick={() => dismiss()}
          className="h-5 w-5 cursor-pointer text-gray-900 transition hover:text-gray-400"
        />
      </Flex>
    </Alert>
  );
};

const ToastInfo = ({ title, description, dismiss }: IDefaultToast) => {
  return (
    <Alert intent="info">
      <Flex justifyContent="between" alignItems="center">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-primary-500 dark:bg-primary-800 dark:text-primary-200">
          <ShieldExclamationIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          {" "}
          {title}
          {description}
        </div>
        <XMarkIcon
          onClick={() => dismiss()}
          className="h-6 w-6 cursor-pointer text-gray-900 transition hover:text-gray-400"
        />
      </Flex>
    </Alert>
  );
};

export { Toast, ToastSuccess, ToastError, ToastWarning, ToastInfo };

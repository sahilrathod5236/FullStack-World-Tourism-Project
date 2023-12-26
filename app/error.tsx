"use client";

import { useEffect } from "react";

import { EmptyState } from "@/components/empty-state";

interface ErrorStateProps {
  error: Error;
}

const ErrorState = ({ error }: ErrorStateProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Oops!" subtitle="Something went wrong" />;
};

export default ErrorState;

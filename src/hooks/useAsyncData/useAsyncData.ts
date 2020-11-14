import { useState } from "react";
import { AsyncDataHookMixin } from "./types";

export function useAsyncData<DataType>(
  initialData: DataType
): AsyncDataHookMixin<DataType> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<DataType>(initialData);

  return {
    isLoading,
    isError,
    data,
    markAsLoading: () => {
      setIsError(false);
      setIsLoading(true);
    },
    markAsReady: () => {
      setIsLoading(false);
      setIsError(false);
    },
    markAsError: () => {
      setIsLoading(false);
      setIsError(true);
    },
    setData: (data: DataType) => {
      setData(data);
    },
  };
}

import { useState } from "react";
import { AsyncDataHookMixin } from "./types";

export function useAsyncData<DataType>(
  initialData: DataType
): AsyncDataHookMixin<DataType> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<DataType>(initialData);

  return {
    isLoading,
    isReady,
    isError,
    data,
    markAsLoading: () => {
      setIsError(false);
      setIsLoading(true);
    },
    markAsReady: () => {
      setIsLoading(false);
      setIsReady(true);
      setIsError(false);
    },
    markAsError: () => {
      setIsLoading(false);
      setIsReady(true);
      setIsError(true);
    },
    setData: (data: DataType) => {
      setData(data);
    },
  };
}

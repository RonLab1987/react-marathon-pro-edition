import { useState } from "react";
import { AsyncDataHookMixin } from "./types";

export function useAsyncData<
  DataType,
  GetDataHandlerType extends (...args: any) => Promise<DataType> = (
    ...args: any
  ) => Promise<DataType>
>(
  initialData: DataType,
  getDataHandler: GetDataHandlerType
): AsyncDataHookMixin<DataType, GetDataHandlerType> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<DataType>(initialData);

  const markAsLoading = () => {
    setIsError(false);
    setIsLoading(true);
  };
  const markAsReady = () => {
    setIsLoading(false);
    setIsReady(true);
    setIsError(false);
  };
  const markAsError = () => {
    setIsLoading(false);
    setIsReady(true);
    setIsError(true);
  };

  const getData = (...args: any[]) => {
    return new Promise((resolve, reject) => {
      markAsLoading();
      getDataHandler(...args)
        .then((data) => {
          setData(data);
          markAsReady();
          resolve(data);
        })
        .catch((error) => {
          markAsError();
          reject(error);
        });
    });
  };

  return {
    isLoading,
    isReady,
    isError,
    data,
    getData: getData as GetDataHandlerType,
  };
}

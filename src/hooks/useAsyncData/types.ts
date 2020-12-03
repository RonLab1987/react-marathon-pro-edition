export interface AsyncDataHookMixin<DataType, GetDataHandlerType> {
  isLoading: boolean;
  isError: boolean;
  isReady: boolean;
  data: DataType;
  getData: GetDataHandlerType;
}

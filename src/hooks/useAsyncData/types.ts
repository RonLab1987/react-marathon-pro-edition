export interface AsyncDataHookMixin<DataType> {
  isLoading: boolean;
  isError: boolean;
  data: DataType;
  markAsLoading: () => void;
  markAsReady: () => void;
  markAsError: () => void;
  setData: (data: DataType) => void;
}

import { renderHook } from "@testing-library/react-hooks";
import { useAsyncData } from "./useAsyncData";

describe("useAsyncData hook ", () => {
  test("should return mixin ", () => {
    const { result } = renderHook(() =>
      useAsyncData<null>(null, () => Promise.resolve(null))
    );
    expect(result.current).toBeTruthy();
  });

  test("has valid mixin state after init", () => {
    const data = "123";
    const { result } = renderHook(() =>
      useAsyncData<string>(data, () => Promise.resolve(""))
    );
    const { getData, ...state } = result.current;
    expect(state).toEqual({
      isLoading: true,
      isReady: false,
      isError: false,
      data,
    });
  });

  test("has valid mixin state after successfully fetch data", async () => {
    const data = "123";
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsyncData<string | null>(null, () => Promise.resolve(data))
    );
    result.current.getData();
    await waitForNextUpdate();
    const { getData, ...state } = result.current;
    expect(state).toEqual({
      isLoading: false,
      isReady: true,
      isError: false,
      data,
    });
  });

  test("has valid mixin state after failed fetch data", async () => {
    const data = "123";
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsyncData<string>(data, () => Promise.reject(new Error("test")))
    );
    result.current.getData().catch((e) => {});
    await waitForNextUpdate();
    const { getData, ...state } = result.current;
    expect(state).toEqual({
      isLoading: false,
      isReady: true,
      isError: true,
      data,
    });
  });
});

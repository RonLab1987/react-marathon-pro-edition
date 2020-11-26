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
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isReady).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(data);
  });

  test("has valid mixin state after successfully fetch data", async () => {
    const data = "123";
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsyncData<string | null>(null, () => Promise.resolve(data))
    );
    result.current.getData();
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isReady).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(data);
  });

  test("has valid mixin state after failed fetch data", async () => {
    const data = "123";
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsyncData<string>(data, () => Promise.reject(new Error("test")))
    );
    result.current.getData().catch((e) => {});
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isReady).toBe(true);
    expect(result.current.isError).toBe(true);
    expect(result.current.data).toBe(data);
  });
});

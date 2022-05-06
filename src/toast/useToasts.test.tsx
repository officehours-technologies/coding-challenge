import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { ToastProvider } from "./ToastProvider";
import { useToasts } from "./useToasts";

it("adds toast to viewport when addToast is called", () => {
  // TODO: implement
  expect(false).toBe(true);
});

it("removes toast after ttl elapses", () => {
  // TODO: implement
  expect(false).toBe(true);
});

it("updates stats", () => {
  // TODO: implement
  expect(false).toBe(true);
});

function renderUseToasts() {
  return renderHook(() => useToasts(), { wrapper: ToastProvider });
}

// features/layout/model/selectors/useHideComponents.ts
import { usePathname } from "next/navigation";

export const useHideComponents = () => {
  const currentPath = usePathname();
  const hideComponents = ["/profile", "/auth", "/admin", "/basket"];
  return hideComponents.includes(currentPath);
};

import { usePathname } from "next/navigation";

export const useHideComponents = () => {
  const currentPath = usePathname();

  const hideComponents = [
    "/profile",
    "/auth",
    "/admin",
    "/admin/application",
    "/admin/order",
    "/basket",
  ];
  return hideComponents.includes(currentPath);
};

export const useHideAdmin = () => {
  const currentPath = usePathname();
  const hideComponents = ["/admin", "/admin/application", "/admin/order"];
  return hideComponents.includes(currentPath);
};

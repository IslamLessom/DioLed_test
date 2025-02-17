import { usePathname } from "next/navigation";

export const useHideComponents = () => {
  const currentPath = usePathname();

  const hideComponents = [
    "/profile",
    "/auth",
    "/admin",
    "/admin/application",
    "/admin/allproduct",
    "/admin/order",
    "/basket",
  ];
  return hideComponents.includes(currentPath);
};

export const useHideAdmin = () => {
  const currentPath = usePathname();
  const hideComponents = [
    "/admin",
    "/admin/application",
    "/admin/order",
    "/admin/allproduct",
  ];
  return hideComponents.includes(currentPath);
};

import { Location } from "react-router-dom";

export interface BreadcrumbItem {
  path: string;
  title: string;
}

export const getBreadcrumbItems = (location: Location): BreadcrumbItem[] => {
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems: BreadcrumbItem[] = pathSnippets.map(
    (_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      let title =
        pathSnippets[index].charAt(0).toUpperCase() +
        pathSnippets[index].slice(1);

      // Special case for "/create" route
      if (url === "/create") {
        title = "Create Meeting";
      }

      return {
        path: url,
        title: title,
      };
    }
  );

  return [
    {
      path: "/",
      title: "Dashboard",
    },
    ...extraBreadcrumbItems,
  ];
};

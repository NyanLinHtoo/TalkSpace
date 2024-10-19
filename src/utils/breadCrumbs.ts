import { Location } from "react-router-dom";
import { BreadcrumbItem } from "./Types";

const createBreadCrumbItem = (path: string, title: string): BreadcrumbItem => ({
  path,
  title,
});

export const getBreadCrumbItems = (location: Location): BreadcrumbItem[] => {
  const { pathname } = location;

  const defaultItems = [createBreadCrumbItem("/", "Dashboard")];

  if (pathname === "/create") {
    return [...defaultItems, createBreadCrumbItem("/create", "Create Meeting")];
  } else if (pathname === "/create1on1") {
    return [
      ...defaultItems,
      createBreadCrumbItem("/create", "Create Meeting"),
      createBreadCrumbItem("/create1on1", "Create One On One Meeting"),
    ];
  }
  return defaultItems;
};

// const capitalizeFirstLetter = (string: string): string =>
//   string.charAt(0).toUpperCase() + string.slice(1);

// const createBreadcrumbItems = (
//   location: Location,
//   baseUrl: string = ""
// ): BreadcrumbItem[] => {
//   const pathSnippets = location.pathname.split("/").filter((i) => i);

//   return pathSnippets.map((_, index) => {
//     const url = `${baseUrl}/${pathSnippets.slice(0, index + 1).join("/")}`;
//     let title = capitalizeFirstLetter(pathSnippets[index]);

//     // Special cases
//     if (url === "/create") {
//       title = "Create Meeting";
//     } else if (url === "/create1on1") {
//       title = "Create One On One Meeting";
//     }
//     return createBreadCrumbItem(url, title);
//   });
// };

// export const getBreadcrumbItems = (location: Location): BreadcrumbItem[] => [
//   createBreadCrumbItem("/", "Dashboard"),
//   ...createBreadcrumbItems(location),
// ];

// export const getOneOnOneBreadcrumbItems = (
//   location: Location
// ): BreadcrumbItem[] => [
//   createBreadCrumbItem("/", "Dashboard"),
//   getBreadcrumbItems(location),
//   ...createBreadcrumbItems(location, "/create1on1"),
// ];

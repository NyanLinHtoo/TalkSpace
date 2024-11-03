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
  } else if (pathname === "/videoConference") {
    return [
      ...defaultItems,
      createBreadCrumbItem("/create", "Create Meeting"),
      createBreadCrumbItem("/videoConference", "Create Video Conference"),
    ];
  }
  return defaultItems;
};

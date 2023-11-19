import { RouteObject } from "react-router-dom";

import { Layout } from "#components/Layout";
import { RoutePath } from "#constants/routePath";
import { Builder } from "#pages/Builder";
import { ErrorPage } from "#pages/ErrorPage";
import { Home } from "#pages/Home";

export const APP_ROUTES: RouteObject[] = [
  {
    path: RoutePath.Root,
    element: <Layout />,

    children: [
      { path: RoutePath.Root, element: <Home /> },

      { path: RoutePath.Builder, element: <Builder /> },

      { path: RoutePath.Other, element: <ErrorPage /> },
    ],
  },
];

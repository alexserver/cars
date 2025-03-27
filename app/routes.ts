import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  {
    file: "routes/_layout.tsx",
    children: [
      index("routes/home.tsx"),
      {
        path: "brands",
        file: "routes/brands.tsx",
      },
      {
        path: "cars",
        file: "routes/cars.tsx",
      },
    ],
  },
] satisfies RouteConfig;

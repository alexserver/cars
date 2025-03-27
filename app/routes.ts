import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("brands", "routes/brands.tsx"),
  route("cars", "routes/cars.tsx"),
] satisfies RouteConfig;

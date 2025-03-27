import carsImage from "../resources/images/cars.png";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomeRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        Cars cars cars
        <br />
        <span className="text-4xl text-blue-600">rooom rooom</span>
      </h1>
      <div className="w-full max-w-2xl aspect-video bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={carsImage}
          alt="Cars"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

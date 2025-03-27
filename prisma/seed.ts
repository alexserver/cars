import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("p4ssw0rd", saltRounds);

  const admin = await prisma.user.upsert({
    where: { email: "admin@email.com" },
    update: {},
    create: {
      email: "admin@email.com",
      name: "Admin",
      password: hashedPassword,
    },
  });

  console.log({ admin });

  // Create car brands
  const brands = await Promise.all([
    prisma.brand.upsert({
      where: { name: "Toyota" },
      update: {},
      create: {
        name: "Toyota",
        description:
          "Japanese automotive manufacturer known for reliability and innovation",
      },
    }),
    prisma.brand.upsert({
      where: { name: "BMW" },
      update: {},
      create: {
        name: "BMW",
        description: "German luxury vehicle manufacturer",
      },
    }),
    prisma.brand.upsert({
      where: { name: "Tesla" },
      update: {},
      create: {
        name: "Tesla",
        description: "American electric vehicle and clean energy company",
      },
    }),
    prisma.brand.upsert({
      where: { name: "Mercedes-Benz" },
      update: {},
      create: {
        name: "Mercedes-Benz",
        description: "German luxury and commercial vehicle automotive brand",
      },
    }),
  ]);

  console.log({ brands });

  // Create cars
  const cars = await Promise.all([
    prisma.car.upsert({
      where: {
        model_year_brandId: {
          model: "Camry",
          year: 2024,
          brandId: brands[0].id,
        },
      },
      update: {},
      create: {
        model: "Camry",
        year: 2024,
        price: 25999,
        mileage: 0,
        color: "Silver",
        transmission: "Automatic",
        fuelType: "Hybrid",
        bodyType: "Sedan",
        engineSize: 2.5,
        power: 208,
        brandId: brands[0].id,
      },
    }),
    prisma.car.upsert({
      where: {
        model_year_brandId: {
          model: "M3",
          year: 2024,
          brandId: brands[1].id,
        },
      },
      update: {},
      create: {
        model: "M3",
        year: 2024,
        price: 84999,
        mileage: 0,
        color: "Alpine White",
        transmission: "Automatic",
        fuelType: "Petrol",
        bodyType: "Sedan",
        engineSize: 3.0,
        power: 503,
        brandId: brands[1].id,
      },
    }),
    prisma.car.upsert({
      where: {
        model_year_brandId: {
          model: "Model 3",
          year: 2024,
          brandId: brands[2].id,
        },
      },
      update: {},
      create: {
        model: "Model 3",
        year: 2024,
        price: 41999,
        mileage: 0,
        color: "Red",
        transmission: "Automatic",
        fuelType: "Electric",
        bodyType: "Sedan",
        engineSize: 0,
        power: 283,
        brandId: brands[2].id,
      },
    }),
    prisma.car.upsert({
      where: {
        model_year_brandId: {
          model: "S-Class",
          year: 2024,
          brandId: brands[3].id,
        },
      },
      update: {},
      create: {
        model: "S-Class",
        year: 2024,
        price: 111100,
        mileage: 0,
        color: "Black",
        transmission: "Automatic",
        fuelType: "Petrol",
        bodyType: "Sedan",
        engineSize: 3.0,
        power: 429,
        brandId: brands[3].id,
      },
    }),
  ]);

  console.log({ cars });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

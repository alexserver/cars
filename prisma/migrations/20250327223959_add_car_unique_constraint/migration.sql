/*
  Warnings:

  - A unique constraint covering the columns `[model,year,brandId]` on the table `Car` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Car_model_year_brandId_key" ON "Car"("model", "year", "brandId");

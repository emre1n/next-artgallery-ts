import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getPrismaData = async () => {
  const data = await prisma.artworks.findMany();
  console.log(data);
  return data;
};

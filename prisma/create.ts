import { DUMMY_ARTWORKS } from '@/data/artwork-data';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function prismaGenerate() {
  const newArtwork = await prisma.artworks.createMany({
    data: DUMMY_ARTWORKS,
  });

  // const artworks = await prisma.artworks.findMany();
}

// To Create 1 row
// const newArtwork = await prisma.artworks.create({
//   data: DUMMY_ARTWORKS
// });

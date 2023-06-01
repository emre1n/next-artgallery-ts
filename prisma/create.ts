import { DUMMY_ARTWORKS } from '@/data/artwork-data';
import { TArtworkListItemModel } from '@/libs/models/artwork.model';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function prismaGenerate() {
  const newArtwork = await prisma.artworks.createMany({
    data: DUMMY_ARTWORKS,
  });

  // const artworks = await prisma.artworks.findMany();
}

export async function addNewArtwork(artworkForm: any) {
  const newArtwork = await prisma.artworks.create({
    data: artworkForm,
  });
}
// To Create 1 row
// const newArtwork = await prisma.artworks.create({
//   data: DUMMY_ARTWORKS
// });

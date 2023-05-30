import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function prismaGenerate() {
  const newArtwork = await prisma.artworks.create({
    data: {
      artwork_id: 'a2',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Vissersboten_op_het_strand_van_Les_Saintes-Maries-de-la-Mer_-_s0028V1962_-_Van_Gogh_Museum.jpg/400px-Vissersboten_op_het_strand_van_Les_Saintes-Maries-de-la-Mer_-_s0028V1962_-_Van_Gogh_Museum.jpg',
      title: 'Fishing Boats on the Beach at Saintes-Maries',
      artist: 'Vincent van Gogh',
      description:
        'Van Gogh has described with joy his visit to the Mediterranean shore near Arles at the fishing village of Sainte-Maries, where he painted and drew for several days. It was a new world for him, and he responded to it with his usual eagerness and excitement. June 1888. Van Gogh Museum, Amsterdam',
      isFeatured: true,
      onFrontpage: false,
      edition: 100,
      remaining_edition: 72,
      price: 200,
      currency: 'USD',
    },
  });

  const artworks = await prisma.artworks.findMany();
}

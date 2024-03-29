import prisma from '@/libs/prismadb';

export default async function getArtworks() {
  try {
    const data = await prisma.artworks.findMany();
    return data;
  } catch (error: any) {
    console.log('database failed');
    throw new Error(error);
  }
}

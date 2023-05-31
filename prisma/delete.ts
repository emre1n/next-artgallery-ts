import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteArtworks() {
  try {
    const result = await prisma.artworks.deleteMany();
    console.log(`${result.count} artworks deleted.`);
  } catch (error) {
    console.error('Error deleting artworks:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// To delete all but id:1, paste below object into deleteMany();
// { where: { NOT: { id: 1 } }, }

import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    artwork_id,
    image,
    title,
    artist,
    description,
    isFeatured,
    onFrontpage,
    edition,
    remaining_edition,
    price,
    currency,
  } = body;

  const artwork = await prisma.artworks.create({
    data: {
      artwork_id,
      image,
      title,
      artist,
      description,
      isFeatured,
      onFrontpage,
      edition,
      remaining_edition,
      price,
      currency,
    },
  });
  return NextResponse.json(artwork);
}

import ArtworkList from '@/components/home/ArtworkList';

const DUMMY_ARTWORKS = [
  {
    artwork_id: 'a1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/400px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg',
    title: 'Bedroom in Arles',
    artist: 'Vincent van Gogh',
    description:
      'Bedroom in Arles (first version, 1888). Oil on canvas, 72 × 90 cm (28.3 × 35.4 in). Van Gogh Museum, Amsterdam',
  },
  {
    artwork_id: 'a2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Vissersboten_op_het_strand_van_Les_Saintes-Maries-de-la-Mer_-_s0028V1962_-_Van_Gogh_Museum.jpg/400px-Vissersboten_op_het_strand_van_Les_Saintes-Maries-de-la-Mer_-_s0028V1962_-_Van_Gogh_Museum.jpg',
    title: 'Fishing Boats on the Beach at Saintes-Maries',
    artist: 'Vincent van Gogh',
    description:
      'Van Gogh has described with joy his visit to the Mediterranean shore near Arles at the fishing village of Sainte-Maries, where he painted and drew for several days. It was a new world for him, and he responded to it with his usual eagerness and excitement. June 1888. Van Gogh Museum, Amsterdam',
  },
  {
    artwork_id: 'a3',
    image:
      'https://upload.wikimedia.org/wikipedia/en/f/fb/Matisse_Les_toits.jpg',
    title: 'Landscape at Collioure',
    artist: 'Henri Matisse',
    description:
      'Landscape at Collioure is an oil-on-canvas painting by French artist Henri Matisse from 1905. It is typical of his Fauvist style of the period. It is part of the collection of the Museum of Modern Art, in New York.',
  },
  {
    artwork_id: 'a4',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg/260px-Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg',
    title: 'Girl with a Mandolin (Fanny Tellier)',
    artist: 'Pablo Picasso',
    description:
      'Girl with a Mandolin is a 1910 painting within the Cubist movement by Pablo Picasso in Paris. The artwork was one of Picasso’s early Analytic Cubist creations. It currently forms part of the collection of The Museum of Modern Art in New York.',
  },
  {
    artwork_id: 'a5',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Chagall_IandTheVillage.jpg/440px-Chagall_IandTheVillage.jpg',
    title: 'I and the Village',
    artist: 'Marc Chagall',
    description:
      'I and the Village is an oil-on-canvas painting by the Belarusian-French artist Marc Chagall created in 1911. It is exhibited at the Museum of Modern Art, New York. The work is Cubist in construction and contains many soft, dreamlike images overlapping one another in a continuous space.',
  },
];

export default function Home() {
  return (
    <main>
      <ArtworkList artworks={DUMMY_ARTWORKS} />
    </main>
  );
}

import ArtworkList from '@/components/home/ArtworkList';

const DUMMY_ARTWORKS = [
  {
    id: 'a1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/400px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg',
    title: 'Bedroom in Arles',
    artist: 'Vincent van Gogh',
    description:
      'Bedroom in Arles (first version, 1888). Oil on canvas, 72 × 90 cm (28.3 × 35.4 in). Van Gogh Museum, Amsterdam',
  },
  {
    id: 'a2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Vissersboten_op_het_strand_van_Les_Saintes-Maries-de-la-Mer_-_s0028V1962_-_Van_Gogh_Museum.jpg/400px-Vissersboten_op_het_strand_van_Les_Saintes-Maries-de-la-Mer_-_s0028V1962_-_Van_Gogh_Museum.jpg',
    title: 'Fishing Boats on the Beach at Saintes-Maries',
    artist: 'Vincent van Gogh',
    description:
      'Van Gogh has described with joy his visit to the Mediterranean shore near Arles at the fishing village of Sainte-Maries, where he painted and drew for several days. It was a new world for him, and he responded to it with his usual eagerness and excitement. June 1888. Van Gogh Museum, Amsterdam',
  },
];

export default function Home() {
  return (
    <main>
      <ArtworkList artworks={DUMMY_ARTWORKS} />
    </main>
  );
}

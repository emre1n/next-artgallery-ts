export default function ArtworkDetailsPage({
  params,
}: {
  params: { artworkId: string };
}) {
  console.log('params', params);
  return (
    <>
      <h1>Detail Page</h1>
      <p>id: {params.artworkId}</p>
    </>
  );
}

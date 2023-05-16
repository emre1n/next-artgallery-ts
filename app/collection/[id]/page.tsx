export default function ArtworkDetails({ params }: { params: { id: string } }) {
  console.log('params', params);
  return (
    <>
      <h1>Detail Page</h1>
      <p>id: {params.id}</p>
    </>
  );
}

export default async function AnimalsPageWithId({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Animal Details</h1>
      <p>Details for animal with ID: {id}</p>
    </div>
  );
}

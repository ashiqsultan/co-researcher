import { getResearchByResearchId } from "../../helpers/research/getById.js";

const SingleResearch = async ({ params }) => {
  const { id } = params;
  console.log({ id });
  const result = await getResearchByResearchId(id);

  return (
    <div>
      <h1>Research Details</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default SingleResearch;

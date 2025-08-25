export const revalidate = 60 * 2;
import { getCompletedResearch } from "../helpers/research/getAll.js";

const AllResearch = async () => {
  const result = await getCompletedResearch();

  return (
    <div>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default AllResearch;

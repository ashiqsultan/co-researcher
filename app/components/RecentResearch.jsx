import ResearchItem from "./ResearchItems";

// Dummy data for previous research
const tempPreviousResearch = [
  {
    id: 1,
    title: "Novel Drug Delivery Systems for Cancer Treatment",
    description:
      "Investigation of nanoparticle-based delivery mechanisms for targeted chemotherapy",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "CRISPR-Cas9 Applications in Genetic Disorders",
    description:
      "Analysis of gene editing techniques for treating inherited diseases",
    date: "2024-01-10",
  },
  {
    id: 3,
    title: "Antibiotic Resistance Mechanisms in Bacteria",
    description:
      "Study of resistance patterns and potential solutions in clinical isolates",
    date: "2024-01-05",
  },
  {
    id: 4,
    title: "Vaccine Development for Emerging Viruses",
    description:
      "Research on mRNA vaccine platforms for rapid response to viral outbreaks",
    date: "2023-12-28",
  },
  {
    id: 5,
    title: "Biomarker Discovery for Early Disease Detection",
    description:
      "Identification of novel biomarkers for early-stage cancer diagnosis",
    date: "2023-12-20",
  },
];

export default function RecentResearch() {
  const previousResearch = tempPreviousResearch;
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">
        Recent Research Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {previousResearch.map((research) => (
          <ResearchItem key={research.id} research={research} />
        ))}
      </div>
    </div>
  );
}

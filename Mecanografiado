// Mock vectors
// Vectors from a machine-learning model are typically ~100 to 1536 dimensions
// wide (or wider still).
const sampleVectors: Array<VectorizeVector> = [
  {
    id: "1",
    values: [32.4, 74.1, 3.2, ...],
    namespace: "text",
  },
  {
    id: "2",
    values: [15.1, 19.2, 15.8, ...],
    namespace: "images",
  },
  {
    id: "3",
    values: [0.16, 1.2, 3.8, ...],
    namespace: "pdfs",
  },
];

// Insert your vectors, returning a count of the vectors inserted and their vector IDs.
let inserted = await env.TUTORIAL_INDEX.insert(sampleVectors);

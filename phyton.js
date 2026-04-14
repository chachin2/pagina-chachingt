// Mock vectors
// Vectors from a machine-learning model are typically ~100 to 1536 dimensions
// wide (or wider still).
const sampleVectors: Array<VectorizeVector> = [
  {
    id: "1",
    values: [32.4, 74.1, 3.2, ...],
    metadata: { url: "/products/sku/13913913" },
  },
  {
    id: "2",
    values: [15.1, 19.2, 15.8, ...],
    metadata: { url: "/products/sku/10148191" },
  },
  {
    id: "3",
    values: [0.16, 1.2, 3.8, ...],
    metadata: { url: "/products/sku/97913813" },
  },
];

// Insert your vectors, returning a count of the vectors inserted and their vector IDs.
let inserted = await env.TUTORIAL_INDEX.insert(sampleVectors);

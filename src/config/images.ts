const imagePath = (filename: string) => `/images/${encodeURIComponent(filename)}`;

export const weddingImages = {
  bride: imagePath("zaryab.jpg"),
  groom: imagePath("abu bakar.jpg"),
  gallery: [
    imagePath("moments (1).jpg"),
    imagePath("moments (2).jpg"),
    imagePath("moments (3).jpg"),
    imagePath("moments (4).jpg"),
    imagePath("moments (5).jpg"),
    imagePath("moments (6).jpg"),
  ],
} as const;

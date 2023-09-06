export interface Items {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

export type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

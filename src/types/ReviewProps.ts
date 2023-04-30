export interface ReviewProps {
  params: {
    title: string;
    artist: string;
    finalThoughts: string;
    bottomLine: string;
    image: string;
    rating: {
      lyrics: number;
      production: number;
      replayValue: number;
      variety: number;
      createdAt: string;
    };
    draft: boolean;
    featured: boolean;
    type: string;
  };
}

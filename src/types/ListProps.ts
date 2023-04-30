export interface ListProps {
  params: {
    title: string;
    image: string;
    summary: string;
    createdAt: string;
    draft: boolean;
    featured: boolean;
    type: string;
  };
}

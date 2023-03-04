import { NextSeo } from "next-seo";

interface MetaDataProps {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: string;
}

const MetaData = ({
  title,
  description,
  url,
  image,
  type = "article",
}: MetaDataProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: type,
        url: url,
        title: title,
        description: description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: `${title} article card`,
          },
        ],
      }}
    />
  );
};

export default MetaData;

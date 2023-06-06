import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | Hip Hop Season",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.hiphopseason.com/",
    siteName: "Hip Hop Season",
    images: [
      {
        url: "/images/default-card-img.jpg",
        width: 800,
        height: 600,
        alt: "Hip Hop Season",
      },
    ],
  },
  twitter: {
    handle: "@ItsHipHopSeason",
    site: "@ItsHipHopSeason",
    cardType: "summary_large_image",
  },
};

export default SEO;

import styles from "./PreviewCard.module.scss";
import Image from "next/image";
import LinkWithIcon from "../LinkWithIcon";
import { Calendar } from "react-feather";
import useFormatDate from "@/src/hooks/useFormatDate";
import useTruncateText from "@/src/hooks/useTruncateText";
import Link from "next/link";

export type PreviewCardType = {
  title: string;
  id: string;
  createdAt: string;
  summary: string;
  featured: boolean;
  draft: boolean;
  image: string;
  artist?: string;
  slug: string;
  finalThoughts?: string;
};

interface PreviewCardProps {
  post: PreviewCardType;
  orientation: "vertical" | "horizontal";
}

const PreviewCard = ({ orientation, post }: PreviewCardProps) => {
  const date = useFormatDate(post.createdAt);
  const snippet = useTruncateText(post.finalThoughts || post.summary);
  return (
    <article className={`${styles["card"]} ${styles[`card--${orientation}`]}`}>
      <div className={styles["card__image"]}>
        <Image
          src={`/images/${post.image}`}
          alt={post.title}
          width={400}
          height={275}
        />
      </div>
      <div className={styles["card__details"]}>
        <Link href={post.slug}>
          <h3 className="mb-0">{post.title}</h3>
        </Link>
        {post.artist && (
          <p className={styles["card__subtitle"]}>{post.artist}</p>
        )}
        <p className="date">
          <Calendar />
          {date}
        </p>
        <p>{snippet}</p>
        <LinkWithIcon href={post.slug}>Read More</LinkWithIcon>
      </div>
    </article>
  );
};

export default PreviewCard;

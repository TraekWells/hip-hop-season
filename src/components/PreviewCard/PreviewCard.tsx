import styles from "./PreviewCard.module.scss";
import Image from "next/image";
import LinkWithIcon from "../LinkWithIcon";
import { Calendar } from "react-feather";
import useFormatDate from "@/src/hooks/useFormatDate";

type PreviewCardType = {
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

const PostCard = ({ orientation, post }: PreviewCardProps) => {
  const date = useFormatDate(post.createdAt);
  return (
    <article className={`${styles["card"]} ${styles[`card--${orientation}`]}`}>
      <div className={styles["card__image"]}>
        <Image
          src={`/images/${post.image}`}
          alt={post.title}
          width={400}
          height={250}
        />
      </div>
      <div className={styles["card__details"]}>
        <h3 className="mb-0">{post.title}</h3>
        {post.artist && (
          <p className={styles["card__subtitle"]}>{post.artist}</p>
        )}
        <p className="date">
          <Calendar />
          {date}
        </p>
        <p>{post.summary || post.finalThoughts}</p>
        <LinkWithIcon href={post.slug}>Read More</LinkWithIcon>
      </div>
    </article>
  );
};

export default PostCard;

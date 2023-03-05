import styles from "./VideoEmbed.module.scss";

interface VideoEmbedProps {
  src: string;
}

const VideoEmbed = ({ src }: VideoEmbedProps) => {
  return (
    <div className={styles["video-container"]}>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;

import React from "react";
import styles from "./AudioEmbed.module.scss";
interface AudioEmbedProps {
  src: string;
}

const AudioEmbed = ({ src }: AudioEmbedProps) => {
  return (
    <iframe
      className={styles["audio-container"]}
      src={src}
      width="100%"
      height="352"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      frameBorder={0}
      loading="lazy"
    ></iframe>
  );
};

export default AudioEmbed;

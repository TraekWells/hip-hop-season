import React from "react";

interface AudioEmbedProps {
  src: string;
}

const AudioEmbed = ({ src }: AudioEmbedProps) => {
  return (
    <iframe
      src={src}
      width="100%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      frameBorder={0}
      loading="lazy"
    ></iframe>
  );
};

export default AudioEmbed;

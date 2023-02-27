interface QuoteProps {
  song: string;
  children: React.ReactNode;
}

const Quote = ({ children, song }: QuoteProps) => {
  return (
    <div className="blockquote">
      {children}
      <cite>– {song}</cite>
    </div>
  );
};

export default Quote;

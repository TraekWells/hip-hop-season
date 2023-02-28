const AboutMeSnippet = () => {
  return (
    <div className="about-the-author">
      <div className="about-the-author__image">
        <img src="/images/about-the-author-image.jpg" />
      </div>
      <div className="about-the-author__bio">
        <h4>About the author</h4>
        <p>
          I'm not music expert but I know what good hip hop sounds like. I'm
          just a dude who loves music and feels that non-mainstream hip hop is
          under-represented and under-appreciated. All thoughts and opinions are
          my own but I'd love to discuss.
        </p>
        <a
          className="about-the-author__link"
          href="https://twitter.com/ItsHipHopSeason"
          target="_blank"
        >
          twitter icon
        </a>
        <a
          className="about-the-author__link"
          href="https://www.instagram.com/itshiphopseason/"
          target="_blank"
        >
          ig icon
        </a>
      </div>
    </div>
  );
};

export default AboutMeSnippet;

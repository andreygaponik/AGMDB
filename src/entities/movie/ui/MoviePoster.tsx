interface MoviePosterProps {
  src: string;
  alt: string;
}

export const MoviePoster = (props: MoviePosterProps) => {
  const { src, alt } = props;

  return <img src={src} alt={alt} />;
};

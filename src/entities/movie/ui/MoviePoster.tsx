interface MoviePosterProps {
  src: string;
  alt: string;
  className: string;
}

export const MoviePoster = (props: MoviePosterProps) => {
  const { src, alt, className } = props;

  return <img src={src} alt={alt} className={className} />;
};

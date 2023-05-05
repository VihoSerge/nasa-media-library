import ContentLoader from "react-content-loader";

export default function DetailsLoader() {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={800}
      viewBox="0 0 100% 800"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="13" y="26" rx="5" ry="5" width="69" height="32" />
      <rect x="12" y="72" rx="7" ry="7" width="100%" height="350" />
      <rect x="80%" y="450" rx="5" ry="5" width="20%" height="200" />
      <rect x="12" y="450" rx="5" ry="5" width="50%" height="16" />
      <rect x="12" y="490" rx="5" ry="5" width="45%" height="16" />
      <rect x="12" y="500" rx="5" ry="5" width="45%" height="16" />
      <rect x="12" y="540" rx="5" ry="5" width="45%" height="16" />
    </ContentLoader>
  );
}

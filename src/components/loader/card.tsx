import ContentLoader from "react-content-loader";

export default function CardLoader() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={381}
      viewBox="0 0 300 381"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="19" y="44" rx="8" ry="8" width="100%" height="232" />
      <rect x="21" y="288" rx="7" ry="7" width="301" height="20" />
      <rect x="20" y="325" rx="7" ry="7" width="304" height="27" />
    </ContentLoader>
  );
}

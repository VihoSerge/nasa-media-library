import { MediaDetails } from "@/containers/media/details";
import { useParams } from "react-router-dom";

export default function ShowPage() {
  const { nasaId } = useParams();
  return <MediaDetails id={nasaId} />;
}

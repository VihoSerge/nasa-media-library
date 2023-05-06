import BackButton from "@/components/back-button";
import { MediaDetails } from "@/containers/media/details";
import { useParams } from "react-router-dom";

export default function ShowPage() {
  const { nasaId } = useParams();
  return (
    <div className="mt-5 space-y-5">
      <BackButton />
      <MediaDetails id={nasaId} />
    </div>
  );
}

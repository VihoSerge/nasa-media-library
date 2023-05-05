import { useNavigate } from "react-router-dom";
import Button from "./ui/button/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleBack} className="bg-white shadow-sm border border-gray-300 gap-2">
      <ArrowLeftIcon className="w-4 h-4" />
      <span className="hidden md:inline">Back</span>
    </Button>
  );
}

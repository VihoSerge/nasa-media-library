import { buildParams, getParams } from "@/utils/url";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/button/button";
import Input from "../ui/input/input";
import YearPicker from "../year-picker";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    if (urlParams.get("q")) {
      setSearchText(urlParams.get("q"));
    }
  }, [location]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    if (!searchText.length) {
      return;
    }

    const params = getParams(location.search);

    const urlParams = buildParams({
      ...params,
      q: searchText
      // year_start: startDate.getFullYear().toString(),
      // year_end: endDate.getFullYear().toString()
    });

    navigate(`/search/${urlParams}`);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-200 dark:bg-[#23232c] w-full lg:w-1/2 rounded-md  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
        <Input
          className="flex-1"
          inputClassName="!dark:bg-[#17181c] dark:border-0"
          name="search"
          placeholder="Enter your search"
          onChange={handleChange}
          value={searchText}
        />
        <div>
          <YearPicker
            data-key="yearStart"
            maxDate={endDate}
            selected={startDate}
            placeholderText="Filter by start year"
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <YearPicker
            data-key="yearEnd"
            minDate={startDate}
            selected={endDate}
            placeholderText="Filter by end year"
            onChange={handleEndDateChange}
          />
        </div>
      </div>

      <Button className="bg-primary text-white" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

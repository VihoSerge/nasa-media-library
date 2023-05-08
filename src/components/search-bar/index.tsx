import { buildUrlParams, filterParams, getUrlParams, URL_KEYS_FILTER } from "@/utils/url";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/button/button";
import Input from "../ui/input/input";
import YearPicker from "../year-picker";
import { SearchAPIParams } from "@/types/nasa";

interface SearchValues {
  text: string;
  yearStart: Date;
  yearEnd: Date;
}

const defaultSearchValues: SearchValues = {
  text: "",
  yearStart: null,
  yearEnd: null
};

export default function SearchBar() {
  const [searchValues, setSearchValues] = useState(defaultSearchValues);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const filterdParams = filterParams<SearchAPIParams>(getUrlParams(location.search), URL_KEYS_FILTER);

    setSearchValues((prev) => ({
      ...prev,
      text: filterdParams.q,
      ...(filterdParams.year_start && { yearStart: new Date(filterdParams.year_start) }),
      ...(filterdParams.year_end && { yearEnd: new Date(filterdParams.year_end) })
    }));
  }, [location]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues((prev) => ({ ...prev, text: event.target.value }));
  }, []);

  const handleSearch = () => {
    if (!searchValues.text.length) {
      return;
    }

    const urlParams = buildUrlParams({
      q: searchValues.text,
      ...(searchValues.yearStart && { year_start: searchValues.yearStart.getFullYear().toString() }),
      ...(searchValues.yearEnd && { year_end: searchValues.yearEnd.getFullYear().toString() })
    });

    navigate(`/search/${urlParams}`);
  };

  const handleStartDateChange = (date: Date) => {
    setSearchValues((prev) => ({ ...prev, yearStart: date }));
  };

  const handleEndDateChange = (date: Date) => {
    setSearchValues((prev) => ({ ...prev, yearEnd: date }));
  };

  return (
    <div
      data-testid="search-bar"
      className="flex flex-col w-full gap-4 p-4 bg-gray-200 rounded-md md:flex-row lg:w-1/2 "
    >
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3">
        <Input
          className="flex-1"
          inputClassName="bg-white"
          name="search"
          placeholder="Enter your search"
          onChange={handleChange}
          value={searchValues.text}
        />
        <div>
          <YearPicker
            data-key="yearStart"
            maxDate={searchValues.yearEnd}
            selected={searchValues.yearStart}
            placeholderText="Filter by start year"
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <YearPicker
            data-key="yearEnd"
            minDate={searchValues.yearStart}
            selected={searchValues.yearEnd}
            placeholderText="Filter by end year"
            onChange={handleEndDateChange}
          />
        </div>
      </div>

      <Button className="text-white bg-primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

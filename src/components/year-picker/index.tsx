import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export default function YearPicker(porps: ReactDatePickerProps) {
  return <ReactDatePicker {...porps} showYearPicker dateFormat="yyyy" />;
}

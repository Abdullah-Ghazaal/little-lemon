import { useEffect, useState } from "react";
import { fetchAPI } from "../mock API/API-mock";

function useGetAvailableTimes(date) {
  const [availableTimes, setAvailableTimes] = useState([]);

  const dateSelected = new Date(date);

  useEffect(() => setAvailableTimes(fetchAPI(dateSelected)), [date]);

  return availableTimes;
}

export default useGetAvailableTimes;

import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUpSorted, setUpSorted] = useState(false);

  const compareData = (date) => {
    const dd = date.slice(8, 10);
    const mm = date.slice(5, 7);
    const yy = date.slice(0, 4);

    const newEnteredDate = `${dd}-${mm}-${yy}`;
    date = newEnteredDate;
    return newEnteredDate;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios(url);
        response.data.forEach((el) => {
          const replaced = el.Date.replace(el.Date, compareData(el.Date));
          el.date = replaced;
        });
        setData(
          response.data.sort((a, b) => {
            return a.Name.localeCompare(b.Name);
          })
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  const sortChangeHandler = () => {
    if (isUpSorted) {
      data.sort((a, b) => {
        return a.Name.localeCompare(b.Name);
      });
      setUpSorted(false);
    } else {
      data.sort((a, b) => {
        return b.Name.localeCompare(a.Name);
      });
      setUpSorted(true);
    }
  };

  return { data, loading, error, isUpSorted, sortChangeHandler };
};

export default useFetch;

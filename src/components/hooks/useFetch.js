import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUpSorted, setUpSorted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios(url);
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

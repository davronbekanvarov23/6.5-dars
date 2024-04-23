import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPanding, setisPanding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setisPanding(true);

      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("something went wrong:(");
        }

        const data = await req.json();
        setData(data);
        setisPanding(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setisPanding(false);
      }
    };
    getData();
  }, [url]);
  return { data, error, isPanding };
}

export { useFetch };

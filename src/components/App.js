import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts"
  );

  if (error) return <div>{error}</div>;

  const dataLoading = () => (
    <div>
      <p>Dluznik / NIP / Kwota zadluzenia / Data powstania zobowiazania</p>
      {data.map((el) => (
        <div>
          <p>
            {el.Name} / {el.NIP} / {el.Value} / {el.Date}
          </p>
        </div>
      ))}
    </div>
  );

  return <div>{loading ? <div>loading..</div> : dataLoading()}</div>;
};

export default hot(module)(App);

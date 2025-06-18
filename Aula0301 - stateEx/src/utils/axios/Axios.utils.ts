import axios, { type CancelTokenSource } from "axios";
import React from "react";
import type { datakind, IData } from "../../types/types";

export const getUrl = (data: datakind): string => {
  const urls: Record<datakind, string> = {
    tablet: "https://ranekapi.origamid.dev/json/api/produto/tablet",
    phone: "https://ranekapi.origamid.dev/json/api/produto/smartphone",
    notebook: "https://ranekapi.origamid.dev/json/api/produto/notebook",
  };
  return urls[data];
};

export const useFetch = (
  dataUrl: string,
  options?: object
): IData | undefined => {
  const [data, setData] = React.useState<IData>();

  React.useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();
    axios
      .get(dataUrl, { cancelToken: source.token, ...options })
      .then(async (response) => setData(await response?.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          return;
        }
        console.error(err);
      });
    return () => {
      source.cancel();
    };
  }, [dataUrl, options]);

  return data;
};

import { type JSX } from "react";
import { useFetch, getUrl } from "../utils/axios/Axios.utils";
import type { datakind, IData } from "../types/types";

export function Product({ kind }: { kind: datakind }): JSX.Element {
  const data: IData | undefined = useFetch(getUrl(kind));
  console.log("Product", kind);
  console.log("data", data);
  return (
    <>
      {!data ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <h1>{data?.nome} </h1>
          <h4>
            {Number(data?.preco).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h4>

          <div>
            <img src={data?.fotos[0].src} />
          </div>
        </>
      )}
    </>
  );
}

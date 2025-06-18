import React, { type JSX } from "react";
import type { datakind } from "../types/types";
import { Product } from "./Product";
import styles from "./Products.module.css";

export function Products(): JSX.Element {
  const [kind, setKind] = React.useState<datakind | null>(null);
  const handleClick = (kind: datakind) => {
    setKind((state) => (state !== kind ? kind : null));
  };

  return (
    <>
      <button onClick={() => handleClick("tablet")} className={styles.Btn}>
        tablet
      </button>
      <button onClick={() => handleClick("phone")} className={styles.Btn}>
        phone
      </button>
      <button onClick={() => handleClick("notebook")} className={styles.Btn}>
        notebook
      </button>

      {kind && <Product kind={kind} />}
    </>
  );
}

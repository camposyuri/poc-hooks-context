import React from "react";

import { usePageContext } from "./Store";

export default function HomePage() {
  const {
    initialValue: pageInitialValue,
    values: pageValues,
    set: setPageContext
  } = usePageContext();

  const onChangeTextField = (e) => {
    setPageContext({ values: { [e.target.name]: e.target.value } });
  };

  const handleClick = () => {
    setPageContext({ values: { car: pageValues.car + 1 } });
  };

  return (
    <>
      <h1>{pageValues.name}</h1>
      <p>Total: {pageValues.car}</p>
      <button onClick={handleClick}>Adicionar</button>
      <br />
      <br />
      <input
        type="text"
        name="name"
        id="name"
        value={pageValues.name}
        onChange={onChangeTextField}
      />
    </>
  );
}

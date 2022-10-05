import React, { useState } from "react";

function WrapperComponent(): JSX.Element {
  const [showButton, setShowButton] = useState(false);
  return (
    <>
      <button type="submit" onClick={() => setShowButton(!showButton)}>
        Click Me!
      </button>
      {showButton && <h1 data-testid="hidden_text">Showing Text</h1>};
    </>
  );
}

export default WrapperComponent;

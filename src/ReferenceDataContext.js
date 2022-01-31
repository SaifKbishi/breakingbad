import React, { createContext,useContext, useState } from "react";

const ReferenceDataContext = createContext(
  // { breakingBadData, setBreakingBadData }
  );

const ReferenceDataContextProvider = ({ children }) => {

  const [breakingBadData, setBreakingBadData] = useState(null);

  return (
    <ReferenceDataContext.Provider value={{ breakingBadData, setBreakingBadData }}>
      {children}
    </ReferenceDataContext.Provider>
  );
};

export { ReferenceDataContext, ReferenceDataContextProvider };



import React from "react";

const QuoteContext = React.createContext({
  allItems: [],
  item: [],
  clickHandler: () => {},
  nextHandler: () => {},
});

export default QuoteContext;

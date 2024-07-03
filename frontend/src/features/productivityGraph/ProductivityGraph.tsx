import React from "react";
import GraphInstance from "./components/GraphInstance";
import useProductivityGraph from "./hooks/useProductivityGraph";
import ProductivityGraphSelect from "./components/ProductivityGraphSelect";

const ProductivityGraph: React.FC = () => {
  const {
    productivityBarDatum,
    isProductivityQueryLoading,
    productivityGraphFilterVal,
    handleChange,
    isProductivityBarDatumEmpty,
  } = useProductivityGraph();
  return (
    <GraphInstance
      barDatum={productivityBarDatum}
      isLoading={isProductivityQueryLoading}
      graphLabel="PRODUCTIVITY"
      isEmpty={isProductivityBarDatumEmpty}
    >
      <ProductivityGraphSelect
        value={productivityGraphFilterVal}
        onChange={handleChange}
      />
    </GraphInstance>
  );
};

export default ProductivityGraph;

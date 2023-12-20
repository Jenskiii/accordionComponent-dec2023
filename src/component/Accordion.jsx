import { useState } from "react";
import { Option } from "./Option.JSX";
import { OPTIONS } from "../utils/options";

export function Accordion() {
  const [selected, setSelected] = useState(null);

  function toggleAccordion(index) {
    if (index === selected) {
      return setSelected(null);
    }

    setSelected(index);
  }

  return (
    <>
      <div className="accordion">
        {OPTIONS.map((option, index) => {
          return (
            <div
              key={option.id}
              className={`option ${index === selected ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <Option {...option}>
                <button className="caret">
                  {index === selected ? "-" : "+"}
                </button>
              </Option>
            </div>
          );
        })}
      </div>
    </>
  );
}

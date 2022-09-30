import React, { useState } from 'react';

const CollapseAP = ({ propo }) => {
  const ChevronDown = <i className="fa-solid fa-chevron-down"></i>;
  const ChevronUp = <i className="fa-solid fa-chevron-up"> </i>;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="CollapseAP">
      <div className="titleCollapse">
        <button onClick={() => setIsOpen(!isOpen)}>
          {propo.title}
          <span>{isOpen ? ChevronUp : ChevronDown}</span>
        </button>
      </div>
      {isOpen && (
        <div className="textCollapse">
          <p className="textAPropo">{propo.text}</p>
        </div>
      )}
    </div>
  );
};

export default CollapseAP;

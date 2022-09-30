import React, { useState, useRef } from 'react';

const CollapseAP = ({ propo }) => {
  const ChevronDown = <i className="fa-solid fa-chevron-down"></i>;
  const ChevronUp = <i className="fa-solid fa-chevron-up"> </i>;
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <div className="CollapseAP">
      <div className="titleCollapse">
        <button onClick={() => setIsOpen(!isOpen)}>
          {propo.title}
          <span>{isOpen ? ChevronUp : ChevronDown}</span>
        </button>
      </div>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? { height: parentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        <div className="textCollapse">{propo.text}</div>
      </div>
    </div>
  );
};

export default CollapseAP;

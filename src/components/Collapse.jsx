import React, { useState, useRef } from 'react';

const Collapse = ({ title, descrition, equipments }) => {
  const ChevronDown = <i className="fa-solid fa-chevron-down"></i>;
  const ChevronUp = <i className="fa-solid fa-chevron-up"> </i>;
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <div className="CollapseAP">
      <div className="titleCollapse">
        <button onClick={() => setIsOpen(!isOpen)}>
          {title}
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
        <div className="textCollapse equipements">
          {title === 'Description' && descrition}
          {title === 'Equipements' &&
            equipments?.map((equip, i) => (
              <p key={i} className='equip'>
                {equip}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collapse;

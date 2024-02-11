import { useState } from "react";
import { data } from "../../data";

const TreeNode = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <span>
        {service.name} ({service.price})
      </span>
      {service.node === 1 && (
        <button onClick={handleToggle} className="node-button">
          {isOpen ? "-" : "+"}
        </button>
      )}
      {isOpen && service.node === 1 && (
        <ul>
          {data.services
            .filter((child) => child.head === service.id)
            .sort((a, b) => a.sorthead - b.sorthead)
            .map((child) => (
              <TreeNode key={child.id} service={child} />
            ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode
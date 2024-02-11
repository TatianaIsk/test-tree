import { useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import { data } from "../../data";

import arrowUp from "./../../assets/images/icon/arrows/up_arrow.png";
import arrowDown from "./../../assets/images/icon/arrows/down-arrow.png";

const TreeNode = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div>
        <span>
          {service.name} ({service.price})
        </span>
        {service.node === 1 && (
          <Image src={isOpen ? arrowUp : arrowDown} alt="" onClick={handleToggle} width={20} height={20} />
        )}
      </div>
      {service.node === 1 && (
        <AnimatePresence>
          {isOpen && (
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {data.services
                .filter((child) => child.head === service.id)
                .sort((a, b) => a.sorthead - b.sorthead)
                .map((child) => (
                  <TreeNode key={child.id} service={child} />
                ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  );
};

export default TreeNode;

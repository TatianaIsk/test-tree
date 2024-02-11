import TreeNode from "../src/components/TreeNode";
import { data } from "../src/data";

import { proximaNova } from "../src/assets/styles/fonts/fonts";

import clsx from "clsx";

import s from "./Tree.module.scss";

const Tree = () => (
  <div id="tree" className={clsx(proximaNova.className, s.container)}>
    <ul>
      {data.services
        .filter((service) => service.head === null)
        .sort((a, b) => a.sorthead - b.sorthead)
        .map((service) => (
          <TreeNode key={service.id} service={service} />
        ))}
    </ul>
  </div>
);

export default Tree;

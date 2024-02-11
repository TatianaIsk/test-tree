import TreeNode from "../src/components/TreeNode";
import { data } from "../src/data";

const Tree = () => (
  <div id="tree">
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

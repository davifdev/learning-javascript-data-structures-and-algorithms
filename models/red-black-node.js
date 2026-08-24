import { Colors } from "../utils";
import { Node } from "./binnary-search-tree";

export class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }
  isRed() {
    return this.color === Colors.RED;
  }
}

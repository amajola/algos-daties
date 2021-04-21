interface NodeInterface {
    value: number;
    left: NodeInterface | null
    right: NodeInterface | null;
    parent: NodeInterface | null;
}

export default NodeInterface;

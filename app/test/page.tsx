
import { Suspense } from "react";
import NodeEdge from "../components/node-edge";
import { storys, nodes, edges } from "../config/konan/konan";

export default function Page() {

  return (
    <>
      <Suspense fallback={<>Loading...</>} >
        <NodeEdge nodes={nodes} edges={edges} storys={storys} />
      </Suspense>
    </>
  );
}

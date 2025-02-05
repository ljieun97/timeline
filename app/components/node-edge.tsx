'use client'

import React, { useEffect, useRef, useState } from "react";
// import { DataSet, Network } from "vis-network/standalone";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { DataSet } from 'vis-data';
import { Network } from 'vis-network/standalone';


export default function NodeEdge({ storys, nodes, edges }: { storys: any[], nodes: any[], edges: any[] }) {
  const [network, setNetwork] = useState() as any
  const [currentIdx, setCurrentIdx] = useState(-1)
  const [isPopover, setIsPopover] = useState(false)
  const networkRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });

  const data = { nodes: new DataSet(nodes), edges: new DataSet(edges) };
  const options = {
    interaction: { hover: true },
    nodes: {
      shape: "dot",
      size: 30,
      font: {
        size: 14,
        color: "black",
      },
      borderWidth: 3,
    },
    edges: {
      width: 3,
      font: {
        size: 10,
        align: "middle"
      },
      // color: {
      //   opacity: 0.5
      // },
    },
    // physics: { enabled: false },
  };

  useEffect(() => {
    if (!networkRef.current) return
    setNetwork(new Network(networkRef.current, data, options))
  }, []);


  const handleNextButton = () => {
    if (!network) return
    let nextIdx = currentIdx + 1
    // if (!data.nodes.get(storys[nextIdx].node)) nextIdx = 0
    if (nextIdx == storys.length) nextIdx = 0
    const position = network.getPosition(storys[nextIdx].node)
    const canvasPosition = network.canvasToDOM(position)

    setPopoverPosition({
      top: canvasPosition.y,
      left: canvasPosition.x + 20
    })
    setIsPopover(true)
    setCurrentIdx(nextIdx)
  }

  return (
    <>
      <Button onPress={() => handleNextButton()}>버튼</Button>
      <div style={{ position: "relative" }}>
        <div className="h-screen" ref={networkRef}></div>
        <Popover isOpen={isPopover} key={currentIdx} placement="right">
          <PopoverTrigger >
            <div style={{
              position: "absolute",
              top: popoverPosition.top,
              left: popoverPosition.left,
            }} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="bg-black text-white">
              {currentIdx > -1 &&
                <div>
                  <div>{storys[currentIdx].title}</div>
                  <div>{storys[currentIdx].desc.map((e: string) => <div>{e}</div>)}</div>
                </div>
              }
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

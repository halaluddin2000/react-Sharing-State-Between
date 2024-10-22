import { useState } from "react";
import Panel from "./Panel";
import "../style.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h1 className="h2">Learn With Sumit</h1>
      <Panel
        title="about"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        facilis, magni quidem error earum eligendi eos praesentium explicabo
        aliquam quisquam! Quis alias, nisi earum quo odio velit vel commodi
        accusantium.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        facilis, magni quidem error earum eligendi eos praesentium explicabo
        aliquam quisquam! Quis alias, nisi earum quo odio velit vel commodi
        accusantium.
      </Panel>
    </div>
  );
}

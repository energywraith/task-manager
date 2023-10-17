//
// There is issue caused by React.ScrictMode, and the double render causes the react-dnd to throw "Unable to find draggable with id: [...]"
//
// Issue: https://github.com/atlassian/react-beautiful-dnd/issues/2350
// Solution: https://github.com/atlassian/react-beautiful-dnd/issues/2399#issuecomment-1175638194
//

import { useEffect, useState } from "react";
import { Droppable, DroppableProps } from "react-beautiful-dnd";

export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
};

import { Button } from "@/widgets/ui/button";
import { useState } from "react";

const Counter = () => {
  const [value, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      count is {value}
    </Button>
  );
};

export default Counter;

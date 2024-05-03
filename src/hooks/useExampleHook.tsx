import { useState } from "react";

export function useExampleHook() {
    const [count, setCount] = useState(0);

    return { count, setCount };
}

import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Flex } from "./Flex";

interface ExampleComponentProps {
    name: string;
    value?: number;
}

export function ExampleComponent({ name, value }: ExampleComponentProps) {
    const [count, setCount] = useState(0);

    return (
        <Flex align="center" direction="column" gap="1rem" padding="1rem" width="100vw" height="100vh" style={{ background: 'red'}}>
            <Typography variant="h1">{name}</Typography>
            <Typography variant="h2">{value ?? 'No value provided'}</Typography>
            <Button onClick={() => setCount((count) => count + 1)} variant="contained" >Click Me Daddy</Button>
            <Typography>{count}</Typography>
        </Flex>
    );
}

import { Button, Typography } from "@mui/material";
import { useExampleHook } from "../hooks/useExampleHook";
import { Flex } from "./Flex";

interface ExampleComponentProps {
    name: string;
    style?: React.CSSProperties;
    value?: number;
}

export function ExampleComponent({ name, style, value }: ExampleComponentProps) {
    const { count, setCount } = useExampleHook();

    return (
        <Flex align="center" direction="column" gap="1rem" padding="1rem" width="100vw" height="50vh" style={{ background: 'red', ...style }}>
            <Typography variant="h1">{name}</Typography>
            <Typography variant="h2">{value ?? 'No value provided'}</Typography>
            <Button onClick={() => setCount((count) => count + 1)} variant="contained" >Click Me Daddy</Button>
            <Typography>{count}</Typography>
        </Flex>
    );
}

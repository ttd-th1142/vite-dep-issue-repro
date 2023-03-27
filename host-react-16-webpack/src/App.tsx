import { React18Component } from 'feature-react-18';
import { useRef, useEffect } from 'react';

export function App() {
    const exampleAfeRef = useRef<HTMLDivElement | null>(null);
    const test = (value: string) => {
        console.log(`App received: ${value}`);
    };

    useEffect(() => {
        if (exampleAfeRef) {
            React18Component({"some-method": test}, exampleAfeRef.current as Element)
        }
    });

    return <div ref={exampleAfeRef} />;
}

import { useEffect, useState } from 'react'
import { React18ComponentProps } from './index';

export function React18 (props: React18ComponentProps) {
    const [clickCount, setClickCount] = useState(0);
    useEffect(() => {
        if (clickCount) {
            props['some-method'](`[from React18Component: ${clickCount}]`)
        }
    });

    return (
        <>
            <button onClick={() => setClickCount(clickCount + 1)}>Click Count: {clickCount}</button>
        </>
    )
}
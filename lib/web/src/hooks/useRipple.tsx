import { useState, useCallback } from 'react';

export type RippleProps = {
    x: number;
    y: number;
    size: number;
}

export const useRipple = () => {
    const [ripples, setRipples] = useState<RippleProps[]>([]);

    const createRipple = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        setRipples(prevRipples => [...prevRipples, { x, y, size }]);

        setTimeout(() => {
            setRipples(prevRipples => prevRipples.slice(1));
        }, 600);
    }, []);

    return { ripples, createRipple };
};

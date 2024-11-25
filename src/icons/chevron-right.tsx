import { SVGProps } from 'react';

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="currentColor"></path>
        </svg>
    );
};

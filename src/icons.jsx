import React from 'react';

// A stylized TRex / Dinosaur SVG
export const DinoIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M19 2H11v2H9v2H7v6h2v2h2v2h-2v2h-2v2H3v2h6v-2h2v-2h2v2h2v-2h-2v-4h2v-2h2v2h2v-2h2V2h-4zm-2 4h-2V4h2v2z" />
    </svg>
);

// A stylized Rhinoceros SVG
export const RhinoIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10h-2V8h-2V6h-4v2h-2v2h-2V8H8v2H6v2H4v6h2v2h2v-2h2v2h2v-2h6v2h2v-2h2v-2h2v-6zM18 14h-2v-2h2v2zm-8 4h-2v-2h2v2zm-4 0H4v-2h2v2zM6 12H4v-2h2v2z" />
    </svg>
);

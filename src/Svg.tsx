import type React from 'react';

export function Svg(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} />; }
export function Circle(props: React.SVGProps<SVGCircleElement>) { return <circle {...props} />; }
export function Path(props: React.SVGProps<SVGPathElement>) { return <path {...props} />; }
export function Rect(props: React.SVGProps<SVGRectElement>) { return <rect {...props} />; }

type Props = {
  className?: string;
};

/** Stylised lotus with a leaf — drawn as SVG so it scales cleanly. */
export default function Logo({ className = "h-24 w-auto" }: Props) {
  const petal = "M50 8 C62 28 62 52 50 74 C38 52 38 28 50 8 Z";
  return (
    <svg
      viewBox="0 0 100 80"
      className={className}
      role="img"
      aria-label="Samskara Dhara lotus logo"
    >
      <g fill="#f5f0e5" stroke="#b49452" strokeWidth="1.4" strokeLinejoin="round">
        <path d={petal} transform="rotate(-62 50 74) scale(0.9) translate(5.5 7)" />
        <path d={petal} transform="rotate(62 50 74) scale(0.9) translate(5.5 7)" />
        <path d={petal} transform="rotate(-38 50 74) scale(0.96) translate(2 3)" />
        <path d={petal} transform="rotate(38 50 74) scale(0.96) translate(2 3)" />
        <path d={petal} transform="rotate(-16 50 74)" />
        <path d={petal} transform="rotate(16 50 74)" />
      </g>
      <path
        d="M50 14 C60 30 60 48 50 66 C40 48 40 30 50 14 Z"
        fill="#244a38"
      />
      <path d="M50 22 L50 64" stroke="#f5f0e5" strokeWidth="1" />
      <path
        d="M50 38 L44 32 M50 46 L43 39 M50 38 L56 32 M50 46 L57 39"
        stroke="#f5f0e5"
        strokeWidth="0.8"
        fill="none"
      />
      <path d="M30 76 Q50 70 70 76" stroke="#b49452" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

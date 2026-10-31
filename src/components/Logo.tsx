export function Logo({ size = "header" }: { size?: "header" | "hero" }) {
  return (
    <span className={`logo logo-${size}`}>
      <span className="logo-script">Picture</span>
      <svg className="logo-camera" viewBox="0 0 64 52" aria-hidden="true">
        <path
          d="M9 17h6.5l3.1-5h13.8l3.1 5H55a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V22a5 5 0 0 1 5-5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M32 37.5c-4.2-2.8-7-5.6-7-8.2a3.6 3.6 0 0 1 6.4-2.2 3.6 3.6 0 0 1 6.6 2.2c0 2.6-2.8 5.4-6 8.2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="50.5" cy="21.5" r="1.35" fill="currentColor" />
      </svg>
      <span className="logo-script">Poets</span>
      <span className="logo-sub">Photography</span>
    </span>
  );
}

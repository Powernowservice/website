export function PowerCircuit({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={`power-circuit${compact ? " is-compact" : ""}`}
      viewBox="0 0 720 360"
      role="img"
      aria-label="Animated electrical path showing source, control, cooling, and load stages"
    >
      <defs>
        <filter id="circuit-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path className="circuit-base" d="M48 184 H190 L240 108 H388 L438 184 H672" />
      <path className="circuit-live" d="M48 184 H190 L240 108 H388 L438 184 H672" />
      <g className="circuit-source">
        <circle cx="49" cy="184" r="30" />
        <path d="M36 184h26M49 171v26" />
      </g>
      <g className="circuit-breaker">
        <rect x="170" y="157" width="40" height="54" rx="4" />
        <path d="m181 195 18-24" />
      </g>
      <g className="circuit-control">
        <rect x="238" y="74" width="154" height="68" rx="6" />
        <circle cx="266" cy="108" r="8" />
        <path d="M289 96h76M289 119h52" />
      </g>
      <g className="circuit-fan" transform="translate(438 184)">
        <circle r="35" />
        <path d="M0-7c7-28 28-19 21-4-5 11-14 13-21 11M7 0c28 7 19 28 4 21C0 16-2 7 0 0M0 7c-7 28-28 19-21 4 5-11 14-13 21-11M-7 0c-28-7-19-28-4-21C0-16 2-7 0 0" />
      </g>
      <g className="circuit-load">
        <rect x="550" y="134" width="122" height="100" rx="6" />
        <path d="M573 161h74M573 184h74M573 207h74" />
      </g>
      <g className="circuit-labels">
        <text x="20" y="245">SOURCE</text>
        <text x="156" y="245">PROTECT</text>
        <text x="258" y="56">CONTROL</text>
        <text x="405" y="245">COOL</text>
        <text x="571" y="262">LOAD</text>
      </g>
    </svg>
  );
}

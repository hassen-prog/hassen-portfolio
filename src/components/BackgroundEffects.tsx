
// export default function BackgroundEffects() {
//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07060B]"
//     >
//       {/* Subtle purple ambient light */}
//       <div className="absolute -top-40 left-[10%] h-[500px] w-[700px] rounded-full bg-purple-900/10 blur-[150px]" />

//       {/* Futuristic triangular geometry */}
//       <svg
//         className="absolute inset-0 h-full w-full"
//         viewBox="0 0 1440 1000"
//         preserveAspectRatio="xMidYMid slice"
//         fill="none"
//       >
//         <defs>
//           <linearGradient id="triangle-line" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.03" />
//             <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
//             <stop offset="100%" stopColor="#C084FC" stopOpacity="0.05" />
//           </linearGradient>

//           <filter id="purple-glow" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur stdDeviation="3" />
//           </filter>
//         </defs>

//         {/* Soft glow beneath selected edges */}
//         <g
//           stroke="#9333EA"
//           strokeWidth="5"
//           strokeOpacity="0.12"
//           filter="url(#purple-glow)"
//         >
//           <path d="M -100 720 L 430 560 L 780 650 L 1320 240 L 1510 620" />
//           <path d="M 430 560 L 620 790 L 1050 450 L 1320 240" />
//           <path d="M 780 650 L 1050 450 L 1430 760" />
//         </g>

//         {/* Crisp, fine triangular outlines */}
//         <g
//           stroke="url(#triangle-line)"
//           strokeWidth="1"
//           strokeLinejoin="round"
//         >
//           <path d="M -100 720 L 430 560 L 620 790 Z" />
//           <path d="M 430 560 L 780 650 L 620 790 Z" />
//           <path d="M 430 560 L 1050 450 L 780 650 Z" />
//           <path d="M 780 650 L 1050 450 L 1320 240 Z" />
//           <path d="M 1050 450 L 1320 240 L 1430 570 Z" />
//           <path d="M 1050 450 L 1430 570 L 1430 760 Z" />
//           <path d="M 780 650 L 1050 450 L 1430 760 Z" />
//           <path d="M 620 790 L 780 650 L 1050 450 L 900 920 Z" />
//           <path d="M -80 420 L 430 560 L 780 650" />
//           <path d="M 900 920 L 1430 760 L 1510 620" />
//         </g>

//         {/* A few brighter violet edges */}
//         <g
//           stroke="#A855F7"
//           strokeWidth="1.2"
//           strokeOpacity="0.45"
//         >
//           <path d="M 780 650 L 1050 450 L 1320 240" />
//           <path d="M 430 560 L 780 650 L 620 790" />
//         </g>

//         {/* Tiny illuminated intersections */}
//         <g fill="#C084FC">
//           <circle cx="780" cy="650" r="2" opacity="0.45" />
//           <circle cx="1050" cy="450" r="2.5" opacity="0.65" />
//           <circle cx="1320" cy="240" r="2" opacity="0.5" />
//         </g>
//       </svg>

//       {/* Keep the geometry subtle behind text and cards */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#07060B]/10 via-transparent to-[#07060B]/40" />
//     </div>
//   );
// }

// export default function BackgroundEffects() {
//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07060B]"
//     >
//       {/* Ambient purple atmosphere */}
//       <div className="ambient-vapor vapor-one" />
//       <div className="ambient-vapor vapor-two" />
//       <div className="ambient-vapor vapor-three" />

//       <svg
//         className="triangle-canvas absolute inset-0 h-full w-full"
//         viewBox="0 0 1440 1000"
//         preserveAspectRatio="xMidYMid slice"
//         fill="none"
//       >
//         <defs>
//           <linearGradient id="neon-edge" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.04" />
//             <stop offset="45%" stopColor="#A855F7" stopOpacity="0.7" />
//             <stop offset="70%" stopColor="#D8B4FE" stopOpacity="0.9" />
//             <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.08" />
//           </linearGradient>

//           <radialGradient id="energy-core">
//             <stop offset="0%" stopColor="#F3E8FF" stopOpacity="0.95" />
//             <stop offset="35%" stopColor="#C084FC" stopOpacity="0.45" />
//             <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
//           </radialGradient>

//           <filter
//             id="neon-blur"
//             x="-60%"
//             y="-60%"
//             width="220%"
//             height="220%"
//           >
//             <feGaussianBlur stdDeviation="5" />
//           </filter>

//           <filter
//             id="soft-halo"
//             x="-60%"
//             y="-60%"
//             width="220%"
//             height="220%"
//           >
//             <feGaussianBlur stdDeviation="15" />
//           </filter>
//         </defs>

//         {/* Wide, soft light behind the geometry */}
//         <g
//           stroke="#9333EA"
//           strokeWidth="12"
//           opacity="0.18"
//           filter="url(#soft-halo)"
//         >
//           <path d="M -100 720 L 430 560 L 780 650 L 1050 450 L 1320 240 L 1510 620" />
//           <path d="M 430 560 L 620 790 L 900 920 L 1050 450" />
//           <path d="M 780 650 L 1050 450 L 1430 760" />
//         </g>

//         {/* Bright, blurred neon strands */}
//         <g
//           stroke="#A855F7"
//           strokeWidth="5"
//           opacity="0.7"
//           filter="url(#neon-blur)"
//           className="neon-breathe"
//         >
//           <path d="M -100 720 L 430 560 L 780 650 L 1050 450 L 1320 240" />
//           <path d="M 430 560 L 620 790 L 900 920" />
//           <path d="M 780 650 L 1050 450 L 1430 760" />
//           <path d="M 1050 450 L 1320 240 L 1430 570" />
//         </g>

//         {/* Fine geometric network */}
//         <g
//           stroke="url(#neon-edge)"
//           strokeWidth="1"
//           strokeLinejoin="round"
//         >
//           <path d="M -100 720 L 430 560 L 620 790 Z" />
//           <path d="M 430 560 L 780 650 L 620 790 Z" />
//           <path d="M 430 560 L 1050 450 L 780 650 Z" />
//           <path d="M 780 650 L 1050 450 L 1320 240 Z" />
//           <path d="M 1050 450 L 1320 240 L 1430 570 Z" />
//           <path d="M 1050 450 L 1430 570 L 1430 760 Z" />
//           <path d="M 780 650 L 1050 450 L 1430 760 Z" />
//           <path d="M 620 790 L 780 650 L 1050 450 L 900 920 Z" />
//           <path d="M -80 420 L 430 560 L 780 650" />
//           <path d="M 900 920 L 1430 760 L 1510 620" />
//         </g>

//         {/* Energy pulses travelling along the edges */}
//         <g
//           stroke="#E9D5FF"
//           strokeWidth="2"
//           strokeLinecap="round"
//           filter="url(#neon-blur)"
//         >
//           <path
//             className="energy-pulse pulse-one"
//             d="M -100 720 L 430 560 L 780 650 L 1050 450 L 1320 240"
//           />
//           <path
//             className="energy-pulse pulse-two"
//             d="M 430 560 L 620 790 L 900 920"
//           />
//           <path
//             className="energy-pulse pulse-three"
//             d="M 780 650 L 1050 450 L 1430 760"
//           />
//         </g>

//         {/* Sharper illuminated edges */}
//         <g
//           stroke="#C084FC"
//           strokeWidth="1.2"
//           strokeOpacity="0.55"
//         >
//           <path d="M 780 650 L 1050 450 L 1320 240" />
//           <path d="M 430 560 L 780 650 L 620 790" />
//         </g>

//         {/* Vapor halos around the energy intersections */}
//         <g className="energy-nodes">
//           <circle cx="780" cy="650" r="40" fill="url(#energy-core)" />
//           <circle cx="1050" cy="450" r="55" fill="url(#energy-core)" />
//           <circle cx="1320" cy="240" r="38" fill="url(#energy-core)" />
//           <circle cx="620" cy="790" r="26" fill="url(#energy-core)" />

//           <circle cx="780" cy="650" r="2" fill="#F3E8FF" />
//           <circle cx="1050" cy="450" r="3" fill="#FFFFFF" />
//           <circle cx="1320" cy="240" r="2" fill="#E9D5FF" />
//           <circle cx="620" cy="790" r="1.8" fill="#D8B4FE" />
//         </g>
//       </svg>

//       {/* Cinematic vignette */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#07060B]/10 via-transparent to-[#07060B]/45" />
//     </div>
//   );
// }

export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden bg-[#05040A] pointer-events-none"
    >
      {/* Deep atmospheric lighting */}
      <div className="prism-aura aura-left" />
      <div className="prism-aura aura-right" />
      <div className="prism-scan" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="prism-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.08" />
            <stop offset="45%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="55%" stopColor="#E9D5FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="prism-current">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#E9D5FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="prism-core">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>

          <filter id="prism-blur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" />
          </filter>

          <filter id="prism-soft-blur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>

        {/* Distant, delicate triangulated mesh */}
        <g
          stroke="#8B5CF6"
          strokeWidth="0.7"
          strokeOpacity="0.14"
        >
          <path d="M -100 180 L 180 330 L 400 160 L 610 350 L 850 170" />
          <path d="M -100 180 L 80 520 L 180 330 L 350 540 L 610 350" />
          <path d="M 180 330 L 350 540 L 400 160" />
          <path d="M 400 160 L 520 570 L 610 350 L 790 520 L 850 170" />
          <path d="M 610 350 L 520 570 L 350 540" />
          <path d="M 850 170 L 1050 310 L 1240 110 L 1510 300" />
          <path d="M 850 170 L 930 530 L 1050 310 L 1170 550 L 1510 300" />
          <path d="M 1050 310 L 930 530 L 790 520" />
          <path d="M 1240 110 L 1170 550 L 1510 300" />
          <path d="M 930 530 L 1110 760 L 1170 550 L 1430 800" />
          <path d="M 790 520 L 930 530 L 1110 760 L 760 890" />
          <path d="M 520 570 L 760 890 L 930 530" />
          <path d="M 1170 550 L 1110 760 L 1430 800" />
          <path d="M -100 700 L 350 540 L 520 570 L 760 890" />
        </g>

        {/* Large holographic prism on the right */}
        <g className="prism-structure">
          {/* Diffuse light behind the main structure */}
          <g stroke="#9333EA" strokeWidth="20" opacity="0.15" filter="url(#prism-soft-blur)">
            <path d="M 650 700 L 980 270 L 1280 490 Z" />
            <path d="M 980 270 L 1330 180 L 1280 490 Z" />
          </g>

          {/* Main glass-like triangular faces */}
          <g
            stroke="url(#prism-edge)"
            strokeWidth="1.15"
            strokeLinejoin="round"
          >
            <path d="M 650 700 L 980 270 L 1280 490 Z" />
            <path d="M 980 270 L 1330 180 L 1280 490 Z" />
            <path d="M 980 270 L 1110 760 L 1280 490 Z" />
            <path d="M 650 700 L 1110 760 L 1280 490 Z" />
            <path d="M 980 270 L 1110 760" />
            <path d="M 1330 180 L 1430 430 L 1280 490" />
          </g>

          {/* Selected edges emit a violet halo */}
          <g
            stroke="#A855F7"
            strokeWidth="4"
            strokeOpacity="0.75"
            filter="url(#prism-blur)"
            className="prism-glow"
          >
            <path d="M 650 700 L 980 270 L 1280 490" />
            <path d="M 980 270 L 1330 180 L 1280 490" />
          </g>

          {/* Crisp bright edges */}
          <g
            stroke="#D8B4FE"
            strokeWidth="1.1"
            strokeOpacity="0.55"
          >
            <path d="M 650 700 L 980 270" />
            <path d="M 980 270 L 1330 180" />
            <path d="M 980 270 L 1280 490" />
          </g>

          {/* Moving energy along the prism edges */}
          <g
            stroke="url(#prism-current)"
            strokeWidth="3"
            strokeLinecap="round"
            className="prism-current"
          >
            <path d="M 650 700 L 980 270 L 1280 490" />
            <path d="M 980 270 L 1330 180 L 1280 490" />
            <path d="M 650 700 L 1110 760 L 1280 490" />
          </g>
        </g>

        {/* Floating light at geometric intersections */}
        <g className="prism-points">
          <circle cx="980" cy="270" r="65" fill="url(#prism-core)" />
          <circle cx="1280" cy="490" r="58" fill="url(#prism-core)" />
          <circle cx="650" cy="700" r="42" fill="url(#prism-core)" />
          <circle cx="1110" cy="760" r="35" fill="url(#prism-core)" />

          <circle cx="980" cy="270" r="2.5" fill="#F3E8FF" />
          <circle cx="1280" cy="490" r="2" fill="#E9D5FF" />
          <circle cx="650" cy="700" r="1.8" fill="#C4B5FD" />
          <circle cx="1110" cy="760" r="2" fill="#C4B5FD" />
        </g>
      </svg>

      {/* Dark cinematic edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,4,10,0.3)_65%,rgba(5,4,10,0.65)_100%)]" />
    </div>
  );
}

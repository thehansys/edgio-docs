import * as React from 'react';

import cn from 'classnames';

export const IconSolidJS = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg className={cn('inline', className)} viewBox="0 0 166 155.3">
      <defs>
        <linearGradient
          id="solid_svg__a"
          gradientUnits="userSpaceOnUse"
          x1="27.5"
          y1="3"
          x2="152"
          y2="63.5">
          <stop offset="0.1" stopColor="#76b3e1" />
          <stop offset="0.3" stopColor="#dcf2fd" />
          <stop offset="1" stopColor="#76b3e1" />
        </linearGradient>
        <linearGradient
          id="solid_svg__b"
          gradientUnits="userSpaceOnUse"
          x1="95.8"
          y1="32.6"
          x2="74"
          y2="105.2">
          <stop offset="0" stopColor="#76b3e1" />
          <stop offset="0.5" stopColor="#4377bb" />
          <stop offset="1" stopColor="#1f3b77" />
        </linearGradient>
        <linearGradient
          id="solid_svg__c"
          gradientUnits="userSpaceOnUse"
          x1="18.4"
          y1="64.2"
          x2="144.3"
          y2="149.8">
          <stop offset="0" stopColor="#315aa9" />
          <stop offset="0.5" stopColor="#518ac8" />
          <stop offset="1" stopColor="#315aa9" />
        </linearGradient>
        <linearGradient
          id="solid_svg__d"
          gradientUnits="userSpaceOnUse"
          x1="75.2"
          y1="74.5"
          x2="24.4"
          y2="260.8">
          <stop offset="0" stopColor="#4377bb" />
          <stop offset="0.5" stopColor="#1a336b" />
          <stop offset="1" stopColor="#1a336b" />
        </linearGradient>
      </defs>
      <path
        d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
        fill="#76b3e1"
      />
      <path
        d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
        opacity="0.3"
        fill="url(#solid_svg__a)"
      />
      <path
        d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
        fill="#518ac8"
      />
      <path
        d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
        opacity="0.3"
        fill="url(#solid_svg__b)"
      />
      <path
        d="M134 80a45 45 0 00-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z"
        fill="url(#solid_svg__c)"
      />
      <path
        d="M114 115a45 45 0 00-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z"
        fill="url(#solid_svg__d)"
      />
    </svg>
  )
);

IconSolidJS.displayName = 'IconSolidJS';

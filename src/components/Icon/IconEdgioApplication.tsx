import * as React from 'react';

import cn from 'classnames';

export const IconEdgioApplications = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.81255 17.6891H11.8214C12.0845 17.689 12.345 17.7408 12.588 17.8415C12.8311 17.9421 13.0519 18.0896 13.2379 18.2757C13.4239 18.4617 13.5714 18.6825 13.6721 18.9255C13.7727 19.1686 13.8245 19.429 13.8245 19.6921V25.701C13.8245 25.964 13.7727 26.2245 13.6721 26.4675C13.5714 26.7106 13.4239 26.9314 13.2379 27.1174C13.0519 27.3034 12.831 27.4509 12.588 27.5516C12.345 27.6522 12.0845 27.704 11.8214 27.704H5.81255C5.5495 27.704 5.28902 27.6522 5.04599 27.5516C4.80296 27.4509 4.58211 27.3034 4.39611 27.1174C4.21011 26.9314 4.06261 26.7106 3.96196 26.4675C3.86132 26.2245 3.80953 25.964 3.80957 25.701V19.6921C3.80953 19.429 3.86127 19.1686 3.96191 18.9255C4.06256 18.6825 4.21011 18.4617 4.39611 18.2757C4.58212 18.0897 4.80296 17.9421 5.04599 17.8415C5.28903 17.7408 5.5495 17.689 5.81255 17.6891ZM20.8348 17.6891H26.8438C27.1068 17.689 27.3673 17.7408 27.6103 17.8415C27.8533 17.9421 28.0742 18.0897 28.2602 18.2757C28.4462 18.4617 28.5937 18.6825 28.6944 18.9255C28.795 19.1686 28.8468 19.429 28.8467 19.6921V25.701C28.8468 25.964 28.795 26.2245 28.6944 26.4675C28.5937 26.7106 28.4462 26.9314 28.2602 27.1174C28.0742 27.3034 27.8533 27.4509 27.6103 27.5516C27.3673 27.6522 27.1068 27.704 26.8438 27.704H20.8348C20.5718 27.704 20.3113 27.6522 20.0683 27.5516C19.8252 27.4509 19.6044 27.3034 19.4184 27.1174C19.2324 26.9314 19.0849 26.7106 18.9842 26.4675C18.8836 26.2245 18.8318 25.964 18.8319 25.701V19.6921C18.8318 19.429 18.8836 19.1686 18.9842 18.9255C19.0849 18.6825 19.2324 18.4617 19.4184 18.2757C19.6044 18.0897 19.8252 17.9421 20.0683 17.8415C20.3113 17.7408 20.5718 17.689 20.8348 17.6891ZM20.8348 2.66675H26.8438C27.1068 2.66671 27.3673 2.7185 27.6103 2.81915C27.8533 2.91979 28.0742 3.06733 28.2602 3.25334C28.4462 3.43934 28.5937 3.66017 28.6944 3.9032C28.795 4.14624 28.8468 4.40672 28.8467 4.66977V10.6787C28.8468 10.9417 28.795 11.2022 28.6944 11.4452C28.5937 11.6883 28.4462 11.9091 28.2602 12.0951C28.0742 12.2811 27.8533 12.4286 27.6103 12.5293C27.3673 12.6299 27.1068 12.6817 26.8438 12.6817H20.8348C20.5718 12.6817 20.3113 12.6299 20.0683 12.5293C19.8252 12.4286 19.6044 12.2811 19.4184 12.0951C19.2324 11.9091 19.0849 11.6883 18.9842 11.4452C18.8836 11.2022 18.8318 10.9417 18.8319 10.6787V4.66964C18.8318 4.4066 18.8836 4.14612 18.9842 3.90308C19.0849 3.66005 19.2324 3.43922 19.4184 3.25322C19.6044 3.06721 19.8252 2.91967 20.0683 2.81902C20.3113 2.71838 20.5718 2.66671 20.8348 2.66675ZM5.81255 2.66675H11.8214C12.0845 2.66671 12.345 2.7185 12.588 2.81915C12.831 2.91979 13.0519 3.06733 13.2379 3.25334C13.4239 3.43934 13.5714 3.66017 13.6721 3.9032C13.7727 4.14623 13.8245 4.40672 13.8245 4.66977V10.6787C13.8245 10.9417 13.7727 11.2022 13.6721 11.4452C13.5714 11.6883 13.4239 11.9091 13.2379 12.0951C13.0519 12.2811 12.831 12.4286 12.588 12.5293C12.345 12.6299 12.0845 12.6817 11.8214 12.6817H5.81255C5.5495 12.6817 5.28902 12.6299 5.04599 12.5293C4.80296 12.4286 4.58212 12.2811 4.39611 12.0951C4.21011 11.9091 4.06261 11.6883 3.96196 11.4452C3.86131 11.2022 3.80953 10.9417 3.80957 10.6787V4.66964C3.80953 4.40659 3.86127 4.14611 3.96191 3.90308C4.06256 3.66004 4.21011 3.43921 4.39611 3.25321C4.58212 3.0672 4.80296 2.91966 5.04599 2.81901C5.28903 2.71837 5.5495 2.66671 5.81255 2.66675Z"
        fill="#00A2E2"
      />
    </svg>
  )
);

IconEdgioApplications.displayName = 'IconEdgioApplications';

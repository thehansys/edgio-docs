import cn from 'classnames';
import * as React from 'react';

export const IconGear = React.memo<JSX.IntrinsicElements['svg']>(
  function IconGear({className}) {
    return (
      <svg
        className={cn('inline', className)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.82 22H10.18C9.71011 22 9.30355 21.673 9.20299 21.214L8.79599 19.33C8.25305 19.0921 7.73822 18.7946 7.26099 18.443L5.42399 19.028C4.976 19.1709 4.48898 18.9823 4.25399 18.575L2.42999 15.424C2.19758 15.0165 2.27765 14.5025 2.62299 14.185L4.04799 12.885C3.98319 12.2961 3.98319 11.7019 4.04799 11.113L2.62299 9.816C2.27714 9.49837 2.19704 8.98372 2.42999 8.576L4.24999 5.423C4.48498 5.0157 4.972 4.82714 5.41999 4.97L7.25699 5.555C7.50106 5.37416 7.75513 5.20722 8.01799 5.055C8.27033 4.91269 8.53003 4.78385 8.79599 4.669L9.20399 2.787C9.30406 2.32797 9.71018 2.00049 10.18 2H13.82C14.2898 2.00049 14.6959 2.32797 14.796 2.787L15.208 4.67C15.4888 4.79352 15.7622 4.93308 16.027 5.088C16.2739 5.23081 16.5126 5.38739 16.742 5.557L18.58 4.972C19.0277 4.82967 19.5141 5.01816 19.749 5.425L21.569 8.578C21.8014 8.98548 21.7213 9.49951 21.376 9.817L19.951 11.117C20.0158 11.7059 20.0158 12.3001 19.951 12.889L21.376 14.189C21.7213 14.5065 21.8014 15.0205 21.569 15.428L19.749 18.581C19.5141 18.9878 19.0277 19.1763 18.58 19.034L16.742 18.449C16.5094 18.6203 16.2677 18.7789 16.018 18.924C15.7558 19.0759 15.4854 19.2131 15.208 19.335L14.796 21.214C14.6955 21.6726 14.2895 21.9996 13.82 22ZM7.61999 16.229L8.43999 16.829C8.62485 16.9652 8.81751 17.0904 9.01699 17.204C9.2047 17.3127 9.39796 17.4115 9.59599 17.5L10.529 17.909L10.986 20H13.016L13.473 17.908L14.406 17.499C14.8133 17.3194 15.1999 17.0961 15.559 16.833L16.38 16.233L18.421 16.883L19.436 15.125L17.853 13.682L17.965 12.67C18.0142 12.2274 18.0142 11.7806 17.965 11.338L17.853 10.326L19.437 8.88L18.421 7.121L16.38 7.771L15.559 7.171C15.1998 6.90671 14.8132 6.68175 14.406 6.5L13.473 6.091L13.016 4H10.986L10.527 6.092L9.59599 6.5C9.3978 6.58704 9.20451 6.68486 9.01699 6.793C8.81873 6.90633 8.62709 7.03086 8.44299 7.166L7.62199 7.766L5.58199 7.116L4.56499 8.88L6.14799 10.321L6.036 11.334C5.9868 11.7766 5.9868 12.2234 6.036 12.666L6.14799 13.678L4.56499 15.121L5.57999 16.879L7.61999 16.229ZM11.996 16C9.78686 16 7.99599 14.2091 7.99599 12C7.99599 9.79086 9.78686 8 11.996 8C14.2051 8 15.996 9.79086 15.996 12C15.9932 14.208 14.204 15.9972 11.996 16ZM11.996 10C10.9034 10.0011 10.0139 10.8788 9.99823 11.9713C9.98257 13.0638 10.8466 13.9667 11.9387 13.9991C13.0308 14.0315 13.9468 13.1815 13.996 12.09V12.49V12C13.996 10.8954 13.1006 10 11.996 10Z"
          fill="#606060"
        />
      </svg>
    );
  }
);

export const IconGearDark = React.memo<JSX.IntrinsicElements['svg']>(
  function IconGear({className}) {
    return (
      <svg
        className={cn('inline', className)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.82 22H10.18C9.71011 22 9.30355 21.673 9.20299 21.214L8.79599 19.33C8.25305 19.0921 7.73822 18.7946 7.26099 18.443L5.42399 19.028C4.976 19.1709 4.48898 18.9823 4.25399 18.575L2.42999 15.424C2.19758 15.0165 2.27765 14.5025 2.62299 14.185L4.04799 12.885C3.98319 12.2961 3.98319 11.7019 4.04799 11.113L2.62299 9.816C2.27714 9.49837 2.19704 8.98372 2.42999 8.576L4.24999 5.423C4.48498 5.0157 4.972 4.82714 5.41999 4.97L7.25699 5.555C7.50106 5.37416 7.75513 5.20722 8.01799 5.055C8.27033 4.91269 8.53003 4.78385 8.79599 4.669L9.20399 2.787C9.30406 2.32797 9.71018 2.00049 10.18 2H13.82C14.2898 2.00049 14.6959 2.32797 14.796 2.787L15.208 4.67C15.4888 4.79352 15.7622 4.93308 16.027 5.088C16.2739 5.23081 16.5126 5.38739 16.742 5.557L18.58 4.972C19.0277 4.82967 19.5141 5.01816 19.749 5.425L21.569 8.578C21.8014 8.98548 21.7213 9.49951 21.376 9.817L19.951 11.117C20.0158 11.7059 20.0158 12.3001 19.951 12.889L21.376 14.189C21.7213 14.5065 21.8014 15.0205 21.569 15.428L19.749 18.581C19.5141 18.9878 19.0277 19.1763 18.58 19.034L16.742 18.449C16.5094 18.6203 16.2677 18.7789 16.018 18.924C15.7558 19.0759 15.4854 19.2131 15.208 19.335L14.796 21.214C14.6955 21.6726 14.2895 21.9996 13.82 22ZM7.61999 16.229L8.43999 16.829C8.62485 16.9652 8.81751 17.0904 9.01699 17.204C9.2047 17.3127 9.39796 17.4115 9.59599 17.5L10.529 17.909L10.986 20H13.016L13.473 17.908L14.406 17.499C14.8133 17.3194 15.1999 17.0961 15.559 16.833L16.38 16.233L18.421 16.883L19.436 15.125L17.853 13.682L17.965 12.67C18.0142 12.2274 18.0142 11.7806 17.965 11.338L17.853 10.326L19.437 8.88L18.421 7.121L16.38 7.771L15.559 7.171C15.1998 6.90671 14.8132 6.68175 14.406 6.5L13.473 6.091L13.016 4H10.986L10.527 6.092L9.59599 6.5C9.3978 6.58704 9.20451 6.68486 9.01699 6.793C8.81873 6.90633 8.62709 7.03086 8.44299 7.166L7.62199 7.766L5.58199 7.116L4.56499 8.88L6.14799 10.321L6.036 11.334C5.9868 11.7766 5.9868 12.2234 6.036 12.666L6.14799 13.678L4.56499 15.121L5.57999 16.879L7.61999 16.229ZM11.996 16C9.78686 16 7.99599 14.2091 7.99599 12C7.99599 9.79086 9.78686 8 11.996 8C14.2051 8 15.996 9.79086 15.996 12C15.9932 14.208 14.204 15.9972 11.996 16ZM11.996 10C10.9034 10.0011 10.0139 10.8788 9.99823 11.9713C9.98257 13.0638 10.8466 13.9667 11.9387 13.9991C13.0308 14.0315 13.9468 13.1815 13.996 12.09V12.49V12C13.996 10.8954 13.1006 10 11.996 10Z"
          fill="#ffffff"
        />
      </svg>
    );
  }
);

IconGear.displayName = 'IconGear';
IconGearDark.displayName = 'IconGearDark';
import * as React from 'react';

import cn from 'classnames';

export const IconControlSection = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#EEEEEE" />
      <rect width="32" height="32" rx="3" fill="#EEEEEE" />
      <path
        d="M25.66 5.5H6.34C5.87537 5.5 5.5 5.87537 5.5 6.34V25.66C5.5 26.1246 5.87537 26.5 6.34 26.5H25.66C26.1246 26.5 26.5 26.1246 26.5 25.66V6.34C26.5 5.87537 26.1246 5.5 25.66 5.5ZM24.61 24.61H7.39V7.39H24.61V24.61ZM11.485 20.4887V22.51C11.485 22.6255 11.5795 22.72 11.695 22.72H12.955C13.0705 22.72 13.165 22.6255 13.165 22.51V20.4887C12.8999 20.5754 12.619 20.62 12.325 20.62C12.031 20.62 11.7501 20.5727 11.485 20.4887ZM13.165 15.2912V9.49C13.165 9.3745 13.0705 9.28 12.955 9.28H11.695C11.5795 9.28 11.485 9.3745 11.485 9.49V15.2912C11.7501 15.2046 12.031 15.16 12.325 15.16C12.619 15.16 12.8999 15.2072 13.165 15.2912ZM11.485 20.4887C11.7501 20.5754 12.031 20.62 12.325 20.62C12.619 20.62 12.8999 20.5727 13.165 20.4887C14.2622 20.1344 15.055 19.1054 15.055 17.89C15.055 16.6746 14.2622 15.6456 13.165 15.2912C12.8999 15.2046 12.619 15.16 12.325 15.16C12.031 15.16 11.7501 15.2072 11.485 15.2912C10.3877 15.6456 9.595 16.6746 9.595 17.89C9.595 19.1054 10.3877 20.1344 11.485 20.4887ZM11.4876 17.4516C11.4955 17.4359 11.506 17.4201 11.5139 17.4044V17.4018L11.5454 17.3545C11.548 17.3492 11.5506 17.3466 11.5532 17.3414C11.5611 17.3282 11.5716 17.3177 11.5795 17.3046C11.5821 17.302 11.5847 17.2967 11.5874 17.2941C11.6005 17.2784 11.611 17.2652 11.6241 17.2521L11.632 17.2443L11.6635 17.2127L11.674 17.2022C11.6871 17.1891 11.7002 17.1786 11.716 17.1655C11.7317 17.1524 11.7449 17.1419 11.7606 17.1314C11.7659 17.1287 11.7685 17.1261 11.7737 17.1235C11.7869 17.1156 11.7974 17.1051 11.8105 17.0972C11.8131 17.0946 11.8184 17.092 11.821 17.0894C11.8367 17.0789 11.8525 17.071 11.8709 17.0605C11.8735 17.0579 11.8787 17.0579 11.8814 17.0552C11.8945 17.0474 11.9076 17.0421 11.9234 17.0343L11.9391 17.0264C11.9575 17.0185 11.9732 17.0106 11.9916 17.0054C12.01 16.9975 12.0284 16.9922 12.0467 16.987C12.052 16.9844 12.0572 16.9844 12.0625 16.9818C12.0782 16.9765 12.0914 16.9739 12.1071 16.9712C12.1124 16.9712 12.115 16.9686 12.1203 16.9686C12.1386 16.9634 12.1596 16.9607 12.178 16.9581C12.1832 16.9581 12.1859 16.9581 12.1911 16.9555C12.2069 16.9529 12.2226 16.9529 12.2384 16.9502H12.2541C12.2751 16.9502 12.2935 16.9476 12.3145 16.9476C12.3355 16.9476 12.3539 16.9476 12.3749 16.9502H12.3906C12.4064 16.9502 12.4221 16.9529 12.4379 16.9555C12.4431 16.9555 12.4457 16.9555 12.451 16.9581C12.4694 16.9607 12.4904 16.9634 12.5087 16.9686C12.514 16.9686 12.5166 16.9712 12.5219 16.9712C12.5376 16.9739 12.5534 16.9791 12.5665 16.9818C12.5718 16.9844 12.577 16.9844 12.5822 16.987C12.6006 16.9922 12.619 16.9975 12.6374 17.0054C12.6557 17.0106 12.6715 17.0185 12.6899 17.0264L12.7056 17.0343C12.7187 17.0395 12.7345 17.0474 12.7476 17.0552C12.7502 17.0579 12.7555 17.0579 12.7581 17.0605C12.7739 17.0684 12.7922 17.0789 12.808 17.0894C12.8106 17.092 12.8159 17.0946 12.8185 17.0972C12.8316 17.1051 12.8448 17.113 12.8553 17.1235C12.8605 17.1261 12.8631 17.1287 12.8684 17.1314C12.8841 17.1419 12.8999 17.155 12.913 17.1655C12.9261 17.176 12.9419 17.1891 12.955 17.2022L12.9655 17.2127L12.997 17.2443L13.0049 17.2521C13.018 17.2652 13.0311 17.281 13.0416 17.2941C13.0442 17.2967 13.0469 17.302 13.0495 17.3046C13.06 17.3151 13.0679 17.3282 13.0757 17.3414C13.0784 17.3466 13.081 17.3492 13.0836 17.3545L13.1151 17.4018C13.1151 17.4018 13.1151 17.4044 13.1178 17.4044C13.2053 17.5512 13.2515 17.719 13.2516 17.89C13.2516 18.0475 13.2123 18.1971 13.144 18.3284C13.1361 18.3441 13.1256 18.3599 13.1178 18.3756C13.1178 18.3756 13.1177 18.3782 13.1151 18.3782L13.0836 18.4255C13.081 18.4308 13.0784 18.4334 13.0757 18.4386C13.0679 18.4518 13.0574 18.4622 13.0495 18.4754C13.0469 18.478 13.0442 18.4832 13.0416 18.4859C13.0285 18.5016 13.018 18.5147 13.0049 18.5279L12.997 18.5357L12.9655 18.5672L12.955 18.5777C12.9419 18.5909 12.9287 18.6014 12.913 18.6145C12.8972 18.6276 12.8841 18.6381 12.8684 18.6486C12.8631 18.6513 12.8605 18.6539 12.8553 18.6565C12.8421 18.6644 12.8316 18.6749 12.8185 18.6827C12.8159 18.6854 12.8106 18.688 12.808 18.6906C12.7922 18.7011 12.7765 18.709 12.7581 18.7195C12.7555 18.7221 12.7502 18.7221 12.7476 18.7247C12.7345 18.7326 12.7214 18.7379 12.7056 18.7457L12.6899 18.7536C12.6715 18.7615 12.6557 18.7694 12.6374 18.7746C12.619 18.7825 12.6006 18.7878 12.5822 18.793C12.577 18.7956 12.5718 18.7956 12.5665 18.7982C12.5508 18.8035 12.5376 18.8061 12.5219 18.8087C12.5166 18.8087 12.514 18.8114 12.5087 18.8114C12.4904 18.8166 12.4694 18.8192 12.451 18.8219C12.4457 18.8219 12.4431 18.8219 12.4379 18.8245C12.4221 18.8271 12.4064 18.8271 12.3906 18.8297H12.3749C12.3539 18.8297 12.3355 18.8324 12.3145 18.8324C12.2935 18.8324 12.2751 18.8324 12.2541 18.8297H12.2384C12.2226 18.8297 12.2069 18.8271 12.1911 18.8245C12.1859 18.8245 12.1832 18.8245 12.178 18.8219C12.1596 18.8192 12.1386 18.8166 12.1203 18.8114C12.115 18.8114 12.1124 18.8087 12.1071 18.8087C12.0914 18.8061 12.0756 18.8009 12.0625 18.7982C12.0572 18.7956 12.052 18.7956 12.0467 18.793C12.0284 18.7878 12.01 18.7825 11.9916 18.7746C11.9732 18.7694 11.9575 18.7615 11.9391 18.7536L11.9234 18.7457C11.9103 18.7405 11.8945 18.7326 11.8814 18.7247C11.8787 18.7221 11.8735 18.7221 11.8709 18.7195C11.8551 18.7116 11.8367 18.7011 11.821 18.6906C11.8184 18.688 11.8131 18.6854 11.8105 18.6827C11.7974 18.6749 11.7842 18.667 11.7737 18.6565C11.7685 18.6539 11.7659 18.6513 11.7606 18.6486C11.7449 18.6381 11.7291 18.625 11.716 18.6145C11.7029 18.604 11.6871 18.5909 11.674 18.5777L11.6635 18.5672L11.632 18.5357L11.6241 18.5279C11.611 18.5147 11.5979 18.499 11.5874 18.4859C11.5847 18.4832 11.5821 18.478 11.5795 18.4754C11.569 18.4649 11.5611 18.4518 11.5532 18.4386C11.5506 18.4334 11.548 18.4308 11.5454 18.4255L11.5139 18.3782V18.3756C11.5034 18.3599 11.4955 18.3441 11.4876 18.3284C11.4194 18.1971 11.38 18.0475 11.38 17.89C11.38 17.7325 11.4194 17.5829 11.4876 17.4516ZM18.835 16.7087V22.51C18.835 22.6255 18.9295 22.72 19.045 22.72H20.305C20.4205 22.72 20.515 22.6255 20.515 22.51V16.7087C20.2499 16.7954 19.969 16.84 19.675 16.84C19.381 16.84 19.1001 16.7927 18.835 16.7087ZM20.515 11.5112V9.49C20.515 9.3745 20.4205 9.28 20.305 9.28H19.045C18.9295 9.28 18.835 9.3745 18.835 9.49V11.5112C19.1001 11.4246 19.381 11.38 19.675 11.38C19.969 11.38 20.2499 11.4272 20.515 11.5112ZM18.835 16.7087C19.1001 16.7954 19.381 16.84 19.675 16.84C19.969 16.84 20.2499 16.7927 20.515 16.7087C21.6122 16.3544 22.405 15.3254 22.405 14.11C22.405 12.8946 21.6122 11.8656 20.515 11.5112C20.2499 11.4246 19.969 11.38 19.675 11.38C19.381 11.38 19.1001 11.4272 18.835 11.5112C17.7377 11.8656 16.945 12.8946 16.945 14.11C16.945 15.3254 17.7377 16.3544 18.835 16.7087ZM18.8376 13.6716C18.8455 13.6559 18.856 13.6401 18.8639 13.6244V13.6217L18.8954 13.5745C18.898 13.5692 18.9006 13.5666 18.9032 13.5614C18.9111 13.5482 18.9216 13.5378 18.9295 13.5246C18.9321 13.522 18.9348 13.5167 18.9374 13.5141C18.9505 13.4984 18.961 13.4853 18.9741 13.4721L18.982 13.4642L19.0135 13.4328L19.024 13.4222C19.0371 13.4091 19.0502 13.3986 19.066 13.3855C19.0817 13.3724 19.0949 13.3619 19.1106 13.3514C19.1159 13.3487 19.1185 13.3461 19.1237 13.3435C19.1369 13.3356 19.1474 13.3251 19.1605 13.3172C19.1631 13.3146 19.1684 13.312 19.171 13.3094C19.1867 13.2989 19.2025 13.291 19.2209 13.2805C19.2235 13.2779 19.2287 13.2779 19.2314 13.2753C19.2445 13.2674 19.2576 13.2621 19.2734 13.2542L19.2891 13.2464C19.3075 13.2385 19.3232 13.2306 19.3416 13.2254C19.36 13.2175 19.3784 13.2122 19.3968 13.207C19.402 13.2044 19.4072 13.2044 19.4125 13.2017C19.4282 13.1965 19.4414 13.1939 19.4571 13.1912C19.4624 13.1912 19.465 13.1886 19.4702 13.1886C19.4886 13.1834 19.5096 13.1807 19.528 13.1781C19.5333 13.1781 19.5359 13.1781 19.5411 13.1755C19.5569 13.1729 19.5726 13.1729 19.5884 13.1703H19.6041C19.6251 13.1703 19.6435 13.1676 19.6645 13.1676C19.6855 13.1676 19.7039 13.1676 19.7249 13.1703H19.7406C19.7564 13.1703 19.7721 13.1729 19.7879 13.1755C19.7931 13.1755 19.7957 13.1755 19.801 13.1781C19.8194 13.1807 19.8404 13.1834 19.8587 13.1886C19.864 13.1886 19.8666 13.1912 19.8719 13.1912C19.8876 13.1939 19.9034 13.1991 19.9165 13.2017C19.9217 13.2044 19.927 13.2044 19.9322 13.207C19.9506 13.2122 19.969 13.2175 19.9874 13.2254C20.0058 13.2306 20.0215 13.2385 20.0399 13.2464L20.0556 13.2542C20.0687 13.2595 20.0845 13.2674 20.0976 13.2753C20.1002 13.2779 20.1055 13.2779 20.1081 13.2805C20.1239 13.2884 20.1423 13.2989 20.158 13.3094C20.1606 13.312 20.1659 13.3146 20.1685 13.3172C20.1816 13.3251 20.1947 13.333 20.2052 13.3435C20.2105 13.3461 20.2131 13.3487 20.2184 13.3514C20.2341 13.3619 20.2499 13.375 20.263 13.3855C20.2761 13.396 20.2919 13.4091 20.305 13.4222L20.3155 13.4328L20.347 13.4642L20.3549 13.4721C20.368 13.4853 20.3811 13.501 20.3916 13.5141C20.3942 13.5167 20.3969 13.522 20.3995 13.5246C20.41 13.5351 20.4179 13.5482 20.4257 13.5614C20.4284 13.5666 20.431 13.5692 20.4336 13.5745L20.4651 13.6217V13.6244C20.5526 13.7712 20.5989 13.939 20.599 14.11C20.599 14.2675 20.5596 14.4171 20.4914 14.5484C20.4835 14.5641 20.473 14.5799 20.4651 14.5956V14.5982L20.4336 14.6455C20.431 14.6507 20.4284 14.6534 20.4257 14.6586C20.4179 14.6717 20.4074 14.6822 20.3995 14.6954C20.3969 14.698 20.3942 14.7033 20.3916 14.7059C20.3785 14.7216 20.368 14.7347 20.3549 14.7479L20.347 14.7557L20.3155 14.7872L20.305 14.7978C20.2919 14.8109 20.2788 14.8214 20.263 14.8345C20.2473 14.8476 20.2341 14.8581 20.2184 14.8686C20.2131 14.8712 20.2105 14.8739 20.2052 14.8765C20.1921 14.8844 20.1816 14.8949 20.1685 14.9028C20.1659 14.9054 20.1606 14.908 20.158 14.9106C20.1423 14.9211 20.1265 14.929 20.1081 14.9395C20.1055 14.9421 20.1002 14.9421 20.0976 14.9447C20.0845 14.9526 20.0714 14.9579 20.0556 14.9657L20.0399 14.9736C20.0215 14.9815 20.0058 14.9894 19.9874 14.9946C19.969 15.0025 19.9506 15.0077 19.9322 15.013C19.927 15.0156 19.9217 15.0156 19.9165 15.0182C19.9007 15.0235 19.8876 15.0261 19.8719 15.0287C19.8666 15.0287 19.864 15.0314 19.8587 15.0314C19.8404 15.0366 19.8194 15.0392 19.801 15.0419C19.7957 15.0419 19.7931 15.0419 19.7879 15.0445C19.7721 15.0471 19.7564 15.0471 19.7406 15.0497H19.7249C19.7039 15.0497 19.6855 15.0524 19.6645 15.0524C19.6435 15.0524 19.6251 15.0524 19.6041 15.0497H19.5884C19.5726 15.0497 19.5569 15.0471 19.5411 15.0445C19.5359 15.0445 19.5333 15.0445 19.528 15.0419C19.5096 15.0392 19.4886 15.0366 19.4702 15.0314C19.465 15.0314 19.4624 15.0287 19.4571 15.0287C19.4414 15.0261 19.4256 15.0209 19.4125 15.0182C19.4072 15.0156 19.402 15.0156 19.3968 15.013C19.3784 15.0077 19.36 15.0025 19.3416 14.9946C19.3232 14.9894 19.3075 14.9815 19.2891 14.9736L19.2734 14.9657C19.2602 14.9605 19.2445 14.9526 19.2314 14.9447C19.2287 14.9421 19.2235 14.9421 19.2209 14.9395C19.2051 14.9316 19.1867 14.9211 19.171 14.9106C19.1684 14.908 19.1631 14.9054 19.1605 14.9028C19.1474 14.8949 19.1342 14.887 19.1237 14.8765C19.1185 14.8739 19.1159 14.8712 19.1106 14.8686C19.0949 14.8581 19.0791 14.845 19.066 14.8345C19.0529 14.824 19.0371 14.8109 19.024 14.7978L19.0135 14.7872L18.982 14.7557L18.9741 14.7479C18.961 14.7347 18.9479 14.719 18.9374 14.7059C18.9348 14.7033 18.9321 14.698 18.9295 14.6954C18.919 14.6849 18.9111 14.6717 18.9032 14.6586C18.9006 14.6534 18.898 14.6507 18.8954 14.6455L18.8639 14.5982V14.5956C18.8534 14.5799 18.8455 14.5641 18.8376 14.5484C18.7694 14.4171 18.73 14.2675 18.73 14.11C18.73 13.9525 18.7694 13.8029 18.8376 13.6716Z"
        fill="#121C25"
      />
    </svg>
  )
);

export const IconControlSectionDark = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#101820" />
      <rect width="32" height="32" rx="3" fill="#101820" />
      <path
        d="M25.66 5.5H6.34C5.87537 5.5 5.5 5.87537 5.5 6.34V25.66C5.5 26.1246 5.87537 26.5 6.34 26.5H25.66C26.1246 26.5 26.5 26.1246 26.5 25.66V6.34C26.5 5.87537 26.1246 5.5 25.66 5.5ZM24.61 24.61H7.39V7.39H24.61V24.61ZM11.485 20.4887V22.51C11.485 22.6255 11.5795 22.72 11.695 22.72H12.955C13.0705 22.72 13.165 22.6255 13.165 22.51V20.4887C12.8999 20.5754 12.619 20.62 12.325 20.62C12.031 20.62 11.7501 20.5727 11.485 20.4887ZM13.165 15.2912V9.49C13.165 9.3745 13.0705 9.28 12.955 9.28H11.695C11.5795 9.28 11.485 9.3745 11.485 9.49V15.2912C11.7501 15.2046 12.031 15.16 12.325 15.16C12.619 15.16 12.8999 15.2072 13.165 15.2912ZM11.485 20.4887C11.7501 20.5754 12.031 20.62 12.325 20.62C12.619 20.62 12.8999 20.5727 13.165 20.4887C14.2622 20.1344 15.055 19.1054 15.055 17.89C15.055 16.6746 14.2622 15.6456 13.165 15.2912C12.8999 15.2046 12.619 15.16 12.325 15.16C12.031 15.16 11.7501 15.2072 11.485 15.2912C10.3877 15.6456 9.595 16.6746 9.595 17.89C9.595 19.1054 10.3877 20.1344 11.485 20.4887ZM11.4876 17.4516C11.4955 17.4359 11.506 17.4201 11.5139 17.4044V17.4018L11.5454 17.3545C11.548 17.3492 11.5506 17.3466 11.5532 17.3414C11.5611 17.3282 11.5716 17.3177 11.5795 17.3046C11.5821 17.302 11.5847 17.2967 11.5874 17.2941C11.6005 17.2784 11.611 17.2652 11.6241 17.2521L11.632 17.2443L11.6635 17.2127L11.674 17.2022C11.6871 17.1891 11.7002 17.1786 11.716 17.1655C11.7317 17.1524 11.7449 17.1419 11.7606 17.1314C11.7659 17.1287 11.7685 17.1261 11.7737 17.1235C11.7869 17.1156 11.7974 17.1051 11.8105 17.0972C11.8131 17.0946 11.8184 17.092 11.821 17.0894C11.8367 17.0789 11.8525 17.071 11.8709 17.0605C11.8735 17.0579 11.8787 17.0579 11.8814 17.0552C11.8945 17.0474 11.9076 17.0421 11.9234 17.0343L11.9391 17.0264C11.9575 17.0185 11.9732 17.0106 11.9916 17.0054C12.01 16.9975 12.0284 16.9922 12.0467 16.987C12.052 16.9844 12.0572 16.9844 12.0625 16.9818C12.0782 16.9765 12.0914 16.9739 12.1071 16.9712C12.1124 16.9712 12.115 16.9686 12.1203 16.9686C12.1386 16.9634 12.1596 16.9607 12.178 16.9581C12.1832 16.9581 12.1859 16.9581 12.1911 16.9555C12.2069 16.9529 12.2226 16.9529 12.2384 16.9502H12.2541C12.2751 16.9502 12.2935 16.9476 12.3145 16.9476C12.3355 16.9476 12.3539 16.9476 12.3749 16.9502H12.3906C12.4064 16.9502 12.4221 16.9529 12.4379 16.9555C12.4431 16.9555 12.4457 16.9555 12.451 16.9581C12.4694 16.9607 12.4904 16.9634 12.5087 16.9686C12.514 16.9686 12.5166 16.9712 12.5219 16.9712C12.5376 16.9739 12.5534 16.9791 12.5665 16.9818C12.5718 16.9844 12.577 16.9844 12.5822 16.987C12.6006 16.9922 12.619 16.9975 12.6374 17.0054C12.6557 17.0106 12.6715 17.0185 12.6899 17.0264L12.7056 17.0343C12.7187 17.0395 12.7345 17.0474 12.7476 17.0552C12.7502 17.0579 12.7555 17.0579 12.7581 17.0605C12.7739 17.0684 12.7922 17.0789 12.808 17.0894C12.8106 17.092 12.8159 17.0946 12.8185 17.0972C12.8316 17.1051 12.8448 17.113 12.8553 17.1235C12.8605 17.1261 12.8631 17.1287 12.8684 17.1314C12.8841 17.1419 12.8999 17.155 12.913 17.1655C12.9261 17.176 12.9419 17.1891 12.955 17.2022L12.9655 17.2127L12.997 17.2443L13.0049 17.2521C13.018 17.2652 13.0311 17.281 13.0416 17.2941C13.0442 17.2967 13.0469 17.302 13.0495 17.3046C13.06 17.3151 13.0679 17.3282 13.0757 17.3414C13.0784 17.3466 13.081 17.3492 13.0836 17.3545L13.1151 17.4018C13.1151 17.4018 13.1151 17.4044 13.1178 17.4044C13.2053 17.5512 13.2515 17.719 13.2516 17.89C13.2516 18.0475 13.2123 18.1971 13.144 18.3284C13.1361 18.3441 13.1256 18.3599 13.1178 18.3756C13.1178 18.3756 13.1177 18.3782 13.1151 18.3782L13.0836 18.4255C13.081 18.4308 13.0784 18.4334 13.0757 18.4386C13.0679 18.4518 13.0574 18.4622 13.0495 18.4754C13.0469 18.478 13.0442 18.4832 13.0416 18.4859C13.0285 18.5016 13.018 18.5147 13.0049 18.5279L12.997 18.5357L12.9655 18.5672L12.955 18.5777C12.9419 18.5909 12.9287 18.6014 12.913 18.6145C12.8972 18.6276 12.8841 18.6381 12.8684 18.6486C12.8631 18.6513 12.8605 18.6539 12.8553 18.6565C12.8421 18.6644 12.8316 18.6749 12.8185 18.6827C12.8159 18.6854 12.8106 18.688 12.808 18.6906C12.7922 18.7011 12.7765 18.709 12.7581 18.7195C12.7555 18.7221 12.7502 18.7221 12.7476 18.7247C12.7345 18.7326 12.7214 18.7379 12.7056 18.7457L12.6899 18.7536C12.6715 18.7615 12.6557 18.7694 12.6374 18.7746C12.619 18.7825 12.6006 18.7878 12.5822 18.793C12.577 18.7956 12.5718 18.7956 12.5665 18.7982C12.5508 18.8035 12.5376 18.8061 12.5219 18.8087C12.5166 18.8087 12.514 18.8114 12.5087 18.8114C12.4904 18.8166 12.4694 18.8192 12.451 18.8219C12.4457 18.8219 12.4431 18.8219 12.4379 18.8245C12.4221 18.8271 12.4064 18.8271 12.3906 18.8297H12.3749C12.3539 18.8297 12.3355 18.8324 12.3145 18.8324C12.2935 18.8324 12.2751 18.8324 12.2541 18.8297H12.2384C12.2226 18.8297 12.2069 18.8271 12.1911 18.8245C12.1859 18.8245 12.1832 18.8245 12.178 18.8219C12.1596 18.8192 12.1386 18.8166 12.1203 18.8114C12.115 18.8114 12.1124 18.8087 12.1071 18.8087C12.0914 18.8061 12.0756 18.8009 12.0625 18.7982C12.0572 18.7956 12.052 18.7956 12.0467 18.793C12.0284 18.7878 12.01 18.7825 11.9916 18.7746C11.9732 18.7694 11.9575 18.7615 11.9391 18.7536L11.9234 18.7457C11.9103 18.7405 11.8945 18.7326 11.8814 18.7247C11.8787 18.7221 11.8735 18.7221 11.8709 18.7195C11.8551 18.7116 11.8367 18.7011 11.821 18.6906C11.8184 18.688 11.8131 18.6854 11.8105 18.6827C11.7974 18.6749 11.7842 18.667 11.7737 18.6565C11.7685 18.6539 11.7659 18.6513 11.7606 18.6486C11.7449 18.6381 11.7291 18.625 11.716 18.6145C11.7029 18.604 11.6871 18.5909 11.674 18.5777L11.6635 18.5672L11.632 18.5357L11.6241 18.5279C11.611 18.5147 11.5979 18.499 11.5874 18.4859C11.5847 18.4832 11.5821 18.478 11.5795 18.4754C11.569 18.4649 11.5611 18.4518 11.5532 18.4386C11.5506 18.4334 11.548 18.4308 11.5454 18.4255L11.5139 18.3782V18.3756C11.5034 18.3599 11.4955 18.3441 11.4876 18.3284C11.4194 18.1971 11.38 18.0475 11.38 17.89C11.38 17.7325 11.4194 17.5829 11.4876 17.4516ZM18.835 16.7087V22.51C18.835 22.6255 18.9295 22.72 19.045 22.72H20.305C20.4205 22.72 20.515 22.6255 20.515 22.51V16.7087C20.2499 16.7954 19.969 16.84 19.675 16.84C19.381 16.84 19.1001 16.7927 18.835 16.7087ZM20.515 11.5112V9.49C20.515 9.3745 20.4205 9.28 20.305 9.28H19.045C18.9295 9.28 18.835 9.3745 18.835 9.49V11.5112C19.1001 11.4246 19.381 11.38 19.675 11.38C19.969 11.38 20.2499 11.4272 20.515 11.5112ZM18.835 16.7087C19.1001 16.7954 19.381 16.84 19.675 16.84C19.969 16.84 20.2499 16.7927 20.515 16.7087C21.6122 16.3544 22.405 15.3254 22.405 14.11C22.405 12.8946 21.6122 11.8656 20.515 11.5112C20.2499 11.4246 19.969 11.38 19.675 11.38C19.381 11.38 19.1001 11.4272 18.835 11.5112C17.7377 11.8656 16.945 12.8946 16.945 14.11C16.945 15.3254 17.7377 16.3544 18.835 16.7087ZM18.8376 13.6716C18.8455 13.6559 18.856 13.6401 18.8639 13.6244V13.6217L18.8954 13.5745C18.898 13.5692 18.9006 13.5666 18.9032 13.5614C18.9111 13.5482 18.9216 13.5378 18.9295 13.5246C18.9321 13.522 18.9348 13.5167 18.9374 13.5141C18.9505 13.4984 18.961 13.4853 18.9741 13.4721L18.982 13.4642L19.0135 13.4328L19.024 13.4222C19.0371 13.4091 19.0502 13.3986 19.066 13.3855C19.0817 13.3724 19.0949 13.3619 19.1106 13.3514C19.1159 13.3487 19.1185 13.3461 19.1237 13.3435C19.1369 13.3356 19.1474 13.3251 19.1605 13.3172C19.1631 13.3146 19.1684 13.312 19.171 13.3094C19.1867 13.2989 19.2025 13.291 19.2209 13.2805C19.2235 13.2779 19.2287 13.2779 19.2314 13.2753C19.2445 13.2674 19.2576 13.2621 19.2734 13.2542L19.2891 13.2464C19.3075 13.2385 19.3232 13.2306 19.3416 13.2254C19.36 13.2175 19.3784 13.2122 19.3968 13.207C19.402 13.2044 19.4072 13.2044 19.4125 13.2017C19.4282 13.1965 19.4414 13.1939 19.4571 13.1912C19.4624 13.1912 19.465 13.1886 19.4702 13.1886C19.4886 13.1834 19.5096 13.1807 19.528 13.1781C19.5333 13.1781 19.5359 13.1781 19.5411 13.1755C19.5569 13.1729 19.5726 13.1729 19.5884 13.1703H19.6041C19.6251 13.1703 19.6435 13.1676 19.6645 13.1676C19.6855 13.1676 19.7039 13.1676 19.7249 13.1703H19.7406C19.7564 13.1703 19.7721 13.1729 19.7879 13.1755C19.7931 13.1755 19.7957 13.1755 19.801 13.1781C19.8194 13.1807 19.8404 13.1834 19.8587 13.1886C19.864 13.1886 19.8666 13.1912 19.8719 13.1912C19.8876 13.1939 19.9034 13.1991 19.9165 13.2017C19.9217 13.2044 19.927 13.2044 19.9322 13.207C19.9506 13.2122 19.969 13.2175 19.9874 13.2254C20.0058 13.2306 20.0215 13.2385 20.0399 13.2464L20.0556 13.2542C20.0687 13.2595 20.0845 13.2674 20.0976 13.2753C20.1002 13.2779 20.1055 13.2779 20.1081 13.2805C20.1239 13.2884 20.1423 13.2989 20.158 13.3094C20.1606 13.312 20.1659 13.3146 20.1685 13.3172C20.1816 13.3251 20.1947 13.333 20.2052 13.3435C20.2105 13.3461 20.2131 13.3487 20.2184 13.3514C20.2341 13.3619 20.2499 13.375 20.263 13.3855C20.2761 13.396 20.2919 13.4091 20.305 13.4222L20.3155 13.4328L20.347 13.4642L20.3549 13.4721C20.368 13.4853 20.3811 13.501 20.3916 13.5141C20.3942 13.5167 20.3969 13.522 20.3995 13.5246C20.41 13.5351 20.4179 13.5482 20.4257 13.5614C20.4284 13.5666 20.431 13.5692 20.4336 13.5745L20.4651 13.6217V13.6244C20.5526 13.7712 20.5989 13.939 20.599 14.11C20.599 14.2675 20.5596 14.4171 20.4914 14.5484C20.4835 14.5641 20.473 14.5799 20.4651 14.5956V14.5982L20.4336 14.6455C20.431 14.6507 20.4284 14.6534 20.4257 14.6586C20.4179 14.6717 20.4074 14.6822 20.3995 14.6954C20.3969 14.698 20.3942 14.7033 20.3916 14.7059C20.3785 14.7216 20.368 14.7347 20.3549 14.7479L20.347 14.7557L20.3155 14.7872L20.305 14.7978C20.2919 14.8109 20.2788 14.8214 20.263 14.8345C20.2473 14.8476 20.2341 14.8581 20.2184 14.8686C20.2131 14.8712 20.2105 14.8739 20.2052 14.8765C20.1921 14.8844 20.1816 14.8949 20.1685 14.9028C20.1659 14.9054 20.1606 14.908 20.158 14.9106C20.1423 14.9211 20.1265 14.929 20.1081 14.9395C20.1055 14.9421 20.1002 14.9421 20.0976 14.9447C20.0845 14.9526 20.0714 14.9579 20.0556 14.9657L20.0399 14.9736C20.0215 14.9815 20.0058 14.9894 19.9874 14.9946C19.969 15.0025 19.9506 15.0077 19.9322 15.013C19.927 15.0156 19.9217 15.0156 19.9165 15.0182C19.9007 15.0235 19.8876 15.0261 19.8719 15.0287C19.8666 15.0287 19.864 15.0314 19.8587 15.0314C19.8404 15.0366 19.8194 15.0392 19.801 15.0419C19.7957 15.0419 19.7931 15.0419 19.7879 15.0445C19.7721 15.0471 19.7564 15.0471 19.7406 15.0497H19.7249C19.7039 15.0497 19.6855 15.0524 19.6645 15.0524C19.6435 15.0524 19.6251 15.0524 19.6041 15.0497H19.5884C19.5726 15.0497 19.5569 15.0471 19.5411 15.0445C19.5359 15.0445 19.5333 15.0445 19.528 15.0419C19.5096 15.0392 19.4886 15.0366 19.4702 15.0314C19.465 15.0314 19.4624 15.0287 19.4571 15.0287C19.4414 15.0261 19.4256 15.0209 19.4125 15.0182C19.4072 15.0156 19.402 15.0156 19.3968 15.013C19.3784 15.0077 19.36 15.0025 19.3416 14.9946C19.3232 14.9894 19.3075 14.9815 19.2891 14.9736L19.2734 14.9657C19.2602 14.9605 19.2445 14.9526 19.2314 14.9447C19.2287 14.9421 19.2235 14.9421 19.2209 14.9395C19.2051 14.9316 19.1867 14.9211 19.171 14.9106C19.1684 14.908 19.1631 14.9054 19.1605 14.9028C19.1474 14.8949 19.1342 14.887 19.1237 14.8765C19.1185 14.8739 19.1159 14.8712 19.1106 14.8686C19.0949 14.8581 19.0791 14.845 19.066 14.8345C19.0529 14.824 19.0371 14.8109 19.024 14.7978L19.0135 14.7872L18.982 14.7557L18.9741 14.7479C18.961 14.7347 18.9479 14.719 18.9374 14.7059C18.9348 14.7033 18.9321 14.698 18.9295 14.6954C18.919 14.6849 18.9111 14.6717 18.9032 14.6586C18.9006 14.6534 18.898 14.6507 18.8954 14.6455L18.8639 14.5982V14.5956C18.8534 14.5799 18.8455 14.5641 18.8376 14.5484C18.7694 14.4171 18.73 14.2675 18.73 14.11C18.73 13.9525 18.7694 13.8029 18.8376 13.6716Z"
        fill="white"
      />
    </svg>
  )
);

IconControlSection.displayName = 'IconControlSection';
IconControlSectionDark.displayName = 'IconControlSectionDark';
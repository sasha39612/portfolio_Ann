import React, { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';

interface ChildProps {
  className?: string;
}

export interface ActiveLinkPropsType {
  href: string;
  activeLinkClassName?: string;
  children: ReactElement<ChildProps>;
  [x: string]: unknown;
}

const ActiveLink = ({
  children,
  activeLinkClassName,
  href,
  ...props
}: ActiveLinkPropsType) => {
  const pathName = usePathname();

  // Ensure the `href` is fully matched (not a partial match)
  const isActive = pathName.startsWith(href) && pathName !== '/';

  const child = React.isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  return (
    <Link href={href} {...props} aria-label="Active link" prefetch={false}>
      {React.cloneElement(child, {
        className: cn(child.props.className, isActive && activeLinkClassName),
      })}
    </Link>
  );
};

export default ActiveLink;


// "use client"
import React, { Children, ReactElement } from 'react';
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

const ActiveLink = ({ children, activeLinkClassName, href, ...props }: ActiveLinkPropsType) => {
  const pathName = usePathname();
  const child = Children.only(children) as React.ReactElement<{ className?: string }>;
  let className = child.props.className || '';

  if (pathName === href && activeLinkClassName && pathName !== '/') {
    className = cn(className, activeLinkClassName)
  }

  return <Link href={href} {...props}>{React.cloneElement(child, { className })}</Link>
}

export default ActiveLink;

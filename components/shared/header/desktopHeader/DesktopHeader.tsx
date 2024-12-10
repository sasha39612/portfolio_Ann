"use client"
import { MouseEvent, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import ActiveLink from '../../activeLink/ActiveLink';
import ImageComponent from '../../../ui/image/Image';
import {
    HeaderPropsLinksType,
    ImageNavBrandProps,
    NavLinkProps,
} from '../type';
import styles from './desktopHeader.module.scss'


const ImageNavBrand = (props: ImageNavBrandProps) => {
    const { logoImage } = props;

    return (
        <Link href="/">
            <ImageComponent
                {...logoImage}
                layout='fill'
                objectFit='contain'
                className={styles[logoImage.className ?? '']}
            />
        </Link>
    )
};

const DesktopHeader = ({ logoImage, links, className }: HeaderPropsLinksType) => {
    const [isOverID, setIsOverID] = useState(9999)

    const onLinkMouseOver = (e: MouseEvent<HTMLLIElement>, id: number) => {
        e.preventDefault();
        setIsOverID(id)
    }

    const onLinkMouseOut = (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        setIsOverID(9999)
    }

    const NavLink = (props: NavLinkProps) => {
        const { href, title } = props;

        return (
            <ActiveLink href={href} activeLinkClassName={styles.activeLinkClassName}>
                <span className={styles.linkClassNave}>{title}</span>
            </ActiveLink>
        )
    };

    return (
        <nav className={cn(styles.wrapper, className)}>
            <ImageNavBrand logoImage={logoImage[1]} />
            <ul className={styles.containerLinks}>
                {
                    links.map((link) =>
                        <li
                            key={link.id}
                            className={styles.link}
                            onMouseOver={(e) => onLinkMouseOver(e, link.id)}
                            onMouseOut={onLinkMouseOut}
                        >
                            <NavLink isOverID={isOverID} {...link} />
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default DesktopHeader;

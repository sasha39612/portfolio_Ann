
import { notFound } from 'next/navigation';
import cn from 'classnames';
import DesktopHeader from './desktopHeader/DesktopHeader';
import MobileHeader from './mobileHeder/MobileHeader';
import getPropsData from '../../../lib/getPropsData';
import styles from './header.module.scss';

const Header = () => {
    const props = getPropsData('header', 'links.mdx');
    if (!props) {
        notFound()
    }
    const { logoImage, links, menuManageImage } = props

    return (
        <>
            <DesktopHeader logoImage={logoImage} links={links} className={cn(styles.header, styles.desktopHeader)} />
            <MobileHeader logoImage={logoImage} menuManageImage={menuManageImage}  links={links} className={cn(styles.header, styles.mobileHeader)} />
        </>
    );
}

export default Header;

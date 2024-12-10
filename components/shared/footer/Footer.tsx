import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageComponent from "../../ui/image/Image";
import {
    FooterPropsType, ImageNavBrandProps,
} from './type';
import styles from './footer.module.scss';
import FooterContactLinks from "./footerContactLinks/footerContactLinks";
import FooterSocialLinks from "./footerContactLinks/footerSocialLinks";
import getPropsData from '../../../lib/getPropsData';

const ImageNavBrand = (props: ImageNavBrandProps) => {
    const { logoImage } = props;

    return (
        <Link href="/">
            <ImageComponent
                {...logoImage}
                layout='fill'
                objectFit='contain'
                className={styles.logo}
            />
        </Link>
    )
};

const Footer = () => {
    const props = getPropsData('footer', 'links.mdx') as FooterPropsType;
    if (!props) {
        notFound()
    }
    const { logoImage, footerLinks, footerSocialLinks } = props

    return (
        <div className={styles.wrapper}>
            <ImageNavBrand logoImage={logoImage[0]} />
            <div className={styles.contacts}>
                <FooterContactLinks footerLinks={footerLinks} />
                <FooterSocialLinks footerSocialLinks={footerSocialLinks} />
            </div>
        </div>
    )
}

export default Footer;

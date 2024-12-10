import Link from "next/link";
import { FooterSocialLinkTypes } from "../type";
import styles from './footerLinks.module.scss';
import ImageComponent from "../../../ui/image/Image";

const FooterLinks = (props: FooterSocialLinkTypes) => {
    const { href, icon, className } = props;

    return (
        <Link href={href} className={className}>
                <ImageComponent
                    {...icon}
                    layout='fill'
                    objectFit='contain'
                    className={styles.icon}
                />
        </Link>
    )
}

const FooterSocialLinks = (props: { footerSocialLinks: FooterSocialLinkTypes[] }) => {
    const { footerSocialLinks } = props;

    return (
        <ul className={styles.footerSocialLinks}>
            {footerSocialLinks.map((footerLink) =>
                <li key={footerLink.id} className={styles.footerSocialLink}>
                    <FooterLinks {...footerLink} />
                </li>
            )}
        </ul>
    )
}

export default FooterSocialLinks;

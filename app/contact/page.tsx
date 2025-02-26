import { notFound } from 'next/navigation';
import { ContactType } from '../../interfaces/common';
import getPropsData from '../../lib/getPropsData';
import ContactComponent from '../../components/contact/Contact';

const Contact = () => {
  const props = getPropsData('contact', 'contact.mdx') as ContactType;
  if (!props) {
    notFound();
  }

  return <ContactComponent {...props} />;
};

export default Contact;

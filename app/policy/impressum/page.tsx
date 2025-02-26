import { notFound } from 'next/navigation';
import { ImpressumType } from '../../../interfaces/common';
import getPropsData from '../../../lib/getPropsData';
import ImpressumComponent from '../../../components/impressum/Impressum';

const Impressum = () => {
  const props = getPropsData('impressum', 'impressum.mdx') as ImpressumType;

  if (!props) {
    notFound();
  }
  return <ImpressumComponent {...props} />;
};

export default Impressum;

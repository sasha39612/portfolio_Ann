import { notFound } from 'next/navigation';
import { ImpressumType } from '../../../interfaces/common';
import getPropsData from '../../../lib/getPropsData';
import DatenschutzComponent from '../../../components/datenschutz/Datenschutz';

const Datenschutz = () => {
  const props = getPropsData('datenschutz', 'datenschutz.mdx') as ImpressumType;

  if (!props) {
    notFound();
  }

  return <DatenschutzComponent {...props} />;
};

export default Datenschutz;

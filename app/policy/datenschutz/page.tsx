import { notFound } from 'next/navigation';
import { DatenschutzType } from '../../../interfaces/common';
import getPropsData from '../../../lib/getPropsData';
import DatenschutzComponent from '../../../components/datenschutz/Datenschutz';

const Datenschutz = () => {
  const props = getPropsData(
    'datenschutz',
    'datenschutz.mdx',
  ) as DatenschutzType;

  if (!props) {
    notFound();
  }

  return <DatenschutzComponent {...props} />;
};

export default Datenschutz;

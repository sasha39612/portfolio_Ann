import he from 'he';

export const getDangerousHTML = (text: string) => {
  return {
    __html: he.decode(text),
  };
};

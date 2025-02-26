import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const getPropsData = (pathName: string, fileName: string) => {
  const filePath = path.join(process.cwd(), `content/${pathName}`, `${fileName}`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${fileName} not found in ${pathName}`);
  }

  const fileContent = fs?.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  return data
}

export default getPropsData

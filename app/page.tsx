import getPropsData from "../lib/getPropsData";

export default function Home() {
  const propsCustom = getPropsData('home', 'hero.mdx')

  return (
    <>
      <main >
        Main
      </main>
      <footer >
        Footer
      </footer>
    </>
  );
}

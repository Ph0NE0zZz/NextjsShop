import styles from "@/styles/About.module.css"
import Image from "next/image";
import Head from "next/head";
export default function About() {
  return (
    <>
    <Head>
      <title>About | Hattakorn</title>
      <meta name="keywords" content="Hattakorn,Shop"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>เกี่ยวกับเรา</h1>
      <Image src="/about.svg" width={400} height={400} alt="logo" />
      <p>Welcome To My Shop</p>
    </div>
    </>
  );
}

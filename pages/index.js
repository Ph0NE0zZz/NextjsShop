import styles from"@/styles/Home.module.css"
import Link from "next/link"
import Image from "next/image";
export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page1</h1>
      <Image src="/shopping.svg" width={400} height={400} alt="logo" />
      <p>Welcome To My Shop</p>
      <Link href="/products" className={styles.btn}>All Item</Link>
    </div>
    </>
  );
}

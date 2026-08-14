import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Detail.module.css"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    return {
        props: { product: data }
    }
}

export default function ProductsDetail({ product }) {
    return (
        <>

            <Head>
                <title>{product.title}</title>
            </Head>
            <div className={styles.container}>
                <Image src = {product.thumbnail} width={300} height={300} alt={product.title}/>
            </div>
            <div className={styles.detail}>
                    <h1>รหัสสินค้า : {product.id}</h1>
                    <p>ชื่อสินค้า : {product.title}</p>
                    <p>ราคา : {product.price}</p>
                    <p>หมวดหมู่ : {product.category}</p>
                    <p>ข้อมูลพื้นฐาน : {product.description}</p>

            </div>

        </>
    )
}
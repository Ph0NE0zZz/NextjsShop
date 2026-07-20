import Head from "next/head"
import Image from "next/image"
export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    console.log(data)
    return {
        props: { products: data.products }
    }
}

export default function Index({ products }) {
    return (
        <>
            <Head>
                <title>สินค้าทั้งหมด | Hattakorn</title>
                <meta name="keywords" content="Hattakorn,Shop" />
            </Head>
            <div>
                {products.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <Image src={item.thumbnail} width={300} height={300} alt={item.title} />
                    </div>
                ))}


            </div>
            <h1>
                สินค้าทั้งหมด
            </h1>
        </>
    )
}
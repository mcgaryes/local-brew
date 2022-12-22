import Head from 'next/head'
import {withAuthenticator} from "@aws-amplify/ui-react";
import Link from "next/link";

function Home() {

    return (

        <div className={"bg-white dark:bg-gray-800"}>

            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen max-w-7xl md:mx-auto px-6 pb-6 pt-12"}>

                <h1 className={"text-2xl"}>Page Links</h1>
                <br/>
                <ul>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/charts"}>Charts</Link></li>
                    <li><Link href={"/dashboard-tremor"}>Tremor Example</Link></li>
                    <li><Link href={"/graphql-csr"}>GraphQL (CSR)</Link></li>
                    <li><Link href={"/graphql-ssr"}>GraphQL (SSR)</Link></li>
                    <li><Link href={"/graphql-static"}>GraphQL (Static)</Link></li>
                </ul>

            </main>

        </div>
    )
}

export default withAuthenticator(Home)
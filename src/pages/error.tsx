import Head from "next/head";
import Link from "next/link";

import { siteConfig } from "@/constant/config";

export default function Error() {
  return (
    <>
      <Head>
        <title>Error - {siteConfig.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-white">
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
            <h1 className="my-3 text-2xl md:text-4xl">Opps something went wrong :(</h1>
            <Link href="/" className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Home</Link>
          </div>
        </section>
      </main>
    </>
  );
}
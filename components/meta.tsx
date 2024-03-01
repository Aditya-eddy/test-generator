import Head from "next/head";
// import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/test-generator/favicon/Group.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/test-generator/favicon/Group.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/test-generator/favicon/Group.png"
      />
      <link rel="manifest" href="/test-generator/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/test-generator/favicon/Group.svg" color="#000000" />
      <link rel="shortcut icon" href="/test-generator/favicon/Group" />


    </Head>
  );
}

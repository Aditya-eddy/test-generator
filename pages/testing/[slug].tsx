import { useRouter } from "next/router";
import MainEditor from "../../components/Editor";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MainTerminal from "../../components/terminal";

export default function TestingSlug() {
  const router = useRouter();
  const {slug} = router.query;
  return (
    <Layout>
      <Header />
      <div className="m-2 bg-monokai"> {/* Apply container styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen min-w-screen"> {/* Use grid layout for responsiveness */}
          <div>
            <MainEditor lang = {slug} />
          </div>
          <div className="flex flex-col justify-between gap-2"> {/* Add margin-top and flex properties */}
            <MainTerminal />
          </div>
        </div>
      </div>
    </Layout>
  );
}

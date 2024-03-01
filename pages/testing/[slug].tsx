import MainEditor from "../../components/Editor";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MainTerminal from "../../components/terminal";

export default function TestingSlug() {
  return (
    <Layout>
      <Header />
      <Container>
      <div className="container mx-auto px-4 py-8"> {/* Apply container styling */}
        <h1 className="text-2xl font-bold mb-4">Editor Section</h1> {/* Add styling to heading */}
        <div className="grid grid-row-1 lg:grid-row-2 gap-8"> {/* Use grid layout for responsiveness */}
          <div>
            <MainEditor />
          </div>
          <div className="flex flex-col justify-between gap-2"> {/* Add margin-top and flex properties */}
            <h2 className="text-xl font-semibold">Terminal Section</h2> {/* Add styling to subheading */}
            <MainTerminal />
          </div>
        </div>
      </div>
      </Container>
      
    </Layout>
  );
}

import Layout from "../../components/layout";
import Header from "../../components/header";
import Container from "../../components/container";
import TestingComponents from "../../components/testing-components";
export default function TestIndex(){
  const Tests = [{
    title:"Python Test",
    description:"Testing Python with keploy",
    image : "/test-generator/images/Python.png",
    slug : "Python-Test"
  },
  {
    title:"Golang Test",
    description:"Testing Golang with keploy",
    image : "/test-generator/images/Golang.jpg",
    slug : "Golang-Test"
  },
  {
    title:"Javascript Test",
    description:"Testing Python with keploy",
    image : "/test-generator/images/javascript.png",
    slug : "Javascript-Test"
  },
]
  console.log(Tests);
    return(
      <Layout>
        <Header/>
        <Container>
          <TestingComponents Tests={Tests}/>
        </Container>
      </Layout>  
    );
}
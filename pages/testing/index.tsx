import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/header"; // Make sure this is imported from the correct path
import Container from "../../components/container";
import { AnimatedCards } from "../../components/cards"; 
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export default function TestIndex() {
  const Tests = [{
      name: "Python Test",
      designation: "Testing Python with keploy",
      image: "/test-generator/images/Python.png",
      href: "Python-Test"
    },
    {
      name: "Golang Test",
      designation: "Testing Golang with keploy",
      image: "/test-generator/images/Golang.jpg",
      href: "Golang-Test"
    },
    {
      name: "Javascript Test",
      designation: "Testing Python with keploy",
      image: "/test-generator/images/javascript.png",
      href: "Javascript-Test"
    },
  ]
  const words = [
    {
      text: "Test",
      className: "text-orange-200 dark:text-orange-200"
    },
    {
      text: "your",
      className: "text-orange-200 dark:text-orange-200"
    },
    {
      text: "apps",
      className: "text-orange-200 dark:text-orange-200"
    },
    {
      text: "with",
      className: "text-orange-200 dark:text-orange-200"
    },
    {
      text: "Keploy.",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];
  return (
    <Layout>
      <Header />
      <Container>
      <TypewriterEffectSmooth words={words} className="text-black" cursorClassName="text-black"/>
      <AnimatedCards test={Tests}/>
      </Container>
    </Layout>
  );
}

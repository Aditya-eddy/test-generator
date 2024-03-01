import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import Link from "next/link";
import Footer from "../components/footer";

export default function index() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Container>
          <div className="flex justify-center items-center flex-grow">
            {" "}
            {/* Utilizing flex-grow */}
            <div className="">
              <div className="home-container md:mb-0 mb-12  flex lg:flex-nowrap flex-wrap-reverse justify-evenly content-start">
                <div className="content text-center flex flex-col items-center">
                  {/* Centering the content */}
                  <h2 className="font-heading3 font-extrabold text-8xl">
                    TESTING SIMPLIFIED <br />
                    <span className="font-extrabold bg-gradient-to-r from-main_heading_start to-main_heading_end text-transparent bg-clip-text">
                      KEPLOY
                    </span>
                  </h2>
                  <p className="body text-slate-700 text-lg mt-6">
                    Testing with Keploy: Simplifying Testing like Never Before!
                  </p>  
                  <div className="btn-wrapper flex justify-center mt-6 mb-2">
                    {/* Centering the button */}
                    <Link
                      href="/testing"
                      className="heading1 text-color btn text-secondary-300 bg-primary-300 hover:text-white w-full p-3 px-8 rounded mb-4 sm:w-auto sm:mb-0 "
                    >
                      Start Testing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

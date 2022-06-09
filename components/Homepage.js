import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "/assets/logo-black.svg";
// import banner from "/assets/1.background-selling-updated.jpg";
import { FiMenu } from "react-icons/fi";

function Homepage() {
  return (
    <Container>
      <Navbar>
        <Logo>
          <MobileNav>
            <FiMenu size={30} />
          </MobileNav>
          <Link href="/">
            <a>
              <Image src={logo} alt="Logo"/>
            </a>
          </Link>
        </Logo>

        <NavLinks>
          <NavItem>
            <Link href="/">
              <a>Internet</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <a>Future Tv</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <a>Konnect Hub</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <a>Company</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <a>SasaKonnect</a>
            </Link>
          </NavItem>
        </NavLinks>
      </Navbar>

      {/* hero section */}
      <Hero>
        <Grid_One>
          <Title>
            <span>Unlimited </span>Internet so Far so Good!
          </Title>
          <Paragraph>
            <span>KSh 70/day </span>connects you to the Digital World with
            unlimited opportunities and growth
          </Paragraph>
          <GetConnected>
            <Link href="/">
              <a>Get Connected</a>
            </Link>
          </GetConnected>
        </Grid_One>
        <Grid_Two>
          <iframe
            width={"100%"}
            height={"400px"}
            src="https://www.youtube.com/embed/B5ZoJWDN5uQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid_Two>
      </Hero>
    </Container>
  );
}

export default Homepage;

const Container = styled.div`
  padding: 0 8rem;
  margin-top: 2rem;
  min-height: 100vh;

  @media (max-width: 1068px) {
    padding: 0 2rem;
  }
  @media (max-width: 650px) {
    padding: 0 1rem;
  }
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
display: flex;
  a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.3rem;
    margin-left: 10px;
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-transform: uppercase; */

  @media (max-width: 1068px) {
    flex-direction: column;
    left: 800px;
    display: none;
  }
`;
const NavItem = styled.div`
  margin: 0 20px;
  a:hover {
    color: #f3bb17;
  }
`;
const Hero = styled.div`
  min-height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2,1fr);
  gap: 70px;

  @media (max-width: 1068px) {
    grid-template-columns: repeat(1,1fr);
  }
`;
const Title = styled.h1`
  font-size: 3rem;
margin-top: 6rem;
  span {
    color: #f3bb17;
  }
  @media (max-width: 1068px) {
    font-size: 4rem;
  }
  @media (max-width: 650px) {
    font-size: 2.5rem;
    line-height:3rem;
  }
`;
const Paragraph = styled.p`
  color: grey;
  margin-bottom: 3rem;

  span {
    font-weight: bold;
  }
`;
const Grid_One = styled.div``
const Grid_Two = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const GetConnected = styled.div`
  a {
    width: 42%;
    padding: 1rem;
    color: #222237;
    background: #f3bb17;
    border-radius: 30px;
    margin-top: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease--out;

    &:hover {
      box-shadow: 0px 8px 15px rgba(243, 187, 23, 0.8);
      opacity: 0.9;
      color: #fff;
    }
  }
`;
const MobileNav = styled.div`
cursor: pointer;
  @media(min-width: 1068px) {
    display: none;
  }
`;

import styled from "styled-components";
import GithubIcon from "../assets/icons/logo-github.svg";
const About = () => {
  return (
    <div>
      <Heading>
        <h1>About</h1>
        <p>
          Welcome to Fashion, your one-stop shop for premium sports equipment
          and apparel!
        </p>
        <p>
          We are a team of sports enthusiasts who are dedicated to providing
          high-quality products at affordable prices.
        </p>
        <p>
          Our mission is to help athletes of all levels perform at their best
        </p>
        <p>and enjoy their favorite sports to the fullest.</p>
        <br />
        <br />
      </Heading>
    </div>
  );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
  display: block;

  a:nth-of-type(1) {
    border-bottom: violet solid 2px;
  }
`;

export default About;

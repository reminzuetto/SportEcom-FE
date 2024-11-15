import styled from "styled-components";
import GithubIcon from "../assets/icons/logo-github.svg";
const About = () => {
  return (
    <div>
      <Heading>
        <h1>About</h1>
        <p>
          Welcome to Fashion, your one-stop shop for premium sports equipment
          and apparel! We believe in the power of sports to inspire, empower,
          and bring people together. That’s why we’re dedicated to providing
          high-quality gear that supports athletes of all levels—from beginners
          finding their passion to seasoned pros pushing their limits. Our wide
          range of products includes everything from basketballs and soccer
          balls to fitness apparel and specialized training equipment. Each item
          is carefully selected to meet the highest standards of durability,
          comfort, and performance, ensuring you get the best out of every
          workout and game. At Fashion, we’re more than just a store. We’re a
          community of sports lovers who share a commitment to health, fitness,
          and excellence. Join us, gear up, and elevate your game!
        </p>
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

import styled from "styled-components";
import GithubIcon from "../assets/icons/logo-github.svg"; // Đây là icon bạn đang sử dụng

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
        {/* Thêm phần ảnh và hiệu ứng chuyển động */}
        <ImageContainer>
          <Image />
        </ImageContainer>
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

// Styled component cho container chứa hình ảnh
const ImageContainer = styled.div`
  margin-top: 2rem;
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  overflow: hidden;
`;

// Styled component cho ảnh với hiệu ứng thay đổi mỗi 3s
const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${GithubIcon}); /* Hình ảnh mặc định */
  background-size: cover;
  background-position: center;
  animation: changeImage 9s infinite; /* Thời gian mỗi lần thay đổi là 9s để 3 hình ảnh thay đổi trong 9s */

  /* Các hình ảnh khác */
  @keyframes changeImage {
    0% {
      background-image: "/src/assets/anh1.jpg"; /* Hình ảnh đầu tiên */
    }
    33% {
      background-image: "/src/assets/anh2.jpg"; /* Hình ảnh thứ hai */
    }
    66% {
      background-image: "/src/assets/anh3.jpg"; /* Hình ảnh thứ ba */
    }
    100% {
      background-image: "/src/assets/anh1.jpg"; /* Quay lại hình ảnh đầu tiên */
    }
  }
`;

export default About;

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
        <ImageRow>
          <ImageContainer>
            <Image1 />
          </ImageContainer>
          <ImageContainer>
            <Image2 />
          </ImageContainer>
          <ImageContainer>
            <Image3 />
          </ImageContainer>
        </ImageRow>
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

const ImageRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ImageContainer = styled.div`
  margin-top: 2rem;
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  overflow: hidden;
`;

const Image1 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/anh1.jpg"); /* Cập nhật cú pháp đúng */
  background-size: cover;
  background-position: center;
  animation: changeImage 9s infinite;

  const Image2 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/anh1.jpg"); /* Cập nhật cú pháp đúng */
  background-size: cover;
  background-position: center;
  animation: changeImage 9s infinite;

  const Image3 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/anh1.jpg"); /* Cập nhật cú pháp đúng */
  background-size: cover;
  background-position: center;
  animation: changeImage 9s infinite;

  /* Các hình ảnh khác */
  @keyframes changeImage {
    0% {
      background-image: url("/src/assets/anh1.jpg"); /* Cập nhật cú pháp đúng */
    }
    33% {
      background-image: url("/src/assets/anh2.jpg"); /* Cập nhật cú pháp đúng */
    }
    66% {
      background-image: url("/src/assets/anh3.jpg"); /* Cập nhật cú pháp đúng */
    }
    100% {
      background-image: url("/src/assets/anh1.jpg"); /* Cập nhật cú pháp đúng */
    }
  }
`;

export default About;

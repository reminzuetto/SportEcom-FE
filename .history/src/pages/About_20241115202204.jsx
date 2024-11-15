import styled from "styled-components";

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
          <Image1 />
          <Image2 />
          <Image3 />
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
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 20px; /* Khoảng cách giữa các hình ảnh */
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  animation: changeImage 9s infinite;
`;

const Image1 = styled(Image)`
  background-image: url("/src/assets/anh1.jpg");
  animation: changeImage1 9s infinite;
`;

const Image2 = styled(Image)`
  background-image: url("/src/assets/anh2.jpg");
  animation: changeImage2 9s infinite;
`;

const Image3 = styled(Image)`
  background-image: url("/src/assets/anh3.jpg");
  animation: changeImage3 9s infinite;
`;

const changeImageKeyframes = (imageNumber) => {
  return `
    @keyframes changeImage${imageNumber} {
      0% {
        background-image: url("/src/assets/anh${imageNumber}.jpg");
      }
      33% {
        background-image: url("/src/assets/anh${(imageNumber % 3) + 1}.jpg");
      }
      66% {
        background-image: url("/src/assets/anh${(imageNumber % 3) + 2}.jpg");
      }
      100% {
        background-image: url("/src/assets/anh${imageNumber}.jpg");
      }
    }
  `;
};

// Cập nhật keyframes cho từng ảnh
const globalKeyframes = `
  ${changeImageKeyframes(1)}
  ${changeImageKeyframes(2)}
  ${changeImageKeyframes(3)}
`;

export const GlobalStyles = createGlobalStyle`
  ${globalKeyframes}
`;

export default About;

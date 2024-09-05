import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const headingStyle = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '4',
  size: '2xl',
};

const Home = () => {
  return <MyCarousel />;
};

// ONLY CAROUSEL FUNCTION AND CALLING IN THE HOME FUNCTION
const MyCarousel = () => {
  const img1 = 'https://cdn.wallpapersafari.com/45/83/INzU4Z.jpg';
  const img2 = 'https://wallpaperaccess.com/full/7002342.jpg';
  const img3 =
    'https://i.pinimg.com/originals/eb/41/f6/eb41f6af5d206d163e8e784859bce156.jpg';

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      showArrows={true}
      showThumbs={true}
    >
      <Box>
        <Image src={img1} h={'100vh'} />
        <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingStyle}>
          Image 1
        </Heading>
      </Box>
      <Box>
        <Image src={img2} h={'100vh'} />
        <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingStyle}>
          Image 2
        </Heading>
      </Box>
      <Box>
        <Image src={img3} h={'100vh'} />
        <Heading bgColor={'blackAlpha.700'} color={'white'} {...headingStyle}>
          Image 3
        </Heading>
      </Box>
    </Carousel>

    // <Carousel
    //   autoPlay
    //   infiniteLoop
    //   interval={3000}
    //   showStatus={false}
    //   showArrows={true}
    //   showThumbs={false}
    // >
    //   <Box>
    //     <Image src={img1} height={'100vh'} />
    //     <Heading {...headingStyle} color={'white'}>
    //       Image 1
    //     </Heading>
    //   </Box>
    //   <Box>
    //     <Image src={img2} height={'100vh'} />
    //     <Heading {...headingStyle} color={'white'}>
    //       Image 2
    //     </Heading>
    //   </Box>
    //   <Box>
    //     <Image src={img3} height={'100vh'} />
    //     <Heading {...headingStyle} color={'white'}>
    //       Image 3
    //     </Heading>
    //   </Box>
    // </Carousel>
  );
};

export default Home;

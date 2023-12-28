import Image from 'next/image';

const Index = () => {
  return (
    <Image
      src='/sample_image.jpg'
      alt='Picture of the author'
      width={500}
      height={500}
      priority /* <--- Add priority and now title is gone */
    />
  );
};

export default Index;

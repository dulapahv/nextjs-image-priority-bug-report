import Image from 'next/image';
import Head from 'next/head'; 

const Index = () => {
  return (
    <div>
      <Head>
        <title>My App</title>
       
      </Head>
    <Image
      src='/sample_image.jpg'
      alt='Picture of the author'
      width={500}
      height={500}
      priority /* <--- Add priority and now title is gone */
    />
    </div>
  );
};

export default Index;

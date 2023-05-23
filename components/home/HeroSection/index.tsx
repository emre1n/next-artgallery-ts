import Image from 'next/image';

import heroImage from '../../../public/images/heroimage.png';

export default function HeroSection() {
  return (
    <section className="flex justify-center gap-11 py-10 md:mx-[120px] md:py-20">
      <div className="flex flex-col gap-4">
        <div className="flex h-[600px] w-[800px] overflow-hidden">
          <Image
            className="max-w-[800px] object-cover object-center"
            src={heroImage}
            alt="Hero Image"
            width={800}
            height={600}
            priority={true}
          />
        </div>
        <div>
          <p className="text-xl text-gray-main">Robert Delaunay</p>
          <p className="text-xl italic text-gray-lightlabel">
            Champs de Mars: The Red Tower
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center pb-[72px]">
        <div className="flex flex-col gap-4 font-serif">
          <p className="font-serif text-4xl">
            Discover the brilliant works of contemporary artists
          </p>
          <div className="flex flex-col gap-8">
            <p className="font-serif text-xl">
              Discover art works from our collection of contemporary pieces
            </p>
            <p className="font-serif text-xl">
              Our wide variety of curated galleries and local exhibitions
              presents the works of outstanding artists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export const Partners = () => {
  return (
    <section className="my-16 py-20 text-center">
      <h3 className="font-anna text-7xl uppercase text-gray-brand">
        Our partners
      </h3>
      <div className="container m-auto flex flex-wrap items-center py-10">
        <div className="flex flex-1">
          <Image
            src="/images/logos/gahcc.png"
            className="max-w-sm object-contain"
            alt="Greater Austin Hispanic Chamber of Commerce Logo"
            width={500}
            height={700}
          />
        </div>
        <div className="flex flex-1"></div>
        <div className="flex flex-1"></div>
      </div>
    </section>
  );
};

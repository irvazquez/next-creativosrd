import Image from 'next/image';

export const ContactUs = () => {
  return (
    <section className="bg-orange-brand py-10 text-center">
      <div className="container mx-auto">
        <h3 className="font-anna text-7xl uppercase text-white">Contact us</h3>
        <div className="my-10 flex min-h-full flex-col flex-wrap md:flex-row">
          <div className="my-10 flex-1">
            <div className="relative h-60 w-full">
              <Image
                src="/images/icons/usa_flag.svg"
                alt="United State Flag"
                fill={true}
              />
            </div>
          </div>
          <div className="my-10 flex-1">
            <div className="relative h-60 w-full">
              <Image
                src="/images/icons/mx_flag.svg"
                alt="México Flag"
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

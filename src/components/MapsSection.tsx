type LocationSectionProps = {
  mapUrl: string;
  companyName: string;
  address: string;
};

const LocationSection = ({
  mapUrl,
  companyName,
  address,
}: LocationSectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-68 md:px-32 py-12 bg-white">
      <div className="bg-gradient-to-b from-[#08268F] to-[#00BFFF] p-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 font-lato">
          Where we Located?
        </h2>

        <div className="w-full rounded-lg overflow-hidden border-4 border-[#00BFFF] mb-6">
          <iframe
            src={mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-center text-white p-4 rounded-lg w-full flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-2 font-lato">
            {companyName}
          </h3>
          <p className="text-lg md:text-base">{address}</p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

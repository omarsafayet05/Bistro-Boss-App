const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-4/12 my-8 text-center mx-auto">
      <p className="text-yellow-600 mb-2">--{subHeading}--</p>
      <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;

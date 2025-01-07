const Interests = () => {
  const interests = [
    "Cutting-edge AI applications and data-driven solutions",
    "Combining analytical and creative skills to solve complex problems",
    "Mentoring and sharing knowledge with others",
    "Reading books",
    "Sports: football, kitesurfing, tennis and golf",
    "Woodworking and building"
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Interests</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {interests.map((interest, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{interest}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests; 
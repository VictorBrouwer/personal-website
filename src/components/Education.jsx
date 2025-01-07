const Education = () => {
  const education = [
    {
      degree: "Master's in Data Science",
      institution: "University of Amsterdam",
      period: "2024 – 2025"
    },
    {
      degree: "Core Program",
      institution: "Codam Coding College",
      period: "2022 – 2024"
    },
    {
      degree: "Master's in Artificial Intelligence (Pre-Master's included)",
      institution: "University of Utrecht",
      period: "2021 – 2022"
    },
    {
      degree: "Bachelor's in Liberal Arts and Sciences",
      institution: "University College Utrecht",
      period: "2018 – 2021",
      major: "Major: Economics & Chemistry"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        
        <div className="grid gap-6 max-w-3xl">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500">{edu.period}</p>
              {edu.major && <p className="text-gray-700 mt-1">{edu.major}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 
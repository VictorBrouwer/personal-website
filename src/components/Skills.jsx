const Skills = () => {
  const technicalSkills = [
    "C", "C++", "Python", "JavaScript", "Rust", "Bash", "SQL", "TypeScript",
    "Microsoft Excel", "Salesforce", "Microsoft PowerPoint",
    "Machine Learning", "Data Analysis", "Artificial Intelligence"
  ];

  const softSkills = [
    "Leadership and Operations Management",
    "Analytical Thinking and Problem-Solving",
    "Multidisciplinary Team Collaboration"
  ];

  const languages = [
    { language: "Dutch", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Spanish", level: "Intermediate (B1 Level)" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul className="list-disc list-inside">
              {softSkills.map((skill, index) => (
                <li key={index} className="text-gray-700 mb-2">{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {languages.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium">{item.language}</h4>
                <p className="text-gray-600">{item.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
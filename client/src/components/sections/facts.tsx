import { Card, CardContent } from "@/components/ui/card";

export function Facts() {
  const facts = [
    {
      number: "12",
      title: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      number: "3",
      title: "Projects",
      description: "Successfully completed projects"
    },
    {
      number: "0",
      title: "Years of Experience",
      description: "Fresh graduate ready to grow"
    },
    {
      number: "1",
      title: "Course",
      description: "Java Full Stack Development"
    }
  ];

  return (
    <section id="facts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Facts</h2>
          <p className="text-xl text-gray-600">In my extensive project portfolio, I've not only completed numerous initiatives but also successfully
            commercialized select projects. Additionally, my achievements include securing prestigious awards both in
            project execution and academic endeavors, reflecting a dedication to excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <Card key={index} className="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">{fact.number}</div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

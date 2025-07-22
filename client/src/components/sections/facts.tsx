import { Card, CardContent } from "@/components/ui/card";

export function Facts() {
  const facts = [
    {
      number: "50+",
      title: "Projects Completed",
      description: "Successful web applications delivered"
    },
    {
      number: "25+",
      title: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      number: "5+",
      title: "Years Experience",
      description: "Professional development expertise"
    },
    {
      number: "15+",
      title: "Technologies",
      description: "Modern tools and frameworks"
    }
  ];

  return (
    <section id="facts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Key Facts</h2>
          <p className="text-xl text-gray-600">Numbers that tell my professional story</p>
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

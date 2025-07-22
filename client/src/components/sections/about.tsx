export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">About</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            As a graduate in Information Technology Engineering with honors in
            Artificial Intelligence and Machine Learning, I am currently expanding my expertise in Information Technology, 
            furthering my knowledge and skills to excel in this dynamic industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern workspace with laptop and code" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-6">Java Developer & Web Developer</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am currently acquiring knowledge in Java technology and web development through training and internship
              opportunities.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Knowledgeable Java developer with expertise in SQL and web development. Skilled in creating robust and
              scalable applications using Java technologies. Adaptive in nature and like to work in a team. I have strong social skills and a
              colloquial. I'm now looking forward to taking the next step in my career. My ambition is to work in the
              field of New Technology.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-secondary mb-2">Birthday</h4>
                <p className="text-gray-600">01 April 2001</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Age</h4>
                <p className="text-gray-600">23</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Phone</h4>
                <p className="text-gray-600">+91 8329274587</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Degree</h4>
                <p className="text-gray-600">B.E. Information Technology</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">City</h4>
                <p className="text-gray-600">Pune, Maharashtra, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Email</h4>
                <p className="text-gray-600">ekanathchangade@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

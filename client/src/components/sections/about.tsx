export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey, background, and what drives me as a developer.
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
            <h3 className="text-2xl font-semibold text-secondary mb-6">Passionate about creating digital experiences</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for creating intuitive, efficient, and scalable web applications. 
              My journey began 5 years ago when I discovered the power of code to solve real-world problems.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge through technical blog posts and community meetups.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-secondary mb-2">Location</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Experience</h4>
                <p className="text-gray-600">5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Education</h4>
                <p className="text-gray-600">BS Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Availability</h4>
                <p className="text-gray-600">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

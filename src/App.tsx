import React from 'react';
import { ArrowRight, FileText, Users, MessageSquare, Briefcase, ChevronDown, Star, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-[#1a5ab0] to-[#6dc14c] text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-8 h-8" />
            <span className="text-xl font-bold">CV Strategist</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-gray-200">Servicios</a>
            <a href="#portfolio" className="hover:text-gray-200">Portafolio</a>
            <a href="#testimonials" className="hover:text-gray-200">Testimonios</a>
            <a href="#contact" className="hover:text-gray-200">Contacto</a>
          </div>
          <button className="bg-[#6dc14c] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
            Contratar Ahora
          </button>
        </nav>

        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Profesionaliza tu imagen
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Destaca en el mercado laboral con currículums diseñados profesionalmente y asesoría personalizada.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#1a5ab0] px-8 py-3 rounded-full font-semibold flex items-center hover:bg-gray-100 transition">
                Ver Diseños
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-[#6dc14c] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
                Empezar Ahora
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
              alt="Professional CV" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1a5ab0] mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-12 h-12 text-[#6dc14c]" />,
                title: "Diseño de CV",
                description: "Currículums profesionales y ATS-friendly que destacan tus logros."
              },
              {
                icon: <Users className="w-12 h-12 text-[#6dc14c]" />,
                title: "Asesoría Profesional",
                description: "Guía experta para potenciar tu desarrollo profesional."
              },
              {
                icon: <Briefcase className="w-12 h-12 text-[#6dc14c]" />,
                title: "LinkedIn Optimization",
                description: "Optimiza tu perfil para atraer más oportunidades."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1a5ab0] mb-16">
            Portafolio de Diseños
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={img} alt={`Portfolio ${index + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1a5ab0] mb-16">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Ana García",
                role: "Marketing Manager",
                text: "Gracias a CV Strategist conseguí mi trabajo soñado. El diseño profesional marcó la diferencia."
              },
              {
                name: "Carlos Ruiz",
                role: "Software Developer",
                text: "La asesoría personalizada fue clave para reorientar mi carrera profesional."
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="flex text-[#6dc14c]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1a5ab0] mb-16">
            Contáctanos
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6dc14c] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6dc14c] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6dc14c] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a5ab0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a5ab0] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-6 h-6" />
                <span className="text-lg font-bold">CV Strategist</span>
              </div>
              <p className="text-gray-300">
                Transformando carreras profesionales con diseños excepcionales.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Diseño de CV</li>
                <li>Asesoría Profesional</li>
                <li>LinkedIn Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Inicio</li>
                <li>Portafolio</li>
                <li>Testimonios</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>info@cvstrategist.com</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 CV Strategist. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
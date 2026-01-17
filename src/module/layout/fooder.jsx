import { Phone, Mail } from "lucide-react";
function Footer (){
    return(
    <footer className="bg-gray-900 text-white pt-10 pb-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <img src="./Logo.png" alt="Logo" className="w-20 h-auto object-contain" />
                <span className="text-xl font-bold text-indigo-400 tracking-wide">Programming Solutions</span>
              </div>
              <h2 className="text-3xl font-extrabold mb-6">Contáctanos</h2>
              <p className="text-gray-400 mb-6">
                Estamos listos para ayudarte a construir la solución que necesitas.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/529213068558" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-indigo-400 transition-colors">
                  <Phone />
                  <span>+52 921 306 8558</span>
                </a>
                <a href="mailto:victor_blanco_reyes@outlook.com" className="flex items-center gap-3 text-lg hover:text-indigo-400 transition-colors">
                  <Mail />
                  <span>victor_blanco_reyes@outlook.com</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-2xl md:h-80 h-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60688.44806588071!2d-96.18266745987721!3d18.07025828107331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3e697e38a7355%3A0xe5cebe583938fd15!2sSan%20Juan%20Bautista%20Tuxtepec%2C%20Oax.!5e0!3m2!1ses!2smx!4v1765604440588!5m2!1ses!2smx"
                className="w-full h-full border-0"
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className="text-center text-gray-500 border-t border-gray-800 pt-8 mt-12">
            <p>&copy; {new Date().getFullYear()} MWDEV. Todos los derechos reservados.</p>
          </div>
        </div>
    </footer>
    )
}

export default Footer;
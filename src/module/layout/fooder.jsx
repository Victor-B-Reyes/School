import { MessageCircle, Mail, Youtube, Instagram, Facebook } from "lucide-react";
function Footer (){
    return(
    <footer className="bg-gray-900 text-white pt-10 pb-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div>
              <h2 className="mb-2 text-xl font-semibold">Conecta conmigo</h2>
              <p className="mb-5 text-sm text-gray-300">Contáctame o sígueme en mis redes sociales.</p>
              <div className="flex items-center gap-5">
                <a href="https://wa.me/529213068558" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" title="WhatsApp" className="hover:text-indigo-400 transition-colors">
                  <MessageCircle size={24} />
                </a>
                <a href="mailto:victor_blanco_reyes@outlook.com" aria-label="Enviar correo" title="Correo" className="hover:text-indigo-400 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://www.youtube.com/@Mr_White_Dev" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" className="hover:text-indigo-400 transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="https://www.instagram.com/mwdev.es" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="hover:text-indigo-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/share/1F6ahQ6S5y/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="hover:text-indigo-400 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-2xl md:h-60 h-30">
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

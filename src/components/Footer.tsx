import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "О нас", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Отзывы", href: "#reviews" },
    { name: "Контакты", href: "#contacts" }
  ];

  const services = [
    "Терапия",
    "Имплантация", 
    "Ортодонтия",
    "Отбеливание",
    "Детская стоматология"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О клинике */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Д</span>
              </div>
              <span className="text-xl font-semibold">ДентаЛюкс</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Современная стоматологическая клиника в Минске. 
              Здоровые и красивые улыбки каждый день!
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span className="text-sm">Более 5000 довольных пациентов</span>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Наши услуги</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-gray-300">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>г. Минск, ул. Ленина, 10</div>
                  <div className="text-sm">2-й этаж, офис 201</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+375291234567" className="text-gray-300 hover:text-white transition-colors">
                  +375 29 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@dentalux.by" className="text-gray-300 hover:text-white transition-colors">
                  info@dentalux.by
                </a>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/375291234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  📱
                </a>
                <a 
                  href="https://t.me/dentalux" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  ✈️
                </a>
                <a 
                  href="https://instagram.com/dentalux" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div>
              © {currentYear} ДентаЛюкс. Все права защищены.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span>Пн-Вс: 9:00 - 21:00</span>
              <span>•</span>
              <span>Без выходных</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Д</span>
            </div>
            <span className="text-xl font-semibold text-primary">ДентаЛюкс</span>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Контактная информация и кнопка записи */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+375 29 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>9:00 - 21:00</span>
            </div>
            <Button 
              onClick={() => scrollToSection("appointment")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Записаться
            </Button>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection("reviews")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection("contacts")}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
              <div className="px-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Phone className="w-4 h-4" />
                  <span>+375 29 123-45-67</span>
                </div>
                <Button 
                  onClick={() => scrollToSection("appointment")}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Записаться
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
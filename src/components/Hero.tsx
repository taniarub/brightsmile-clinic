import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-smile.jpg";

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Здоровая улыбка" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            {/* Бейдж */}
            <div className="inline-flex items-center space-x-2 bg-accent/80 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Лучшая стоматология Минска 2024</span>
            </div>

            {/* Основной заголовок */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Здоровые и красивые{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                улыбки
              </span>{" "}
              каждый день
            </h1>

            {/* Подзаголовок */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Современная стоматологическая клиника в Минске с передовыми технологиями 
              и индивидуальным подходом к каждому пациенту
            </p>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                onClick={scrollToAppointment}
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto"
              >
                Записаться на приём
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-lg px-8 py-6 h-auto border-primary/20 hover:bg-primary/5"
              >
                Наши услуги
              </Button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">пациентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">услуг</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
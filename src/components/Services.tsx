import { Heart, Drill, Smile, Sparkles, Baby } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Терапия",
      description: "Лечение кариеса, пульпита, периодонтита. Профессиональная гигиена полости рта.",
      price: "от 50 BYN",
      features: ["Безболезненное лечение", "Современные пломбы", "Профилактика заболеваний"]
    },
    {
      icon: Drill,
      title: "Имплантация",
      description: "Установка зубных имплантов с гарантией. Полное восстановление жевательной функции.",
      price: "от 800 BYN",
      features: ["Имплантаты премиум-класса", "Пожизненная гарантия", "Быстрое приживление"]
    },
    {
      icon: Smile,
      title: "Ортодонтия",
      description: "Исправление прикуса брекетами и элайнерами. Красивая улыбка в любом возрасте.",
      price: "от 1200 BYN",
      features: ["Металлические и керамические брекеты", "Невидимые элайнеры", "Детская ортодонтия"]
    },
    {
      icon: Sparkles,
      title: "Отбеливание",
      description: "Профессиональное отбеливание зубов на 6-8 тонов. Безопасно и эффективно.",
      price: "от 200 BYN",
      features: ["Zoom-отбеливание", "Домашние системы", "Долговременный результат"]
    },
    {
      icon: Baby,
      title: "Детская стоматология",
      description: "Специализированное лечение зубов у детей. Комфортная атмосфера без страха.",
      price: "от 40 BYN",
      features: ["Игровая зона", "Седация закисью азота", "Опытные детские врачи"]
    }
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Полный спектр стоматологических услуг с использованием современных технологий 
            и материалов премиум-класса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-card h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-2xl font-bold text-primary mb-4">
                  {service.price}
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToAppointment}
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-colors"
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="bg-accent/50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Не нашли нужную услугу?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Мы оказываем полный спектр стоматологических услуг. 
            Свяжитесь с нами для консультации по вашему случаю.
          </p>
          <Button 
            onClick={scrollToAppointment}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
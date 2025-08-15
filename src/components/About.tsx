import { CheckCircle, Award, Users, Microscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

const About = () => {
  const advantages = [
    {
      icon: Award,
      title: "Опытные врачи",
      description: "Команда сертифицированных специалистов с опытом работы более 10 лет"
    },
    {
      icon: Microscope,
      title: "Современное оборудование",
      description: "Новейшие технологии диагностики и лечения зубов"
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Персональный план лечения для каждого пациента"
    },
    {
      icon: CheckCircle,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды стоматологических услуг"
    }
  ];

  const doctors = [
    {
      name: "Ирина Александровна Петрова",
      specialty: "Главный врач, стоматолог-терапевт",
      experience: "15 лет опыта",
      image: doctor1
    },
    {
      name: "Михаил Викторович Иванов",
      specialty: "Стоматолог-хирург, имплантолог",
      experience: "12 лет опыта",
      image: doctor2
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            О нашей клинике
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ДентаЛюкс — это современная стоматологическая клиника, которая заботится 
            о здоровье и красоте ваших зубов уже более 10 лет
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Текстовая часть */}
          <div className="animate-fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Почему выбирают нас?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Мы объединили многолетний опыт, передовые технологии и искреннюю заботу 
              о каждом пациенте. Наша миссия — сделать стоматологическое лечение 
              комфортным, безболезненным и доступным для всех.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <advantage.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {advantage.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Статистика */}
          <div className="animate-scale-in">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">видов услуг</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Наши врачи */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Наши врачи
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Команда профессионалов с многолетним опытом и постоянным повышением квалификации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover-lift border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {doctor.name}
                    </h4>
                    <p className="text-sm text-primary mb-1">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {doctor.experience}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
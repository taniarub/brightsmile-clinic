import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      details: ["г. Минск, ул. Ленина, 10", "2-й этаж, офис 201"],
      action: "Построить маршрут"
    },
    {
      icon: Phone,
      title: "Телефон",
      details: ["+375 29 123-45-67", "+375 17 123-45-67"],
      action: "Позвонить"
    },
    {
      icon: Clock,
      title: "Режим работы",
      details: ["Пн-Вс: 9:00 - 21:00", "Без выходных"],
      action: null
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dentalux.by", "appointment@dentalux.by"],
      action: "Написать"
    }
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: "📱", url: "https://wa.me/375291234567", color: "bg-green-500" },
    { name: "Telegram", icon: "✈️", url: "https://t.me/dentalux", color: "bg-blue-500" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com/dentalux", color: "bg-pink-500" },
    { name: "Facebook", icon: "👥", url: "https://facebook.com/dentalux", color: "bg-blue-600" }
  ];

  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами удобным способом или посетите нашу клинику 
            в центре Минска
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-8 animate-slide-right">
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="hover-lift hover-glow border-0 shadow-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          {contact.title}
                        </h3>
                        <div className="space-y-1">
                          {contact.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                        {contact.action && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-3 border-primary/20 hover:bg-primary/5"
                          >
                            {contact.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Социальные сети */}
            <Card className="shadow-card border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                  Мы в социальных сетях
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start border-primary/20 hover:bg-primary/5"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <span className="text-lg mr-2">{social.icon}</span>
                        {social.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Карта */}
          <div className="h-full min-h-[500px] animate-slide-left">
            <Card className="h-full shadow-card border-0 hover-glow">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Интерактивная карта
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-sm">
                      г. Минск, ул. Ленина, 10<br />
                      2-й этаж, офис 201
                    </p>
                    <Button 
                      className="bg-gradient-primary hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <a 
                        href="https://maps.google.com/?q=Минск+ул.+Ленина+10" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Открыть в Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12">
          <Card className="shadow-card border-0 bg-accent/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Как до нас добраться
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div>
                  <div className="font-medium text-foreground mb-2">🚇 Метро</div>
                  <p>Станция "Октябрьская"<br />5 минут пешком</p>
                </div>
                <div>
                  <div className="font-medium text-foreground mb-2">🚌 Общественный транспорт</div>
                  <p>Остановка "Площадь Ленина"<br />Автобусы: 1, 5, 29, 91</p>
                </div>
                <div>
                  <div className="font-medium text-foreground mb-2">🚗 На автомобиле</div>
                  <p>Парковка во дворе<br />Бесплатно для пациентов</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
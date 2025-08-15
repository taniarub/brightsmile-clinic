import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Михайловна",
      age: "32 года",
      service: "Имплантация",
      rating: 5,
      text: "Долго боялась идти к стоматологу, но в ДентаЛюкс меня встретили с пониманием. Имплантация прошла безболезненно, результатом очень довольна!",
      avatar: "👩‍💼"
    },
    {
      name: "Дмитрий Петров",
      age: "28 лет",
      service: "Ортодонтия",
      rating: 5,
      text: "Носил брекеты 1.5 года. Врачи постоянно контролировали процесс, результат превзошёл ожидания. Теперь улыбаюсь без стеснения!",
      avatar: "👨‍💻"
    },
    {
      name: "Елена Васильевна",
      age: "45 лет",
      service: "Отбеливание",
      rating: 5,
      text: "Отбелила зубы на 6 тонов! Процедура комфортная, никакой боли. Результат держится уже полгода. Рекомендую всем!",
      avatar: "👩‍🏫"
    },
    {
      name: "Игорь Семёнов",
      age: "38 лет",
      service: "Терапия",
      rating: 5,
      text: "Лечил сложный кариес. Современное оборудование, качественные материалы. Пломба стоит уже 2 года без проблем.",
      avatar: "👨‍🔧"
    },
    {
      name: "Марина Коваль",
      age: "29 лет",
      service: "Детская стоматология",
      rating: 5,
      text: "Привела ребёнка 5 лет. Врач нашёл подход, ребёнок не плакал. Теперь дочка сама просится к стоматологу на профилактику!",
      avatar: "👩‍🍳"
    },
    {
      name: "Александр Зуев",
      age: "52 года",
      service: "Имплантация",
      rating: 5,
      text: "Установил 3 импланта. Операция прошла быстро, заживление без осложнений. Жую как молодой! Спасибо докторам!",
      avatar: "👨‍💼"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Отзывы наших пациентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Более 5000 довольных пациентов доверили нам своё здоровье. 
            Читайте реальные отзывы о нашей работе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="hover-lift border-0 shadow-card h-full">
              <CardContent className="p-6">
                {/* Цитата */}
                <div className="flex justify-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Текст отзыва */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  "{review.text}"
                </p>

                {/* Рейтинг */}
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Информация о пациенте */}
                <div className="text-center">
                  <div className="text-4xl mb-2">{review.avatar}</div>
                  <div className="font-semibold text-foreground mb-1">
                    {review.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {review.age}
                  </div>
                  <div className="text-xs text-primary font-medium px-3 py-1 bg-primary/10 rounded-full inline-block">
                    {review.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Статистика отзывов */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">довольных пациентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">средняя оценка</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">рекомендуют друзьям</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1500+</div>
              <div className="text-sm text-muted-foreground">отзывов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showPhotographerForm, setShowPhotographerForm] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  const photographers = [
    {
      id: 1,
      name: "Анна Петрова",
      city: "Москва",
      rating: 4.9,
      reviews: 47,
      price: "от 25 000 ₽",
      style: "Документальная",
      experience: "5 лет",
      avatar: "/img/e1ad9975-f49d-40e9-8e9d-72f50c30051c.jpg",
      description:
        "Специализируюсь на деликатной съёмке родов, создавая трогательные кадры первых моментов жизни",
    },
    {
      id: 2,
      name: "Елена Смирнова",
      city: "Санкт-Петербург",
      rating: 4.8,
      reviews: 32,
      price: "от 20 000 ₽",
      style: "Художественная",
      experience: "3 года",
      avatar: "/img/e1ad9975-f49d-40e9-8e9d-72f50c30051c.jpg",
      description:
        "Создаю нежные и эмоциональные кадры, передающие магию момента рождения",
    },
    {
      id: 3,
      name: "Мария Кузнецова",
      city: "Екатеринбург",
      rating: 4.7,
      reviews: 28,
      price: "от 18 000 ₽",
      style: "Естественная",
      experience: "4 года",
      avatar: "/img/e1ad9975-f49d-40e9-8e9d-72f50c30051c.jpg",
      description:
        "Фиксирую естественные эмоции и моменты, создавая семейную историю",
    },
  ];

  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Екатеринбург",
    "Новосибирск",
    "Казань",
  ];
  const priceRanges = [
    "до 15 000 ₽",
    "15 000 - 25 000 ₽",
    "25 000 - 40 000 ₽",
    "от 40 000 ₽",
  ];
  const styles = [
    "Документальная",
    "Художественная",
    "Естественная",
    "Семейная",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-blush-pink to-light-blue">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-soft-gray/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-warm-sand to-primary rounded-full flex items-center justify-center">
                <Icon name="Camera" size={18} className="text-white" />
              </div>
              <h1 className="text-2xl font-montserrat font-bold text-gray-800">
                Роды в Кадре
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog
                open={showRegistration}
                onOpenChange={setShowRegistration}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-white/50 hover:bg-white/80 border-warm-sand/30"
                  >
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-montserrat">
                      Вход в аккаунт
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button className="w-full bg-warm-sand hover:bg-warm-sand/90">
                      Войти
                    </Button>
                    <p className="text-sm text-center text-gray-600">
                      Нет аккаунта?{" "}
                      <span className="text-warm-sand cursor-pointer hover:underline">
                        Зарегистрироваться
                      </span>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog
                open={showPhotographerForm}
                onOpenChange={setShowPhotographerForm}
              >
                <DialogTrigger asChild>
                  <Button className="bg-warm-sand hover:bg-warm-sand/90 text-white">
                    Разместить анкету
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-montserrat">
                      Анкета фотографа
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="fname">Имя</Label>
                        <Input id="fname" placeholder="Анна" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lname">Фамилия</Label>
                        <Input id="lname" placeholder="Петрова" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="city">Город</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите город" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="experience">Опыт работы</Label>
                      <Input id="experience" placeholder="3 года" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="price">Стоимость услуг</Label>
                      <Input id="price" placeholder="от 20 000 ₽" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="style">Стиль съёмки</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите стиль" />
                        </SelectTrigger>
                        <SelectContent>
                          {styles.map((style) => (
                            <SelectItem key={style} value={style}>
                              {style}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">О себе</Label>
                      <Textarea
                        id="description"
                        placeholder="Расскажите о своем опыте и подходе к съёмке родов"
                        rows={3}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="portfolio">Ссылка на портфолио</Label>
                      <Input
                        id="portfolio"
                        placeholder="https://your-portfolio.com"
                      />
                    </div>
                    <Button className="w-full bg-warm-sand hover:bg-warm-sand/90">
                      Отправить анкету
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-800 mb-6 leading-tight">
              Найдите проверенного фотографа для съёмки родов
            </h2>
            <p className="text-xl font-open-sans text-gray-600 mb-12 max-w-2xl mx-auto">
              Деликатная съёмка самых важных моментов в жизни вашей семьи.
              Только опытные фотографы с положительными отзывами мам.
            </p>

            {/* Search Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-soft-gray/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="space-y-2">
                  <Label className="font-open-sans font-medium text-gray-700">
                    Город
                  </Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="bg-white border-soft-gray/30">
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="font-open-sans font-medium text-gray-700">
                    Бюджет
                  </Label>
                  <Select
                    value={selectedPrice}
                    onValueChange={setSelectedPrice}
                  >
                    <SelectTrigger className="bg-white border-soft-gray/30">
                      <SelectValue placeholder="Выберите бюджет" />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="font-open-sans font-medium text-gray-700">
                    Стиль
                  </Label>
                  <Select
                    value={selectedStyle}
                    onValueChange={setSelectedStyle}
                  >
                    <SelectTrigger className="bg-white border-soft-gray/30">
                      <SelectValue placeholder="Выберите стиль" />
                    </SelectTrigger>
                    <SelectContent>
                      {styles.map((style) => (
                        <SelectItem key={style} value={style}>
                          {style}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="font-open-sans font-medium text-gray-700 opacity-0">
                    Поиск
                  </Label>
                  <Button className="w-full bg-warm-sand hover:bg-warm-sand/90 text-white h-10">
                    <Icon name="Search" size={18} className="mr-2" />
                    Найти
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photographers Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Проверенные фотографы
            </h3>
            <p className="text-lg font-open-sans text-gray-600">
              Каждый фотограф прошёл верификацию и имеет положительные отзывы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographers.map((photographer) => (
              <Card
                key={photographer.id}
                className="bg-white/90 backdrop-blur-sm border-soft-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16 border-2 border-warm-sand/30">
                      <AvatarImage
                        src={photographer.avatar}
                        alt={photographer.name}
                      />
                      <AvatarFallback className="bg-warm-sand/20 text-warm-sand font-montserrat">
                        {photographer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="font-montserrat text-lg">
                        {photographer.name}
                      </CardTitle>
                      <CardDescription className="font-open-sans text-gray-600">
                        {photographer.city} • {photographer.experience}
                      </CardDescription>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="Star"
                            size={16}
                            className="text-yellow-500 fill-current"
                          />
                          <span className="text-sm font-medium">
                            {photographer.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({photographer.reviews} отзывов)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-open-sans text-sm text-gray-600 mb-4">
                    {photographer.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-warm-sand/10 text-warm-sand border-warm-sand/30"
                    >
                      {photographer.style}
                    </Badge>
                    <span className="font-montserrat font-semibold text-gray-800">
                      {photographer.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      className="bg-white/50 hover:bg-white/80 border-warm-sand/30"
                    >
                      <Icon name="Eye" size={16} className="mr-2" />
                      Портфолио
                    </Button>
                    <Button className="bg-warm-sand hover:bg-warm-sand/90 text-white">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Написать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-montserrat font-bold text-gray-800 mb-6">
            Готовы найти своего фотографа?
          </h3>
          <p className="text-lg font-open-sans text-gray-600 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу мам, которые доверили запечатлеть самые
            важные моменты профессионалам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-warm-sand hover:bg-warm-sand/90 text-white px-8 py-6 text-lg"
              onClick={() => setShowPhotographerForm(true)}
            >
              <Icon name="Camera" size={20} className="mr-2" />
              Разместить анкету
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/50 hover:bg-white/80 border-warm-sand/30 px-8 py-6 text-lg"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Подобрать фотографа
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-warm-sand rounded-full flex items-center justify-center">
                  <Icon name="Camera" size={18} className="text-white" />
                </div>
                <span className="text-xl font-montserrat font-bold">
                  Роды в Кадре
                </span>
              </div>
              <p className="font-open-sans text-gray-300">
                Деликатная съёмка самых важных моментов в жизни вашей семьи.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Для мам</h4>
              <ul className="space-y-2 font-open-sans text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Найти фотографа
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Отзывы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Подготовка к съёмке
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">
                Для фотографов
              </h4>
              <ul className="space-y-2 font-open-sans text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Разместить анкету
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Этика съёмки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Обучение
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 font-open-sans text-gray-300">
                <li>hello@rodivkadre.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Поддержка 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center font-open-sans text-gray-400">
            <p>&copy; 2024 Роды в Кадре. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

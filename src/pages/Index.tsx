import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const sections = [
  { id: 'main', title: 'Главная', icon: 'Home' },
  { id: 'history', title: 'История', icon: 'Clock' },
  { id: 'attractions', title: 'Достопримечательности', icon: 'MapPin' },
  { id: 'nature', title: 'Природа', icon: 'Trees' },
  { id: 'gallery', title: 'Галерея', icon: 'Image' },
  { id: 'olympic', title: 'Олимпиада', icon: 'Medal' },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-sochi text-white p-2 rounded-xl">
                <Icon name="Palmtree" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-sochi bg-clip-text text-transparent">
                Сочи
              </span>
            </div>
            <div className="hidden md:flex space-x-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon name={section.icon as any} size={16} />
                  <span>{section.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="main" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-sochi opacity-20"></div>
          <div className="container mx-auto px-4 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge className="bg-gradient-warm text-white text-lg px-6 py-2">
                  Жемчужина России 🌊
                </Badge>
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-sochi bg-clip-text text-transparent">
                    Сочи
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Город субтропиков, олимпийской славы и бесконечного лета на берегу Черного моря
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white rounded-xl px-6 py-3 shadow-lg">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Население</p>
                      <p className="font-bold text-lg">443 тыс.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-xl px-6 py-3 shadow-lg">
                    <Icon name="Sun" className="text-accent" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Климат</p>
                      <p className="font-bold text-lg">+24°C</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-xl px-6 py-3 shadow-lg">
                    <Icon name="Calendar" className="text-secondary" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Основан</p>
                      <p className="font-bold text-lg">1838 год</p>
                    </div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-sochi text-white hover:shadow-xl transition-all text-lg px-8 py-6"
                  onClick={() => scrollToSection('history')}
                >
                  Узнать больше <Icon name="ArrowDown" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-sochi opacity-20 blur-3xl"></div>
                <img
                  src="https://cdn.poehali.dev/projects/ab755abb-8436-44de-ac2e-4b64f27e8977/files/b14102d0-9ae7-4a88-b51a-f98b47ae5589.jpg"
                  alt="Сочи"
                  className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="history" className="min-h-screen py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-secondary text-white text-lg px-6 py-2 mb-4">
                <Icon name="Clock" size={20} className="mr-2" />
                История
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                От древности до современности
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Путешествие сквозь века: от небольшого форта до международного курорта
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  year: '1838',
                  title: 'Основание форта Александрия',
                  description: 'Военный пост во время Кавказской войны положил начало современному Сочи',
                  icon: 'Castle',
                  color: 'bg-blue-500'
                },
                {
                  year: '1896',
                  title: 'Первый курортный сезон',
                  description: 'Сочи получает статус курорта, начинается эра санаториев и лечебниц',
                  icon: 'Building',
                  color: 'bg-purple-500'
                },
                {
                  year: '1961',
                  title: 'Золотой век советских курортов',
                  description: 'Расцвет Сочи как главной здравницы СССР, строительство знаменитых санаториев',
                  icon: 'Star',
                  color: 'bg-orange-500'
                },
                {
                  year: '2007',
                  title: 'Олимпийская заявка',
                  description: 'Сочи выбран столицей зимних Олимпийских игр 2014 года',
                  icon: 'Trophy',
                  color: 'bg-pink-500'
                },
                {
                  year: '2014',
                  title: 'XXII Зимние Олимпийские игры',
                  description: 'Грандиозное событие, навсегда изменившее облик города',
                  icon: 'Medal',
                  color: 'bg-gradient-warm'
                },
                {
                  year: '2024',
                  title: 'Современный Сочи',
                  description: 'Международный курорт мирового уровня с развитой инфраструктурой',
                  icon: 'Rocket',
                  color: 'bg-gradient-sochi'
                }
              ].map((event, index) => (
                <Card
                  key={event.year}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${event.color} text-white p-4 rounded-2xl flex-shrink-0`}>
                        <Icon name={event.icon as any} size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline" className="text-lg font-bold">
                            {event.year}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-lg">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="attractions" className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-primary text-white text-lg px-6 py-2 mb-4">
                <Icon name="MapPin" size={20} className="mr-2" />
                Достопримечательности
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Что посмотреть в Сочи
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                От горных вершин до морских глубин — каждый найдет свое приключение
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Роза Хутор',
                  description: 'Горнолыжный курорт мирового уровня с потрясающими видами',
                  icon: 'Mountain',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Олимпийский парк',
                  description: 'Наследие зимних игр 2014 года и современная спортивная арена',
                  icon: 'Trophy',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Дендрарий',
                  description: 'Уникальная коллекция субтропических растений',
                  icon: 'Trees',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Скайпарк',
                  description: 'Экстремальные аттракционы над Ахштырским ущельем',
                  icon: 'Cable',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Морской порт',
                  description: 'Символ города с белоснежными колоннами',
                  icon: 'Ship',
                  color: 'from-sky-500 to-blue-500'
                },
                {
                  title: 'Красная Поляна',
                  description: 'Горный курорт с круглогодичными развлечениями',
                  icon: 'Snowflake',
                  color: 'from-indigo-500 to-purple-500'
                }
              ].map((place, index) => (
                <Card
                  key={place.title}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className={`h-48 bg-gradient-to-br ${place.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={place.icon as any} size={64} className="text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{place.title}</h3>
                      <p className="text-gray-600 text-lg">{place.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="nature" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-gradient-warm text-white text-lg px-6 py-2 mb-4">
                <Icon name="Trees" size={20} className="mr-2" />
                Природа и климат
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Уникальная природа
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Единственное место в России с субтропическим климатом
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative animate-fade-in">
                <img
                  src="https://cdn.poehali.dev/projects/ab755abb-8436-44de-ac2e-4b64f27e8977/files/e5f3ec79-afb2-4cab-9465-3880e18dc111.jpg"
                  alt="Природа Сочи"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: 'Субтропический климат',
                    description: 'Мягкая зима и жаркое лето создают идеальные условия для отдыха круглый год',
                    icon: 'Sun',
                    stats: 'Средняя температура: +14°C'
                  },
                  {
                    title: 'Кавказские горы',
                    description: 'Величественные вершины высотой до 3000 метров защищают город от холодных ветров',
                    icon: 'Mountain',
                    stats: 'Высшая точка: 3238 м'
                  },
                  {
                    title: 'Черное море',
                    description: 'Теплые воды моря прогреваются до +28°C летом',
                    icon: 'Waves',
                    stats: 'Купальный сезон: 150 дней'
                  },
                  {
                    title: 'Уникальная флора',
                    description: 'Пальмы, магнолии, кипарисы и более 3000 видов растений',
                    icon: 'Leaf',
                    stats: 'Редких видов: 240+'
                  }
                ].map((item, index) => (
                  <Card
                    key={item.title}
                    className="hover:shadow-lg transition-all animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-sochi text-white p-3 rounded-xl">
                          <Icon name={item.icon as any} size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <Badge variant="outline" className="text-sm">
                            {item.stats}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="min-h-screen py-20 bg-gradient-to-br from-sky-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-secondary text-white text-lg px-6 py-2 mb-4">
                <Icon name="Image" size={20} className="mr-2" />
                Фотогалерея
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Сочи в фотографиях
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Красота города в каждом кадре
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  src: 'https://cdn.poehali.dev/projects/ab755abb-8436-44de-ac2e-4b64f27e8977/files/b14102d0-9ae7-4a88-b51a-f98b47ae5589.jpg',
                  title: 'Панорама Сочи',
                  subtitle: 'Вид с высоты птичьего полета'
                },
                {
                  src: 'https://cdn.poehali.dev/projects/ab755abb-8436-44de-ac2e-4b64f27e8977/files/73d33c6a-730c-4053-8829-a3a439730374.jpg',
                  title: 'Олимпийский парк',
                  subtitle: 'Наследие Игр 2014'
                },
                {
                  src: 'https://cdn.poehali.dev/projects/ab755abb-8436-44de-ac2e-4b64f27e8977/files/e5f3ec79-afb2-4cab-9465-3880e18dc111.jpg',
                  title: 'Горные ландшафты',
                  subtitle: 'Кавказские вершины'
                },
                {
                  src: 'https://cdn.poehali.dev/projects/ab755abb-8436-44de-ac2e-4b64f27e8977/files/b14102d0-9ae7-4a88-b51a-f98b47ae5589.jpg',
                  title: 'Морской берег',
                  subtitle: 'Набережная и пляжи'
                }
              ].map((photo, index) => (
                <Card
                  key={photo.title}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0 relative">
                    <div className="overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-1">{photo.title}</h3>
                        <p className="text-gray-200">{photo.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="olympic" className="min-h-screen py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-gradient-warm text-white text-lg px-6 py-2 mb-4">
                <Icon name="Medal" size={20} className="mr-2" />
                Олимпийское наследие
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Зимние Олимпийские игры 2014
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Крупнейшее спортивное событие, изменившее город навсегда
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <Card className="overflow-hidden animate-fade-in">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-gradient-sochi text-white p-4 rounded-2xl">
                        <Icon name="Trophy" size={40} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">XXII Олимпиада</h3>
                        <p className="text-gray-600">7-23 февраля 2014</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-sky-50 rounded-xl">
                        <p className="text-3xl font-bold text-primary">88</p>
                        <p className="text-sm text-gray-600">Стран-участниц</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <p className="text-3xl font-bold text-secondary">98</p>
                        <p className="text-sm text-gray-600">Комплектов медалей</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <p className="text-3xl font-bold text-accent">2800+</p>
                        <p className="text-sm text-gray-600">Спортсменов</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Первые зимние Олимпийские игры в истории России стали самыми дорогими в истории — около $51 млрд инвестиций в инфраструктуру города.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: 'Building2', title: 'Стадион Фишт', desc: '40 тыс. мест' },
                    { icon: 'Snowflake', title: 'Айсберг', desc: 'Фигурное катание' },
                    { icon: 'Warehouse', title: 'Большой', desc: 'Хоккейная арена' },
                    { icon: 'Home', title: 'Ледовый куб', desc: 'Керлинг' }
                  ].map((venue, index) => (
                    <Card key={venue.title} className="hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="bg-gradient-warm text-white p-2 rounded-lg">
                            <Icon name={venue.icon as any} size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold">{venue.title}</h4>
                            <p className="text-sm text-gray-600">{venue.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-warm opacity-20 blur-3xl"></div>
                <img
                  src="https://cdn.poehali.dev/projects/ab755abb-8436-44de-ac2e-4b64f27e8977/files/73d33c6a-730c-4053-8829-a3a439730374.jpg"
                  alt="Олимпийский парк"
                  className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover"
                />
                <Card className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-lg mb-1">Наследие Игр</h4>
                        <p className="text-sm text-gray-600">Современные спортивные объекты</p>
                      </div>
                      <Icon name="Sparkles" className="text-accent" size={32} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-gradient-sochi text-white overflow-hidden animate-fade-in">
              <CardContent className="p-12 text-center">
                <Icon name="Heart" size={48} className="mx-auto mb-6" />
                <h3 className="text-4xl font-bold mb-4">Сегодня Сочи — это...</h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Современный международный курорт, где горы встречаются с морем, а олимпийское наследие служит людям. Город возможностей для спорта, отдыха и незабываемых впечатлений круглый год!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-gradient-sochi text-white p-2 rounded-xl">
              <Icon name="Palmtree" size={24} />
            </div>
            <span className="text-2xl font-bold">Сочи</span>
          </div>
          <p className="text-gray-400 mb-6">
            Интерактивная презентация о прекрасном городе России
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>🌊 Черное море</span>
            <span>🏔️ Кавказские горы</span>
            <span>🏅 Олимпийская столица</span>
            <span>🌴 Субтропики России</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

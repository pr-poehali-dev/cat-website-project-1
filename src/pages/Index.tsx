import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const catBreeds = [
    {
      id: 1,
      name: 'Персидская кошка',
      category: 'persian',
      image: '/img/d87dcdb5-26d1-473a-bf4c-a294328d1d13.jpg',
      description: 'Персидские кошки известны своей длинной шелковистой шерстью и спокойным характером.',
      traits: ['Длинная шерсть', 'Спокойный', 'Ласковый'],
      origin: 'Иран',
      size: 'Средний'
    },
    {
      id: 2,
      name: 'Сфинкс',
      category: 'exotic',
      image: '/img/19a495bd-f098-486f-abdf-60964b380d5c.jpg',
      description: 'Сфинксы - это экзотические бесшерстные кошки с удивительно теплой кожей.',
      traits: ['Бесшерстная', 'Энергичная', 'Социальная'],
      origin: 'Канада',
      size: 'Средний'
    },
    {
      id: 3,
      name: 'Мейн-кун',
      category: 'exotic',
      image: '/img/1fe93ed2-0fda-4175-b867-1d55f369ca36.jpg',
      description: 'Мейн-куны - крупные кошки с впечатляющими кисточками на ушах.',
      traits: ['Крупная', 'Дружелюбная', 'Умная'],
      origin: 'США',
      size: 'Крупный'
    },
    {
      id: 4,
      name: 'Британская короткошёрстная',
      category: 'british',
      image: '/img/cea8344a-d57c-489d-9640-8d3fe0feaf34.jpg',
      description: 'Плюшевые британцы с круглой мордочкой и густой шерстью.',
      traits: ['Плюшевая шерсть', 'Независимая', 'Спокойная'],
      origin: 'Великобритания',
      size: 'Средний'
    },
    {
      id: 5,
      name: 'Шотландская вислоухая',
      category: 'british',
      image: '/img/7ceac1f2-5141-4f1b-a08b-0e5692164c15.jpg',
      description: 'Известны своими загнутыми ушками и милым выражением лица.',
      traits: ['Вислоухая', 'Дружелюбная', 'Игривая'],
      origin: 'Шотландия',
      size: 'Средний'
    },
    {
      id: 6,
      name: 'Русская голубая',
      category: 'exotic',
      image: '/img/3e821e44-cce8-4355-b5d0-532c23210191.jpg',
      description: 'Элегантные кошки с серебристо-голубой шерстью и изумрудными глазами.',
      traits: ['Серебристая', 'Тихая', 'Преданная'],
      origin: 'Россия',
      size: 'Средний'
    },
    {
      id: 7,
      name: 'Сиамская кошка',
      category: 'oriental',
      image: '/img/8a63ca8b-f269-4369-90af-af3c8b093879.jpg',
      description: 'Изящные кошки с колор-пойнтовым окрасом и голубыми глазами.',
      traits: ['Стройная', 'Разговорчивая', 'Активная'],
      origin: 'Таиланд',
      size: 'Средний'
    },
    {
      id: 8,
      name: 'Бенгальская кошка',
      category: 'exotic',
      image: '/img/c4816bf3-578e-48e6-b476-1520e5068f9d.jpg',
      description: 'Дикая красота леопарда в домашней кошке с пятнистым окрасом.',
      traits: ['Пятнистая', 'Атлетичная', 'Энергичная'],
      origin: 'США',
      size: 'Крупный'
    },
    {
      id: 9,
      name: 'Рэгдолл',
      category: 'longhair',
      image: '/img/bf8331b1-d271-4579-8663-c06115d17ddc.jpg',
      description: 'Большие пушистые кошки, которые расслабляются в руках хозяина.',
      traits: ['Пушистая', 'Послушная', 'Крупная'],
      origin: 'США',
      size: 'Крупный'
    },
    {
      id: 10,
      name: 'Абиссинская кошка',
      category: 'shorthair',
      image: '/img/94e99c22-e7f6-45dc-b139-8925051786a8.jpg',
      description: 'Древняя порода с тикированной шерстью золотистого цвета.',
      traits: ['Тикированная', 'Активная', 'Любопытная'],
      origin: 'Эфиопия',
      size: 'Средний'
    },
    {
      id: 11,
      name: 'Норвежская лесная',
      category: 'longhair',
      image: '/img/d34af63e-82a3-4e82-af7c-6f5aed08e5c3.jpg',
      description: 'Крупные длинношёрстные кошки, приспособленные к суровому климату.',
      traits: ['Длинношёрстная', 'Выносливая', 'Независимая'],
      origin: 'Норвегия',
      size: 'Крупный'
    },
    {
      id: 12,
      name: 'Ориентальная короткошёрстная',
      category: 'oriental',
      image: '/img/db437a10-563e-40c4-aaac-8c1cf83fa34b.jpg',
      description: 'Стройные изящные кошки с большими ушами и множеством окрасов.',
      traits: ['Стройная', 'Элегантная', 'Общительная'],
      origin: 'Таиланд',
      size: 'Средний'
    },
    {
      id: 13,
      name: 'Турецкая ангора',
      category: 'longhair',
      image: '/img/23f6a8aa-2d0b-406d-9b03-abe179e55c0d.jpg',
      description: 'Грациозные белые кошки с шелковистой шерстью и разноцветными глазами.',
      traits: ['Шелковистая', 'Грациозная', 'Игривая'],
      origin: 'Турция',
      size: 'Средний'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все породы', icon: 'Grid3X3', color: 'coral' },
    { id: 'persian', name: 'Персидские', icon: 'Crown', color: 'mint' },
    { id: 'exotic', name: 'Экзотические', icon: 'Sparkles', color: 'lavender' },
    { id: 'british', name: 'Британские', icon: 'Flag', color: 'warm-yellow' },
    { id: 'oriental', name: 'Восточные', icon: 'Star', color: 'coral' },
    { id: 'longhair', name: 'Длинношёрстные', icon: 'Waves', color: 'mint' },
    { id: 'shorthair', name: 'Короткошёрстные', icon: 'Circle', color: 'lavender' }
  ];

  const filteredCats = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? catBreeds 
      : catBreeds.filter(cat => cat.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(cat => 
        cat.name.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query) ||
        cat.traits.some(trait => trait.toLowerCase().includes(query)) ||
        cat.origin.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const downloadImage = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-mint/10 to-lavender/20">
      {/* Header */}
      <header className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Галерея 
              <span className="text-coral"> Котиков</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Откройте для себя удивительный мир кошачьих пород с возможностью просмотра и загрузки фотографий
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск по породам, характеристикам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-lg border-2 border-coral/20 focus:border-coral/50 rounded-full"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
                >
                  <Icon name="X" size={16} />
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-mint/15 rounded-full translate-y-24 -translate-x-24"></div>
      </header>

      {/* Navigation */}
      <div className="bg-white/60 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2 animate-scale-in">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id 
                    ? `bg-${category.color} hover:bg-${category.color}/90 text-white` 
                    : 'hover:bg-gray-50'
                } transition-all duration-200`}
                size="sm"
              >
                <Icon name={category.icon} size={16} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="bg-white/40 backdrop-blur-sm border-b">
          <div className="container mx-auto px-6 py-3">
            <div className="text-center text-gray-600">
              {filteredCats.length > 0 ? (
                <>
                  Найдено <span className="font-semibold text-coral">{filteredCats.length}</span> 
                  {filteredCats.length === 1 ? ' порода' : filteredCats.length < 5 ? ' породы' : ' пород'} 
                  по запросу "<span className="font-semibold">{searchQuery}</span>"
                </>
              ) : (
                <>Ничего не найдено по запросу "<span className="font-semibold">{searchQuery}</span>"</>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Gallery */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCats.map((cat, index) => (
            <Card 
              key={cat.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-white/90 text-gray-700 text-xs"
                  >
                    {cat.origin}
                  </Badge>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge 
                    variant="secondary" 
                    className={`${
                      cat.size === 'Крупный' 
                        ? 'bg-coral/90 text-white' 
                        : 'bg-mint/90 text-white'
                    } text-xs`}
                  >
                    {cat.size}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <Button
                      onClick={() => downloadImage(cat.image, `${cat.name}.jpg`)}
                      size="sm"
                      className="w-full bg-white/90 text-gray-800 hover:bg-white text-sm"
                    >
                      <Icon name="Download" size={14} />
                      Скачать
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{cat.name}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed line-clamp-2">{cat.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {cat.traits.slice(0, 3).map((trait, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="border-coral/30 text-coral hover:bg-coral/10 text-xs"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-mint text-mint hover:bg-mint/10 text-xs"
                  >
                    <Icon name="Eye" size={14} />
                    Просмотр
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-coral text-coral hover:bg-coral/10 text-xs"
                    onClick={() => downloadImage(cat.image, `${cat.name}.jpg`)}
                  >
                    <Icon name="Download" size={14} />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCats.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              {searchQuery ? 'Котики не найдены' : 'Выберите категорию'}
            </h3>
            <p className="text-gray-500 mb-4">
              {searchQuery 
                ? 'Попробуйте изменить запрос или выбрать другую категорию'
                : 'Используйте фильтры выше для поиска пород'
              }
            </p>
            {searchQuery && (
              <Button 
                onClick={() => setSearchQuery('')}
                className="bg-coral hover:bg-coral/90"
              >
                Очистить поиск
              </Button>
            )}
          </div>
        )}
      </main>

      {/* Stats Section */}
      <section className="bg-white/60 backdrop-blur-sm border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-coral mb-2">{catBreeds.length}</div>
              <p className="text-gray-600 text-sm">Пород в галерее</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-mint mb-2">
                {catBreeds.filter(cat => cat.category === 'exotic').length}
              </div>
              <p className="text-gray-600 text-sm">Экзотических</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-lavender mb-2">
                {catBreeds.filter(cat => cat.size === 'Крупный').length}
              </div>
              <p className="text-gray-600 text-sm">Крупных пород</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-coral mb-2">
                {new Set(catBreeds.map(cat => cat.origin)).size}
              </div>
              <p className="text-gray-600 text-sm">Стран происхождения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Галерея Котиков</h4>
            <p className="text-gray-400">Более {catBreeds.length} пород кошек со всего мира</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
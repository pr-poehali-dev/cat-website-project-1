import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const catBreeds = [
    {
      id: 1,
      name: 'Персидская кошка',
      category: 'persian',
      image: '/img/d87dcdb5-26d1-473a-bf4c-a294328d1d13.jpg',
      description: 'Персидские кошки известны своей длинной шелковистой шерстью и спокойным характером.',
      traits: ['Длинная шерсть', 'Спокойный', 'Ласковый']
    },
    {
      id: 2,
      name: 'Сфинкс',
      category: 'exotic',
      image: '/img/19a495bd-f098-486f-abdf-60964b380d5c.jpg',
      description: 'Сфинксы - это экзотические бесшерстные кошки с удивительно теплой кожей.',
      traits: ['Бесшерстная', 'Энергичная', 'Социальная']
    },
    {
      id: 3,
      name: 'Мейн-кун',
      category: 'exotic',
      image: '/img/1fe93ed2-0fda-4175-b867-1d55f369ca36.jpg',
      description: 'Мейн-куны - крупные кошки с впечатляющими кисточками на ушах.',
      traits: ['Крупная', 'Дружелюбная', 'Умная']
    }
  ];

  const filteredCats = selectedCategory === 'all' 
    ? catBreeds 
    : catBreeds.filter(cat => cat.category === selectedCategory);

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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Откройте для себя удивительный мир кошачьих пород с возможностью просмотра и загрузки фотографий
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-mint/15 rounded-full translate-y-24 -translate-x-24"></div>
      </header>

      {/* Navigation */}
      <div className="bg-white/60 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center gap-4 animate-scale-in">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-coral hover:bg-coral/90' : ''}
            >
              <Icon name="Grid3X3" size={16} />
              Все породы
            </Button>
            <Button
              variant={selectedCategory === 'persian' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('persian')}
              className={selectedCategory === 'persian' ? 'bg-mint hover:bg-mint/90' : ''}
            >
              <Icon name="Crown" size={16} />
              Персидские
            </Button>
            <Button
              variant={selectedCategory === 'exotic' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('exotic')}
              className={selectedCategory === 'exotic' ? 'bg-lavender hover:bg-lavender/90' : ''}
            >
              <Icon name="Sparkles" size={16} />
              Экзотические
            </Button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCats.map((cat, index) => (
            <Card 
              key={cat.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`${
                      cat.category === 'persian' 
                        ? 'bg-mint/90 text-white' 
                        : 'bg-lavender/90 text-white'
                    }`}
                  >
                    {cat.category === 'persian' ? 'Персидская' : 'Экзотическая'}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      onClick={() => downloadImage(cat.image, `${cat.name}.jpg`)}
                      className="w-full bg-white/90 text-gray-800 hover:bg-white"
                    >
                      <Icon name="Download" size={16} />
                      Скачать фото
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{cat.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{cat.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.traits.map((trait, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="border-coral/30 text-coral hover:bg-coral/10"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-mint text-mint hover:bg-mint/10"
                  >
                    <Icon name="Eye" size={16} />
                    Просмотр
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-coral text-coral hover:bg-coral/10"
                    onClick={() => downloadImage(cat.image, `${cat.name}.jpg`)}
                  >
                    <Icon name="Download" size={16} />
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
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">Котики не найдены</h3>
            <p className="text-gray-500">Попробуйте выбрать другую категорию</p>
          </div>
        )}
      </main>

      {/* Stats Section */}
      <section className="bg-white/60 backdrop-blur-sm border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-coral mb-2">{catBreeds.length}</div>
              <p className="text-gray-600">Пород в галерее</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-mint mb-2">
                {catBreeds.filter(cat => cat.category === 'persian').length}
              </div>
              <p className="text-gray-600">Персидских пород</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-lavender mb-2">
                {catBreeds.filter(cat => cat.category === 'exotic').length}
              </div>
              <p className="text-gray-600">Экзотических пород</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Галерея Котиков</h4>
            <p className="text-gray-400">Красивые фотографии кошек для вашего вдохновения</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
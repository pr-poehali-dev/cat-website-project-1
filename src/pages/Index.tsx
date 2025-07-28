import { useState, useMemo, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const subjects = [
    {
      id: 1,
      name: 'Математика',
      icon: 'Calculator',
      color: 'bg-blue-500',
      grades: [6, 7, 8, 9],
      description: 'Алгебра, геометрия, решения задач и примеров',
      image: '/img/66f765ea-6cb3-40a4-9fd1-089b9c5de0dd.jpg',
      tasks: 245
    },
    {
      id: 2,
      name: 'Русский язык',
      icon: 'BookOpen',
      color: 'bg-red-500',
      grades: [6, 7, 8, 9],
      description: 'Грамматика, орфография, сочинения и изложения',
      image: '/img/ca8ad8cc-b2e4-49bc-8c89-a30cdf1da222.jpg',
      tasks: 189
    },
    {
      id: 3,
      name: 'Физика',
      icon: 'Zap',
      color: 'bg-purple-500',
      grades: [7, 8, 9],
      description: 'Механика, оптика, электричество и магнетизм',
      image: '/img/f2077089-e477-4537-810a-c94afc1bd663.jpg',
      tasks: 156
    },
    {
      id: 4,
      name: 'Химия',
      icon: 'FlaskConical',
      color: 'bg-green-500',
      grades: [8, 9],
      description: 'Химические реакции, формулы и уравнения',
      image: '/img/f2077089-e477-4537-810a-c94afc1bd663.jpg',
      tasks: 134
    },
    {
      id: 5,
      name: 'История',
      icon: 'Scroll',
      color: 'bg-amber-600',
      grades: [6, 7, 8, 9],
      description: 'История России и всемирная история',
      image: '/img/ca8ad8cc-b2e4-49bc-8c89-a30cdf1da222.jpg',
      tasks: 167
    },
    {
      id: 6,
      name: 'География',
      icon: 'Globe',
      color: 'bg-teal-500',
      grades: [6, 7, 8, 9],
      description: 'Физическая и экономическая география',
      image: '/img/ca8ad8cc-b2e4-49bc-8c89-a30cdf1da222.jpg',
      tasks: 143
    },
    {
      id: 7,
      name: 'Биология',
      icon: 'Leaf',
      color: 'bg-emerald-500',
      grades: [6, 7, 8, 9],
      description: 'Ботаника, зоология, анатомия человека',
      image: '/img/f2077089-e477-4537-810a-c94afc1bd663.jpg',
      tasks: 178
    },
    {
      id: 8,
      name: 'Английский язык',
      icon: 'Languages',
      color: 'bg-indigo-500',
      grades: [6, 7, 8, 9],
      description: 'Грамматика, лексика, тексты и переводы',
      image: '/img/ca8ad8cc-b2e4-49bc-8c89-a30cdf1da222.jpg',
      tasks: 201
    },
    {
      id: 9,
      name: 'Обществознание',
      icon: 'Users',
      color: 'bg-orange-500',
      grades: [6, 7, 8, 9],
      description: 'Общество, право, экономика, политика',
      image: '/img/ca8ad8cc-b2e4-49bc-8c89-a30cdf1da222.jpg',
      tasks: 123
    },
    {
      id: 10,
      name: 'Литература',
      icon: 'Library',
      color: 'bg-rose-500',
      grades: [6, 7, 8, 9],
      description: 'Анализ произведений, сочинения, эссе',
      image: '/img/ca8ad8cc-b2e4-49bc-8c89-a30cdf1da222.jpg',
      tasks: 156
    },
    {
      id: 11,
      name: 'Информатика',
      icon: 'Monitor',
      color: 'bg-cyan-500',
      grades: [7, 8, 9],
      description: 'Программирование, алгоритмы, ИКТ',
      image: '/img/66f765ea-6cb3-40a4-9fd1-089b9c5de0dd.jpg',
      tasks: 89
    },
    {
      id: 12,
      name: 'Геометрия',
      icon: 'Triangle',
      color: 'bg-violet-500',
      grades: [7, 8, 9],
      description: 'Планиметрия, стереометрия, доказательства',
      image: '/img/66f765ea-6cb3-40a4-9fd1-089b9c5de0dd.jpg',
      tasks: 167
    }
  ];

  const grades = [
    { id: 'all', name: 'Все классы', color: 'coral' },
    { id: 6, name: '6 класс', color: 'mint' },
    { id: 7, name: '7 класс', color: 'lavender' },
    { id: 8, name: '8 класс', color: 'warm-yellow' },
    { id: 9, name: '9 класс', color: 'coral' }
  ];

  const filteredSubjects = useMemo(() => {
    let filtered = selectedGrade === 'all' 
      ? subjects 
      : subjects.filter(subject => subject.grades.includes(Number(selectedGrade)));

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(subject => 
        subject.name.toLowerCase().includes(query) ||
        subject.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedGrade, searchQuery]);

  const totalTasks = subjects.reduce((sum, subject) => sum + subject.tasks, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <Icon name="GraduationCap" size={64} className="mx-auto text-blue-600 mb-4" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              ГДЗ <span className="text-blue-600">Портал</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Готовые домашние задания для 6-9 классов по всем предметам. 
              Подробные решения, объяснения и ответы для успешной учёбы
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск по предметам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-lg border-2 border-blue-200 focus:border-blue-400 rounded-full"
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
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>
      </header>

      {/* Grade Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-3 animate-scale-in">
            {grades.map((grade) => (
              <Button
                key={grade.id}
                variant={selectedGrade === grade.id ? 'default' : 'outline'}
                onClick={() => setSelectedGrade(grade.id)}
                className={`${
                  selectedGrade === grade.id 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'hover:bg-blue-50 border-blue-200'
                } transition-all duration-200`}
                size="sm"
              >
                <Icon name="BookOpen" size={16} />
                {grade.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="bg-blue-50/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-6 py-3">
            <div className="text-center text-gray-700">
              {filteredSubjects.length > 0 ? (
                <>
                  Найдено <span className="font-semibold text-blue-600">{filteredSubjects.length}</span> 
                  {filteredSubjects.length === 1 ? ' предмет' : filteredSubjects.length < 5 ? ' предмета' : ' предметов'} 
                  по запросу "<span className="font-semibold">{searchQuery}</span>"
                </>
              ) : (
                <>Ничего не найдено по запросу "<span className="font-semibold">{searchQuery}</span>"</>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Subjects Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSubjects.map((subject, index) => (
            <Card 
              key={subject.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/95 backdrop-blur-sm border-0 shadow-lg animate-fade-in overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden h-32">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${subject.color} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name={subject.icon} size={32} className="text-white" />
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 text-gray-700 text-xs">
                    {subject.tasks} задач
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <Icon name={subject.icon} size={20} className={`${subject.color.replace('bg-', 'text-')}`} />
                  {subject.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {subject.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {subject.grades.map((grade) => (
                    <Badge 
                      key={grade} 
                      variant="outline" 
                      className="border-blue-200 text-blue-600 hover:bg-blue-50 text-xs"
                    >
                      {grade} класс
                    </Badge>
                  ))}
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  <Icon name="BookOpen" size={14} />
                  Открыть ГДЗ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="BookX" size={64} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              {searchQuery ? 'Предметы не найдены' : 'Выберите класс'}
            </h3>
            <p className="text-gray-500 mb-4">
              {searchQuery 
                ? 'Попробуйте изменить запрос или выбрать другой класс'
                : 'Используйте фильтры выше для поиска ГДЗ'
              }
            </p>
            {searchQuery && (
              <Button 
                onClick={() => setSearchQuery('')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Очистить поиск
              </Button>
            )}
          </div>
        )}
      </main>

      {/* Stats Section */}
      <section className="bg-white/80 backdrop-blur-sm border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-blue-600 mb-2">{subjects.length}</div>
              <p className="text-gray-600 text-sm">Предметов</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <p className="text-gray-600 text-sm">Класса</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-purple-600 mb-2">{totalTasks}</div>
              <p className="text-gray-600 text-sm">Готовых заданий</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600 text-sm">Бесплатно</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают наш ГДЗ портал?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Мы предоставляем качественные решения и подробные объяснения для лучшего понимания материала
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Проверенные решения</h3>
              <p className="text-blue-100">Все ответы проверены учителями и экспертами</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрый доступ</h3>
              <p className="text-blue-100">Мгновенный поиск и удобная навигация</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Бесплатно</h3>
              <p className="text-blue-100">Полный доступ ко всем материалам без оплаты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="GraduationCap" size={24} />
                ГДЗ Портал
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Лучший помощник для школьников в выполнении домашних заданий
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Классы</h5>
              <ul className="space-y-2 text-gray-400">
                <li>6 класс</li>
                <li>7 класс</li>
                <li>8 класс</li>
                <li>9 класс</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Популярные предметы</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Математика</li>
                <li>Русский язык</li>
                <li>Физика</li>
                <li>Английский язык</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Статистика</h5>
              <ul className="space-y-2 text-gray-400">
                <li>{subjects.length} предметов</li>
                <li>{totalTasks} заданий</li>
                <li>4 класса</li>
                <li>100% бесплатно</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ГДЗ Портал. Образование должно быть доступным для всех.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
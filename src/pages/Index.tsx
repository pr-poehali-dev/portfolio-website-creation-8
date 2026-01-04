import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const skills = [
    { name: 'React', level: 90, icon: 'Atom' },
    { name: 'Vue', level: 85, icon: 'Triangle' },
    { name: 'Angular', level: 80, icon: 'Box' },
    { name: 'HTML', level: 95, icon: 'FileCode' },
    { name: 'CSS', level: 90, icon: 'Palette' },
    { name: 'JavaScript', level: 92, icon: 'Zap' },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Современная платформа для онлайн-торговли с React и Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Интерактивная панель аналитики с визуализацией данных',
      tech: ['Vue', 'D3.js', 'Firebase'],
      gradient: 'from-secondary to-accent'
    },
    {
      title: 'Mobile App',
      description: 'Кроссплатформенное мобильное приложение',
      tech: ['React Native', 'TypeScript'],
      gradient: 'from-accent to-primary'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 rounded-full gradient-bg flex items-center justify-center animate-float">
                <Icon name="Code2" size={64} className="text-foreground" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              Иван Программистов
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              Full-Stack разработчик • Создаю современные веб-приложения
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Обо мне</h2>
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Привет! Я Full-Stack разработчик с 5+ годами опыта в создании современных веб-приложений. 
                Специализируюсь на React, Vue и Angular, создаю быстрые, красивые и функциональные интерфейсы. 
                Работаю с современными технологиями и инструментами, следую лучшим практикам разработки.
              </p>
              <div className="flex gap-4 mt-6">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Icon name="Github" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Icon name="Linkedin" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Icon name="Twitter" size={24} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-fade-in">Проекты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-primary/20 bg-card/50 backdrop-blur hover:scale-105 transition-transform duration-300 animate-scale-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-fade-in">Навыки</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/50 transition-colors animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Icon name={skill.icon as any} size={24} className="text-primary" />
                      </div>
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-fade-in">Контакты</h2>
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Ваше сообщение..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Иван Программистов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

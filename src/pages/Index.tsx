import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Vue', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 92 },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Современная платформа для онлайн-торговли с React и Node.js',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Dashboard Analytics',
      description: 'Интерактивная панель аналитики с визуализацией данных',
      tech: ['Vue', 'D3.js', 'Firebase']
    },
    {
      title: 'Mobile App',
      description: 'Кроссплатформенное мобильное приложение',
      tech: ['React Native', 'TypeScript']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">ИП</h1>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="animate-fade-in">
            <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">Full-Stack Developer</p>
            <h1 className="text-7xl font-semibold mb-8 leading-tight tracking-tight">
              Иван<br/>Программистов
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Создаю минималистичные веб-приложения с акцентом на функциональность и эстетику
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="px-8">
                Связаться
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-8 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-semibold mb-6">Обо мне</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Привет! Я Full-Stack разработчик с 5+ годами опыта в создании современных веб-приложений.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Специализируюсь на React, Vue и Angular. Ценю простоту, функциональность и внимание к деталям.
              </p>
            </div>
            <Card className="border border-border shadow-sm">
              <CardContent className="p-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Icon name="Github" size={20} />
                    <span>github.com/developer</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Icon name="Linkedin" size={20} />
                    <span>linkedin.com/in/developer</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Icon name="Mail" size={20} />
                    <span>hello@developer.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-8 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-semibold mb-16 animate-fade-in">Избранные проекты</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <Icon name="ArrowUpRight" size={20} className="text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-sm px-4 py-1 border border-border rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-8 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-semibold mb-16 animate-fade-in">Навыки</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted h-1">
                  <div 
                    className="h-full bg-foreground transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-8 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold mb-16 animate-fade-in">Давайте работать вместе</h2>
          <Card className="border border-border shadow-sm">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block mb-3 text-sm font-medium">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-sm font-medium">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-12">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Иван Программистов</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

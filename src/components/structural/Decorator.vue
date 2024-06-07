<template>
  <p>
    Паттерн декоратор (Decorator) позволяет динамически добавлять объектам новую функциональность,
    оборачивая их в класс-обертку. Этот паттерн предоставляет гибкую альтернативу наследованию для
    расширения функциональности.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна декоратор заключается в том, чтобы поместить объект в другой объект,
    который добавляет новую функциональность. Эти объекты-декораторы имеют тот же интерфейс, что и
    декорируемые объекты, что позволяет клиентам использовать их так же, как и оригинальные объекты.
  </p>
  <highlightjs
    language="js"
    code="
      // Интерфейс компонента
      class Component {
          operation() {
              return 'Component';
          }
      }
      // Конкретный компонент
      class ConcreteComponent extends Component {
          operation() {
              return 'ConcreteComponent';
          }
      }
      // Базовый декоратор, реализующий тот же интерфейс, что и компонент
      class Decorator extends Component {
          constructor(component) {
              super();
              this.component = component;
          }
          operation() {
              return this.component.operation();
          }
      }
      // Конкретный декоратор, добавляющий новое поведение
      class ConcreteDecoratorA extends Decorator {
          operation() {
              return `ConcreteDecoratorA(${super.operation()})`;
          }
      }
      class ConcreteDecoratorB extends Decorator {
          operation() {
              return `ConcreteDecoratorB(${super.operation()})`;
          }
      }
      // Клиентский код
      function clientCode(component) {
          console.log(component.operation());
      }
      // Простой компонент
      const simple = new ConcreteComponent();
      console.log('Client: I\'ve got a simple component:');
      clientCode(simple);
      // Декорированный компонент
      const decorator1 = new ConcreteDecoratorA(simple);
      const decorator2 = new ConcreteDecoratorB(decorator1);
      console.log('Client: Now I\'ve got a decorated component:');
      clientCode(decorator2);
      "
  />
</template>

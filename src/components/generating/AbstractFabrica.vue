<template>
  <div>
    Паттерн Абстрактная фабрика (Abstract Factory) используется для создания семейства связанных или
    зависимых объектов без указания их конкретных классов. Этот паттерн предоставляет интерфейс для
    создания объектов, но позволяет подклассам изменить тип создаваемых объектов.
  </div>
  <h2>Основная идея</h2>
  <div>
    Основная идея паттерна заключается в предоставлении интерфейса для создания семейств связанных
    объектов, где конкретные классы объектов определяются подклассами фабрики.
  </div>
  <highlightjs
    language="js"
    code="
  // Интерфейс для создания продуктов
  class AbstractFactory {
      createProductA() {}
      createProductB() {}
  }

  // Конкретная фабрика 1
  class ConcreteFactory1 extends AbstractFactory {
      createProductA() {
          return new ProductA1();
      }

      createProductB() {
          return new ProductB1();
      }
  }

  // Конкретная фабрика 2
  class ConcreteFactory2 extends AbstractFactory {
      createProductA() {
          return new ProductA2();
      }

      createProductB() {
          return new ProductB2();
      }
  }

  // Интерфейсы продуктов
  class AbstractProductA {}
  class AbstractProductB {}

  // Конкретные продукты для первой фабрики
  class ProductA1 extends AbstractProductA {
      constructor() {
          super();
          console.log('ProductA1 created');
      }
  }

  class ProductB1 extends AbstractProductB {
      constructor() {
          super();
          console.log('ProductB1 created');
      }
  }

  // Конкретные продукты для второй фабрики
  class ProductA2 extends AbstractProductA {
      constructor() {
          super();
          console.log('ProductA2 created');
      }
  }

  class ProductB2 extends AbstractProductB {
      constructor() {
          super();
          console.log('ProductB2 created');
      }
  }

  // Клиентский код, который работает с фабриками и продуктами через абстрактные интерфейсы
  function clientCode(factory) {
      const productA = factory.createProductA();
      const productB = factory.createProductB();

      // Используем продукты A и B
  }

  // Использование первой фабрики
  const factory1 = new ConcreteFactory1();
  clientCode(factory1);

  // Использование второй фабрики
  const factory2 = new ConcreteFactory2();
  clientCode(factory2);
"
  />
</template>

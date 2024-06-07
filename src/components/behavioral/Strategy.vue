<template>
  <p>
    Паттерн Стратегия (Strategy) представляет собой поведенческий паттерн проектирования, который
    определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми.
    Паттерн Стратегия позволяет изменять алгоритмы независимо от клиентов, которые их используют.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна Стратегия заключается в определении семейства алгоритмов, инкапсуляции
    каждого из них и делегировании выполнения алгоритма объекту-контексту. Таким образом, можно
    легко переключаться между различными алгоритмами во время выполнения программы.
  </p>
  <highlightjs
    language="js"
    code="
      // Интерфейс стратегии
      class Strategy {
          execute() {}
      }

      // Конкретные стратегии
      class ConcreteStrategyA extends Strategy {
          execute() {
              return 'ConcreteStrategyA';
          }
      }

      class ConcreteStrategyB extends Strategy {
          execute() {
              return 'ConcreteStrategyB';
          }
      }

      // Контекст
      class Context {
          constructor(strategy) {
              this.strategy = strategy;
          }

          executeStrategy() {
              return this.strategy.execute();
          }

          setStrategy(strategy) {
              this.strategy = strategy;
          }
      }

      // Клиентский код
      function clientCode() {
          const context = new Context(new ConcreteStrategyA());
          console.log(context.executeStrategy()); // Output: ConcreteStrategyA

          context.setStrategy(new ConcreteStrategyB());
          console.log(context.executeStrategy()); // Output: ConcreteStrategyB
      }

      clientCode();
      "
  />
</template>

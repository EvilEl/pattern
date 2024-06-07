<template>
  <p>
    Паттерн фасад (Facade) используется для упрощения взаимодействия с сложной системой,
    предоставляя простой интерфейс для работы с ней. Это помогает скрыть сложность системы и делает
    взаимодействие с ней более интуитивным.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна фасад заключается в создании класса, который предоставляет упрощенные
    методы для выполнения сложных задач, скрывая при этом внутренние детали системы.
  </p>
  <highlightjs
    language="js"
    code="
      // Подсистема 1
      class Subsystem1 {
          operation1() {
              return 'Subsystem1: Ready!\n';
          }

          operationN() {
              return 'Subsystem1: Go!\n';
          }
      }

      // Подсистема 2
      class Subsystem2 {
          operation1() {
              return 'Subsystem2: Get ready!\n';
          }

          operationZ() {
              return 'Subsystem2: Fire!\n';
          }
      }

      // Фасад, который предоставляет простой интерфейс для работы с подсистемами
      class Facade {
          constructor(subsystem1, subsystem2) {
              this.subsystem1 = subsystem1;
              this.subsystem2 = subsystem2;
          }

          operation() {
              let result = 'Facade initializes subsystems:\n';
              result += this.subsystem1.operation1();
              result += this.subsystem2.operation1();
              result += 'Facade orders subsystems to perform the action:\n';
              result += this.subsystem1.operationN();
              result += this.subsystem2.operationZ();
              return result;
          }
      }

      // Клиентский код
      function clientCode(facade) {
          console.log(facade.operation());
      }

      // Использование фасада
      const subsystem1 = new Subsystem1();
      const subsystem2 = new Subsystem2();
      const facade = new Facade(subsystem1, subsystem2);
      clientCode(facade);
      "
  />
</template>

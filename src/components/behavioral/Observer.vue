<template>
  <p>
    Паттерн Наблюдатель (Observer) используется для установления зависимости "один ко многим" между
    объектами таким образом, что при изменении состояния одного объекта все зависящие от него
    объекты автоматически оповещаются и обновляются. Этот паттерн позволяет создавать слабосвязанные
    системы.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна наблюдатель состоит в том, чтобы иметь один объект (наблюдаемый объект),
    который содержит список зависимых объектов (наблюдателей). Когда наблюдаемый объект изменяется,
    он оповещает всех своих наблюдателей, чтобы они могли обновиться в соответствии с этим
    изменением.
  </p>
  <highlightjs
    language="js"
    code="
      // Интерфейс наблюдаемого объекта
      class Subject {
          constructor() {
              this.observers = [];
          }

          addObserver(observer) {
              this.observers.push(observer);
          }

          removeObserver(observer) {
              const index = this.observers.indexOf(observer);
              if (index !== -1) {
                  this.observers.splice(index, 1);
              }
          }

          notifyObservers() {
              for (const observer of this.observers) {
                  observer.update();
              }
          }
      }

      // Интерфейс наблюдателя
      class Observer {
          update() {}
      }

      // Конкретный наблюдаемый объект
      class ConcreteSubject extends Subject {
          setState(state) {
              this.state = state;
              this.notifyObservers();
          }

          getState() {
              return this.state;
          }
      }

      // Конкретный наблюдатель
      class ConcreteObserver extends Observer {
          constructor(subject) {
              super();
              this.subject = subject;
              this.subject.addObserver(this);
          }

          update() {
              console.log(`Observer: Subject's state changed to ${this.subject.getState()}`);
          }
      }

      // Клиентский код
      function clientCode() {
          const subject = new ConcreteSubject();
          const observer1 = new ConcreteObserver(subject);
          const observer2 = new ConcreteObserver(subject);

          subject.setState('state1'); // Output: Observer: Subject's state changed to state1
      }

      clientCode();

  "
  />
</template>

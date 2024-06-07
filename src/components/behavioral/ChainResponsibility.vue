<template>
  <p>
    Паттерн цепочка ответственности (Chain of Responsibility) позволяет передавать запросы
    последовательно по цепочке обработчиков. Каждый обработчик решает, может ли он обработать запрос
    самостоятельно или передать его следующему обработчику в цепи.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна заключается в том, чтобы избежать жесткой привязки отправителя запроса к
    его получателю, позволяя нескольким объектам-обработчикам последовательно попытаться обработать
    запрос.
  </p>
  <highlightjs
    language="js"
    code="
      // Интерфейс обработчика
      class Handler {
          setNext(handler) {
              this.nextHandler = handler;
              return handler;
          }

          handle(request) {
              if (this.nextHandler) {
                  return this.nextHandler.handle(request);
              }

              return null;
          }
      }

      // Конкретные обработчики
      class ConcreteHandler1 extends Handler {
          handle(request) {
              if (request === 'Request1') {
                  return `ConcreteHandler1: Handled ${request}`;
              }
              return super.handle(request);
          }
      }

      class ConcreteHandler2 extends Handler {
          handle(request) {
              if (request === 'Request2') {
                  return `ConcreteHandler2: Handled ${request}`;
              }
              return super.handle(request);
          }
      }

      class ConcreteHandler3 extends Handler {
          handle(request) {
              if (request === 'Request3') {
                  return `ConcreteHandler3: Handled ${request}`;
              }
              return super.handle(request);
          }
      }

      // Клиентский код
      function clientCode(handler) {
          const requests = ['Request1', 'Request2', 'Request3', 'Request4'];

          for (const request of requests) {
              const result = handler.handle(request);
              if (result) {
                  console.log(result);
              } else {
                  console.log(`${request} was left unhandled.`);
              }
          }
      }

      // Создание цепочки обработчиков
      const handler1 = new ConcreteHandler1();
      const handler2 = handler1.setNext(new ConcreteHandler2());
      const handler3 = handler2.setNext(new ConcreteHandler3());

      // Запуск клиентского кода
      clientCode(handler1);

  "
  />
</template>

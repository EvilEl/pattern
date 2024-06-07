<template>
  <p>
    Паттерн команда (Command) используется для инкапсуляции запроса в объект, позволяя таким образом
    параметризовать объекты с операциями, задерживать выполнение операций или поддерживать отмену
    операций. Этот паттерн разделяет объекты, инициирующие операции, от объектов, которые
    действительно выполняют эти операции.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна команда заключается в создании объектов, представляющих действия. Эти
    объекты содержат всю необходимую информацию для выполнения действий, включая получателей,
    команды и параметры.
  </p>
  <highlightjs
    language="js"
    code="
    // Интерфейс команды
    class Command {
      execute() {}
    }

    // Получатель
    class Receiver {
      doSomething() {
         console.log('Receiver: Working on something important...');
      }

      doSomethingElse() {
         console.log('Receiver: Working on something else...');
      }
    }

    // Конкретные команды
    class ConcreteCommand1 extends Command {
      constructor(receiver) {
        super();
        this.receiver = receiver;
    }

      execute() {
         this.receiver.doSomething();
      }
    }

    class ConcreteCommand2 extends Command {
      constructor(receiver) {
        super();
        this.receiver = receiver;
      }

      execute() {
        this.receiver.doSomethingElse();
      }
    }
    // Инициатор
    class Invoker {
      setCommand(command) {
        this.command = command;
      }

      executeCommand() {
        this.command.execute();
      }
    }

    // Клиентский код
    function clientCode() {
      const receiver = new Receiver();

      const command1 = new ConcreteCommand1(receiver);
      const command2 = new ConcreteCommand2(receiver);

      const invoker = new Invoker();

      invoker.setCommand(command1);
      invoker.executeCommand();  // Output: Receiver: Working on something important...

      invoker.setCommand(command2);
      invoker.executeCommand();  // Output: Receiver: Working on something else...
    }

    clientCode();
"
  />
</template>

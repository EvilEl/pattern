<template>
  <p>
    Паттерн прокси (Proxy) используется для создания заместителя или суррогата другого объекта,
    чтобы контролировать доступ к нему. Прокси может выполнять различные функции, такие как контроль
    доступа, кэширование, логирование и т. д., не изменяя при этом оригинальный объект.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна прокси заключается в том, чтобы предоставить объект, который контролирует
    доступ к другому объекту. Этот объект-прокси может добавлять дополнительные операции до или
    после вызова методов реального объекта.
  </p>
  <highlightjs
    language="js"
    code="
     // Интерфейс субъекта
     class Subject {
         request() {}
     }

     // Реальный субъект, который мы хотим контролировать
     class RealSubject extends Subject {
         request() {
             return 'RealSubject: Handling request.';
         }
     }

     // Прокси, который контролирует доступ к реальному субъекту
     class Proxy extends Subject {
         constructor(realSubject) {
             super();
             this.realSubject = realSubject;
         }

         request() {
             if (this.checkAccess()) {
                 const result = this.realSubject.request();
                 this.logAccess();
                 return result;
             } else {
                 return 'Proxy: Access denied.';
             }
         }

         checkAccess() {
             // Некоторые проверки доступа
             console.log('Proxy: Checking access prior to firing a real request.');
             return true; // Предположим, что доступ всегда разрешен для простоты
         }

         logAccess() {
             console.log('Proxy: Logging the time of request.');
         }
     }

     // Клиентский код
     function clientCode(subject) {
         console.log(subject.request());
     }

     // Использование реального субъекта напрямую
     console.log('Client: Executing the client code with a real subject:');
     const realSubject = new RealSubject();
     clientCode(realSubject);

     // Использование прокси для контроля доступа к реальному субъекту
     console.log('\nClient: Executing the same client code with a proxy:');
     const proxy = new Proxy(realSubject);
     clientCode(proxy);
     "
  />
</template>

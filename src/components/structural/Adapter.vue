<template>
  <p>
    Паттерн Абстрактная фабрика (Abstract Factory) используется для создания семейства связанных или
    зависимых объектов без указания их конкретных классов. Этот паттерн предоставляет интерфейс для
    создания объектов, но позволяет подклассам изменить тип создаваемых объектов.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна заключается в предоставлении интерфейса для создания семейств связанных
    объектов, где конкретные классы объектов определяются подклассами фабрики.
  </p>
  <highlightjs
    language="js"
    code="
     // Класс с новым интерфейсом, который нужно адаптировать
     class NewAPI {
         specificRequest() {
             return 'Specific behavior of the new API';
         }
     }

     // Класс с устаревшим интерфейсом
     class OldAPI {
         request() {
             return 'Standard behavior of the old API';
         }
     }

     // Адаптер, который делает интерфейс NewAPI совместимым с OldAPI
     class Adapter extends OldAPI {
         constructor(newAPI) {
             super();
             this.newAPI = newAPI;
         }

         request() {
             return this.newAPI.specificRequest();
         }
     }

     // Клиентский код, который использует устаревший интерфейс
     function clientCode(api) {
         console.log(api.request());
     }

     // Использование старого API
     const oldApi = new OldAPI();
     clientCode(oldApi); // Output: Standard behavior of the old API

     // Использование нового API через адаптер
     const newApi = new NewAPI();
     const adapter = new Adapter(newApi);
     clientCode(adapter); // Output: Specific behavior of the new API
        "
  />
</template>

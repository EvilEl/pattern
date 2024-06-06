<template>
  <p>
    Паттерн одиночка (Singleton) в JavaScript используется для создания объекта, который будет иметь
    единственный экземпляр. Это полезно, когда нужен один объект для управления глобальным
    состоянием или ресурсами, такими как кэш или настройки конфигурации.
  </p>

  <h2>Основная идея</h2>
  <p>
    паттерна заключается в том, чтобы предотвратить создание более одного экземпляра класса и
    обеспечить глобальную точку доступа к этому экземпляру.
  </p>

  <highlightjs
    language="js"
    code="
  class Singleton {
      constructor() {
       if (Singleton.instance) {
         return Singleton.instance;
       }
       Singleton.instance = this;
       }
      callLog() {
       console.log('singleton');
      }
    }
    const singletonOne = new Singleton();
    const singletonTwo = new Singleton();

    console.log(singletonOne === singletonTwo); //true
      "
  />
</template>
<style lang="scss" scoped></style>

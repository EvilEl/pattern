<template>
  <div>
    <p class="title">
      Фабричный метод — это порождающий паттерн проектирования, который определяет общий интерфейс.
    </p>
    <h2>Основная идея</h2>
    <p class="description">
      Cоздавать объекты не напрямую, используя оператор new, а через вызов особого фабричного
      метода. Объекты всё равно будут создаваться при помощи new, но делать это будет фабричный
      метод.
    </p>
  </div>
  <highlightjs
    language="js"
    code="Базовый класс
  class BaseClass {
    constructor(property1) {
      this.property1 = property1;

    method1() {
      console.log('Method 1 of BaseClass');
    }

  // Производный класс 1
  class Type1 extends BaseClass {
    constructor(property1) {
      super(property1);

    method1() {
      console.log('Method 1 of Type 1');
    }

  // Производный класс 2
  class Type2 extends BaseClass {
    constructor(property1) {
      super(property1);

    method1() {
      console.log('Method 1 of Type 2');
    }

  // Фабрика объектов
  class ObjectFactory {
    createObject(type, property1) {
      switch(type) {
        case 'type1':
          return new Type1(property1);
        case 'type2':
          return new Type2(property1);
        default:
          return new BaseClass(property1);
      }
    }

  // Создаем объекты с помощью фабрики
  const factory = new ObjectFactory();
  const object1 = factory.createObject('type1', 'value1');
  const object2 = factory.createObject('type2', 'value2');
  const object3 = factory.createObject('unknown', 'default')
  // Вызываем методы объектов
  object1.method1(); // Method 1 of Type 1
  object2.method1(); // Method 1 of Type 2
  object3.method1(); // Method 1 of BaseClass
  "
  />
</template>

<template>
  <p>
    Паттерн строитель (Builder) используется для пошагового создания сложных объектов. Этот паттерн
    особенно полезен, когда объект имеет множество параметров или когда нужно создавать различные
    представления одного и того же объекта.
  </p>
  <h2>Основная идея</h2>
  <p>
    Основная идея паттерна строитель заключается в разделении процесса построения объекта от его
    представления, что позволяет использовать один и тот же процесс построения для создания
    различных представлений.
  </p>
  <highlightjs
    language="js"
    code="
    class User {
     constructor(name, email, age) {
       this.name = name;
       this.email = email;
       this.age = age;
     }
    }

    class UserBuilder {
      constructor(name) {
       this.user = new User(name);
      }

      setEmail(email) {
        this.user.email = email;
        return this;
      }
      setAge(age) {
        this.user.age = age;
        return this;
      }
      build() {
        return this.user;
      }
    }

// Использование паттерна Строитель для создания объекта User
const user1 = new UserBuilder('John')
                  .setEmail('john@example.com')
                  .setAge(30)
                  .build();
console.log(user1); // User { name: 'John', email: 'john@example.com', age: 30 }
    "
  />
</template>

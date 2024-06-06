<script setup lang="ts"></script>

<template>
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

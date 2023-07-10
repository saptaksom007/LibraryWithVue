<template>
  <div class="book-library">
    <div v-for="book in books" :key="book.id" class="book-card">
      <!-- <img :src="book.imageUrl" :alt="book.title" class="book-image"> -->
      <div class="book-details">
        <h3>{{ book.title }}</h3>
        <p>Author: {{ book.author }}</p>
        <p>Category: {{ book.category }}</p>
        <p>Course: {{ book.course }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import books from '@/includes/bookObj';
export default {
  name: "BookLibrary",
  data() {
    return {
      books: books
    };
  },
};
</script>

<style>
.book-library {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  animation: slide-up 0.5s ease-in-out;
}

.book-image {
  width: 200px;
  height: auto;
  margin-bottom: 8px;
}

.book-details {
  text-align: center;
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
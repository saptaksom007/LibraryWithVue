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
export default {
  name: "BookLibrary",
  data() {
    return {
      books: [
        {
          id: 1,
          title: "Book 1",
          author: "Author 1",
          category: "Category 1",
          course: "Course 1",
          imageUrl: "https://example.com/book1.jpg",
        },
        {
          id: 2,
          title: "Book 2",
          author: "Author 2",
          category: "Category 2",
          course: "Course 2",
          imageUrl: "https://example.com/book2.jpg",
        },
        {
          id: 3,
          title: "Book 3",
          author: "Author 3",
          category: "Category 1",
          course: "Course 3",
          imageUrl: "https://example.com/book3.jpg",
        },
        {
          id: 4,
          title: "Book 4",
          author: "Author 4",
          category: "Category 2",
          course: "Course 1",
          imageUrl: "https://example.com/book4.jpg",
        },
        {
          id: 5,
          title: "Book 5",
          author: "Author 5",
          category: "Category 3",
          course: "Course 2",
          imageUrl: "https://example.com/book5.jpg",
        },
        {
          id: 6,
          title: "Book 6",
          author: "Author 6",
          category: "Category 1",
          course: "Course 3",
          imageUrl: "https://example.com/book6.jpg",
        },
        {
          id: 7,
          title: "Book 7",
          author: "Author 7",
          category: "Category 2",
          course: "Course 1",
          imageUrl: "https://example.com/book7.jpg",
        },
        {
          id: 8,
          title: "Book 8",
          author: "Author 8",
          category: "Category 1",
          course: "Course 2",
          imageUrl: "https://example.com/book8.jpg",
        },
        {
          id: 9,
          title: "Book 9",
          author: "Author 9",
          category: "Category 3",
          course: "Course 3",
          imageUrl: "https://example.com/book9.jpg",
        },
        {
          id: 10,
          title: "Book 10",
          author: "Author 10",
          category: "Category 2",
          course: "Course 1",
          imageUrl: "https://example.com/book10.jpg",
        },
        {
          id: 11,
          title: "Book 11",
          author: "Author 11",
          category: "Category 3",
          course: "Course 2",
          imageUrl: "https://example.com/book11.jpg",
        },
        {
          id: 12,
          title: "Book 12",
          author: "Author 12",
          category: "Category 1",
          course: "Course 3",
          imageUrl: "https://example.com/book12.jpg",
        },
        {
          id: 13,
          title: "Book 13",
          author: "Author 13",
          category: "Category 2",
          course: "Course 1",
          imageUrl: "https://example.com/book13.jpg",
        },
        {
          id: 14,
          title: "Book 14",
          author: "Author 14",
          category: "Category 1",
          course: "Course 2",
        },
      ],
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
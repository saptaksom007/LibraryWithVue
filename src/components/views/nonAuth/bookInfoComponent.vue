<template>
  <div>
    <h1>Collection Page</h1>
    <div v-for="book in selectedBooks" :key="book.id">
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <!-- Display other book details -->
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      selectedBooks: [],
    };
  },
  created() {
    this.selectedBooks = this.$route.params.selectedBooks;
    console.log('data',this.selectedBooks);
  },
};
</script>

<style >
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  transition: all 0.3s ease;
}

.book-item:hover {
  transform: scale(1.05);
}

.book-image {
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.book-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.book-author {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

.book-category {
  font-size: 14px;
  font-style: italic;
  color: #777;
}

.book-course {
  font-size: 14px;
  color: #555;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
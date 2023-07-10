<template>
  <div class="admin-page">
    <headerComponent :isAdmin="this.isAdmin" />
    <h2 class="admin-heading">Admin Book Management</h2>

    <h3 class="section-heading">Add New Book</h3>
    <form @submit.prevent="addBook" class="add-book-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input id="title" v-model="newBook.title" type="text" required />
      </div>
      <div class="form-group">
        <label for="author">Author:</label>
        <input id="author" v-model="newBook.author" type="text" required />
      </div>
      <div class="form-group">
        <label for="category">Category:</label>
        <input id="category" v-model="newBook.category" type="text" required />
      </div>
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input id="image" v-model="newBook.image" type="text" required />
      </div>
      <button type="submit" class="add-book-button">Add Book</button>
    </form>

    <h3 class="section-heading">Book List</h3>
    <transition-group name="fade" class="book-list">
      <div v-for="(book, index) in books" :key="book.id" class="book-item">
        <div class="book-item-content">
          <img :src="book.image" alt="Book Cover" class="book-image" />
          <div class="book-details">
            <h4 class="book-title">{{ book.title }}</h4>
            <p class="book-author">Author: {{ book.author }}</p>
            <p class="book-category">Category: {{ book.category }}</p>
            <button @click="deleteBook(index)" class="delete-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
  
  <script>
import books from "@/includes/bookObj";
import headerComponent from "@/widgets/nonAuthHeaderComponent.vue";
export default {
  data() {
    return {
      books: books,
      newBook: {
        id: null,
        title: "",
        author: "",
        category: "",
        image: "",
      },
      nextBookId: 3, // Starting ID for new books
      isAdmin: false,
    };
  },
  components: {
    headerComponent,
  },
  created() {
    this.isAdmin = this.$route.query.isAdmin;
    console.log("isAdmin", this.isAdmin);
  },
  methods: {
    addBook() {
      if (
        this.newBook.title &&
        this.newBook.author &&
        this.newBook.category &&
        this.newBook.image
      ) {
        this.newBook.id = this.nextBookId;
        this.books.push({ ...this.newBook });
        this.newBook.title = "";
        this.newBook.author = "";
        this.newBook.category = "";
        this.newBook.image = "";
        this.nextBookId++;
      }
    },
    deleteBook(index) {
      this.books.splice(index, 1);
    },
  },
};
</script>
  
  <style>
.admin-page {
  padding: 20px;
}

.admin-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.section-heading {
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
}

.add-book-form {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
}

.form-group {
  margin-bottom: 10px;
  flex-basis: 100%;
}

label {
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-book-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.book-item {
  margin-bottom: 20px;
}

.book-item-content {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  transition: transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.book-item-content:hover {
  transform: scale(1.05);
}

.book-image {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-right: 10px;
}

.book-details {
  flex-grow: 1;
}

.book-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5px;
}

.book-author,
.book-category {
  font-size: 14px;
  margin: 0;
  color: #555;
}

.delete-button {
  padding: 6px 12px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
  
  <!-- Animation styles -->
  <style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
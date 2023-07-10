<template>
  <headerComponent :isAdmin="this.isAdmin" />

  <div class="book-homepage">
    <div class="filter-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by title or author"
      />
      <div class="filter-group">
        <label for="category-select">Category:</label>
        <select id="category-select" v-model="selectedCategory">
          <option value="">All Categories</option>
          <option
            v-for="category in categories"
            :value="category"
            :key="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <div class="filter-group">
        <label for="course-select">Course:</label>
        <select id="course-select" v-model="selectedCourse">
          <option value="">All Courses</option>
          <option v-for="course in courses" :value="course" :key="course">
            {{ course }}
          </option>
        </select>
      </div>
    </div>
    <div class="book-list">
      <transition-group name="fade">
        <div
          v-for="book in filteredBooks"
          :key="book.id"
          class="book-item"
          :class="{ selected: selectedBooks.includes(book) }"
          @click="selectBook(book)"
        >
          <img :src="book.image" alt="Book Cover" class="book-image" />
          <h3 class="book-title">{{ book.title }}</h3>
          <p class="book-author">{{ book.author }}</p>
          <p class="book-category">{{ book.category }}</p>
          <p class="book-course">{{ book.course }}</p>
        </div>
      </transition-group>
    </div>

    <button
      v-show="selectedBooks.length > 0"
      class="checkout-button"
      @click="goToNextPage()"
    >
      Checkout
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import headerComponent from "@/widgets/nonAuthHeaderComponent.vue";
import books from "@/includes/bookObj";
export default defineComponent({
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      selectedCourse: "",
      books: books,
      selectedBooks: [],
      categories: ["Fiction", "Non-Fiction", "Mystery"],
      courses: ["Computer Science", "History", "Mathematics", "Biology"],
    };
  },
  created() {
    this.isAdmin = this.$route.query.isAdmin;
    console.log("isAdmin", this.isAdmin);
  },
  components: {
    headerComponent,
  },
  computed: {
    filteredBooks() {
      const query = this.searchQuery.toLowerCase();
      const category = this.selectedCategory.toLowerCase();
      const course = this.selectedCourse.toLowerCase();

      return this.books.reduce((filtered, book) => {
        const titleMatch = book.title.toLowerCase().includes(query);
        const authorMatch = book.author.toLowerCase().includes(query);
        const categoryMatch =
          category === "" || book.category.toLowerCase() === category;
        const courseMatch =
          course === "" || book.course.toLowerCase() === course;

        if ((titleMatch || authorMatch) && categoryMatch && courseMatch) {
          filtered.push(book);
        }

        return filtered;
      }, []);
    },
  },
  methods: {
    selectBook(book) {
      if (this.selectedBooks.includes(book)) {
        this.selectedBooks = this.selectedBooks.filter(
          (selectedBook) => selectedBook !== book
        );
      } else {
        this.selectedBooks.push(book);
      }
    },
    checkout(book) {
      this.selectedBooks.includes(book);
    },
    goToNextPage() {
      console.log("here", JSON.stringify(this.selectedBooks));
      this.$router.push({
        name: "collection",
        query: {
          selectedBooks: JSON.stringify(this.selectedBooks),
        },
      });
    },
  },
});
</script>

<style>
.book-homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.filter-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.filter-group {
  margin-left: 20px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.book-item {
  flex: 0 0 250px;
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
.book-item.selected {
  border: 2px solid rgb(19, 23, 255); /* Apply a red border to selected books */
}
.checkout-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: rgb(19, 23, 255);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

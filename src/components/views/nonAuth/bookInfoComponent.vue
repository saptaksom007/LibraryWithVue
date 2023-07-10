<template>
  <div>
    <headerComponent />
    <h1>You have successfully borrow these books :-</h1>
    <div class="book-list">
      <transition-group name="fade">
        <div v-for="book in selectedBooks" :key="book.id" class="book-item">
          <img :src="book.image" alt="Book Cover" class="book-image" />
          <h3 class="book-title">{{ book.title }}</h3>
          <p class="book-author">{{ book.author }}</p>
          <p class="book-category">{{ book.category }}</p>
          <p class="book-course">{{ book.course }}</p>
        </div>
      </transition-group>
    </div>
  </div>
</template>
  
  <script>
import headerComponent from "@/widgets/nonAuthHeaderComponent.vue";

export default {
  data() {
    return {
      selectedBooks: [],
    };
  },
  created() {
    this.selectedBooks = JSON.parse(this.$route.query.selectedBooks);
    console.log("data", this.selectedBooks);
  },
  components: {
    headerComponent,
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
  flex-wrap: wrap;
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
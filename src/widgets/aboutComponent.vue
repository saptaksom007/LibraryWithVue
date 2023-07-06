<template>
  <div>
    <h1 class="fade-in">About Library Management System</h1>
    <transition name="slide-in">
      <p class="fade-in">
        The Library Management System is a web application designed to simplify
        and automate the processes involved in managing a library. It provides
        an efficient way to handle books, categories, courses, and student
        information.
      </p>
    </transition>
    <transition name="slide-in">
      <p class="fade-in">
        With the Library Management System, librarians can easily manage the
        library's resources, track book availability, and keep records of
        student borrowing and returning books. Students can conveniently search
        and borrow books based on their course and view their borrowing history.
      </p>
    </transition>
    <transition name="slide-in">
      <p class="fade-in">
        The system offers two user modules: the Student module and the Library
        Admin module. The Student module allows students to browse and borrow
        books, while the Library Admin module empowers librarians to manage
        books, categories, and courses.
      </p>
    </transition>
    <transition name="slide-in">
      <p class="fade-in">
        The Library Management System provides a user-friendly interface,
        advanced search and sorting features, and data management
        functionalities. It aims to streamline library operations, enhance user
        experience, and promote efficient book management and accessibility.
      </p>
    </transition>
  </div>
</template>
  
  <script>
export default {
  name: "aboutComponent",
};
</script>
  
  <style>
.fade-in {
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-enter {
  opacity: 0;
  transform: translateY(20px);
}

.slide-in-enter-active {
  transition: all 0.5s ease-in-out;
  opacity: 1;
  transform: translateY(0);
}
</style>
var data = {
  todo: "24",
  inprogress: "8",
  compeleted: "5",
  allcourses: "89",

  courses: [
    {
      id: 1,
      title: "Brutalist Architecture and the Human Response",
      description:
        "Learn the secrets of the hand model industry in this 4 part course. Here's some more text and some more.",
      due: true,
      progress: "65",
      vprogress: false,
      duedate: "8",
      image: "https://source.unsplash.com/1jKjJjGgDG8/600x400",
      alt: "this is the test",
    },
    {
      id: 2,
      title: "Surfing safety",
      description:
        "Stay safe while getting barreled this summer.We'll look at wave etiqute, how to rock-off safely and how to properly secure your umbrella.",
      due: false,
      progress: "15",
      vprogress: false,
      duedate: "5",
      image: "https://source.unsplash.com/w3lQVmuK8fw/600x400",
      alt: "this is the test",
    },
    {
      id: 3,
      title: "Dellicius berries",
      description:
        "everyone loves berries, son let's learn about strawberries, raspberries, gooseberries and Hucleberry Finn.",
      due: false,
      progress: "85",
      vprogress: false,
      duedate: "2",
      image: "https://source.unsplash.com/KUfkX6gVwBU/600x400",
      alt: "this is the test",
    },
  ],
};

var app = new Vue({
  el: "#courses",
  data: data,
  methods: {
    navover: (event) => {
      console.log(123);
      event.stopPropagation();
      var navlinks;
      navlinks = document.getElementsByClassName("nav-link");
      for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace("active", "");
      }
      event.currentTarget.className += " active";
    },
  },
});

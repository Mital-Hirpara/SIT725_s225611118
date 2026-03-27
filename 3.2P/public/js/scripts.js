const cardList = [
  {
    title: "Australian Food",
    image: "Images/aus.png",
    link: "About Recipe 2",
    description:
      "Experience the flavors of Australia with this classic dish, combining fresh local ingredients and traditional recipes. Perfect for a hearty meal that highlights the country's unique culinary style.",
},
{
    title: "Australian Sweets",
    image: "Images/sweet.png",
    link: "About Recipe 3",
    description:
      "Indulge in these popular Australian desserts, featuring sweet treats that are rich, comforting, and full of local flavors. Ideal for sharing with friends and family or enjoying as a delightful snack.",
},
];

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const addCards = (items) => {
  items.forEach((item) => {
    const itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p>" +
      "</div></div></div>";

    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  $("#clickMeButton").click(() => {
    clickMe();
  });

  addCards(cardList);

  $(document).on("click", ".card .activator", function (event) {
    event.preventDefault();
    $(this).closest(".card").find(".card-reveal").stop(true, true).slideDown(200);
  });

  $(document).on("click", ".card .card-reveal .card-title", function () {
    $(this).closest(".card-reveal").stop(true, true).slideUp(200);
  });
});

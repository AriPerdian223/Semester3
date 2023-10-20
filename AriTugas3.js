//NAMA  : ARI PERDIAN
//NIM   : 20220040072
//KELAS : TI22J

//TipeData Object
const restaurant = {};
restaurant ["name"] = "Ari Perdian";
restaurant ["city"] = "Kota Sukabumi"
restaurant ["favorite drink"] = "Nutri boost"
restaurant ["favorite Food"] = "Mie Ayam"
restaurant ["isVegan"] = false

console.table(restaurant)

//TipeData Array
const restaurants = [
    {
      name: "Ari Perdian",
      city: "Kota Sukabumi",
      favoriteDrink: "Nutri Boost",
      favoriteFood: "Mie Ayam",
      isVegan: false
    },
    {
        name: "Ari",
        city: "Jakarta",
        favoriteDrink: "Sprite",
        favoriteFood: "Batagor",
        isVegan: true
      }
    
]

console.table(restaurants)
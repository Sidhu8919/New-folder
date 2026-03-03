let natureData = [
  {
    id: 1,
    name: "Mountain",
    image:  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    about: "Mountains are large landforms that rise above the surrounding land. They offer beautiful views, fresh air, and are popular for trekking and adventure."
  },
  {
    id: 2,
    name: "Forest",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    about: "Forests are large areas covered with trees and wildlife. They play a crucial role in maintaining ecological balance and providing oxygen."
  },
  {
    id: 3,
    name: "Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    about: "Beaches are coastal landforms along oceans or seas. They are known for their relaxing environment, waves, and scenic beauty."
  }
];
function card(){ 
    let cards="";
    for(let item of natureData){
        cards+=`
              <div class="box">
              <img src= "${item.image}" class="image">
              <h1>${item.name}</h1>
              <p>${item.id}</p>
              <p>${item.about}</p>
             
              </div>
     ` 
    }



    console.log(cards);
    let elm = document.getElementById("card");
    elm.innerHTML=cards;
}
card();
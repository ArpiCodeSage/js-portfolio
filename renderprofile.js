const user={
    name:"ari g",
    age:21,
    location:{
        street:"y2k",
        city:"everywhere and nowhere",
    },
    bio:"asprining swe at faang",
    hobbies:["manhwa","manhua","shows"],
};
const {name,age,location:{city},hobbies}=user;

console.log(city);

const {name:username,age:AGE,...rest}=user;
console.log(rest);
console.log(AGE);
console.log(username);
console.log(rest.bio)
document.body.innerHTML=`
  <div class="card">
        <h2>USER PROFILE</h2>
        <h3> ${username},${rest.bio}</h3>
        <p>Hobbies:${hobbies.join(",")}</p>
    </div>`;
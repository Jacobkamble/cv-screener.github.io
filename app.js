console.log("cv screener");
const data = [
    {
        name: 'Rohan Sharma',
        age: 23,
        city: 'Pune',
        Language: 'Java',
        Framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Vijay Kumar',
        age: 25,
        city: 'Hyderabad',
        Language: 'Python',
        Framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
    }, {
        name: 'Mohan Reddy',
        age: 24,
        city: 'Delhi',
        Language: 'Javascript',
        Framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }, {
        name: 'Preeti Sharma',
        age: 21,
        city: 'Guvahati',
        Language: 'Python',
        Framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/4.jpg'
    }, {
        name: 'Vinay Agrwal',
        age: 23,
        city: 'Aurangabad',
        Language: 'Java',
        Framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
    }, {
        name: 'Ajay Joshi',
        age: 27,
        city: 'Jalna',
        Language: 'Java',
        Framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    {
        name: 'Aditya Sanap',
        age: 26,
        city: 'Pune',
        Language: 'Java',
        Framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
        name: 'Rohit Das',
        age: 28,
        city: 'Pune',
        Language: 'Java',
        Framework: 'Spring Boot Spring MVC',
        image: 'https://randomuser.me/api/portraits/men/8.jpg'
    },

]


function iterator(arr) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < arr.length) {
                return {
                    value: arr[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}


const btn = document.getElementById("btn");
const img = document.getElementById("image");
const profile = document.getElementById("profile")



btn.addEventListener("click", showProfile);

let candidates = iterator(data);
showProfile();

function showProfile() {
    let currentCandidate = candidates.next().value;

    if (currentCandidate != undefined) {
        img.innerHTML = `<img src="${currentCandidate.image}">`

        profile.innerHTML = ` <ul class="list-group">
    <li class="list-group-item">Name : ${currentCandidate.name}</li>
    <li class="list-group-item">Age : ${currentCandidate.age} </li>
    <li class="list-group-item">City : ${currentCandidate.city}</li>
    <li class="list-group-item">Language : ${currentCandidate.Framework} </li>
  </ul>`
    }
    else {
        // let alert=document.getElementById("alert");

        //    alert.innerHTML= `<div class="alert alert-danger" role="alert">
        //    All application Fetched!Please reload...!</div>`;
        alert("End of application")
        window.location.reload();
    }
}
// Add your code here
const submitData = (userName, userEmail) => {
    const formData = {
        name: userName,
        email: userEmail,
    };

    const objectConfiguration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    
    return fetch("http://localhost:3000/users", objectConfiguration)
    .then(resp => resp.json())
    .then(user => getId(user))
    .catch(error => errorFunc(error));
};

const bodyTag = document.querySelector('body');

const getId = user => {
    const li = document.createElement('li');
    li.textContent = user.id; 
    bodyTag.appendChild(li);
};

const errorFunc = error => {
    const newLi = document.createElement('li');
    newLi.textContent = error.message;
    bodyTag.appendChild(newLi);
};

// const formData = {
//     dogName: "Byron",
//         dogBreed: "Poodle", 
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(response => response.JSON())
//     .then(object => console.log(object));
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });


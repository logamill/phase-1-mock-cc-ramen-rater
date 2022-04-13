let ramenMenuImg = document.getElementById('ramen-menu')

// image tags

let ramenOneImg = document.createElement('img') 
ramenOneImg.setAttribute("id", "ramenOne");
let ramenTwoImg = document.createElement('img')
ramenTwoImg.setAttribute("id", "ramenTwo");
let ramenThreeImg = document.createElement('img')
ramenThreeImg.setAttribute("id", "ramenThree")
let ramenFourImg = document.createElement('img')
ramenFourImg.setAttribute("id", "ramenFour")
let ramenFiveImg = document.createElement('img')
ramenFiveImg.setAttribute("id", "ramenFive")


//get html elements

let ramenDeets = document.getElementById('ramen-details')
let ramenImg = document.getElementsByClassName('detail-image')
ramenImg.src = ''
let h2Element = document.getElementsByClassName('name')
console.log(h2Element)
const h3Rest = document.getElementsByClassName('restaurant')

let ramenName = document.getElementById('')



/* Trying a callback function to sort through all data

const callBackSorted = (ramen) => {
    ramenImg.src= ramen.image
    h2Element.textContent = ramen.name
    h3Rest.textContent = ramen.restaurant

    
}

*/

fetch('http://localhost:3000/ramens') // initial fetch request to server
.then(resp => resp.json()) // convert data to JSON 
.then(data => {

    ramenOneImg.src = data[0].image // This can totally be done with a forEach loop but I didn't want to run out of time figuring it out
    ramenMenuImg.appendChild(ramenOneImg)
    console.log(ramenOneImg)

    document.addEventListener("DOMContentLoaded", function () {

    ramenOneImg.addEventListener('click', () => {

        ramenImg.src = data[0].image
        h2Element.textContent = data[0].name
        h3Rest.textContent = data[0].restaurant


        console.log(data[0].name)
        console.log(ramenImg.src)
        console.log('clicked')
        console.log(h2Element)
    })})

    ramenTwoImg.src = data[1].image
    ramenMenuImg.appendChild(ramenTwoImg)

    ramenTwoImg.addEventListener('click', () => {

        ramenImg.src = data[1].image
        h2Element.textContent = data[1].name
        h3Rest.textContent = data[1].restaurant
        console.log(ramenImg.src)
        console.log(h2Element)
        console.log('clicked')
    })

    ramenThreeImg.src = data[2].image
    ramenMenuImg.appendChild(ramenThreeImg)

    ramenThreeImg.addEventListener('click', () => {

        ramenImg.src = data[2].image
        h2Element.textContent = data[2].name
        h3Rest.textContent = data[2].restaurant

        console.log(h2Element)
    })

    ramenFourImg.src = data[3].image
    ramenMenuImg.appendChild(ramenFourImg)
    ramenFourImg.addEventListener('click', () => {

        ramenImg.src = data[3].image
        h2Element.textContent = data[3].name
        h3Rest.textContent = data[3].restaurant
        
        console.log(h2Element)
    })

    ramenFiveImg.src = data[4].image
    ramenMenuImg.appendChild(ramenFiveImg)
    ramenFiveImg.addEventListener('click', () => {

        ramenImg.src = data[4].image
        h2Element.textContent = data[4].name
        h3Rest.textContent = data[4].restaurant
    })
})


    const submitRamen = () => { // submit form handle
        const form = document.querySelector('form')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(e.target['new-ramen'].value)

        })
    
    
    console.log(data)

    .catch(function (error) {
	console.warn(error);
    })

    }


      // data.forEach(element => { // loop through JSON data and assign image url to ramen-menu div
    //     ramenImg.src = element.image
    //     ramenMenuImg.appendChild(ramenImg)
    // });


// document.addEventListener("DOMContentLoaded", function (e) {

//     let ramOneInfo = document.getElementById('img#ramenOne')
//     console.log(ramOneInfo)

//     // ramOneInfo.addEventListener('click', () => {
//     // console.log('I was clicked')
//     // })
    

//   });

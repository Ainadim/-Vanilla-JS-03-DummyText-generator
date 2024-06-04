const dummyText = 
["Chocolate cake bonbon chocolate cake lemon drops marzipan. Carrot cake dessert liquorice macaroon cookie. Fruitcake gummies oat cake wafer marshmallow topping cake cupcake.", 
"Bear claw fruitcake tart caramels gummies croissant candy jelly. Danish cotton candy chocolate cake dessert sweet roll marzipan jelly beans sugar plum. Halvah pudding chocolate cake ice cream tootsie roll chocolate bar chocolate cupcake. Dragée sesame snaps tootsie roll jelly beans oat cake.","Pastry chupa chups muffin bear claw tootsie roll sesame snaps chocolate bar. Carrot cake oat cake toffee pudding soufflé. Jelly-o jelly beans bonbon candy canes gingerbread dessert cotton candy candy canes caramels.",
"Gummies lemon drops pudding danish powder. Jelly-o pudding brownie cheesecake tart gummies. Chocolate sesame snaps jelly beans sesame snaps carrot cake ice cream marzipan toffee. Caramels brownie pastry cake gingerbread donut chupa chups cake pastry.", "Dessert donut wafer cookie gummi bears brownie topping. Bonbon gingerbread ice cream topping tart shortbread chupa chups sugar plum gummi bears. Macaroon gummies soufflé chocolate bar soufflé icing.","Jelly beans cupcake jelly-o tart bonbon bonbon sweet roll dragée bear claw. Macaroon cotton candy dragée cookie macaroon cake cake pastry. Cheesecake powder fruitcake pudding fruitcake."
]
const form = document.getElementById("form")
const amount = document.getElementById("amount")
const result = document.getElementById("result")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const value = parseInt(amount.value)
    const randomNumber = Math.floor(Math.random()*dummyText.length)

    if (isNaN(value) || value < 0 || value > 6) {
        result.innerHTML = `<h1>Please write a Number betwen 1 - 6!</h1> <br><h4>But here is a random text:</h4><p>${dummyText[randomNumber]}</p>`
    } else {
        const arraySlice = dummyText.slice(0,value)
        const finalArray = arraySlice.map(function (singleDummy) {
            return `<p>${singleDummy}</p>`
        }).join("")

        result.innerHTML = finalArray;
    }

})
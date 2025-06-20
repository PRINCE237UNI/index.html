var nom = document.getElementById('nom');
var password = document.getElementById('password');
var contenu1 = document.getElementById('contenu1');
var contenu2 = document.getElementById('contenu2');
var entete = document.getElementById('entete');
var corps = document.getElementById('corps').firstElementChild;
var alternative = document.getElementById('alternative');
var submits = document.getElementById('submits');
var span = document.getElementById('span');
var email = document.getElementById('email');
var message = document.getElementsByClassName('message');

nom.addEventListener('input', () => {
    if (nom.value !== "") {
        nom.style.color = 'white'
        nom.style.borderColor = 'green'
        contenu2.style.borderColor = 'green'
        entete.style.color = 'green'
        entete.style.borderColor = 'green'
        message.item(0).textContent = ""



    } else {
        message.item(0).style.color = "red"
        message.item(0).textContent = "ce champ ne doit pas etre vide"
        nom.style.color = 'red'
        nom.style.borderBlockColor = 'red'
        contenu2.style.borderColor = 'red'
        entete.style.color = 'red'
        entete.style.borderColor = 'red'


    }
})
password.addEventListener('input', () => {
    var val = password.value
    if (password.value !== "") {
        if (val.length < 8) {
            password.style.color = 'red';
            password.style.borderBlockColor = 'red';
            entete.style.color = 'red'
            entete.style.borderColor = 'red'
            message.item(1).style.color = "red"
            message.item(1).textContent = "Il vous reste au moins " + (9 - val.length) + " caractètes";
            contenu2.style.borderColor = 'red';
        } else {
            password.style.color = 'white';
            password.style.borderColor = 'green';
            contenu2.style.borderColor = 'green';
            entete.style.color = 'green'
            entete.style.borderColor = 'green'
            message.item(1).textContent = ""
        }


    } else {
        password.style.color = 'red';
        password.style.borderBlockColor = 'red';
        entete.style.color = 'red'
        entete.style.borderColor = 'red'
        message.item(1).style.color = "red"
        message.item(1).textContent = "ce champ ne doit pas etre vide"
        contenu2.style.borderColor = 'red';

    }
})
email.addEventListener('input', () => {
    if (email.value !== "") {
        message.item(2).textContent = ""

        email.style.color = 'white';
        email.style.borderColor = 'green';
        contenu2.style.borderColor = 'green';
        entete.style.color = 'green'
        entete.style.borderColor = 'green'

    } else {
        message.item(2).style.color = "red"
        message.item(2).textContent = "ce champ ne doit pas etre vide"
        email.style.color = 'red';
        email.style.borderBlockColor = 'red';
        entete.style.color = 'red'
        entete.style.borderColor = 'red'

        contenu2.style.borderColor = 'red';

    }
})
submits.addEventListener('click', function(e) {
        if (password.value == '' || nom.value == "") {
            entete.style.color = 'red';
            password.style.color = 'red';
            password.style.borderColor = 'red';
            entete.style.color = 'red'
            entete.style.borderColor = 'red'
            email.style.color = 'red';
            email.style.borderBlockColor = 'red';
            entete.style.color = 'red'
            entete.style.borderColor = 'red'
            for (var i = 0; i < 3; i++) {
                message.item(i).style.color = "red"
                message.item(i).textContent = "ce champ ne doit pas etre vide"
            }

            contenu2.style.borderColor = 'red';
            contenu2.style.borderColor = 'red';
            nom.style.color = 'red'
            nom.style.borderBlockColor = 'red'
            contenu2.style.borderColor = 'red'
            entete.style.color = 'red'
            entete.style.borderColor = 'red'
            e.preventDefault()
        }
    })
    //
    //  application du css
document.body.style.backgroundImage = `url('police/im.jpg')`
document.body.style.backgroundRepeat = 'notRepeat'
document.body.style.backgroundSize = 'cover'
document.body.style.color = 'aliceblue'
document.body.style.backgroundPosition = 'center'
document.body.style.height = '100vh'
document.body.style.padding = '0'
document.body.style.margin = '0'

contenu2.style.display = 'flex';
contenu2.style.flexDirection = 'column';
contenu2.style.alignItems = 'center';
contenu2.style.marginLeft = 'auto';
contenu2.style.marginRight = 'auto';
contenu2.style.marginTop = 'auto';
contenu2.style.marginBottom = 'auto';
contenu2.style.overflow = 'hidden';
contenu2.style.height = '430px';
contenu2.style.borderWidth = '1px';
contenu2.style.borderStyle = 'solid';
contenu2.style.borderRadius = '15px';
contenu2.style.boxSizing = 'borderBox';

// .contenu1 

contenu1.style.display = 'flex';
contenu1.style.flexDirection = 'column';
contenu1.style.alignItems = 'center';
contenu1.style.width = '100%';
contenu1.style.height = '100vh';
contenu1.style.position = 'fixed';
contenu1.style.backgroundColor = ' rgba(12, 33, 32, 0.318)';


entete.style.backgroundColor = ' rgb(234, 236, 237)';
entete.style.color = 'black';
entete.style.borderRadius = ' 15px 0';
entete.style.width = '100px';
entete.style.textAlign = ' center';
entete.style.marginBottom = '40px';

corps.style.display = 'flex'
corps.style.flexDirection = 'column'
corps.style.width = '300px'
corps.style.paddingLeft = '30px'
corps.style.paddingRight = '30px'

// input 
nom.style.marginBottom = '15px'
nom.style.borderRadius = '15px'
nom.style.height = '30px'
nom.style.backgroundColor = 'transparent'
nom.style.color = ' antiquewhited'
nom.style.transition = 'all 1s'


password.style.marginBottom = '15px'
password.style.borderRadius = '15px'
password.style.height = '30px'
password.style.backgroundColor = 'transparent'
password.style.color = ' antiquewhited'
password.style.transition = 'all 1s'
email.style.marginBottom = '15px'
email.style.borderRadius = '15px'
email.style.height = '30px'
email.style.backgroundColor = 'transparent'
email.style.color = ' antiquewhited'
email.style.transition = 'all 1s'

alternative.style.display = 'flex'
alternative.style.flexDirection = 'column'
alternative.style.marginTop = '12px'
    // button
submits.style.borderRadius = '12px';
submits.style.height = '30px';
submits.style.border = 'transparent';
submits.style.cursor = 'pointer';
submits.style.transition = '1s all';

// span {



submits.addEventListener('mouseenter', () => {
    submits.style.zoom = '110%';
    submits.style.backgroundColor = 'rgb(15, 15, 82)'
    submits.style.color = 'aliceblue'
})
submits.addEventListener('mouseout', () => {
    submits.style.zoom = '100%';
    submits.style.backgroundColor = 'aliceblue'
    submits.style.color = 'black'
})

// span:hover
span.addEventListener('mouseenter', () => {
    span.style.color = 'cadetblue';
})
span.addEventListener('mouseout', () => {
    span.style.color = 'aliceblue';
})

// input:hover

nom.addEventListener('mouseenter', () => {
    nom.style.border = ' 2ps solid rgb(255, 255, 255)'
    nom.style.backgroundColor = 'rgba(33, 30, 35, 0.543)'
    nom.style.color = 'white'

})
nom.addEventListener('mouseout', () => {
    nom.style.border = ' 2ps solid rgb(255, 255, 255)'
    nom.style.backgroundColor = 'transparent'
    nom.style.color = 'white'

})
password.addEventListener('mouseenter', () => {
    password.style.border = ' 2ps solid rgb(255, 255, 255)'
    password.style.backgroundColor = 'rgba(33, 30, 35, 0.543)'
    password.style.color = 'white'

})
password.addEventListener('mouseout', () => {
    password.style.border = ' 2ps solid rgb(255, 255, 255)'
    password.style.backgroundColor = 'transparent'
    password.style.color = 'white'

})
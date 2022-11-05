function createGame(player1, player2, hour,) {
    return`
    <li>
            <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/${player2}.svg" alt="Bandeira da${player2}">
        </li>
     
    `
}

let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return`
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>
`

}

document.querySelector('#app').innerHTML=`    
<header>
<img src="./assets/header.svg" alt="logo da NLW">
</header>
<main id="cards">
${createCard("24/11", "quinta", createGame('suica', 'camaroes', '07:00' )+createGame('portugal', 'ghana', '13:00' )+createGame('brazil', 'servia', '16:00' ))}
${createCard("28/11", "segunda", createGame('coreiadosul', 'ghana', '10:00')+createGame('brazil', 'suica', '13:00'  )+createGame('portugal', 'uruguay', '16:00' ))}



</main>
`
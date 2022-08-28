const colors = ['red', 'orange', 'yellow', 'green','blue','indigo', 'violet'];

let hero = ['Ivan']
    ,native = ['York','Of']
    ,destination = ['Poltava','In']
    ,rainbow = destination.concat(native).concat(hero).reverse()
    ;

rainbow[0] = 'Richard';
rainbow.splice(3,2, 'Gave', 'Battle', 'In', 'Vain');

document.write(`<div class="wrapper">`)

for(let i = 0; i < rainbow.length; i++){
	document.write(`<div class="wrapper_element">
        <span style="background-color: ${colors[i]};"></span>
		${rainbow[i]}
        </div>`)
}

document.write(`</div>`)
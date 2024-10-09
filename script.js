// const my_div = document.getElementById('lista')

const linki_lista = [
    {'url': 'responsive-navbar/index.html', 'name': 'Responsive Navbar'},
    {'url': 'my-own-01/index.html', 'name': 'Slide Navbar'},
]

const listuj = (element_id, linki=linki_lista) => {
    el = document.getElementById(element_id)
    linki.forEach( link => {
        let li = document.createElement("li");
        li.append(link.url)
        el.appendChild(li);
    })
    
}
const cl = s => console.log(s);

const tag = tag => tagClass => `<${tag} class = "${tagClass}"</${tag}>`
let test = tag('i')('fas fa-jobs_burowesen') 

cl(test)
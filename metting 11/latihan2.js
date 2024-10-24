function rice(){
    var menus=['risotto','fried rice', 'sushi', 'bibimbap','curry rice']
    var random = Math.floor(Math.random()*menus.length);
    var recommendation = menus[random]
    console.log(`I recommend ${recommendation}`);
}
rice();

function noodle(){
    var menus=['udon','pad thai','mie goreng','wonton noodle soup','laksa']
    var random = Math.floor(Math.random()*menus.length);
    var recommendation = menus[random]
    console.log(`I recommend ${recommendation}`);
}
noodle();
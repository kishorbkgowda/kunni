var i = 0;
let a = 120;
const pr = new Promise((res) => {
    const id = setInterval(() => {
        console.log(i);
        i++;
        if (i === 2) {
            clearInterval(id);
            
        }
    }, 2000);
});

async function lol() {
    try {
        const result = await pr;
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

lol();

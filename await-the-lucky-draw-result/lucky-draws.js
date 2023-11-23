function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

async function getResult(){
    try {
        const tina = await luckyDraw("Tina");
        console.log(tina);
    }catch(error){
        console.error(error);
    }
    try {
        const jorge = await luckyDraw("Jorge");
        console.log(jorge);
    } catch (error) {
        console.error(error);
    }
        
    try {
        const julien = await luckyDraw("Juline");
        console.log(julien);
    } catch (error) {
        console.error(error);
    }
}

getResult()
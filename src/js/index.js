// let xpos;
// let ypos;

document.addEventListener('DOMContentLoaded', () => {

  const app = document.querySelector('#app');
  const arena1 = new Stage (7, 5);
  arena1.mount(app);

  const pacman1 = new Pacman(arena1);
  pacman1.mount(arena1.arena);

  const wall1 = new Entity('wall', 6, 4, arena1);
  wall1.mount(arena1.arena);
  

  const wall2 = new Entity('wall', 3, 4, arena1);
  wall2.mount(arena1.arena);

  const wall3 = new Entity('wall', 3, 1, arena1);
  wall3.mount(arena1.arena);

  wall1.unmount();


  // const pacboy = document.querySelector('.pacboy-active-light');

  // //saves the x-position of pacman on the screen
  // xpos = pacboy.offsetLeft;
  // //saves the y-position of pacman on the screen
  // ypos = pacboy.offsetTop;

  
//   document.addEventListener('keydown', (event) =>{
    
//       if(event.key === 'ArrowRight'){
//         pacboy.style.left = `${xpos + 85}px`;
//         xpos += 85;
//       }
      
//       if(event.key === 'ArrowLeft'){
//         pacboy.style.left = `${xpos - 85}px`;
//         xpos -= 85;
//       }

//       if(event.key === 'ArrowUp'){
//         pacboy.style.top = `${ypos - 85}px`;
//         ypos -= 85;
//       }
// });


  // open and close the pacman
 /*  document.addEventListener('keydown', (event) =>{
    // if(event.key === 'ArrowDown'){
      
      if (pacboy.style.backgroundPositionX !== '100%'){
        
        pacboy.style.backgroundPositionX = '100%';
        
      }
      else{
        pacboy.style.backgroundPositionX = '0%';
        

      }
    } */
    
 /*  }); */
  
});

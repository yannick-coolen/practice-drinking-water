const smallCups = document.querySelectorAll('.cup-small');
const liters = <HTMLElement> document.querySelector('#liters');
const percentage = <HTMLStyleElement>document.querySelector('#percentage');
const remained = <HTMLStyleElement>document.querySelector('#remained');

smallCups.forEach((cup, idx: number): void => {
  cup.addEventListener('click', () => {
    highlightCups(idx);
  });
});

const highlightCups = (idx: number): void => {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling!.classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2: number): void => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
};

const updateBigCup = (): void => {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups: number = smallCups.length;
    const height: number = 0;
  
    if (fullCups === 0) {
      percentage.style.visibility = 'hidden';
      percentage.style.height = height.toString();
    } else {
      percentage.style.visibility = 'visible';
      percentage.style.height = `${(fullCups / totalCups) * 330}px`;
      percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }
  
    if (fullCups === totalCups) {
      remained.style.visibility = 'hidden';
      remained.style.height = height.toString();
    } else {
      remained.style.visibility = 'visible';
      liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
  };
  
  updateBigCup();
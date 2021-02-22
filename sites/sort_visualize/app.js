const app = () => {
    
    let a = [];
    
    let max = 0;

    const resetButton = document.querySelector('.reset');

    resetButton.addEventListener('click', () => {
        location.reload();
    })

    const appendBar = (barElement) => {
        const barsContainer = document.querySelector('.wrapper')
        barsContainer.appendChild(barElement)
    }

    const makeBar = (weight, sorted) => {
        const bar = document.createElement('div')
        const height = (weight/max) * 100;
        bar.style.height = `${height}%`
        bar.style.width = '30px'
        bar.classList.add('bar')
        if(sorted){
            bar.classList.add('sorted')
        }
        var pElement = document.createElement('p')
        pElement.textContent = weight
        bar.appendChild(pElement)
        appendBar(bar)
    } 

    for(let i = 0; i<10; i++){
        a.push(Math.floor(Math.random() * 100 + 1));
        if(a[i] > max){
            max = a[i];
        }
    }

    const removeChildren = (parent) => {
        while(parent.firstChild){
            parent.removeChild(parent.firstChild)
        }
    }

    const makeBars = (bars, limit, min) => {
        const barsContainer = document.querySelector('.wrapper')
        removeChildren(barsContainer)
        bars.forEach((element, index) => {
            if(index <= limit){
                makeBar(element, true)
            }else{
                makeBar(element, false)
            }
        });
    }

    makeBars(a)

    const sort = () => {

        let min = 0;

        let i = 0;
        
        setInterval(function(){
            if(i >= a.length){
                
                clearInterval(this)
                return
            
            }else{

                min = i

                for(let j=i+1; j<a.length; j++){
                    if(a[min] > a[j]){
                        min = j
                    }
                }

                a[i] = [a[min], a[min] = a[i]][0]

                makeBars(a, i)
            }
            i++;
        }, 2000)

    }

    const sortButton = document.querySelector('.sort_button');
    
    sortButton.addEventListener('click', sort);

}

app()




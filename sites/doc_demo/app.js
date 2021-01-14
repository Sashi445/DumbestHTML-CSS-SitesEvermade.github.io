const rootElement = document.getElementById('bodySection');

const homeSection = {
    heading: "I'm the heading; HomeSection",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsam deserunt illum ipsum aperiam fugit harum id vel porro libero in, quidem sunt ullam, omnis fuga vitae cumque fugiat! Error!",
    getHtmlObject: function(){
        const htmlElement = document.createElement('div');
        const h1Element = document.createElement('h1');
        h1Element.textContent = this.heading;
        const bodyElement = document.createElement('p');
        bodyElement.textContent = this.body;
        htmlElement.className = "bodyItem";
        htmlElement.appendChild(h1Element);
        htmlElement.appendChild(bodyElement);
        return htmlElement;
    }
}

const aboutSection = {
    heading: "I'm the about section; About Section",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsam deserunt illum ipsum aperiam fugit harum id vel porro libero in, quidem sunt ullam, omnis fuga vitae cumque fugiat! Error!",
    getHtmlObject: function(){
        const htmlElement = document.createElement('div');
        const h1Element = document.createElement('h1');
        h1Element.textContent = this.heading;
        const bodyElement = document.createElement('p');
        bodyElement.textContent = this.body;
        htmlElement.className = "bodyItem";
        htmlElement.appendChild(h1Element);
        htmlElement.appendChild(bodyElement);
        return htmlElement;
    }
}

const randomSection = {
    heading: "I'm the random section; Random Section",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsam deserunt illum ipsum aperiam fugit harum id vel porro libero in, quidem sunt ullam, omnis fuga vitae cumque fugiat! Error!",
    getHtmlObject: function(){
        const htmlElement = document.createElement('div');
        const h1Element = document.createElement('h1');
        h1Element.textContent = this.heading;
        const bodyElement = document.createElement('p');
        bodyElement.textContent = this.body;
        htmlElement.appendChild(h1Element);
        htmlElement.appendChild(bodyElement);
        return htmlElement;
    }
}

function NavsectionState(selected){
    this.selected = selected;
    
    this.setState = function(selectedTab){
        this.selected = selectedTab;
        return this.reload();
    }
    
    this.reload =  function(){
        switch(this.selected){
            case 1: return aboutSection.getHtmlObject();
            case 0: return homeSection.getHtmlObject();
            case 2: return randomSection.getHtmlObject();
            default : return "<p>No tab selected</p>";
        }
    }
}

let navState = new NavsectionState(0);

rootElement.appendChild(navState.reload());

const navHomeItem = document.getElementById("navHomeItem");
const navAboutItem = document.getElementById("navAboutItem");
const navRandomItem = document.getElementById("navRandomItem");

navHomeItem.addEventListener('click' , (event) => {
    console.log('clicked Home');
    rootElement.replaceChild(navState.setState(0), rootElement.firstChild);
});

navAboutItem.addEventListener('click', (event) => {
    console.log('clicked About!!');
    rootElement.replaceChild(navState.setState(1), rootElement.firstChild);
});

navRandomItem.addEventListener('click' , () => {
    console.log('clicked Random!!');
    rootElement.replaceChild(navState.setState(2), rootElement.firstChild);
});
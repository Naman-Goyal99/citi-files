// composition
function Component(config:any){
    return function(targetClass:any){
        let tc = new targetClass();
        return class {
            title = tc.title;
            view = config.template;
            dom = config.selector;
            power = tc.power
        }
    }
};

@Component({
    selector : 'app-root',
    template : `<h1> Hero Application {{ title }}</h1>
                <h2> Power is : {{ power }} <h2>`
})
class Hero{
    title = "Bruce";
    power = 7;
}

let hero = new Hero();
onload = function(){
    let temp = hero.view.replace("{{ title }}", hero.title).replace("{{ power }}", hero.power );
    // document.getElementsByTagName(hero.dom)[0].innerHTML = hero.view+"<h2> Power is : "+hero.power+"<h2>";
    document.getElementsByTagName(hero.dom)[0].innerHTML = temp;
};
import { range, fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris dolor, hendrerit non nisl ac, sodales dignissim odio. Curabitur egestas erat ipsum. Donec scelerisque consectetur elit, sit amet varius mauris pellentesque eget. Donec at faucibus enim, id mollis diam. Vestibulum posuere elit malesuada sodales condimentum. Maecenas sit amet leo tincidunt, laoreet tellus sed, egestas est. In eu sollicitudin tellus, efficitur convallis dolor. Mauris hendrerit, ligula quis hendrerit placerat, eros turpis fermentum orci, non blandit eros mi sit amet eros. Proin convallis laoreet urna vitae accumsan. Praesent id pharetra justo. Etiam vulputate nunc non felis commodo condimentum. Proin et massa erat. Ut sit amet mi imperdiet dui bibendum pharetra. Ut commodo, lorem et volutpat condimentum, elit lectus dignissim neque, vel suscipit mauris mi in sem.
<br /><br />
Phasellus lacus odio, sagittis non auctor vitae, ultricies eu sem. Maecenas tincidunt vitae massa scelerisque eleifend. Ut vel imperdiet magna. Donec vehicula rhoncus odio, ut commodo erat. Phasellus ac faucibus tortor, a blandit lectus. Sed tristique volutpat risus id lobortis. Donec vel rhoncus arcu, eu maximus enim. Maecenas elementum rutrum nunc dapibus pellentesque. Pellentesque varius odio eu metus pellentesque condimentum. Praesent tempus commodo placerat. Quisque semper, elit vel molestie pellentesque, erat urna cursus diam, eu efficitur leo ligula vitae elit. Donec id elementum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consequat felis porttitor lorem dapibus lobortis. Nulla nec dolor at est condimentum accumsan a posuere est. Sed vel metus tempus, rutrum elit eu, consectetur massa.
<br /><br />
Sed dapibus, metus at dignissim dapibus, est justo viverra lacus, lacinia aliquam quam enim sit amet turpis. Nulla eget dolor vitae odio tempus rutrum quis eget dui. Suspendisse tristique ac tellus nec posuere. Sed euismod, quam sit amet tincidunt mattis, magna ligula laoreet enim, eu sagittis libero massa in diam. Praesent finibus rutrum molestie. Pellentesque et orci consequat, pulvinar dolor in, fermentum eros. In commodo faucibus hendrerit. Curabitur elementum sodales ligula quis blandit. Mauris orci urna, interdum quis eros at, convallis vulputate lacus. Sed eu nisl purus. Cras molestie ullamcorper diam quis pulvinar. Vivamus vitae semper felis.
<br /><br />
Integer viverra justo pulvinar, blandit nibh at, commodo turpis. Quisque nisi dolor, lobortis et hendrerit in, finibus in elit. Mauris condimentum tempus velit tempor euismod. Sed non pellentesque velit. Nunc ornare ultricies diam, bibendum condimentum erat elementum vitae. Donec venenatis sollicitudin dui at tincidunt. Duis ac nisl et erat posuere euismod a sit amet lacus.
<br /><br />
Vivamus vel urna ultricies, iaculis dolor tristique, pretium velit. Praesent condimentum arcu urna, ultrices varius magna ultricies id. Aenean felis turpis, bibendum sed eros et, rutrum pulvinar dolor. Nullam ultrices viverra mi quis tincidunt. Vivamus eget velit odio. Proin interdum eget velit vitae auctor. Duis porttitor metus metus, in suscipit ligula blandit ut. Donec efficitur diam nunc, ut consequat sem finibus vitae. Vestibulum viverra tempus justo, nec pulvinar erat bibendum ut. Suspendisse cursus venenatis turpis, ut lacinia quam finibus in. Mauris ac porttitor lacus. Ut porta tempus tortor. Duis volutpat scelerisque facilisis. Maecenas varius sed turpis ut scelerisque. 
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que clacule el progress
const calcularPorcentajeScroll = (event) => {
    console.log(event);
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight))* 100;

};

const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event))
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});




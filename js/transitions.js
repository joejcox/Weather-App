import Highway from '@dogstudio/highway';
import {TimelineMax} from 'gsap';

class Home extends Highway {

    in({to, from, done}){
        done();
    }

    out({from, done}) {
        done();
    }


}
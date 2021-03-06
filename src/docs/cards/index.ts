import Component from 'vue-class-component';
import docDefaultCard from './default';
import docImageCard from './image';
import docRevealCard from './reveal';
import docSnippet from '../snippet';

@Component({
    components: {
        docDefaultCard,
        docImageCard,
        docRevealCard,
        docSnippet
    },
    template: require('./cards.html')
})
export default class Cards {
    data() {
        return {
            api: require("../../components/card/card-api.json"),
            snippets: {
                defaultCard: require('./default/default.snippet.html'),
                imageCard: require('./image/image.snippet.html'),
                revealCard: require('./reveal/reveal.snippet.html')
            },
            src: {
                script: require("!!html!highlightjs?lang=ts!../../components/card/index.ts"),
                template: require('!!html!highlightjs?lang=html!../../components/card/card.html'),
                style: require('!!html!highlightjs?lang=scss!../../components/card/card.scss')
            }
        }
    }
}
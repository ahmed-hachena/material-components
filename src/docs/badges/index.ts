import Component from 'vue-class-component';

import docCollections from './collections';
import docDropdowns from  './dropdowns';
import docNavbars from  './navbars';
import docSnippet from '../snippet';

@Component({
    components: {
        docCollections,
        docDropdowns,
        docNavbars,
        docSnippet,
    },
    template: require('./badges.html')
})
export default class Badges {
    data() {
        return {
            alert: 'new',
            api: require('../../components/badge/badge-api.json'),
            snippets: {
                collections: require('./collections/collections.snippet.html'),
                dropdowns: require('./dropdowns/dropdowns.snippet.html'),
                navbars: require('./navbars/navbars.snippet.html')
            },
            src: {
                script: require("!!html!highlightjs?lang=ts!../../components/badge/index.ts"),
                template: require('!!html!highlightjs?lang=html!../../components/badge/badge.html'),
                style: require('!!html!highlightjs?lang=scss!../../components/badge/badge.scss')
            }
        }
    }
}
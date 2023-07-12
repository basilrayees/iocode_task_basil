<template>
    <h2 class="text-center mt-3">Quotes</h2>
    <qoutesCard :quotesList2="quotesList"></qoutesCard>
    <snackbarVue :visible="snackbar" :text="mssg" :button="false" :color="snackColor" @close="snackbar = false" />
</template>
<script>
import qoutesCard from '@/components/quotesCards.vue'
import snackbarVue from '@/components/snackbar.vue'
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            snackbar: false,
            mssg: '',
            snackColor: ''
        }
    },
    computed: {
        ...mapState('quotes', ['quotesList'])
    },
    components: {
        qoutesCard,
        snackbarVue
    },
    methods: {
        ...mapActions('quotes', ['GET_QUOTES_LIST'])
    },
    mounted() {
        this.GET_QUOTES_LIST().catch(err => {
            this.mssg = err.message;
            this.snackColor = 'error';
            this.snackbar = true;
        })
    }
}
</script>
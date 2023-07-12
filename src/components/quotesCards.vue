<template>
   
    <div class="quotes">
        <v-card width="600"   class="ma-3 bg-primary" elevation="2" v-for="n in quotesList2">
            <v-card-text>
                {{ n.content }}
            </v-card-text>
            <v-card-actions >
                <v-spacer></v-spacer>
               <p class="mr-4"> {{ n.author }} </p>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    computed: {
    },
    props:{
        quotesList2: {
            type: Array
        }
    }
}
</script>

<style scoped>
.quotes{
    text-align: -webkit-center;
}

</style>
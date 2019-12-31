<template>
    <div class="container-bt q-pt-xl">
        <div class="row q-pt-xl">
            <div class="col-sm-6 q-pt-xl text-center">
                <div class="q-pt-xl">
                    <div class="text-h3 text-deep-purple q-pt-xl text-weight-bolder">Faça postagens de suas Cartas.</div>
                </div>
                <div class="text-body1 text-indigo q-pt-lg q-pb-lg text-weight-regular">
                    Na nossa plataforma você cria postagens sobre sua carta onde ela é vista por outras pessoas no feed.
                </div>
                <div class="q-pt-lg float-right">
                    <q-btn color="deep-purple" label="Começar!" />
                </div>
            </div>
            <div class="col-sm-6 q-pt-xl q-pb-xl">
                <div class="flex q-pt-xl float-right">
                    <div style="max-width: 90%; width: 300px;">
                        <q-intersection v-for="index in 1" :key="index" transition="slide-left" class="example-item">
                            <div style="width: 100%; max-width: 400px">
                                <q-card class="my-card">
                                    <q-item>
                                        <q-item-section avatar>
                                            <q-avatar>
                                                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                                            </q-avatar>
                                        </q-item-section>

                                        <q-item-section>
                                            <q-item-label>Maria</q-item-label>
                                            <q-item-label caption>Postado a 15 minutos atrás</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <img src="https://i.ebayimg.com/images/g/JuEAAOSwozRZ29-Q/s-l300.jpg">
                                    <q-card-section>
                                        <div class="text-h6">Nicol Bolas</div>
                                        <div class="text-subtitle3">R$ 10,00</div>
                                    </q-card-section>

                                    <q-card-actions align="around">
                                        <q-btn flat round color="blue-grey" icon="remove_red_eye" />
                                        <q-btn flat round color="teal" icon="shopping_cart" />
                                        <q-btn flat round color="primary" icon="chat" />
                                    </q-card-actions>
                                </q-card>
                            </div>
                        </q-intersection>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {};
</script>

<style>
   
</style>
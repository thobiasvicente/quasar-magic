<template>
    <div class="container-bt q-pt-xl">
        <div class="row text-center q-pb-xl" id="div-id">
            <div class="col-sm-12">
                <div class="text-h3 text-deep-purple q-pt-xl text-weight-bolder">Lorem Ipsum is simply dummy text of the printing.</div>
            </div>
            <div class="col-sm-12">
                <div class="text-body1 text-deep-purple q-pt-lg text-weight-regular">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>
        </div>
        <div class="row q-pt-xl">
            <div class="col-sm-6 q-pt-xl">
                <div class="flex q-pt-xl">
                    <div style="max-width: 90%; width: 300px;">
                        <q-intersection v-for="index in 3" :key="index" transition="jump-right" class="example-item">
                            <div style="width: 100%; max-width: 400px">
                                <q-chat-message label="Sunday, 19th" />

                                <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar4.jpg" :text="['hey, how are you?']" sent stamp="7 minutes ago" />
                                <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar3.jpg" :text="['doing fine, how r you?']" stamp="4 minutes ago" />
                            </div>
                        </q-intersection>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 q-pt-xl text-center">
                <div class="q-pt-xl">
                    <div class="text-h3 text-deep-purple q-pt-xl text-weight-bolder">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
                <div class="text-body1 text-indigo q-pt-lg q-pb-lg text-weight-regular">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div class="q-pt-lg float-left">
                    <q-btn color="deep-purple" label="Começar!" />
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {};
</script>

<style>
    .container-bt {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    
    @media (min-width: 768px) {
        .container-bt {
            width: 750px;
        }
    }
    
    @media (min-width: 992px) {
        .container-bt {
            width: 970px;
        }
    }
    
    @media (min-width: 1200px) {
        .container-bt {
            width: 1170px;
        }
    }
</style>
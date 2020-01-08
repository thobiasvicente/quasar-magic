<template>
  <div class="container-bt q-pt-xl">
    <div class="row q-pt-xl">
      <div class="col-sm-6 q-pt-xl q-pb-xl">
        <div class="flex q-pt-xl float-left">
          <div style="max-width: 90%; width: 300px;">
            <q-intersection
              v-for="index in 1"
              :key="index"
              transition="slide-right"
              class="example-item"
            >
              <div style="width: 100%; max-width: 400px">
                <q-card class="my-card">
                  <q-card-section class="bg-deep-purple text-white q-mb-sm">
                    <q-item-label class="text-h5">Buscar Carta</q-item-label>
                  </q-card-section>

                  <q-card-section>
                    <q-input color="deep-purple" bottom-slots label="Nome da carta"></q-input>
                  </q-card-section>

                  <q-card-section class="q-mb-sm">
                    <q-item-label class="text-weight-light">Preço</q-item-label>
                    <q-badge color="deep-purple">De R$ {{ step.min }} Até R$ {{ step.max }}</q-badge>
                  </q-card-section>

                  <q-card-section>
                    <q-range
                      v-model="step"
                      :min="0.25"
                      :max="45"
                      :step="5"
                      label
                      color="deep-purple"
                    />
                  </q-card-section>

                  <q-card-section>
                    <q-input bottom-slots label="Região">
                      <template v-slot:append>
                        <q-icon name="place" />
                      </template>
                    </q-input>
                  </q-card-section>

                  <q-card-actions align="right" class="q-pa-lg">
                    <q-btn color="deep-purple" icon-right="search" label="Buscar" />
                  </q-card-actions>
                </q-card>
              </div>
            </q-intersection>
          </div>
        </div>
      </div>
      <div class="col-sm-6 q-pt-xl text-center">
        <div class="q-pt-xl">
          <div
            class="text-h3 text-deep-purple q-pt-xl text-weight-bolder"
          >Utilize nossa ferramenta de Busca.</div>
        </div>
        <div
          class="text-body1 text-indigo q-pt-lg q-pb-lg text-weight-regular"
        >Com nossa ferramenta de busca, você pode procurar cards filtrando po Nome, Preço e região do vendedor.</div>
        <div class="q-pt-lg float-left">
          <q-btn color="deep-purple" label="Começar!" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: {
        min: 10,
        max: 20
      }
    };
  }
};
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
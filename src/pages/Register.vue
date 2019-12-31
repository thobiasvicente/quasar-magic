<template>
  <div class="container-bt q-pt-xl stars">
    <div class="row q-pt-xl flex flex-col items-center justify-center">
      <div class="text-white text-h1 q-pa-sm">Magic</div>
      <div class="text-white text-h1 q-pa-sm">Trade Cards</div>
      <div class="flex items-center">
        <q-card class="q-pa-xl bg-white">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              filled
              type="number"
              v-model="age"
              label="Your age *"
              lazy-rules
              :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style >
</style>
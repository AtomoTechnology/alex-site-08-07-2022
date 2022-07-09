<template>
  <section class="prayer">
    <brand-header
      text="Contactez Nous"
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugoh1Mxi9DzEMcFbmumC2DZ2ufTb-wi9k3w&usqp=CAU"
    />

    <div className="lg:flex h-fit  container p-6">
      <div
        className="xl:w-2/5 lg:w-2/5 !min-h-full via-blue-500 bg-blue-500 py-16 xl:rounded-bl rounded-tl  xl:rounded-tr-none"
      >
        <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
          <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Contact</h1>
          <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, nemo.
          </p>
          <div className="flex pb-4 items-center">
            <div aria-hidden="true">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg" alt="Teléfono" />
            </div>
            <span aria-label="Teléfono" className="pl-4 text-white text-base"> +54 9 000 00-0000 </span>
          </div>
          <div className="flex items-center">
            <div aria-hidden="true">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg" alt="Email" />
            </div>
            <span aria-label="Email" className="pl-4 text-white text-base"> example@gmail.com </span>
          </div>
          <span aria-label="Dirección" className="text-lg text-white pt-10 tracking-wide">
            Alex 1200
            <br />
            Rosario , Santa Fe
          </span>
        </div>
      </div>
      <div className="xl:w-3/5 lg:w-3/5 h-full xl:pl-0 rounded-tr rounded-br">
        <form
          id="contact"
          onSubmit="{handleContact}"
          method="POST"
          className="bg-white  py-4 px-8 rounded-tr rounded-br"
        >
          <div className="block xl:flex flex-col w-full flex-wrap justify-between mb-6">
            <div className="mb-6 xl:mb-0">
              <div className="flex flex-col">
                <label
                  for="lastname"
                  className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                >
                  Nom
                </label>
                <input
                  required
                  id="lastname"
                  name="lastname"
                  type="text"
                  className=" focus:outline-none focus:border focus:border-indigo-700 font-normal  h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Nom"
                  aria-label="Ton nom de famille"
                />
              </div>
            </div>
          </div>
          <div className="block xl:flex flex-col w-full flex-wrap justify-between mb-6">
            <div className="mb-6 xl:mb-0">
              <div className="flex flex-col">
                <label
                  for="firstname"
                  className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                >
                  Prenom
                </label>
                <input
                  required
                  id="firstname"
                  name="firstname"
                  type="text"
                  className=" focus:outline-none focus:border focus:border-indigo-700 font-normal  h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Prenom"
                  aria-label="Tu Prenom"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap mb-6">
            <div className="w-full">
              <div className="flex flex-col">
                <label for="email" className="text-gray-800  text-sm font-semibold leading-tight tracking-normal mb-2">
                  Mail
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  className=" focus:outline-none focus:border focus:border-indigo-700 font-normal  h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="example@gmail.com"
                  aria-label="enter your phone number input"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap mb-6">
            <div className="w-full">
              <div className="flex flex-col">
                <label
                  for="subject"
                  className="text-gray-800  text-sm font-semibold leading-tight tracking-normal mb-2"
                >
                  Sujet
                </label>
                <input
                  required
                  id="subject"
                  name="subject"
                  type="text"
                  className=" focus:outline-none focus:border focus:border-indigo-700 font-normal  h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="El but du message"
                  aria-label="Sujet de ton message"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold   mb-2" for="message"> Message </label>
              <textarea
                name="message"
                className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                rows="6"
                id="message"
                aria-label="La description de ton message"
              ></textarea>
            </div>
            <app-button color="primary">Envoyer</app-button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import BrandHeader from '@/components/BrandHeader.vue';
import AppButton from '@/components/AppButton.vue';
</script>

<style></style>

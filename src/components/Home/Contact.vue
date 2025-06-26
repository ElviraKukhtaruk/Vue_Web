<script setup lang="ts">
  import IconCall from './icons/IconCall.vue';
  import IconMail from './icons/IconMail.vue';
  import IconAddress from './icons/IconAddress.vue';
  import IconSelect from './icons/IconSelect.vue';
</script>

<template>
    <div class="contact">

        <div class="contact_layer">
            <div class="contact_text">
                <div>
                    <h1>Let’s Keep in Touch</h1>
                    <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                </div>
                <div>
                    <div class="contact_list">
                        <div class="item">
                            <div class="contact_icon">
                                <IconCall/>
                            </div>
                            <p>+420 666 666 666</p>
                        </div>
                        <div class="item">
                            <div class="contact_icon">
                                <IconMail/>
                            </div>
                            <p>info@designmodo.com</p>
                        </div>
                        <div class="item">
                            <div class="contact_icon">
                                <IconAddress/>
                            </div>
                            <p class="addr">San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="data">
                <div class="information">

                    <div class="item data_info">
                        <div class="item name">
                            <label for="name">Your name</label>
                            <input type="input" name="name" id="name" placeholder="First name"/>
                        </div>
                        <div class="item budget">
                            <label for="number">Budget</label>
                            <select>
                               <option value="0">$100</option>
                               <option value="1">$200</option>
                               <option value="2">$300</option>
                               <option value="3">$400</option>
                               <option value="4">$500</option>
                            </select>
                        </div>
                    </div>
                    <div class="item data_info">
                        <div class="item">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="name@mail.com"/>
                        </div>
                    </div>
                    <div class="item data_info">
                        <div class="item">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" cols="33" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div class="item data_info">
                        <div class="item_check">
                            <div class="check">
                                <input type="checkbox" id="checkbox" name="checkbox" checked />
                                <label for="checkbox">Send me a copy</label>
                            </div>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./styles/contact.css"></style>

<script setup lang="ts">
  import IconTweet from './icons/IconTweet.vue';
  import IconFacebook from './icons/IconFacebook.vue';
  import IconGoogle from './icons/IconGoogle.vue';
</script>
<template>
    <div class="footer">
        <div class="top">
            <div class="project">
                <h2>Startup3</h2>
            </div>
            <div class="info">
                <div class="item">
                    <a href="#">Privacy Policy</a>
                </div>
                <div class="item">
                    <a href="#">Terms</a>
                </div>
                <div class="item">
                    <div class="footer_icon">
                        <IconTweet/>
                    </div>
                </div>
                <div class="item">
                    <div class="footer_icon">
                        <IconFacebook/>
                    </div>
                </div>
                <div class="item">
                    <div class="footer_icon">
                        <IconGoogle/>
                    </div>
                </div>
            </div>
        </div>
        <hr class="separate">
        <div class="bottom">
            <div class="links">
                <a href="#">Terms</a>
                <a href="#">Features</a>
                <a href="#">Pricing Plans</a>
                <a href="#">Our Works</a>
                <a href="#">Brands</a>
                <a href="#">Contacts</a>
            </div>
            <h3>© 2025. All rights reserved.</h3>
        </div>
    </div>
</template>

<style src="./styles/footer.css"></style>

<script setup>

</script>

<template>
    <div class="timeline">
        <h1 class="title">Work Experience & Education</h1>
        <ul>
            <!-- <li>
                <span>3rd January 2020</span>
                <div class="content">
                <h3>What Is Lorem Ipsum?</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                </div>
            </li> -->
            <li>
                <span>23th April 2023 - Current</span>
                <div class="content">
                <h3>Work for KlickerLab Co., Ltd.</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                </div>
            </li>
            <li>
                <span>3rd April 2023</span>
                <div class="content">
                <h3>Graduated from Kasetsart University Sri Racha Campus</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                </div>
            </li>
            <li>
                <span>28th Nov 2022 - 17th March 2023</span>
                <div class="content">
                <h3>Internship at Geo-Informatics and Space Technology Development Agency (GISTDA)</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.timeline {
    background-color:#072736;
    color:#fff;
    padding:30px 20px;
    box-shadow:0px 0px 10px rgba(0,0,0,.5);
    ul {
        list-style-type:none;
        border-left:2px solid #094a68;
        padding:10px 5px;
        li {
            &:before{
                position:absolute;
                content:'';
                width:10px;
                height:10px;
                background-color:#34ace0;
                border-radius:50%;
                left:-11px;
                top:28px;
                transition:.5s;
            }
            &:hover{
                &:before{
                    background-color:#0F0;
                    box-shadow:0px 0px 10px 2px #0F0;
                }
                background-color:#071f2a;
            }
            padding:20px 20px;
            position:relative;
            cursor:pointer;
            transition:.5s;
            span {
                display:inline-block;
                background-color:#1685b8;
                border-radius:25px;
                padding:2px 5px;
                font-size:15px;
                text-align:center;
                .content {
                    h3 {
                        color:#34ace0;
                        font-size:17px;
                        padding-top:5px;
                    }
                    p {
                        padding:5px 0px 15px 0px;
                        font-size:15px;
                    }
                }
            }
        }
    }
}

@media (max-width:300px){
    .timeline{
        width:100%;
        padding:30px 5px 30px 10px;
    }
    .timeline ul li .content h3{
        color:#34ace0;
        font-size:15px;
    }
}
</style>
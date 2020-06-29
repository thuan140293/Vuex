<template>
  <div>
    <div class="form-container">
      <h1 class="text-center">Trang chủ</h1>
      <div class="frame"><div class="text"></div></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      
    },
    data() {
      return {
       
      }
    },
    computed: {
      
    },
  };
</script>


<style scoped>
  .form-container{
    width: 400px;
    margin: auto;
  }
  body{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin: 0;
    background: #282828;
  }

  .frame{
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 400px;
    margin-left: auto;
    /* background-color: #21D4FD; */
    /* background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%); */
    background-image: url("../../assets/images/1.png");
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
    animation: morphing 6s infinite alternate;
    overflow: hidden;
  }
  
  .frame:hover{
    animation-play-state: paused;
  }
		
	.frame .text{
    color: white;
		font-family: Helvetica Neue, Helvetica, Verdana, sans-serif;
		font-weight: 400;
		font-size: 35px;
		line-height: 100%;
		text-transform: uppercase;
		letter-spacing: 0.02em;
    margin: auto;
  }
		

	@keyframes morphing {
		0% {
			border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
		}
		25% { 
			border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
		}
		50% {
			border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
		}
		75% {
			border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%		;
		}
	}
</style>
<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background" >
                <h1>Welcome</h1>
                <h2>Feeling hungry?</h2>
                <button class="btn btn-success">Let's order</button>
            </div>
        </div>
    </div>
</template>

<style>
  #home {
    background: url('../../src/assets/pizza-stock-photo.jpg');
    background-size: 600px;
    padding: 10%;
  }

  h1, h2 {
      margin: 6%;
  }

  .background {
      background: #eee;
      opacity: 0.8;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      padding: 20px 0;
  }

</style>

<script>
    var name = "svelte"
    var image = "dashbox.png"
</script>

<div class="main">
    <img src={image} alt="svelte and capacitor logos"/>
    <h1>Welcome to {name}!</h1>
</div>

<style>
    .main {
        text-align: center;
        margin: 50px auto;
    }

    img {
        max-width: 100%;
    }
</style>

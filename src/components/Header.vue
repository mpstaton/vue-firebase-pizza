<template>
    <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a class="navbar-brand" href="/">PIZZA PLANET</a>
            <div>
            <ul class="navbar-nav">
                <router-link to="/" tag="li"><a class="nav-link">home</a></router-link>
                <router-link to="/menu" tag="li"><a class="nav-link">menu</a></router-link>
            </ul>
            </div>    
        </nav>
    </header>
</template>

<style>
    .header {
        margin-bottom: 20px;
        display: inline-block;
    }

    .navbar-brand {
        font-size: 1.5em;
        display: inline-block;
    }

    .navbar-nav {
        display: inline;
    }

    .navbar-nav li {
        display: inline-block;
        padding: 20px;
    }
</style>

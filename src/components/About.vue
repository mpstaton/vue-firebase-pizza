<template>
    <div>
    <p>Click on the links below for more info.</p>
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a class="navbar-brand" href="/">PIZZA PLANET</a>
            <div>
            <ul class="navbar-nav">
                <router-link to="/history" tag="li"><a class="nav-link">our history</a></router-link>
                <router-link to="/contact" tag="li"><a class="nav-link">contact us</a></router-link>
                <router-link to="/ordering-guide" tag="li"><a class="nav-link">ordering guide</a></router-link>
                <router-link to="/delivery" tag="li"><a class="nav-link">delivery</a></router-link>
            </ul>
            </div>    
        </nav>
        <router-view></router-view>
    </div>
</template>


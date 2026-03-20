<script lang="ts">
    import '../app.css';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from "flowbite-svelte";
    import {router} from 'svelte-spa-router'
    let activeClass = "text-seagate! transition-colors";
    let nonActiveClass = "text-white! hover:text-seagate! transition-colors";
</script>
  
<Navbar fluid={true} class="w-full bg-surface-navbar text-navbar-text">
<NavBrand>
    <a href="#/">
    <img
        class="h-8 mr-3 lg:h-10"
        src="/seagate_horizontal_smaller.png"
        alt="Seagate Logo"
    />
    
    </a>
    <span class="self-center whitespace-nowrap text-sm lg:text-xl font-bold font-head">
    2026 Insight Day
    </span>
</NavBrand>
<div class="flex md:order-2">
    <DarkMode class="text-white dark:text-white bg-transparent hover:bg-surface-navbar-overlay! transition-colors" />
    <NavHamburger />
</div>
<NavUl class="ms-auto navbar-list" activeUrl={router.location[0] === "#" ? router.location : "#" + router.location}>
    <NavLi href="#/" activeClass={activeClass} nonActiveClass={nonActiveClass}>Home</NavLi>
    <NavLi href="#/challenge-1" activeClass={activeClass} nonActiveClass={nonActiveClass}>Challenge 1</NavLi>
    <NavLi href="#/challenge-2" activeClass={activeClass} nonActiveClass={nonActiveClass}>Challenge 2</NavLi>
    <!-- <NavLi href="#/challenge-3" activeClass={activeClass} nonActiveClass={nonActiveClass}>Challenge 3</NavLi> -->
</NavUl>
</Navbar>
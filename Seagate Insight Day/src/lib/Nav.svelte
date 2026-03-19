<script lang="ts">
    import '../app.css';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from "flowbite-svelte";
    let activeClass = "text-seagate transition-colors";
    let nonActiveClass = "text-white hover:text-seagate transition-colors";
</script>
  
<Navbar fluid={true} class="w-full bg-surface-navbar text-navbar-text">
<NavBrand>
    <a href="/">
    <img
        class="h-8 mr-3 lg:h-10"
        src="/src/assets/seagate_horizontal.png"
        alt="Seagate Logo"
    />
    </a>
    <span class="self-center whitespace-nowrap text-sm lg:text-xl font-bold font-head">
    DoE Interactive Task
    </span>
</NavBrand>
<div class="flex md:order-2">
    <DarkMode class="text-white dark:text-white bg-transparent hover:bg-surface-navbar-overlay! transition-colors" />
    <NavHamburger />
</div>
<NavUl class="ms-auto" activeUrl={"/"}>
    <NavLi href="/" activeClass={activeClass} nonActiveClass={nonActiveClass}>Home</NavLi>
    <NavLi href="/c1"  activeClass={activeClass} nonActiveClass={nonActiveClass}>Challenge 1</NavLi>
    <NavLi href="/c2"  activeClass={activeClass} nonActiveClass={nonActiveClass}>Challenge 2</NavLi>
    <NavLi href="/c3"  activeClass={activeClass} nonActiveClass={nonActiveClass}>Challenge 3</NavLi>
</NavUl>
</Navbar>
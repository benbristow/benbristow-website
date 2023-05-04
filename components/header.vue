<template>
    <header class="text-center py-5">
        <div class="container">
            <NuxtLink class="text-decoration-none" href="/">
                <h1>Ben Bristow</h1>
            </NuxtLink>
            <nav role="navigation">
                <ul class="fw-light list-inline">
                    <li class="list-inline-item mx-2"><NuxtLink href="/">Home</NuxtLink></li>
                    <li class="list-inline-item mx-2"><NuxtLink href="/portfolio">Portfolio</NuxtLink></li>
                    <li class="list-inline-item mx-2"><NuxtLink href="/cv">CV</NuxtLink></li>
                    <li class="list-inline-item mx-2"><NuxtLink href="/youtube">YouTube</NuxtLink></li>
                    <li class="list-inline-item mx-2"><NuxtLink href="/contact">Contact</NuxtLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        border-top: #000 32px solid;
    }

    h1 {
        font-weight: 700;
    }

    a {
        color: #000;

        :hover {
            color: lighten(#000, 50%);
        }
    }
</style>
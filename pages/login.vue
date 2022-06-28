<template>
    <main class="login-wrapper">
        <navBar/>
        <img src="../assets/icons/undraw_breakfast_psiw.svg" alt="">
        <h1>log in</h1>
        <div class="form">
            <input type="text" placeholder="phone number">
            <input type="password" name="" id="" placeholder="password">
            <button>login</button>
            <div class="other">
                <a href="#">forgot your password</a>
                 <nuxt-link to="/signup">sign up</nuxt-link>
            </div>
        </div>
    </main>
</template>

<style>

.login-wrapper, .signup-wrapper {
    font-family: var(--title-font);
    text-align: center;
}
.login-wrapper  > img, .signup-wrapper > img {
    height: 90px;
    width: 90px;
    margin-top: 10px;
}
.form {
    margin-top: 20px;
    display: grid;
    place-items: center;
    row-gap: 30px;
}
.form input {
    height: 44px;
    width: 80%;
    outline: none;
    border: none;
    border: 1px solid var(--main-orange);
    border-radius: 33px;
    padding: 0 10px;
    color: black;
    font-size: 1rem;
}
.form input:focus{
    border: 1px solid var(--carolina-blue);
}
.form button {
    outline: none;
    border: none;
    background-color: var(--main-orange);
    border-radius: 30px;
    padding: 13px 25px;
    font-size: 1.2rem;
}
.form .other {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.form .other a{
    color: black;
}
</style>
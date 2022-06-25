<template>
    <div class="other-meals">
        <h2>chef specials</h2>
        <main>
            <div class="chefs-special">
                <h3>chef Lorem's chicken tariaki</h3>
                <img src="../assets/temp/food1.png" alt="" srcset="">
                <ul>
                    <h3>ingredients</h3>
                    <li>chicken</li>
                    <li>tomatoes</li>
                    <li>briani</li>
                    <img id="chefs-pic" src="../assets/temp/me.jpeg" alt="" srcset="">
                </ul>
            </div>
            <div class="chefs-special">
                <h3>chef Lorem's chicken tariaki</h3>
                <img src="../assets/temp/food1.png" alt="" srcset="">
                <ul>
                    <h3>ingredients</h3>
                    <li>chicken</li>
                    <li>tomatoes</li>
                    <li>briani</li>
                    <img id="chefs-pic" src="../assets/temp/me.jpeg" alt="" srcset="">
                </ul>
            </div>
            <div class="chefs-special">
                <h3>chef Lorem's chicken tariaki</h3>
                <img src="../assets/temp/food1.png" alt="" srcset="">
                <ul>
                    <h3>ingredients</h3>
                    <li>chicken</li>
                    <li>tomatoes</li>
                    <li>briani</li>
                    <img id="chefs-pic" src="../assets/temp/me.jpeg" alt="" srcset="">
                </ul>
            </div>
        </main>
    </div>
</template>

<style scoped>
.other-meals {
    width: 100vw;
    position: absolute;
    left: 0;
    height: 100vh;
    font-family: var(--title-font);
    padding: 20px;
}
.other-meals main{
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
} 
.chefs-special {
    border: 1px solid #333;
    padding: 6px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
}
@media screen and  (min-width: 520px){
    .other-meals main{
        width: 100%;
        justify-content: space-around;
    }
    .chefs-special {
        width: 300px;
        
    }
}
.chefs-special img{
    height: 200px;
    width: 200px;
    border-radius: 10%;
    object-fit: cover;
}
ul {
    align-self: flex-start;
    margin-left: 10px;
    position: relative;
    width: 100%;
}
#chefs-pic {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    top: 20%;
    right: 10%;
}
</style>
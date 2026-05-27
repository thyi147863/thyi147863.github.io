let hebrew = true;

function changeLanguage() {

    hebrew = !hebrew;

    if (hebrew) {

        document.body.dir = "rtl";

        document.getElementById("mainTitle").innerHTML =
            "המצאות ישראליות ששינו את העולם";

        document.getElementById("heroTitle").innerHTML =
            "חדשנות ישראלית";

        document.getElementById("heroText").innerHTML =
            "הכירו המצאות ישראליות שהשפיעו על העולם.";

    } else {

        document.body.dir = "ltr";

        document.getElementById("mainTitle").innerHTML =
            "Israeli Inventions That Changed The World";

        document.getElementById("heroTitle").innerHTML =
            "Israeli Innovation";

        document.getElementById("heroText").innerHTML =
            "Discover inventions from Israel that changed the world.";
    }
}
var star = new Object;

star.name = "Polaris";
star.type = "Double/Cepeid";
star.constellation = "Ursa Minor";

for (var starProp in star) {
    console.log(starProp + "=" + star[starProp]);
}
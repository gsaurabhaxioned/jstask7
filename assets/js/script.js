const device = document.querySelectorAll('.device');

for (let i = 0; i < device.length; i++) {
    device[i].addEventListener('mouseover', function () {
        for (let j = 0; j < device.length; j++) {
            device[j].style.flexBasis = "25.3%";
        }
        device[i].style.flexBasis = "74.3%";
    });
}
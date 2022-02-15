const device = document.querySelectorAll('.device');

 device.forEach(i => {
    i.addEventListener('mouseover', function () {
        device.forEach(j=> {
            j.style.flexBasis = "26%";
        });
        i.style.flexBasis = "74%";
    });
    

    i.addEventListener('mouseout', function () {
        device.forEach(j=> {
            j.style.flexBasis = "50%";
        });
    });
});
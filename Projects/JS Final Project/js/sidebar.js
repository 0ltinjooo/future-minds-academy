let sidebarControl = document.getElementById('menu-btn');
let sidebar = document.getElementById('sidebar');

sidebarControl.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle'); 
    dropdownToggles.forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('click', function (event) {
            event.preventDefault(); 
            var sideDropdown = dropdownToggle.querySelector('.side-dropdown');
            var downArrow = dropdownToggle.querySelector('.down-arrow');

            if (sideDropdown.classList.contains('open')) {
                sideDropdown.style.maxHeight = '0';
            } else {
                var dropdownContentHeight = sideDropdown.scrollHeight + 'px';
                sideDropdown.style.maxHeight = dropdownContentHeight;
            }
            sideDropdown.classList.toggle('open');
            downArrow.classList.toggle('rotate180');
        });
    });
});













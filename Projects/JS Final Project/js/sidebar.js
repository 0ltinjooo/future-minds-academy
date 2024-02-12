let sidebarControl = document.getElementById('menu-btn');
let sidebar = document.getElementById('sidebar');

sidebarControl.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')
})

document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.getElementById('dropdown-toggle');
    var sideDropdown = dropdownToggle.querySelector('.side-dropdown');

    dropdownToggle.addEventListener('click', function() {
        if (sideDropdown.style.display === 'none' || sideDropdown.style.display === '') {
            sideDropdown.style.display = 'block';
        } else {
            sideDropdown.style.display = 'none';
        }
    });
});




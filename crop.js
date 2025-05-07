document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const cropContainer = document.querySelector('.crop-items');
    const originalOrder = Array.from(document.querySelectorAll('.crop-box')); // Save original order

    // Handle Search
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const query = searchInput.value.toLowerCase();
        const crops = document.querySelectorAll('.crop-box');

        crops.forEach(crop => {
            const cropName = crop.querySelector('.crop-name').innerText.toLowerCase();
            crop.style.display = cropName.includes(query) ? 'block' : 'none';
        });
    });

    // Sort Function
    function sortCrops(order = 'asc') {
        let crops = Array.from(document.querySelectorAll('.crop-box'));

        if (order === 'default') {
            cropContainer.innerHTML = '';
            originalOrder.forEach(crop => cropContainer.appendChild(crop));
            return;
        }

        crops.sort((a, b) => {
            const nameA = a.querySelector('.crop-name').innerText.toLowerCase();
            const nameB = b.querySelector('.crop-name').innerText.toLowerCase();
            return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });

        cropContainer.innerHTML = '';
        crops.forEach(crop => cropContainer.appendChild(crop));
    }

    // Create sorter buttons
    const sorterContainer = document.createElement('div');
    sorterContainer.style.textAlign = 'center';
    sorterContainer.style.marginBottom = '20px';

    const createButton = (text, order) => {
        const button = document.createElement('button');
        button.innerText = text;
        button.style.padding = '8px';
        button.style.margin = '0 5px';
        button.style.borderRadius = '5px';
        button.style.background = '#A89CA4';
        button.style.color = 'white';
        button.addEventListener('click', () => sortCrops(order));
        return button;
    };

    sorterContainer.appendChild(createButton('Default', 'default'));
    sorterContainer.appendChild(createButton('Sort A-Z', 'asc'));
    sorterContainer.appendChild(createButton('Sort Z-A', 'desc'));

    searchForm.parentElement.insertBefore(sorterContainer, searchForm.nextSibling);
});

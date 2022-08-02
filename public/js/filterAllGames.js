let filterBtn = document.querySelectorAll('.filter-buttons');
let filterItem = document.querySelectorAll('.allgames-game');

filterBtn.forEach(button => {
    button.onclick = () => {
        filterBtn.forEach(btn => btn.classList.remove('is-checked'));
        button.classList.add('is-checked');

        let dataFilter = button.getAttribute('data-filter');

        filterItem.forEach(item => {

            item.classList.remove('is-checked');
            item.classList.add('hide');

            if (item.getAttribute('data-item') === dataFilter || dataFilter === 'all') {
                item.classList.remove('hide');
                item.classList.add('is-checked');
            }

        });

    };

});
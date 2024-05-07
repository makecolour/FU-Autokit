(function() {
    'use strict';

    document.addEventListener('input', function(event) {
        var target = event.target;

        if (target.tagName === 'INPUT' && (target.id === 'sl_list-search-box' || target.id === 'tl_list-search-box')) {
            if (event.inputType !== 'deleteContentBackward' && !target.value.trim()) {
                target.value = 'Tiếng ';
            }
            else if (event.inputType !== 'deleteContentBackward' && !target.value.startsWith('Tiếng ')) {
                target.value = 'Tiếng ' + target.value;
            }
        }
    });
})();
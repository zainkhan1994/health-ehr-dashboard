// Shared column visibility module for health dashboard
(function(window){
    const module = {};

    module.visibleColumns = {};

    module.allColumns = [
        { id: 'bookmark', name: 'Bookmark', alwaysShow: false },
        { id: 'testName', name: 'Test Name', alwaysShow: true },
        { id: 'collected', name: 'Collected', alwaysShow: false },
        { id: 'result', name: 'Result', alwaysShow: true },
        { id: 'chart', name: 'Trend Chart', alwaysShow: false },
        { id: 'units', name: 'Units', alwaysShow: false },
        { id: 'referenceRange', name: 'Reference Range', alwaysShow: false },
        { id: 'midpoint', name: 'Midpoint', alwaysShow: false },
        { id: 'flag', name: 'Flag', alwaysShow: false },
        { id: 'status', name: 'Status', alwaysShow: false },
        { id: 'lab', name: 'Lab', alwaysShow: false },
        { id: 'panel', name: 'Panel', alwaysShow: false },
        { id: 'category', name: 'Category', alwaysShow: false },
        { id: 'physician', name: 'Physician', alwaysShow: false },
        { id: 'reported', name: 'Reported', alwaysShow: false },
        { id: 'source', name: 'Source', alwaysShow: false },
        { id: 'specimenID', name: 'Specimen ID', alwaysShow: false },
        { id: 'fasting', name: 'Fasting', alwaysShow: false },
        { id: 'notes', name: 'Notes', alwaysShow: false }
    ];

    module.loadColumnVisibility = function() {
        const saved = localStorage.getItem('healthDashboardColumns');
        if (saved) {
            try {
                module.visibleColumns = JSON.parse(saved);
                module.allColumns.forEach(col => {
                    if (module.visibleColumns[col.id] === undefined) module.visibleColumns[col.id] = true;
                });
            } catch (e) {
                module.visibleColumns = {};
                module.allColumns.forEach(col => module.visibleColumns[col.id] = true);
            }
        } else {
            module.allColumns.forEach(col => module.visibleColumns[col.id] = true);
        }
    };

    module.saveColumnVisibility = function() {
        localStorage.setItem('healthDashboardColumns', JSON.stringify(module.visibleColumns));
    };

    module.openColumnVisibilityModal = function(modalId = 'columnModal', containerId = 'columnCheckboxes') {
        const modal = document.getElementById(modalId);
        const checkboxContainer = document.getElementById(containerId);
        if (!modal || !checkboxContainer) return;

        checkboxContainer.innerHTML = module.allColumns.map(col => `\n                <div class="checkbox-item">\n                    <input type="checkbox" \n                           id="col-${col.id}" \n                           ${module.visibleColumns[col.id] ? 'checked' : ''} \n                           ${col.alwaysShow ? 'disabled' : ''}>\n                    <label for="col-${col.id}">${col.name}${col.alwaysShow ? ' (Required)' : ''}</label>\n                </div>\n            `).join('');

        modal.classList.add('active');
    };

    module.closeColumnVisibilityModal = function(modalId = 'columnModal') {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('active');
    };

    module.selectAllColumns = function() {
        module.allColumns.forEach(col => {
            module.visibleColumns[col.id] = true;
            const checkbox = document.getElementById(`col-${col.id}`);
            if (checkbox && !checkbox.disabled) checkbox.checked = true;
        });
    };

    module.deselectAllColumns = function() {
        module.allColumns.forEach(col => {
            if (!col.alwaysShow) {
                module.visibleColumns[col.id] = false;
                const checkbox = document.getElementById(`col-${col.id}`);
                if (checkbox) checkbox.checked = false;
            }
        });
    };

    module.applyColumnVisibility = function(reRenderCallback) {
        // Update from checkboxes
        module.allColumns.forEach(col => {
            const checkbox = document.getElementById(`col-${col.id}`);
            if (checkbox && !checkbox.disabled) module.visibleColumns[col.id] = checkbox.checked;
        });

        module.saveColumnVisibility();
        module.applyColumnClasses();
        module.closeColumnVisibilityModal();

        if (typeof reRenderCallback === 'function') reRenderCallback();
    };

    module.applyColumnClasses = function() {
        document.querySelectorAll('table').forEach(table => {
            module.allColumns.forEach((col, index) => {
                const headers = table.querySelectorAll(`thead th:nth-child(${index + 1})`);
                const cells = table.querySelectorAll(`tbody td:nth-child(${index + 1})`);

                headers.forEach(header => header.classList.toggle('hidden-column', !module.visibleColumns[col.id]));
                cells.forEach(cell => cell.classList.toggle('hidden-column', !module.visibleColumns[col.id]));
            });
        });
    };

    // Expose module
    window.columnVisibility = module;
})(window);

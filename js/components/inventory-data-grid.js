Vue.component("inventory-data-grid", {
    props: [],

    template: `
    <div>
        <div id="invGrid" style="height: 500px; width: 98%" class="ag-theme-balham"></div>
    </div>
    `,

    data: function() {
        return {
            gridOptions: {
                rowData: null,
                columnDefs: [
                    { 
                        headerName: "Item", 
                        field: "description", 
                        filter: "agTextColumnFilter",
                        sortable: true
                    },
                    { headerName: "Units", field: "units" },
                    { headerName: "Qty/Unit", field: "quantityPerUnit" },
                    { 
                        headerName: "Location", 
                        field: "location", 
                        filter: "agTextColumnFilter",
                        sortable: true 
                    },
                    { 
                        headerName: "Shelf", 
                        field: "shelf", 
                        filter: "agTextColumnFilter",
                        sortable: true 
                    },
                    { 
                        headerName: "Bin", 
                        field: "bin", 
                        filter: "agTextColumnFilter",
                        sortable: true 
                    },
                    { 
                        headerName: "Cost", 
                        field: "cost",
                        sortable: true
                    },
                    { headerName: "Alert", field: "alert" },
                    { headerName: "Link", field: "link" }
                ],
                pagination: true,
                rowSelection: "single",
                onSelectionChanged: this.onSelectionChanged
            },
            inventory: [],
            grid: {}
        };
    },

    mounted: function() {
        let gridEl = document.querySelector("#invGrid");
        this.grid = new agGrid.Grid(gridEl, this.gridOptions);
        this.getInventory();
    },

    methods: {
        getInventory: function() {
            fetch("/api/inventory/items")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.inventory = data;
                    this.gridOptions.api.setRowData(this.inventory);
                    console.log(this.inventory);
                });
        },

        onSelectionChanged: function() {
            let selectedRows = this.gridOptions.api.getSelectedRows();
            this.$emit("row-selected", selectedRows[0]);
        }
    }
})
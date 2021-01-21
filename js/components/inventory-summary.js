Vue.component("inventory-summary", {
    props: [],

    template: `
    <div class="card border-primary mb-3">
        <div class="card-header text-white bg-primary">
            <a href="/inventory" class="text-white">Inventory</a>
        </div>
        <div class="card-body">
            <h4 class="card-title">Alerts</h4>
            <table class="table table-striped table-condensed">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Alert Level</th>
                    <th>Link</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="alert in inventoryAlerts">
                    <td>{{ alert.description }}</td>
                    <td>{{ alert.units * alert.quantityPerUnit }}</td>
                    <td>{{ alert.alert }}</td>
                    <td><a :href="alert.link" target="_blank">Buy</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    `,

    data: function() {
        return {
            inventoryAlerts: []
        };
    },

    mounted: function() {
        this.getInventoryAlerts();
    },

    methods: {
        getInventoryAlerts: function() {
            fetch("/api/inventory/items")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.inventoryAlerts = data.filter(this.filterForAlerts);
                    console.log(this.inventoryAlerts);
                });
        },

        filterForAlerts: function (item) {
            if ((item.units * item.quantityPerUnit) <= item.alert) return true;
            return false; 
        }
    }
})
Vue.component("edit-modal", {
    props: ["show", "row", "mode"],

    template: `
    <div>
        <div v-bind:class="modalBackdropClassObject" id="modal-backdrop">
        </div>

        <div v-bind:class="editModalClassObject" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h4 class="modal-title" id="myLargeModalLabel">Edit Item: {{ description }}</h4>
                        <button type="button" class="close" v-on:click="closeModal">
                            <span aria-hidden="true" class="text-white">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body container-fluid">
                        <div class="row">
                            <div class="col-sm">
                                <div class="form-group">
                                    <label class="col-form-label" for="description">Description</label>
                                    <input v-model="description" type="text" class="form-control" placeholder="What item is this?" id="description">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label" for="location">Location</label>
                                    <input v-model="location" type="text" class="form-control" placeholder="Where is this stored?" id="location">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label" for="shelf">Shelf</label>
                                    <input v-model="shelf" type="text" class="form-control" placeholder="Which shelf is this on?" id="shelf">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label" for="bin">Bin</label>
                                    <input v-model="bin" type="text" class="form-control" placeholder="What bin is this in?" id="description">
                                </div>
                            </div>

                            <div class="col-sm">
                                <div class="form-group">
                                    <label class="col-form-label" for="units">Units</label>
                                    <input v-model.number="units" type="text" class="form-control" placeholder="How many units do we have?" id="units">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label" for="quantity-per-unit">Quantity per Unit</label>
                                    <input v-model.number="quantityPerUnit" type="text" class="form-control" placeholder="How many come in a unit?" id="quantity-per-unit">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label" for="cost">Cost</label>
                                    <input v-model.number="cost" type="text" class="form-control" placeholder="How much does a unit cost?" id="cost">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label" for="alert">Alert Level</label>
                                    <input v-model.number="alert" type="text" class="form-control" placeholder="How many items left triggers an alert?" id="alert">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <div class="form-group">
                                    <label class="col-form-label" for="link">Link</label>
                                    <input v-model="link" type="text" class="form-control" placeholder="Where do I buy this?" id="link">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vivid-modal-footer">
                        <div>
                            <div class="alert alert-danger" v-bind:style="errorStyleObject">
                                <strong>Oh snap!</strong> {{errorMsg}}
                            </div>
                        </div>
                        <div>
                            <button v-bind:class="saveButtonClassObject" v-bind:disabled="equal" v-on:click="saveItem">Save</button>
                            <button class="btn btn-danger" v-on:click="closeModal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    data: function() {
        return {
            showEditModal: false,
            equal: true,
            errorMsg: "",
            blank: {
                "id": 0,
                "description": "",
                "units": 0,
                "quantityPerUnit": 0,
                "location": "",
                "shelf": "",
                "bin": "",
                "link": "",
                "cost": 0.0,
                "alert": 0
            },
            initialItem: {},
            id: 0,
            description: "",
            units: 0,
            quantityPerUnit: 0,
            location: "",
            shelf: "",
            bin: "",
            link: "",
            cost: 0.0,
            alert: 0
        };
    },

    watch: {
        description: function(val) {
            console.log("Description changed: ", val);
            this.checkEquality();
        },
        units: function(val) {
            console.log("units changed: ", val);
            this.checkEquality();
        },
        quantityPerUnit: function(val) {
            console.log("quantityPerUnit changed: ", val);
            this.checkEquality();
        },
        location: function(val) {
            console.log("location changed: ", val);
            this.checkEquality();
        },
        shelf: function(val) {
            console.log("shelf changed: ", val);
            this.checkEquality();
        },
        bin: function(val) {
            console.log("bin changed: ", val);
            this.checkEquality();
        },
        link: function(val) {
            console.log("link changed: ", val);
            this.checkEquality();
        },
        cost: function(val) {
            console.log("cost changed: ", val);
            this.checkEquality();
        },
        alert: function(val) {
            console.log("alert changed: ", val);
            this.checkEquality();
        },
        show: function(val) {
            console.log("Show! ", val, this.mode);
            if (val && this.mode === "edit") {
                this.setRowData(this.row);
            } else {
                this.setRowData(this.blank);
            }
        }
    },

    computed: {
        editModalClassObject: function() {
            return {
                "modal": true,
                "fade": true,
                "show": true,
                "vivid-show": this.show,
                "vivid-hide": !this.show
            };
        },

        modalBackdropClassObject: function() {
            return {
                "modal-backdrop": true,
                "vivid-show": this.show,
                "vivid-hide": !this.show
            };
        },

        saveButtonClassObject: function() {
            return {
                "btn": true,
                "btn-primary": true
            };
        },

        errorStyleObject: function() {
            return {
                "display": this.errorMsg.length != 0 ? "block" : "none",
                "margin-bottom": "0px"
            };
        }
    },

    mounted: function() {
        this.initialItem = this.blank;
        this.checkEquality();
    },

    methods: {
        closeModal: function() {
            this.$emit("close");
            this.setRowData(this.blank);
        },

        saveItem: function() {
            if (!this.validValues()) return;
            this.$emit("save", {
                "id": this.id,
                "description": this.description,
                "units": this.units,
                "quantityPerUnit": this.quantityPerUnit,
                "location": this.location,
                "shelf": this.shelf,
                "bin": this.bin,
                "link": this.link,
                "cost": this.cost,
                "alert": this.alert
            });
        },

        showError: function(msg) {
            this.errorMsg = msg;
            setTimeout(() => this.showError(""), 10000);
        },

        validValues: function() {
            let valid = true;
            let msg = "";

            if (isNaN(this.units)) {
                valid = false;
                msg = "Units must be a number.";
            }

            if (isNaN(this.quantityPerUnit)) {
                valid = false;
                msg = "Quantity per Unit must be a number.";
            }

            if (isNaN(this.cost)) {
                valid = false;
                msg = "Cost must be a number.";
            }

            if (isNaN(this.alert)) {
                valid = false;
                msg = "Alert Level must be a number.";
            }

            if (!valid) this.showError(msg);
            
            return valid;
        },

        checkEquality: function() {
            let equal = true;

            if (this.description != this.initialItem.description) equal = false;
            if (this.location != this.initialItem.location) equal = false;
            if (this.shelf != this.initialItem.shelf) equal = false;
            if (this.bin != this.initialItem.bin) equal = false;
            if (this.link != this.initialItem.link) equal = false;
            if (this.units != this.initialItem.units) equal = false;
            if (this.quantityPerUnit != this.initialItem.quantityPerUnit) equal = false;
            if (this.cost != this.initialItem.cost) equal = false;
            if (this.alert != this.initialItem.alert) equal = false;
            
            this.equal = equal;
        },

        setRowData: function(clearRow) {
            this.initialItem = JSON.parse(JSON.stringify(clearRow));
            this.id = clearRow.id;
            this.description = clearRow.description;
            this.location = clearRow.location;
            this.shelf = clearRow.shelf;
            this.bin = clearRow.bin;
            this.link = clearRow.link;
            this.units = clearRow.units;
            this.quantityPerUnit = clearRow.quantityPerUnit;
            this.cost = clearRow.cost;
            this.alert = clearRow.alert;
        }
    }
})